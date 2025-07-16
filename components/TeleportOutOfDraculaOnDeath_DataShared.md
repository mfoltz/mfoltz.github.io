# TeleportOutOfDraculaOnDeath_DataShared

```csharp
[StructLayout(2)]
public struct TeleportOutOfDraculaOnDeath_DataShared
{
	static TeleportOutOfDraculaOnDeath_DataShared()
	{
		Il2CppClassPointerStore<TeleportOutOfDraculaOnDeath_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "TeleportOutOfDraculaOnDeath_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TeleportOutOfDraculaOnDeath_DataShared>.NativeClassPtr);
		TeleportOutOfDraculaOnDeath_DataShared.NativeFieldInfoPtr_TeleportBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportOutOfDraculaOnDeath_DataShared>.NativeClassPtr, "TeleportBuff");
		TeleportOutOfDraculaOnDeath_DataShared.NativeFieldInfoPtr_HitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportOutOfDraculaOnDeath_DataShared>.NativeClassPtr, "HitFilter");
		TeleportOutOfDraculaOnDeath_DataShared.NativeFieldInfoPtr_BoxSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportOutOfDraculaOnDeath_DataShared>.NativeClassPtr, "BoxSize");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TeleportOutOfDraculaOnDeath_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TeleportBuff;
	private static readonly IntPtr NativeFieldInfoPtr_HitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_BoxSize;
	[FieldOffset(0)]
	public PrefabGUID TeleportBuff;
	[FieldOffset(4)]
	public HitFilter HitFilter;
	[FieldOffset(8)]
	public float3 BoxSize;
}
