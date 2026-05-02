# Vampire Reference Assemblers

`VampireReferenceAssemblies` provides metadata-only builds of the VRising
managed assemblies so you can compile mods against the game's public APIs
without partaking in the redistribution of proprietary runtime binaries.
Reference assemblies are **for compile-time use only**!

## Install the package

Packages published from the repository currently use prerelease version numbers (for example, `1.1.10.1-r94466-b2`). NuGet treats hyphenated versions as prerelease builds, so make sure your restore commands opt into prerelease resolution until a stable build is available.

### nuget.org feed

The package ID is `VampireReferenceAssemblies`, hosted on the public nuget.org feed (`https://api.nuget.org/v3/index.json`). You can install it with familiar NuGet tooling:

```bash
dotnet add package VampireReferenceAssemblies --prerelease
dotnet restore --prerelease
```

Once a stable release is published you can omit `--prerelease` from your restore commands. If you previously referenced private feeds, remove the extra `--source` argument (or the corresponding `RestoreSources` entry) after switching to nuget.org.

> Contributors who need GitHub Packages or other prerelease delivery paths should follow the repository publishing guidance documented in [README.md](../README.md).

> Compatibility note: the repository and project branding now use
> `VampireReferenceAssemblers`, but the published NuGet package ID remains
> `VampireReferenceAssemblies`. Keep using
> `dotnet add package VampireReferenceAssemblies` and the existing package ID in
> project files.

## Project compatibility

Modern SDK-style projects (including Unity and other MSBuild-based workloads) can consume the package with a normal `PackageReference`. NuGet automatically resolves the `ref/net6.0` assets, and the package includes a `buildTransitive` target that swaps `Il2CppInterop.Common`/`Il2CppInterop.Runtime` compile references to the exact interop binaries used when generating the refs. No manual `.csproj` edits are required.

To keep restored compile-time dependencies aligned with the generated VRising references, the package constrains `Il2CppInterop.Common` and `Il2CppInterop.Runtime` to `1.4.6-ci.426`. The currently known-good `BepInEx.Unity.IL2CPP` track for this package is `6.0.0-be.733` through `6.0.0-be.735`. If your project requests a conflicting BepInEx/Il2CppInterop graph (for example, `BepInEx.Unity.IL2CPP 6.0.0-be.755`), NuGet restore will fail with a version conflict instead of compiling against an incompatible graph.

Reference assemblies remain metadata-only under `ref/`, so the package does not redistribute VRising implementation binaries. The bundled `buildTransitive/interop` assemblies are used for compilation compatibility only.

## Additional resources

- [Repository README](../README.md) – Developer workflows for generating and publishing the package.
