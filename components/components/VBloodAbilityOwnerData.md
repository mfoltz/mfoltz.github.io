---
nav_exclude: true
search_exclude: true
---

# VBloodAbilityOwnerData

```csharp
[StructLayout(2)]
public struct VBloodAbilityOwnerData
{
	static VBloodAbilityOwnerData()
	{
		Il2CppClassPointerStore<VBloodAbilityOwnerData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "VBloodAbilityOwnerData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VBloodAbilityOwnerData>.NativeClassPtr);
		VBloodAbilityOwnerData.NativeFieldInfoPtr_VBloodAbilityBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodAbilityOwnerData>.NativeClassPtr, "VBloodAbilityBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VBloodAbilityOwnerData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VBloodAbilityBuff;
	[FieldOffset(0)]
	public PrefabGUID VBloodAbilityBuff;
}
