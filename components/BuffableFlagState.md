---
nav_exclude: true
search_exclude: true
---

# BuffableFlagState

```csharp
public struct BuffableFlagState
{
	static BuffableFlagState()
	{
		Il2CppClassPointerStore<BuffableFlagState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BuffableFlagState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffableFlagState>.NativeClassPtr);
		BuffableFlagState.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffableFlagState>.NativeClassPtr, "Value");
		BuffableFlagState.NativeMethodInfoPtr_IsAnySet_Public_Boolean_BuffModificationTypes_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuffableFlagState>.NativeClassPtr, 100665598);
		BuffableFlagState.NativeMethodInfoPtr_IsSet_Public_Boolean_BuffModificationTypes_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuffableFlagState>.NativeClassPtr, 100665599);
		BuffableFlagState.NativeMethodInfoPtr_IsNotSet_Public_Boolean_BuffModificationTypes_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuffableFlagState>.NativeClassPtr, 100665600);
	}

	public unsafe bool IsAnySet(BuffModificationTypes type)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref type;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuffableFlagState.NativeMethodInfoPtr_IsAnySet_Public_Boolean_BuffModificationTypes_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsSet(BuffModificationTypes type)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref type;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuffableFlagState.NativeMethodInfoPtr_IsSet_Public_Boolean_BuffModificationTypes_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsNotSet(BuffModificationTypes type)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref type;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuffableFlagState.NativeMethodInfoPtr_IsNotSet_Public_Boolean_BuffModificationTypes_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffableFlagState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_IsAnySet_Public_Boolean_BuffModificationTypes_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsSet_Public_Boolean_BuffModificationTypes_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsNotSet_Public_Boolean_BuffModificationTypes_0;

	public ModifiableLong Value;
}
```

## Server Systems

- [CheckInSunSystem](/systems/server/CheckInSunSystem)
- [FlyLastValidPositionSystem](/systems/server/FlyLastValidPositionSystem)
- [HeightCorrectionSystem](/systems/server/HeightCorrectionSystem)

## Client Systems

- [HeightCorrectionSystem](/systems/client/HeightCorrectionSystem)
