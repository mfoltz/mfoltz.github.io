---
nav_exclude: true
search_exclude: false
---

# ConditionalInfo

```csharp
public struct ConditionalInfo
{
	static ConditionalInfo()
	{
		Il2CppClassPointerStore<ConditionalInfo>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.HUD", "ConditionalInfo");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ConditionalInfo>.NativeClassPtr);
		ConditionalInfo.NativeFieldInfoPtr_PlayerDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConditionalInfo>.NativeClassPtr, "PlayerDistance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ConditionalInfo>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PlayerDistance;

	public float PlayerDistance;
}
```

## Client Systems

- [ConditionalInfoSystem](/systems/client/ConditionalInfoSystem)
