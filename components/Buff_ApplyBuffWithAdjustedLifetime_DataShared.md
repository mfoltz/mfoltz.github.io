# Buff_ApplyBuffWithAdjustedLifetime_DataShared

```csharp
[StructLayout(2)]
public struct Buff_ApplyBuffWithAdjustedLifetime_DataShared
{
	static Buff_ApplyBuffWithAdjustedLifetime_DataShared()
	{
		Il2CppClassPointerStore<Buff_ApplyBuffWithAdjustedLifetime_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Buff_ApplyBuffWithAdjustedLifetime_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff_ApplyBuffWithAdjustedLifetime_DataShared>.NativeClassPtr);
		Buff_ApplyBuffWithAdjustedLifetime_DataShared.NativeFieldInfoPtr_DurationPerLifetimeOfParent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffWithAdjustedLifetime_DataShared>.NativeClassPtr, "DurationPerLifetimeOfParent");
		Buff_ApplyBuffWithAdjustedLifetime_DataShared.NativeFieldInfoPtr_DurationMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffWithAdjustedLifetime_DataShared>.NativeClassPtr, "DurationMin");
		Buff_ApplyBuffWithAdjustedLifetime_DataShared.NativeFieldInfoPtr_MaxLifeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffWithAdjustedLifetime_DataShared>.NativeClassPtr, "MaxLifeTime");
		Buff_ApplyBuffWithAdjustedLifetime_DataShared.NativeFieldInfoPtr_BuffType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffWithAdjustedLifetime_DataShared>.NativeClassPtr, "BuffType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff_ApplyBuffWithAdjustedLifetime_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DurationPerLifetimeOfParent;
	private static readonly IntPtr NativeFieldInfoPtr_DurationMin;
	private static readonly IntPtr NativeFieldInfoPtr_MaxLifeTime;
	private static readonly IntPtr NativeFieldInfoPtr_BuffType;
	[FieldOffset(0)]
	public float DurationPerLifetimeOfParent;
	[FieldOffset(4)]
	public float DurationMin;
	[FieldOffset(8)]
	public float MaxLifeTime;
	[FieldOffset(12)]
	public PrefabGUID BuffType;
}
