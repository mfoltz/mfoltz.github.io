---
nav_exclude: true
search_exclude: true
---

# ImprisonedBuff

```csharp
public struct ImprisonedBuff
{
	static ImprisonedBuff()
	{
		Il2CppClassPointerStore<ImprisonedBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ImprisonedBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ImprisonedBuff>.NativeClassPtr);
		ImprisonedBuff.NativeFieldInfoPtr_PreviousCellPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ImprisonedBuff>.NativeClassPtr, "PreviousCellPosition");
		ImprisonedBuff.NativeFieldInfoPtr_TeleportBuffPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ImprisonedBuff>.NativeClassPtr, "TeleportBuffPrefabGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ImprisonedBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PreviousCellPosition;
	private static readonly IntPtr NativeFieldInfoPtr_TeleportBuffPrefabGuid;

	public float2 PreviousCellPosition;

	public PrefabGUID TeleportBuffPrefabGuid;
}
```

## Server Systems

- [ProjectM.ImprisonedBuffSystem](/systems/ProjectM.ImprisonedBuffSystem)
