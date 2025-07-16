# BloodBuff

```csharp
[StructLayout(2)]
public struct BloodBuff
{
	static BloodBuff()
	{
		Il2CppClassPointerStore<BloodBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuff>.NativeClassPtr);
		BloodBuff.NativeFieldInfoPtr_UnmodifiedValue0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff>.NativeClassPtr, "UnmodifiedValue0");
		BloodBuff.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnmodifiedValue0;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	[FieldOffset(0)]
	public float UnmodifiedValue0;
	[FieldOffset(4)]
	public BloodBuffType Type;
}
