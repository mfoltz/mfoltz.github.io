---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Spawn_Debug
{
	static Spawn_Debug()
	{
		Il2CppClassPointerStore<Spawn_Debug>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Spawn_Debug");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Spawn_Debug>.NativeClassPtr);
		Spawn_Debug.NativeFieldInfoPtr_CallerLineNumber = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Spawn_Debug>.NativeClassPtr, "CallerLineNumber");
		Spawn_Debug.NativeFieldInfoPtr_CallerFilePath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Spawn_Debug>.NativeClassPtr, "CallerFilePath");
		Spawn_Debug.NativeFieldInfoPtr_CallerMethodName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Spawn_Debug>.NativeClassPtr, "CallerMethodName");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Spawn_Debug>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CallerLineNumber;
	private static readonly IntPtr NativeFieldInfoPtr_CallerFilePath;
	private static readonly IntPtr NativeFieldInfoPtr_CallerMethodName;

	public int CallerLineNumber;

	public FixedString512Bytes CallerFilePath;

	public FixedString512Bytes CallerMethodName;
}
```
