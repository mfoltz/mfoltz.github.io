---
nav_exclude: true
search_exclude: true
---

# IsSpellControlled

```csharp
public struct IsSpellControlled
{
	static IsSpellControlled()
	{
		Il2CppClassPointerStore<IsSpellControlled>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "IsSpellControlled");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<IsSpellControlled>.NativeClassPtr);
		IsSpellControlled.NativeFieldInfoPtr_MovementControlled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IsSpellControlled>.NativeClassPtr, "MovementControlled");
		IsSpellControlled.NativeFieldInfoPtr_RotationControlled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IsSpellControlled>.NativeClassPtr, "RotationControlled");
		IsSpellControlled.NativeMethodInfoPtr_get_Value_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<IsSpellControlled>.NativeClassPtr, 100673366);
	}
	public unsafe bool Value
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(IsSpellControlled.NativeMethodInfoPtr_get_Value_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<IsSpellControlled>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MovementControlled;
	private static readonly IntPtr NativeFieldInfoPtr_RotationControlled;
	private static readonly IntPtr NativeMethodInfoPtr_get_Value_Public_get_Boolean_0;

	public ModifiableBool MovementControlled;

	public ModifiableBool RotationControlled;
}
```

## Server Systems

- [NetworkInterpolationSystem_Server](/systems/server/NetworkInterpolationSystem_Server)
