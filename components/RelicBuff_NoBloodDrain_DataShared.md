# RelicBuff_NoBloodDrain_DataShared

```csharp
[StructLayout(2)]
public struct RelicBuff_NoBloodDrain_DataShared
{
	static RelicBuff_NoBloodDrain_DataShared()
	{
		Il2CppClassPointerStore<RelicBuff_NoBloodDrain_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "RelicBuff_NoBloodDrain_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RelicBuff_NoBloodDrain_DataShared>.NativeClassPtr);
		RelicBuff_NoBloodDrain_DataShared.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RelicBuff_NoBloodDrain_DataShared>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RelicBuff_NoBloodDrain_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;
	[FieldOffset(0)]
	public ModificationId ModificationId;
}
