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
try {
    $versionOutput = hugo version
} catch {
    Write-Host "Hugo $requiredVersion or later is required. Please install: https://gohugo.io/installation/" -ForegroundColor Red
    exit 1
}
if ($versionOutput -notmatch 'v(\d+\.\d+\.\d+)') {
    Write-Host "Unable to determine Hugo version. Please ensure Hugo $requiredVersion or later is installed: https://gohugo.io/installation/" -ForegroundColor Red
    exit 1
}
$installedVersion = [Version]$Matches[1]
if ($installedVersion -lt $requiredVersion) {
    Write-Host "Hugo $requiredVersion or later is required. Installed version: $installedVersion. Please upgrade: https://gohugo.io/installation/" -ForegroundColor Red
    exit 1
}

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

