---
nav_exclude: true
search_exclude: true
---

# OnDeathListener

```csharp
[StructLayout(2)]
public struct OnDeathListener
{
	static OnDeathListener()
	{
		Il2CppClassPointerStore<OnDeathListener>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "OnDeathListener");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OnDeathListener>.NativeClassPtr);
		OnDeathListener.NativeFieldInfoPtr_TargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OnDeathListener>.NativeClassPtr, "TargetEntity");
		OnDeathListener.NativeFieldInfoPtr_CallerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OnDeathListener>.NativeClassPtr, "CallerEntity");
		OnDeathListener.NativeFieldInfoPtr_FunctionHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OnDeathListener>.NativeClassPtr, "FunctionHash");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OnDeathListener>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_CallerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_FunctionHash;
	[FieldOffset(0)]
	public Entity TargetEntity;
	[FieldOffset(8)]
	public Entity CallerEntity;
	[FieldOffset(16)]
	public int FunctionHash;
}
