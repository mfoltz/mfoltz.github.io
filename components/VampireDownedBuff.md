---
nav_exclude: true
search_exclude: false
---

# VampireDownedBuff

```csharp
public struct VampireDownedBuff
{
	static VampireDownedBuff()
	{
		Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "VampireDownedBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr);
		VampireDownedBuff.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr, "Source");
		VampireDownedBuff.NativeFieldInfoPtr_SourceSpell = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr, "SourceSpell");
		VampireDownedBuff.NativeFieldInfoPtr_SourceId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr, "SourceId");
		VampireDownedBuff.NativeFieldInfoPtr_SourceSpellId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr, "SourceSpellId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_SourceSpell;
	private static readonly IntPtr NativeFieldInfoPtr_SourceId;
	private static readonly IntPtr NativeFieldInfoPtr_SourceSpellId;

	public Entity Source;

	public Entity SourceSpell;

	public PrefabGUID SourceId;

	public PrefabGUID SourceSpellId;
}
```

## Server Systems

- [VampireDownedServerEventSystem](/systems/server/VampireDownedServerEventSystem)
