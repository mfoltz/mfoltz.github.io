---
nav_exclude: true
search_exclude: false
---

# StaticTransformElement

```csharp
public struct StaticTransformElement
{
	static StaticTransformElement()
	{
		Il2CppClassPointerStore<StaticTransformElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StaticTransformElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StaticTransformElement>.NativeClassPtr);
		StaticTransformElement.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTransformElement>.NativeClassPtr, "Position");
		StaticTransformElement.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTransformElement>.NativeClassPtr, "Rotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StaticTransformElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;

	public float3 Position;

	public quaternion Rotation;
}
```
