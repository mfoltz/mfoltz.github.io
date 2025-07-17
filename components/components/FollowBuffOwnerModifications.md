---
nav_exclude: true
search_exclude: true
---

# FollowBuffOwnerModifications

```csharp
[StructLayout(2)]
public struct FollowBuffOwnerModifications
{
	static FollowBuffOwnerModifications()
	{
		Il2CppClassPointerStore<FollowBuffOwnerModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "FollowBuffOwnerModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FollowBuffOwnerModifications>.NativeClassPtr);
		FollowBuffOwnerModifications.NativeFieldInfoPtr_FollowedModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FollowBuffOwnerModifications>.NativeClassPtr, "FollowedModId");
		FollowBuffOwnerModifications.NativeFieldInfoPtr_FollowModeModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FollowBuffOwnerModifications>.NativeClassPtr, "FollowModeModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FollowBuffOwnerModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FollowedModId;
	private static readonly IntPtr NativeFieldInfoPtr_FollowModeModId;
	[FieldOffset(0)]
	public ModificationId FollowedModId;
	[FieldOffset(4)]
	public ModificationId FollowModeModId;
}
