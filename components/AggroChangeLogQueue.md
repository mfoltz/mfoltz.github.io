---
nav_exclude: true
search_exclude: true
---

# AggroChangeLogQueue

```csharp
[StructLayout(2)]
public struct AggroChangeLogQueue
{
	static AggroChangeLogQueue()
	{
		Il2CppClassPointerStore<AggroChangeLogQueue>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM", "AggroChangeLogQueue");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AggroChangeLogQueue>.NativeClassPtr);
		AggroChangeLogQueue.NativeFieldInfoPtr_ChangeLog = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroChangeLogQueue>.NativeClassPtr, "ChangeLog");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AggroChangeLogQueue>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChangeLog;
	[FieldOffset(0)]
	public NativeQueue<AggroChangeLog.Change> ChangeLog;
}
