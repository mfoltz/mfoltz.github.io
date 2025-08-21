---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TransmogModeBuff
{
	static TransmogModeBuff()
	{
		Il2CppClassPointerStore<TransmogModeBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Transmog", "TransmogModeBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TransmogModeBuff>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TransmogModeBuff>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [TransmogModeBuffSpawnSystem_Client]({{% relref "systems/client/TransmogModeBuffSpawnSystem_Client.md" %}})
