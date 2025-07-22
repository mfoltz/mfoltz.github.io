---
nav_exclude: true
search_exclude: false
---

# GameplayEventDebuggingData

```csharp
public struct GameplayEventDebuggingData
{
	static GameplayEventDebuggingData()
	{
		Il2CppClassPointerStore<GameplayEventDebuggingData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Debugging", "GameplayEventDebuggingData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GameplayEventDebuggingData>.NativeClassPtr);
		GameplayEventDebuggingData.NativeFieldInfoPtr_Systems = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventDebuggingData>.NativeClassPtr, "Systems");
		GameplayEventDebuggingData.NativeFieldInfoPtr_RecordedFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventDebuggingData>.NativeClassPtr, "RecordedFrame");
		GameplayEventDebuggingData.NativeFieldInfoPtr_IsEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventDebuggingData>.NativeClassPtr, "IsEnabled");
		GameplayEventDebuggingData.NativeMethodInfoPtr_GetGameplayDebugRecorder_Public_GameplayDebugRecorder_SystemHandle_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GameplayEventDebuggingData>.NativeClassPtr, 100669066);
		GameplayEventDebuggingData.NativeMethodInfoPtr_Dispose_Internal_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GameplayEventDebuggingData>.NativeClassPtr, 100669067);
	}

	public unsafe GameplayDebugRecorder GetGameplayDebugRecorder(SystemHandle systemHandle)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref systemHandle;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GameplayEventDebuggingData.NativeMethodInfoPtr_GetGameplayDebugRecorder_Public_GameplayDebugRecorder_SystemHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GameplayEventDebuggingData.NativeMethodInfoPtr_Dispose_Internal_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GameplayEventDebuggingData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Systems;
	private static readonly IntPtr NativeFieldInfoPtr_RecordedFrame;
	private static readonly IntPtr NativeFieldInfoPtr_IsEnabled;
	private static readonly IntPtr NativeMethodInfoPtr_GetGameplayDebugRecorder_Public_GameplayDebugRecorder_SystemHandle_0;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Internal_Void_0;

	public NativeList<SystemHandle> Systems;

	public RecordedFrame RecordedFrame;

	public bool IsEnabled;
}
```
