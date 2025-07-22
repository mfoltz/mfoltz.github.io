---
nav_exclude: true
search_exclude: false
---

# DurabilityTarget

```csharp
public struct DurabilityTarget
{
	static DurabilityTarget()
	{
		Il2CppClassPointerStore<DurabilityTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DurabilityTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DurabilityTarget>.NativeClassPtr);
		DurabilityTarget.NativeFieldInfoPtr_DurabilityFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DurabilityTarget>.NativeClassPtr, "DurabilityFactor");
		DurabilityTarget.NativeMethodInfoPtr__ctor_Public_Void_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DurabilityTarget>.NativeClassPtr, 100665815);
	}

	public unsafe DurabilityTarget(float durabilityFactor)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref durabilityFactor;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DurabilityTarget.NativeMethodInfoPtr__ctor_Public_Void_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DurabilityTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DurabilityFactor;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Single_0;

	public readonly float DurabilityFactor;
}
```
