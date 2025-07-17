---
nav_exclude: true
search_exclude: true
---

# ResolvedSceneHash

```csharp
[StructLayout(2)]
public struct ResolvedSceneHash
{
	static ResolvedSceneHash()
	{
		Il2CppClassPointerStore<ResolvedSceneHash>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "ResolvedSceneHash");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ResolvedSceneHash>.NativeClassPtr);
		ResolvedSceneHash.NativeFieldInfoPtr_ArtifactHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResolvedSceneHash>.NativeClassPtr, "ArtifactHash");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ResolvedSceneHash>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ArtifactHash;
	[FieldOffset(0)]
	public Hash128 ArtifactHash;
}
