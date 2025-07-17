---
nav_exclude: true
search_exclude: true
---

# AdditionalEntitiesBakingData

```csharp
[StructLayout(2)]
public struct AdditionalEntitiesBakingData
{
	static AdditionalEntitiesBakingData()
	{
		Il2CppClassPointerStore<AdditionalEntitiesBakingData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Hybrid.dll", "Unity.Entities.Hybrid.Baking", "AdditionalEntitiesBakingData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdditionalEntitiesBakingData>.NativeClassPtr);
		AdditionalEntitiesBakingData.NativeFieldInfoPtr_AuthoringComponentID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdditionalEntitiesBakingData>.NativeClassPtr, "AuthoringComponentID");
		AdditionalEntitiesBakingData.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdditionalEntitiesBakingData>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdditionalEntitiesBakingData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AuthoringComponentID;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public int AuthoringComponentID;
	[FieldOffset(4)]
	public Entity Value;
}
