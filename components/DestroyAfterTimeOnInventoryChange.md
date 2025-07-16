# DestroyAfterTimeOnInventoryChange

```csharp
[StructLayout(2)]
public struct DestroyAfterTimeOnInventoryChange
{
	static DestroyAfterTimeOnInventoryChange()
	{
		Il2CppClassPointerStore<DestroyAfterTimeOnInventoryChange>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DestroyAfterTimeOnInventoryChange");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyAfterTimeOnInventoryChange>.NativeClassPtr);
		DestroyAfterTimeOnInventoryChange.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyAfterTimeOnInventoryChange>.NativeClassPtr, "Duration");
		DestroyAfterTimeOnInventoryChange.NativeFieldInfoPtr_Triggered = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyAfterTimeOnInventoryChange>.NativeClassPtr, "Triggered");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyAfterTimeOnInventoryChange>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_Triggered;
	[FieldOffset(0)]
	public float Duration;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool Triggered;
}
