---
nav_exclude: true
search_exclude: true
---

# CustomPhysicsProxyDriver

```csharp
[StructLayout(2)]
public struct CustomPhysicsProxyDriver
{
	static CustomPhysicsProxyDriver()
	{
		Il2CppClassPointerStore<CustomPhysicsProxyDriver>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "CustomPhysicsProxyDriver");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CustomPhysicsProxyDriver>.NativeClassPtr);
		CustomPhysicsProxyDriver.NativeFieldInfoPtr_rootEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomPhysicsProxyDriver>.NativeClassPtr, "rootEntity");
		CustomPhysicsProxyDriver.NativeFieldInfoPtr_FirstOrderGain = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomPhysicsProxyDriver>.NativeClassPtr, "FirstOrderGain");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CustomPhysicsProxyDriver>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_rootEntity;
	private static readonly IntPtr NativeFieldInfoPtr_FirstOrderGain;
	[FieldOffset(0)]
	public Entity rootEntity;
	[FieldOffset(8)]
	public float FirstOrderGain;
}
