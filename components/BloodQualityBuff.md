# BloodQualityBuff

```csharp
[StructLayout(2)]
public struct BloodQualityBuff
{
	static BloodQualityBuff()
	{
		Il2CppClassPointerStore<BloodQualityBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BloodQualityBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodQualityBuff>.NativeClassPtr);
		BloodQualityBuff.NativeFieldInfoPtr_BloodQualityBuffPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodQualityBuff>.NativeClassPtr, "BloodQualityBuffPrefabGuid");
		BloodQualityBuff.NativeFieldInfoPtr_BloodQualityBuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodQualityBuff>.NativeClassPtr, "BloodQualityBuffEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodQualityBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BloodQualityBuffPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_BloodQualityBuffEntity;
	[FieldOffset(0)]
	public PrefabGUID BloodQualityBuffPrefabGuid;
	[FieldOffset(4)]
	public Entity BloodQualityBuffEntity;
}
