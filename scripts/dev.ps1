param(
    [Parameter(Position=0,Mandatory=$true)]
    [ValidateSet('serve', 'build')]
    [string]$Action
)

# Ensure submodules are initialized and updated
git submodule update --init --recursive

# Generate prefab file list
python scripts/build_prefab_files.py

# Build custom stylesheets
$npx = Get-Command npx -ErrorAction SilentlyContinue
$sass = Get-Command sass -ErrorAction SilentlyContinue
if ($npx) {
    npx --yes sass assets/css/theme-vampire.scss assets/css/theme-vampire.css
} elseif ($sass) {
    sass assets/css/theme-vampire.scss assets/css/theme-vampire.css
} else {
    Write-Host "npx or sass not found; skipping Sass compilation"
}

switch ($Action) {
    'serve' { hugo server }
    'build' { hugo }
}
