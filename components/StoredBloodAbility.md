# StoredBloodAbility

```csharp
[StructLayout(2)]
public struct StoredBloodAbility
{
	static StoredBloodAbility()
	{
		Il2CppClassPointerStore<StoredBloodAbility>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StoredBloodAbility");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StoredBloodAbility>.NativeClassPtr);
		StoredBloodAbility.NativeFieldInfoPtr_BloodQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StoredBloodAbility>.NativeClassPtr, "BloodQuality");
		StoredBloodAbility.NativeFieldInfoPtr_BloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StoredBloodAbility>.NativeClassPtr, "BloodType");
		StoredBloodAbility.NativeFieldInfoPtr_SecondaryBlood = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StoredBloodAbility>.NativeClassPtr, "SecondaryBlood");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StoredBloodAbility>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BloodQuality;
	private static readonly IntPtr NativeFieldInfoPtr_BloodType;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryBlood;
	[FieldOffset(0)]
	public float BloodQuality;
	[FieldOffset(4)]
	public PrefabGUID BloodType;
	[FieldOffset(8)]
	public SecondaryBloodData SecondaryBlood;
}
