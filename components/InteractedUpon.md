---
nav_exclude: true
search_exclude: true
---

# InteractedUpon

```csharp
public struct InteractedUpon
{
	static InteractedUpon()
	{
		Il2CppClassPointerStore<InteractedUpon>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "InteractedUpon");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InteractedUpon>.NativeClassPtr);
		InteractedUpon.NativeFieldInfoPtr_Interacting = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InteractedUpon>.NativeClassPtr, "Interacting");
		InteractedUpon.NativeFieldInfoPtr_BlockBuildingMovement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InteractedUpon>.NativeClassPtr, "BlockBuildingMovement");
		InteractedUpon.NativeFieldInfoPtr_BlockBuildingDisassemble = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InteractedUpon>.NativeClassPtr, "BlockBuildingDisassemble");
		InteractedUpon.NativeMethodInfoPtr_IsInteractedUpon_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InteractedUpon>.NativeClassPtr, 100667310);
	}

	public unsafe bool IsInteractedUpon()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InteractedUpon.NativeMethodInfoPtr_IsInteractedUpon_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InteractedUpon>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Interacting;
	private static readonly IntPtr NativeFieldInfoPtr_BlockBuildingMovement;
	private static readonly IntPtr NativeFieldInfoPtr_BlockBuildingDisassemble;
	private static readonly IntPtr NativeMethodInfoPtr_IsInteractedUpon_Public_Boolean_0;

	public bool Interacting;

	public bool BlockBuildingMovement;

	public bool BlockBuildingDisassemble;
}
```
