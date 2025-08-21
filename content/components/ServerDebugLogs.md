---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ServerDebugLogs
{
	static ServerDebugLogs()
	{
		Il2CppClassPointerStore<ServerDebugLogs>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServerDebugLogs");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerDebugLogs>.NativeClassPtr);
		ServerDebugLogs.NativeFieldInfoPtr_LogCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugLogs>.NativeClassPtr, "LogCount");
		ServerDebugLogs.NativeFieldInfoPtr_WarningCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugLogs>.NativeClassPtr, "WarningCount");
		ServerDebugLogs.NativeFieldInfoPtr_ErrorCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugLogs>.NativeClassPtr, "ErrorCount");
		ServerDebugLogs.NativeFieldInfoPtr_ExceptionCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugLogs>.NativeClassPtr, "ExceptionCount");
		ServerDebugLogs.NativeMethodInfoPtr_Initialize_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerDebugLogs>.NativeClassPtr, 100673128);
	}

	public unsafe void Initialize()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerDebugLogs.NativeMethodInfoPtr_Initialize_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServerDebugLogs>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LogCount;
	private static readonly IntPtr NativeFieldInfoPtr_WarningCount;
	private static readonly IntPtr NativeFieldInfoPtr_ErrorCount;
	private static readonly IntPtr NativeFieldInfoPtr_ExceptionCount;
	private static readonly IntPtr NativeMethodInfoPtr_Initialize_Public_Void_0;

	public int LogCount;

	public int WarningCount;

	public int ErrorCount;

	public int ExceptionCount;
}
```

## Server Systems

- [UpdateServerDebugLogsSystem]({{% relref "systems/server/UpdateServerDebugLogsSystem.md" %}})

## Client Systems

- [DebugLogsViewSystem]({{% relref "systems/client/DebugLogsViewSystem.md" %}})
