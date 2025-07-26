# ModifyInventorySizeEvent

```csharp
[StructLayout(2)]
public struct ModifyInventorySizeEvent
{
	static ModifyInventorySizeEvent()
	{
		Il2CppClassPointerStore<ModifyInventorySizeEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyInventorySizeEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyInventorySizeEvent>.NativeClassPtr);
		ModifyInventorySizeEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyInventorySizeEvent>.NativeClassPtr, "Target");
		ModifyInventorySizeEvent.NativeFieldInfoPtr_SlotDiff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyInventorySizeEvent>.NativeClassPtr, "SlotDiff");
		ModifyInventorySizeEvent.NativeFieldInfoPtr_NewSlotCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyInventorySizeEvent>.NativeClassPtr, "NewSlotCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyInventorySizeEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_SlotDiff;
	private static readonly IntPtr NativeFieldInfoPtr_NewSlotCount;
	[FieldOffset(0)]
	public Entity Target;
	[FieldOffset(8)]
	public int SlotDiff;
	[FieldOffset(12)]
	public int NewSlotCount;
}
