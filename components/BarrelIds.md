# BarrelIds

```csharp
[StructLayout(2)]
public struct BarrelIds
{
	static BarrelIds()
	{
		Il2CppClassPointerStore<BarrelIds>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BarrelIds");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BarrelIds>.NativeClassPtr);
		BarrelIds.NativeFieldInfoPtr_Id = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BarrelIds>.NativeClassPtr, "Id");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BarrelIds>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Id;
	[FieldOffset(0)]
	public int Id;
}
