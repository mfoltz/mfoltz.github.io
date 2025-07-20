---
nav_exclude: true
search_exclude: true
---

# AiPointOfInterestTarget

```csharp
public struct AiPointOfInterestTarget
{
	static AiPointOfInterestTarget()
	{
		Il2CppClassPointerStore<AiPointOfInterestTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AiPointOfInterestTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AiPointOfInterestTarget>.NativeClassPtr);
		AiPointOfInterestTarget.NativeFieldInfoPtr_TypeModifiable = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiPointOfInterestTarget>.NativeClassPtr, "TypeModifiable");
		AiPointOfInterestTarget.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiPointOfInterestTarget>.NativeClassPtr, "Range");
		AiPointOfInterestTarget.NativeMethodInfoPtr_get_Type_Public_get_AiPointOfInterestType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AiPointOfInterestTarget>.NativeClassPtr, 100665301);
	}
	public unsafe AiPointOfInterestType Type
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AiPointOfInterestTarget.NativeMethodInfoPtr_get_Type_Public_get_AiPointOfInterestType_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AiPointOfInterestTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TypeModifiable;
	private static readonly IntPtr NativeFieldInfoPtr_Range;
	private static readonly IntPtr NativeMethodInfoPtr_get_Type_Public_get_AiPointOfInterestType_0;

	public ModifiableInt TypeModifiable;

	public float Range;
}
```
