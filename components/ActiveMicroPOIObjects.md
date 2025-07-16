# ActiveMicroPOIObjects

```csharp
[StructLayout(2)]
public struct ActiveMicroPOIObjects
{
	static ActiveMicroPOIObjects()
	{
		Il2CppClassPointerStore<ActiveMicroPOIObjects>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ActiveMicroPOIObjects");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ActiveMicroPOIObjects>.NativeClassPtr);
		ActiveMicroPOIObjects.NativeFieldInfoPtr_ActiveEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ActiveMicroPOIObjects>.NativeClassPtr, "ActiveEntity");
		ActiveMicroPOIObjects.NativeFieldInfoPtr_ObjectConfigIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ActiveMicroPOIObjects>.NativeClassPtr, "ObjectConfigIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ActiveMicroPOIObjects>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ActiveEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ObjectConfigIndex;
	[FieldOffset(0)]
	public Entity ActiveEntity;
	[FieldOffset(8)]
	public int ObjectConfigIndex;
}
