---
nav_exclude: true
search_exclude: false
---

# AbilityStateBuffer

```csharp
public struct AbilityStateBuffer
{
	static AbilityStateBuffer()
	{
		Il2CppClassPointerStore<AbilityStateBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityStateBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityStateBuffer>.NativeClassPtr);
		AbilityStateBuffer.NativeFieldInfoPtr_StateEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityStateBuffer>.NativeClassPtr, "StateEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityStateBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StateEntity;

	public NetworkedEntity StateEntity;
}
```

## Client Systems

- [DetectJewelChangedSystem_Client](/systems/client/DetectJewelChangedSystem_Client)
