---
nav_exclude: true
search_exclude: true
---

# PersistenceDebuggingSingleton

```csharp
public struct PersistenceDebuggingSingleton
{
	static PersistenceDebuggingSingleton()
	{
		Il2CppClassPointerStore<PersistenceDebuggingSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PersistenceDebuggingSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PersistenceDebuggingSingleton>.NativeClassPtr);
		PersistenceDebuggingSingleton.NativeFieldInfoPtr_Flags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PersistenceDebuggingSingleton>.NativeClassPtr, "Flags");
		PersistenceDebuggingSingleton.NativeMethodInfoPtr_get_TestOnSave_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PersistenceDebuggingSingleton>.NativeClassPtr, 100665369);
		PersistenceDebuggingSingleton.NativeMethodInfoPtr_get_DumpSummaryOnSave_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PersistenceDebuggingSingleton>.NativeClassPtr, 100665370);
		PersistenceDebuggingSingleton.NativeMethodInfoPtr_get_StoreExtraDebugData_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PersistenceDebuggingSingleton>.NativeClassPtr, 100665371);
	}
	public unsafe bool TestOnSave
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PersistenceDebuggingSingleton.NativeMethodInfoPtr_get_TestOnSave_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool DumpSummaryOnSave
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PersistenceDebuggingSingleton.NativeMethodInfoPtr_get_DumpSummaryOnSave_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool StoreExtraDebugData
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PersistenceDebuggingSingleton.NativeMethodInfoPtr_get_StoreExtraDebugData_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PersistenceDebuggingSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Flags;
	private static readonly IntPtr NativeMethodInfoPtr_get_TestOnSave_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_DumpSummaryOnSave_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_StoreExtraDebugData_Public_get_Boolean_0;

	public PersistenceDebugFlags Flags;
}
```
