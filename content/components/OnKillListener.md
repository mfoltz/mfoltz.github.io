---
nav_exclude: true
search_exclude: true
---

```csharp
public struct OnKillListener
{
	static OnKillListener()
	{
		Il2CppClassPointerStore<OnKillListener>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "OnKillListener");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OnKillListener>.NativeClassPtr);
		OnKillListener.NativeFieldInfoPtr_TargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OnKillListener>.NativeClassPtr, "TargetEntity");
		OnKillListener.NativeFieldInfoPtr_CallerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OnKillListener>.NativeClassPtr, "CallerEntity");
		OnKillListener.NativeFieldInfoPtr_FunctionHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OnKillListener>.NativeClassPtr, "FunctionHash");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OnKillListener>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_CallerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_FunctionHash;

	public Entity TargetEntity;

	public Entity CallerEntity;

	public int FunctionHash;
}
```
