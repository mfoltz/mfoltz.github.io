---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DrawGridBuffer
{
	static DrawGridBuffer()
	{
		Il2CppClassPointerStore<DrawGridBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DrawGridBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DrawGridBuffer>.NativeClassPtr);
		DrawGridBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DrawGridBuffer>.NativeClassPtr, "Value");
		DrawGridBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Color32_DrawGridBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DrawGridBuffer>.NativeClassPtr, 100665184);
		DrawGridBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_DrawGridBuffer_Color32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DrawGridBuffer>.NativeClassPtr, 100665185);
	}

	public unsafe static implicit operator Color32(DrawGridBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DrawGridBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Color32_DrawGridBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator DrawGridBuffer(Color32 e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DrawGridBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_DrawGridBuffer_Color32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DrawGridBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Color32_DrawGridBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_DrawGridBuffer_Color32_0;

	public Color32 Value;
}
```

## Client Systems

- [DrawColoredGridSystem]({{% relref "systems/client/DrawColoredGridSystem.md" %}})
