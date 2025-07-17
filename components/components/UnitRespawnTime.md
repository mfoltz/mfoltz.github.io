---
nav_exclude: true
search_exclude: true
---

# UnitRespawnTime

```csharp
[StructLayout(2)]
public struct UnitRespawnTime
{
	static UnitRespawnTime()
	{
		Il2CppClassPointerStore<UnitRespawnTime>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnitRespawnTime");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitRespawnTime>.NativeClassPtr);
		UnitRespawnTime.NativeFieldInfoPtr_MaxRespawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitRespawnTime>.NativeClassPtr, "MaxRespawnTime");
		UnitRespawnTime.NativeFieldInfoPtr_MinRespawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitRespawnTime>.NativeClassPtr, "MinRespawnTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitRespawnTime>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxRespawnTime;
	private static readonly IntPtr NativeFieldInfoPtr_MinRespawnTime;
	[FieldOffset(0)]
	public float MaxRespawnTime;
	[FieldOffset(4)]
	public float MinRespawnTime;
}
