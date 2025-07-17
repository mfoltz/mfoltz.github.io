---
nav_exclude: true
search_exclude: true
---

# EnableRoomRoofDebuggingSingleton

```csharp
[StructLayout(2)]
public struct EnableRoomRoofDebuggingSingleton
{
	static EnableRoomRoofDebuggingSingleton()
	{
		Il2CppClassPointerStore<EnableRoomRoofDebuggingSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Roofs", "EnableRoomRoofDebuggingSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EnableRoomRoofDebuggingSingleton>.NativeClassPtr);
		EnableRoomRoofDebuggingSingleton.NativeFieldInfoPtr_Mode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EnableRoomRoofDebuggingSingleton>.NativeClassPtr, "Mode");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EnableRoomRoofDebuggingSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Mode;
	[FieldOffset(0)]
	public RoofDebugMode Mode;
}
