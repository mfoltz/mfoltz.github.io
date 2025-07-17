---
nav_exclude: true
search_exclude: true
---

# SurfaceTypeElement

```csharp
public struct SurfaceTypeElement
{
	static SurfaceTypeElement()
	{
		Il2CppClassPointerStore<SurfaceTypeElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "SurfaceTypeElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SurfaceTypeElement>.NativeClassPtr);
		SurfaceTypeElement.NativeFieldInfoPtr_SurfaceIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SurfaceTypeElement>.NativeClassPtr, "SurfaceIndex");
		SurfaceTypeElement.NativeMethodInfoPtr_op_Implicit_Public_Static_SurfaceIndex_SurfaceTypeElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceTypeElement>.NativeClassPtr, 100664763);
		SurfaceTypeElement.NativeMethodInfoPtr_op_Implicit_Public_Static_SurfaceTypeElement_SurfaceIndex_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceTypeElement>.NativeClassPtr, 100664764);
	}

	public unsafe static implicit operator SurfaceIndex(SurfaceTypeElement e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceTypeElement.NativeMethodInfoPtr_op_Implicit_Public_Static_SurfaceIndex_SurfaceTypeElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator SurfaceTypeElement(SurfaceIndex e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceTypeElement.NativeMethodInfoPtr_op_Implicit_Public_Static_SurfaceTypeElement_SurfaceIndex_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SurfaceTypeElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SurfaceIndex;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_SurfaceIndex_SurfaceTypeElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_SurfaceTypeElement_SurfaceIndex_0;

	public SurfaceIndex SurfaceIndex;
}
```
