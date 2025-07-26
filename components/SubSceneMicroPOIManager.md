# SubSceneMicroPOIManager

```csharp
[StructLayout(2)]
public struct SubSceneMicroPOIManager
{
	static SubSceneMicroPOIManager()
	{
		Il2CppClassPointerStore<SubSceneMicroPOIManager>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SubSceneMicroPOIManager");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SubSceneMicroPOIManager>.NativeClassPtr);
		SubSceneMicroPOIManager.NativeFieldInfoPtr_ManagerGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SubSceneMicroPOIManager>.NativeClassPtr, "ManagerGUID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SubSceneMicroPOIManager>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ManagerGUID;
	[FieldOffset(0)]
	public PrefabGUID ManagerGUID;
}
