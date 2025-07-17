---
nav_exclude: true
search_exclude: true
---

# GlobalDeathListener

```csharp
[StructLayout(2)]
public struct GlobalDeathListener
{
	static GlobalDeathListener()
	{
		Il2CppClassPointerStore<GlobalDeathListener>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GlobalDeathListener");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GlobalDeathListener>.NativeClassPtr);
		GlobalDeathListener.NativeFieldInfoPtr_CallerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalDeathListener>.NativeClassPtr, "CallerEntity");
		GlobalDeathListener.NativeFieldInfoPtr_FunctionHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalDeathListener>.NativeClassPtr, "FunctionHash");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GlobalDeathListener>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CallerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_FunctionHash;
	[FieldOffset(0)]
	public Entity CallerEntity;
	[FieldOffset(8)]
	public int FunctionHash;
}
