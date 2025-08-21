---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastleBuffsSettings
{
	static CastleBuffsSettings()
	{
		Il2CppClassPointerStore<CastleBuffsSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.CastleBuilding.Systems.dll", "ProjectM", "CastleBuffsSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleBuffsSettings>.NativeClassPtr);
		CastleBuffsSettings.NativeFieldInfoPtr_InvulnerableBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuffsSettings>.NativeClassPtr, "InvulnerableBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleBuffsSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_InvulnerableBuff;

	public PrefabGUID InvulnerableBuff;
}
```

## Server Systems

- [CastleBuffsSystem]({{% relref "systems/server/CastleBuffsSystem.md" %}})
