---
nav_exclude: true
search_exclude: true
---

```csharp
public struct JewelChanged
{
	static JewelChanged()
	{
		Il2CppClassPointerStore<JewelChanged>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "JewelChanged");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<JewelChanged>.NativeClassPtr);
		JewelChanged.NativeFieldInfoPtr_OldJewel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelChanged>.NativeClassPtr, "OldJewel");
		JewelChanged.NativeFieldInfoPtr_NewJewel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelChanged>.NativeClassPtr, "NewJewel");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<JewelChanged>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OldJewel;
	private static readonly IntPtr NativeFieldInfoPtr_NewJewel;

	public Entity OldJewel;

	public Entity NewJewel;
}
```

## Server Systems

- [OnJewelEquippedSystemBase]({{% relref "systems/server/OnJewelEquippedSystemBase.md" %}})
- [OnJewelEquippedSystem_Server]({{% relref "systems/server/OnJewelEquippedSystem_Server.md" %}})
- [RemoveJewelChangedSystemBase]({{% relref "systems/server/RemoveJewelChangedSystemBase.md" %}})
- [RemoveJewelChangedSystem_Server]({{% relref "systems/server/RemoveJewelChangedSystem_Server.md" %}})

## Client Systems

- [OnJewelEquippedSystemBase]({{% relref "systems/client/OnJewelEquippedSystemBase.md" %}})
- [OnJewelEquippedSystem_Client]({{% relref "systems/client/OnJewelEquippedSystem_Client.md" %}})
- [RemoveJewelChangedSystemBase]({{% relref "systems/client/RemoveJewelChangedSystemBase.md" %}})
- [RemoveJewelChangedSystem_Client]({{% relref "systems/client/RemoveJewelChangedSystem_Client.md" %}})
