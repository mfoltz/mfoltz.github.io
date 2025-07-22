---
nav_exclude: true
search_exclude: false
---

# Destroy_Debug

```csharp
public struct Destroy_Debug
{
	static Destroy_Debug()
	{
		Il2CppClassPointerStore<Destroy_Debug>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Destroy_Debug");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Destroy_Debug>.NativeClassPtr);
		Destroy_Debug.NativeFieldInfoPtr_CallerLineNumber = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Destroy_Debug>.NativeClassPtr, "CallerLineNumber");
		Destroy_Debug.NativeFieldInfoPtr_CallerFilePath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Destroy_Debug>.NativeClassPtr, "CallerFilePath");
		Destroy_Debug.NativeFieldInfoPtr_CallerMethodName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Destroy_Debug>.NativeClassPtr, "CallerMethodName");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Destroy_Debug>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CallerLineNumber;
	private static readonly IntPtr NativeFieldInfoPtr_CallerFilePath;
	private static readonly IntPtr NativeFieldInfoPtr_CallerMethodName;

	public int CallerLineNumber;

	public FixedString512Bytes CallerFilePath;

	public FixedString512Bytes CallerMethodName;
}
```
