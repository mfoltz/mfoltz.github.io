---
nav_exclude: true
search_exclude: true
---

# ServantInteractPointLocalTransform

```csharp
public struct ServantInteractPointLocalTransform
{
	static ServantInteractPointLocalTransform()
	{
		Il2CppClassPointerStore<ServantInteractPointLocalTransform>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ServantInteractPointLocalTransform");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantInteractPointLocalTransform>.NativeClassPtr);
		ServantInteractPointLocalTransform.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantInteractPointLocalTransform>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantInteractPointLocalTransform>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float4x4 Value;
}
```
