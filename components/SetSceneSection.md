---
nav_exclude: true
search_exclude: true
---

# SetSceneSection

```csharp
public struct SetSceneSection
{
	static SetSceneSection()
	{
		Il2CppClassPointerStore<SetSceneSection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SetSceneSection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SetSceneSection>.NativeClassPtr);
		SetSceneSection.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetSceneSection>.NativeClassPtr, "Value");
		SetSceneSection.NativeFieldInfoPtr_SetRecursivelyOnChildren = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetSceneSection>.NativeClassPtr, "SetRecursivelyOnChildren");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SetSceneSection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_SetRecursivelyOnChildren;

	public int Value;

	public bool SetRecursivelyOnChildren;
}
```
