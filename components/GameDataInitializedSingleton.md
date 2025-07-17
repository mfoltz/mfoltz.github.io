---
nav_exclude: true
search_exclude: true
---

# GameDataInitializedSingleton

```csharp
[StructLayout(2)]
public struct GameDataInitializedSingleton
{
	static GameDataInitializedSingleton()
	{
		Il2CppClassPointerStore<GameDataInitializedSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GameDataInitializedSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GameDataInitializedSingleton>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GameDataInitializedSingleton>.NativeClassPtr, ref this));
	}
}
