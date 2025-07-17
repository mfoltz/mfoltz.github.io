---
nav_exclude: true
search_exclude: true
---

# SpawnSleepingBuff

```csharp
[StructLayout(2)]
public struct SpawnSleepingBuff
{
	static SpawnSleepingBuff()
	{
		Il2CppClassPointerStore<SpawnSleepingBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SpawnSleepingBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnSleepingBuff>.NativeClassPtr);
		SpawnSleepingBuff.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnSleepingBuff>.NativeClassPtr, "Rotation");
		SpawnSleepingBuff.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnSleepingBuff>.NativeClassPtr, "Position");
		SpawnSleepingBuff.NativeFieldInfoPtr_JustSleeping = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnSleepingBuff>.NativeClassPtr, "JustSleeping");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnSleepingBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_JustSleeping;
	[FieldOffset(0)]
	public quaternion Rotation;
	[FieldOffset(16)]
	public float3 Position;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool JustSleeping;
}
