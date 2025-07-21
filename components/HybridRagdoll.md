---
nav_exclude: true
search_exclude: false
---

# HybridRagdoll

```csharp
public struct HybridRagdoll
{
	static HybridRagdoll()
	{
		Il2CppClassPointerStore<HybridRagdoll>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "HybridRagdoll");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridRagdoll>.NativeClassPtr);
		HybridRagdoll.NativeFieldInfoPtr_RagdollPrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridRagdoll>.NativeClassPtr, "RagdollPrefabGUID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridRagdoll>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RagdollPrefabGUID;

	public PrefabGUID RagdollPrefabGUID;
}
```
