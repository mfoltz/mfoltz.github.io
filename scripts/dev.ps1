param(
    [Parameter(Position=0,Mandatory=$true)]
    [ValidateSet('serve', 'build')]
    [string]$Action
)

$block = [char]0x2588
$shade = [char]0x2591
$total = 4
$activity = if ($Action -eq 'serve') { '✨ Hugo Server' } else { '🏗️ Hugo Build' }

$requiredVersion = [Version]'0.126.3'
$hugoDir = Join-Path (Join-Path $PSScriptRoot '..') 'build/hugo'

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

    $spinner = @('⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷')
    $barLength = 20
    $job = Start-Job -ScriptBlock $Script
    $i = 0
    while (-not (Wait-Job $job -Timeout 1)) {
        $frame = $spinner[$i % $spinner.Count]
        $percent = [int]( (($Step - 1) / $total) * 100 )
        $filled = [int]($barLength * (($Step - 1) / $total))
        $bar = ([string]$block * $filled) + ([string]$shade * ($barLength - $filled))
        Write-Host "[$bar] $percent% $frame $Name" -ForegroundColor Cyan
        $i++
        if ($i -ge 10) { break }
    }
    Wait-Job $job | Out-Null
    Receive-Job $job | Out-Host
    $percent = [int]( ($Step / $total) * 100 )
    $filled = [int]($barLength * ($Step / $total))
    $bar = ([string]$block * $filled) + ([string]$shade * ($barLength - $filled))
    Write-Host "[$bar] $percent% ✔ $Name" -ForegroundColor Green
    Remove-Job $job
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
    $filled = [int](20 * 3 / $total)
    $bar = ([string]$block * $filled) + ([string]$shade * (20 - $filled))
    Write-Host "[$bar] 75% 🚀 Starting Hugo server" -ForegroundColor Cyan
    $bar = [string]$block * 20
    Write-Host "[$bar] 100% ✔ Hugo server running" -ForegroundColor Green
    hugo server
} else {
    Invoke-Step 4 'Building site with Hugo' { hugo }
}

