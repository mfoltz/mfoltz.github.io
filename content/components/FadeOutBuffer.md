---
nav_exclude: true
search_exclude: true
---

```csharp
public struct FadeOutBuffer
{
	static FadeOutBuffer()
	{
		Il2CppClassPointerStore<FadeOutBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "FadeOutBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FadeOutBuffer>.NativeClassPtr);
		FadeOutBuffer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeOutBuffer>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FadeOutBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public Entity Entity;
}
```
