# NewUnitTag

```csharp
[StructLayout(2)]
public struct NewUnitTag
{
	static NewUnitTag()
	{
		Il2CppClassPointerStore<NewUnitTag>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "NewUnitTag");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NewUnitTag>.NativeClassPtr);
		NewUnitTag.NativeFieldInfoPtr_FollowerTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NewUnitTag>.NativeClassPtr, "FollowerTarget");
		NewUnitTag.NativeFieldInfoPtr_MapToStation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NewUnitTag>.NativeClassPtr, "MapToStation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NewUnitTag>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FollowerTarget;
	private static readonly IntPtr NativeFieldInfoPtr_MapToStation;
	[FieldOffset(0)]
	public Entity FollowerTarget;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool MapToStation;
}
