---
nav_exclude: true
search_exclude: true
---

# StatChangeListener

```csharp
public struct StatChangeListener
{
	static StatChangeListener()
	{
		Il2CppClassPointerStore<StatChangeListener>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StatChangeListener");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StatChangeListener>.NativeClassPtr);
		StatChangeListener.NativeFieldInfoPtr_TargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeListener>.NativeClassPtr, "TargetEntity");
		StatChangeListener.NativeFieldInfoPtr_CallerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeListener>.NativeClassPtr, "CallerEntity");
		StatChangeListener.NativeFieldInfoPtr_FunctionHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeListener>.NativeClassPtr, "FunctionHash");
		StatChangeListener.NativeFieldInfoPtr_Location = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeListener>.NativeClassPtr, "Location");
		StatChangeListener.NativeFieldInfoPtr_Outgoing = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeListener>.NativeClassPtr, "Outgoing");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StatChangeListener>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_CallerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_FunctionHash;
	private static readonly IntPtr NativeFieldInfoPtr_Location;
	private static readonly IntPtr NativeFieldInfoPtr_Outgoing;

	public Entity TargetEntity;

	public Entity CallerEntity;

	public int FunctionHash;

	public StatChangeListenerLocation Location;

	public bool Outgoing;
}
```
