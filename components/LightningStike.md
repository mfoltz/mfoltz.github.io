---
nav_exclude: true
search_exclude: true
---

# LightningStike

```csharp
[StructLayout(2)]
public struct LightningStike
{
	static LightningStike()
	{
		Il2CppClassPointerStore<LightningStike>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "LightningStike");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LightningStike>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LightningStike>.NativeClassPtr, ref this));
	}
}
