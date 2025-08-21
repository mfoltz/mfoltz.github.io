---
nav_exclude: true
search_exclude: true
---

```csharp
public struct GameplayTranslation
{
	static GameplayTranslation()
	{
		Il2CppClassPointerStore<GameplayTranslation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "GameplayTranslation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GameplayTranslation>.NativeClassPtr);
		GameplayTranslation.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayTranslation>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GameplayTranslation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float3 Value;
}
```
