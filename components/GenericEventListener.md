---
nav_exclude: true
search_exclude: false
---

# GenericEventListener

```csharp
public struct GenericEventListener
{
	static GenericEventListener()
	{
		Il2CppClassPointerStore<GenericEventListener>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Scripting", "GenericEventListener");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GenericEventListener>.NativeClassPtr);
		GenericEventListener.NativeFieldInfoPtr_CallerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenericEventListener>.NativeClassPtr, "CallerEntity");
		GenericEventListener.NativeFieldInfoPtr_FunctionHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenericEventListener>.NativeClassPtr, "FunctionHash");
		GenericEventListener.NativeFieldInfoPtr_TypeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenericEventListener>.NativeClassPtr, "TypeIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GenericEventListener>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CallerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_FunctionHash;
	private static readonly IntPtr NativeFieldInfoPtr_TypeIndex;

	public Entity CallerEntity;

	public int FunctionHash;

	public TypeIndex TypeIndex;
}
```
