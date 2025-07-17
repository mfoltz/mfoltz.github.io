---
nav_exclude: true
search_exclude: true
---

# SpawnRandomLifeTime

```csharp
[StructLayout(2)]
public struct SpawnRandomLifeTime
{
	static SpawnRandomLifeTime()
	{
		Il2CppClassPointerStore<SpawnRandomLifeTime>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpawnRandomLifeTime");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnRandomLifeTime>.NativeClassPtr);
		SpawnRandomLifeTime.NativeFieldInfoPtr_MinDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRandomLifeTime>.NativeClassPtr, "MinDuration");
		SpawnRandomLifeTime.NativeFieldInfoPtr_MaxDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRandomLifeTime>.NativeClassPtr, "MaxDuration");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnRandomLifeTime>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinDuration;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDuration;
	[FieldOffset(0)]
	public float MinDuration;
	[FieldOffset(4)]
	public float MaxDuration;
}
