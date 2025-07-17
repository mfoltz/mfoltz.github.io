---
nav_exclude: true
search_exclude: true
---

# SpawnThrowFromBuff_DataServer

```csharp
[StructLayout(2)]
public struct SpawnThrowFromBuff_DataServer
{
	static SpawnThrowFromBuff_DataServer()
	{
		Il2CppClassPointerStore<SpawnThrowFromBuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "SpawnThrowFromBuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnThrowFromBuff_DataServer>.NativeClassPtr);
		SpawnThrowFromBuff_DataServer.NativeFieldInfoPtr_OffsetAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnThrowFromBuff_DataServer>.NativeClassPtr, "OffsetAngle");
		SpawnThrowFromBuff_DataServer.NativeFieldInfoPtr_RandomAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnThrowFromBuff_DataServer>.NativeClassPtr, "RandomAngle");
		SpawnThrowFromBuff_DataServer.NativeFieldInfoPtr_NewThrowEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnThrowFromBuff_DataServer>.NativeClassPtr, "NewThrowEntity");
		SpawnThrowFromBuff_DataServer.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnThrowFromBuff_DataServer>.NativeClassPtr, "Count");
		SpawnThrowFromBuff_DataServer.NativeFieldInfoPtr_IndividualRandom = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnThrowFromBuff_DataServer>.NativeClassPtr, "IndividualRandom");
		SpawnThrowFromBuff_DataServer.NativeFieldInfoPtr_AlwaysMaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnThrowFromBuff_DataServer>.NativeClassPtr, "AlwaysMaxRange");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnThrowFromBuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OffsetAngle;
	private static readonly IntPtr NativeFieldInfoPtr_RandomAngle;
	private static readonly IntPtr NativeFieldInfoPtr_NewThrowEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	private static readonly IntPtr NativeFieldInfoPtr_IndividualRandom;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysMaxRange;
	[FieldOffset(0)]
	public float OffsetAngle;
	[FieldOffset(4)]
	public float RandomAngle;
	[FieldOffset(8)]
	public PrefabGUID NewThrowEntity;
	[FieldOffset(12)]
	public int Count;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool IndividualRandom;
	[FieldOffset(17)]
	[MarshalAs(4)]
	public bool AlwaysMaxRange;
}
