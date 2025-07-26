# UICanvasSingleton

```csharp
[StructLayout(2)]
public struct UICanvasSingleton
{
	static UICanvasSingleton()
	{
		Il2CppClassPointerStore<UICanvasSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "UICanvasSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UICanvasSingleton>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UICanvasSingleton>.NativeClassPtr, ref this));
	}
}
