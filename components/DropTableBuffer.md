# DropTableBuffer

```csharp
[StructLayout(2)]
public struct DropTableBuffer
{
	static DropTableBuffer()
	{
		Il2CppClassPointerStore<DropTableBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "DropTableBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DropTableBuffer>.NativeClassPtr);
		DropTableBuffer.NativeFieldInfoPtr_DropTableGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableBuffer>.NativeClassPtr, "DropTableGuid");
		DropTableBuffer.NativeFieldInfoPtr_DropTrigger = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableBuffer>.NativeClassPtr, "DropTrigger");
		DropTableBuffer.NativeFieldInfoPtr_RelicType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableBuffer>.NativeClassPtr, "RelicType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DropTableBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DropTableGuid;
	private static readonly IntPtr NativeFieldInfoPtr_DropTrigger;
	private static readonly IntPtr NativeFieldInfoPtr_RelicType;
	[FieldOffset(0)]
	public PrefabGUID DropTableGuid;
	[FieldOffset(4)]
	public DropTriggerType DropTrigger;
	[FieldOffset(5)]
	public RelicType RelicType;
}
