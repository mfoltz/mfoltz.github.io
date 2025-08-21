---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RemoveBuffOnGameplayEventEntry
{
	static RemoveBuffOnGameplayEventEntry()
	{
		Il2CppClassPointerStore<RemoveBuffOnGameplayEventEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RemoveBuffOnGameplayEventEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RemoveBuffOnGameplayEventEntry>.NativeClassPtr);
		RemoveBuffOnGameplayEventEntry.NativeFieldInfoPtr_EventIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RemoveBuffOnGameplayEventEntry>.NativeClassPtr, "EventIndex");
		RemoveBuffOnGameplayEventEntry.NativeFieldInfoPtr_Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RemoveBuffOnGameplayEventEntry>.NativeClassPtr, "Buff");
		RemoveBuffOnGameplayEventEntry.NativeFieldInfoPtr_BuffCategoryFlag = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RemoveBuffOnGameplayEventEntry>.NativeClassPtr, "BuffCategoryFlag");
		RemoveBuffOnGameplayEventEntry.NativeFieldInfoPtr_IncludeSelf = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RemoveBuffOnGameplayEventEntry>.NativeClassPtr, "IncludeSelf");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RemoveBuffOnGameplayEventEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Buff;
	private static readonly IntPtr NativeFieldInfoPtr_BuffCategoryFlag;
	private static readonly IntPtr NativeFieldInfoPtr_IncludeSelf;

	public int EventIndex;

	public PrefabIdentifier Buff;

	public BuffCategoryFlag BuffCategoryFlag;

	public bool IncludeSelf;
}
```
