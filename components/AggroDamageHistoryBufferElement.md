---
nav_exclude: true
search_exclude: false
---

# AggroDamageHistoryBufferElement

```csharp
public struct AggroDamageHistoryBufferElement
{
	static AggroDamageHistoryBufferElement()
	{
		Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AggroDamageHistoryBufferElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr);
		AggroDamageHistoryBufferElement.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr, "Time");
		AggroDamageHistoryBufferElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr, "Value");
		AggroDamageHistoryBufferElement.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr, "Source");
		AggroDamageHistoryBufferElement.NativeFieldInfoPtr_Fake = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr, "Fake");
		AggroDamageHistoryBufferElement.NativeMethodInfoPtr_AddToBuffer_Public_Void_DynamicBuffer_1_AggroDamageHistoryBufferElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr, 100663955);
	}

	public unsafe void AddToBuffer(DynamicBuffer<AggroDamageHistoryBufferElement> buffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref buffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AggroDamageHistoryBufferElement.NativeMethodInfoPtr_AddToBuffer_Public_Void_DynamicBuffer_1_AggroDamageHistoryBufferElement_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_Fake;
	private static readonly IntPtr NativeMethodInfoPtr_AddToBuffer_Public_Void_DynamicBuffer_1_AggroDamageHistoryBufferElement_0;

	public double Time;

	public float Value;

	public Entity Source;

	public bool Fake;
}
```

## Server Systems

- [GetOwnerPrimaryAggroTargetOnSpawnSystem](/systems/server/GetOwnerPrimaryAggroTargetOnSpawnSystem)
