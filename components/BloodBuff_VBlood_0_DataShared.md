# BloodBuff_VBlood_0_DataShared

```csharp
[StructLayout(2)]
public struct BloodBuff_VBlood_0_DataShared
{
	static BloodBuff_VBlood_0_DataShared()
	{
		Il2CppClassPointerStore<BloodBuff_VBlood_0_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BloodBuff_VBlood_0_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuff_VBlood_0_DataShared>.NativeClassPtr);
		BloodBuff_VBlood_0_DataShared.NativeFieldInfoPtr_DrainIncreaseFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_VBlood_0_DataShared>.NativeClassPtr, "DrainIncreaseFactor");
		BloodBuff_VBlood_0_DataShared.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_VBlood_0_DataShared>.NativeClassPtr, "ModificationId");
		BloodBuff_VBlood_0_DataShared.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_VBlood_0_DataShared>.NativeClassPtr, "RequiredBloodPercentage");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuff_VBlood_0_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DrainIncreaseFactor;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;
	[FieldOffset(0)]
	public float DrainIncreaseFactor;
	[FieldOffset(4)]
	public ModificationId ModificationId;
	[FieldOffset(8)]
	public float RequiredBloodPercentage;
}
