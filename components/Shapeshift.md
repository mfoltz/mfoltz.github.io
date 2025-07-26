---
nav_exclude: true
search_exclude: true
---

# Shapeshift

```csharp
public struct Shapeshift
{
	static Shapeshift()
	{
		Il2CppClassPointerStore<Shapeshift>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Shapeshift");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Shapeshift>.NativeClassPtr);
		Shapeshift.NativeFieldInfoPtr_IsShapeshifted = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Shapeshift>.NativeClassPtr, "IsShapeshifted");
		Shapeshift.NativeFieldInfoPtr_Speed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Shapeshift>.NativeClassPtr, "Speed");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Shapeshift>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsShapeshifted;
	private static readonly IntPtr NativeFieldInfoPtr_Speed;

	public ModifiableBool IsShapeshifted;

	public ModifiableFloat Speed;
}
```
