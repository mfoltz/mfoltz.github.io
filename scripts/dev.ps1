param(
    [Parameter(Position=0,Mandatory=$true)]
    [ValidateSet('serve', 'build')]
    [string]$Action
)

# Ensure submodules are initialized and updated
git submodule update --init --recursive

# Generate prefab file list
python scripts/build_prefab_files.py

switch ($Action) {
    'serve' { hugo server }
    'build' { hugo }
}
