---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TransitionWhenInventoryIsEmpty
{
	static TransitionWhenInventoryIsEmpty()
	{
		Il2CppClassPointerStore<TransitionWhenInventoryIsEmpty>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TransitionWhenInventoryIsEmpty");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TransitionWhenInventoryIsEmpty>.NativeClassPtr);
		TransitionWhenInventoryIsEmpty.NativeFieldInfoPtr_TransitionId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransitionWhenInventoryIsEmpty>.NativeClassPtr, "TransitionId");
		TransitionWhenInventoryIsEmpty.NativeFieldInfoPtr_WasEmpty = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransitionWhenInventoryIsEmpty>.NativeClassPtr, "WasEmpty");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TransitionWhenInventoryIsEmpty>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TransitionId;
	private static readonly IntPtr NativeFieldInfoPtr_WasEmpty;

	public SpawnChainData.TransitionId TransitionId;

	public bool WasEmpty;
}
```
