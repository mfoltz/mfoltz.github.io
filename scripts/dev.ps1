param(
    [Parameter(Position=0,Mandatory=$true)]
    [ValidateSet('serve', 'build')]
    [string]$Action
)

$block = [char]0x2588
$shade = [char]0x2591
$total = 4
$activity = if ($Action -eq 'serve') { '✨ Hugo Server' } else { '🏗️ Hugo Build' }

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..'))
$requiredVersion = [Version]'0.126.3'
$hugoDir = Join-Path $repoRoot 'build/hugo'

$useThreadJob = $false
if (Get-Command Start-ThreadJob -ErrorAction SilentlyContinue) {
    $useThreadJob = $true
} else {
    try {
        Import-Module ThreadJob -ErrorAction Stop | Out-Null
        if (Get-Command Start-ThreadJob -ErrorAction SilentlyContinue) {
            $useThreadJob = $true
        }
    } catch {
        # module not available
    }
}

if (-not $useThreadJob) {
    Write-Warning 'Start-ThreadJob not available; running steps synchronously. Install the ThreadJob module (Install-Module ThreadJob) or use PowerShell 7 for streaming progress output.'
}

function Ensure-Hugo {
    param([Version]$Required)

    $installedVersion = $null
    if (Get-Command hugo -ErrorAction SilentlyContinue) {
        try {
            $out = hugo version
            if ($out -match 'v(\d+\.\d+\.\d+)') {
                $installedVersion = [Version]$Matches[1]
                if ($installedVersion -ge $Required) { return }
            }
        } catch { }
    }

    Write-Host "Installing Hugo $Required..." -ForegroundColor Yellow
    $versionStr = $Required.ToString()
    if (-not (Test-Path $hugoDir)) { New-Item -ItemType Directory -Path $hugoDir | Out-Null }
    if ($IsWindows) {
        $archive = "hugo_extended_${versionStr}_windows-amd64.zip"
    } elseif ($IsMacOS) {
        $archive = "hugo_extended_${versionStr}_darwin-universal.tar.gz"
    } elseif ($IsLinux) {
        $archive = "hugo_extended_${versionStr}_linux-amd64.tar.gz"
    } else {
        Write-Host "Unsupported platform; please install Hugo manually: https://gohugo.io/installation/" -ForegroundColor Red
        exit 1
    }
    $url = "https://github.com/gohugoio/hugo/releases/download/v${versionStr}/$archive"
    $archivePath = Join-Path $hugoDir $archive
    Invoke-WebRequest -Uri $url -OutFile $archivePath
    if ($archive.EndsWith('.zip')) {
        Expand-Archive $archivePath -DestinationPath $hugoDir -Force
    } else {
        tar -xzf $archivePath -C $hugoDir
    }
    $exe = if ($IsWindows) { 'hugo.exe' } else { 'hugo' }
    $hugoPath = Join-Path $hugoDir $exe
    $pathSep = [IO.Path]::PathSeparator
    $env:PATH = "$hugoDir$pathSep" + $env:PATH
    $out = & $hugoPath version
    if ($out -notmatch 'v(\d+\.\d+\.\d+)') {
        Write-Host "Unable to determine Hugo version after install." -ForegroundColor Red
        exit 1
    }
    $installedVersion = [Version]$Matches[1]
    if ($installedVersion -lt $Required) {
        Write-Host "Hugo $Required or later is required. Installed version: $installedVersion" -ForegroundColor Red
        exit 1
    }
}

Ensure-Hugo $requiredVersion

function Invoke-Step {
    param(
        [int]$Step,
        [string]$Name,
        [scriptblock]$Script
    )

    $barLength = 20
    $startPercent = [int]( (($Step - 1) / $total) * 100 )
    $startFilled = [int]($barLength * (($Step - 1) / $total))
    $startBar = ([string]$block * $startFilled) + ([string]$shade * ($barLength - $startFilled))

    $endPercent = [int]( ($Step / $total) * 100 )
    $endFilled = [int]($barLength * ($Step / $total))
    $endBar = ([string]$block * $endFilled) + ([string]$shade * ($barLength - $endFilled))

    if ($useThreadJob) {
        $spinner = @('⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷')
        $job = Start-ThreadJob -StreamingHost $Host -ScriptBlock {
            param($innerScript, $repoRoot)
            Set-Location $repoRoot
            & $innerScript
        } -ArgumentList $Script, $repoRoot
        $i = 0
        while (-not (Wait-Job $job -Timeout 1)) {
            $frame = $spinner[$i % $spinner.Count]
            Write-Host "[$startBar] $startPercent% $frame $Name" -ForegroundColor Cyan
            $i++
        }
        Wait-Job $job | Out-Null
        Remove-Job $job
    } else {
        Write-Host "[$startBar] $startPercent% … $Name" -ForegroundColor Cyan
        Set-Location $repoRoot
        & $Script
    }

    Write-Host "[$endBar] $endPercent% ✔ $Name" -ForegroundColor Green
}

Invoke-Step 1 'Updating submodules' { git submodule update --init --recursive }
Invoke-Step 2 'Generating prefab data' { python scripts/build_prefab_files.py }
Invoke-Step 3 'Compiling Sass' {
    $npx = Get-Command npx -ErrorAction SilentlyContinue
    $sass = Get-Command sass -ErrorAction SilentlyContinue
    if ($npx) {
        npx --yes sass assets/css/theme-vampire.scss assets/css/theme-vampire.css
    } elseif ($sass) {
        sass assets/css/theme-vampire.scss assets/css/theme-vampire.css
    } else {
        Write-Host "npx or sass not found; skipping Sass compilation" -ForegroundColor Yellow
    }
}

if ($Action -eq 'serve') {
    Invoke-Step 4 'Starting Hugo server' { hugo server }
} else {
    Invoke-Step 4 'Building site with Hugo' { hugo }
}

