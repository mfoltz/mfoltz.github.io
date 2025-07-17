---
nav_exclude: true
search_exclude: true
---

# SceneEntityReference

```csharp
[StructLayout(2)]
public struct SceneEntityReference
{
	static SceneEntityReference()
	{
		Il2CppClassPointerStore<SceneEntityReference>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "SceneEntityReference");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SceneEntityReference>.NativeClassPtr);
		SceneEntityReference.NativeFieldInfoPtr_SceneEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneEntityReference>.NativeClassPtr, "SceneEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SceneEntityReference>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SceneEntity;
	[FieldOffset(0)]
	public Entity SceneEntity;
}
