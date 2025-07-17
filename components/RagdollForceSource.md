---
nav_exclude: true
search_exclude: true
---

# RagdollForceSource

```csharp
[StructLayout(2)]
public struct RagdollForceSource
{
	static RagdollForceSource()
	{
		Il2CppClassPointerStore<RagdollForceSource>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RagdollForceSource");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RagdollForceSource>.NativeClassPtr);
		RagdollForceSource.NativeFieldInfoPtr_ForceModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollForceSource>.NativeClassPtr, "ForceModifier");
		RagdollForceSource.NativeFieldInfoPtr_RagdollSetting = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollForceSource>.NativeClassPtr, "RagdollSetting");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RagdollForceSource>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ForceModifier;
	private static readonly IntPtr NativeFieldInfoPtr_RagdollSetting;
	[FieldOffset(0)]
	public float ForceModifier;
	[FieldOffset(4)]
	public PrefabGUID RagdollSetting;
}
