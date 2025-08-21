---
nav_exclude: true
search_exclude: true
---

```csharp
public struct UnitCompositionGroupEntry
{
	static UnitCompositionGroupEntry()
	{
		Il2CppClassPointerStore<UnitCompositionGroupEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnitCompositionGroupEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitCompositionGroupEntry>.NativeClassPtr);
		UnitCompositionGroupEntry.NativeFieldInfoPtr_TimeRequirement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionGroupEntry>.NativeClassPtr, "TimeRequirement");
		UnitCompositionGroupEntry.NativeFieldInfoPtr_Id = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionGroupEntry>.NativeClassPtr, "Id");
		UnitCompositionGroupEntry.NativeFieldInfoPtr_Weight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionGroupEntry>.NativeClassPtr, "Weight");
		UnitCompositionGroupEntry.NativeFieldInfoPtr_UnitsStartIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionGroupEntry>.NativeClassPtr, "UnitsStartIndex");
		UnitCompositionGroupEntry.NativeFieldInfoPtr_UnitsCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionGroupEntry>.NativeClassPtr, "UnitsCount");
		UnitCompositionGroupEntry.NativeMethodInfoPtr_get_UnitsEndIndex_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnitCompositionGroupEntry>.NativeClassPtr, 100668072);
	}
	public unsafe int UnitsEndIndex
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnitCompositionGroupEntry.NativeMethodInfoPtr_get_UnitsEndIndex_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitCompositionGroupEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeRequirement;
	private static readonly IntPtr NativeFieldInfoPtr_Id;
	private static readonly IntPtr NativeFieldInfoPtr_Weight;
	private static readonly IntPtr NativeFieldInfoPtr_UnitsStartIndex;
	private static readonly IntPtr NativeFieldInfoPtr_UnitsCount;
	private static readonly IntPtr NativeMethodInfoPtr_get_UnitsEndIndex_Public_get_Int32_0;

	public PrefabGUID TimeRequirement;

	public UnitCompositionId Id;

	public int Weight;

	public int UnitsStartIndex;

	public int UnitsCount;
}
```
