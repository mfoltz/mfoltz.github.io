---
nav_exclude: true
search_exclude: true
---

# CrowdednessPlayerBufferElement

```csharp
[StructLayout(2)]
public struct CrowdednessPlayerBufferElement
{
	static CrowdednessPlayerBufferElement()
	{
		Il2CppClassPointerStore<CrowdednessPlayerBufferElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CrowdednessPlayerBufferElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CrowdednessPlayerBufferElement>.NativeClassPtr);
		CrowdednessPlayerBufferElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CrowdednessPlayerBufferElement>.NativeClassPtr, "Value");
		CrowdednessPlayerBufferElement.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CrowdednessPlayerBufferElement>.NativeClassPtr, "Time");
		CrowdednessPlayerBufferElement.NativeFieldInfoPtr_UserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CrowdednessPlayerBufferElement>.NativeClassPtr, "UserIndex");
		CrowdednessPlayerBufferElement.NativeFieldInfoPtr_Sources = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CrowdednessPlayerBufferElement>.NativeClassPtr, "Sources");
		CrowdednessPlayerBufferElement.NativeFieldInfoPtr_IsAlly = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CrowdednessPlayerBufferElement>.NativeClassPtr, "IsAlly");
		CrowdednessPlayerBufferElement.NativeMethodInfoPtr_HasSource_Public_Boolean_CrowdednessSource_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CrowdednessPlayerBufferElement>.NativeClassPtr, 100665678);
		CrowdednessPlayerBufferElement.NativeMethodInfoPtr_SetSource_Public_Void_CrowdednessSource_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CrowdednessPlayerBufferElement>.NativeClassPtr, 100665679);
	}
	[CallerCount(0)]
	public unsafe bool HasSource(CrowdednessSource source)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref source;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CrowdednessPlayerBufferElement.NativeMethodInfoPtr_HasSource_Public_Boolean_CrowdednessSource_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe void SetSource(CrowdednessSource source, bool set)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref source;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref set;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CrowdednessPlayerBufferElement.NativeMethodInfoPtr_SetSource_Public_Void_CrowdednessSource_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CrowdednessPlayerBufferElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_UserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Sources;
	private static readonly IntPtr NativeFieldInfoPtr_IsAlly;
	private static readonly IntPtr NativeMethodInfoPtr_HasSource_Public_Boolean_CrowdednessSource_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetSource_Public_Void_CrowdednessSource_Boolean_0;
	[FieldOffset(0)]
	public float Value;
	[FieldOffset(8)]
	public double Time;
	[FieldOffset(16)]
	public int UserIndex;
	[FieldOffset(20)]
	public CrowdednessSource Sources;
	[FieldOffset(21)]
	[MarshalAs(4)]
	public bool IsAlly;
}
