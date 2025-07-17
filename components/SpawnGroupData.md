---
nav_exclude: true
search_exclude: true
---

# SpawnGroupData

```csharp
[StructLayout(2)]
public struct SpawnGroupData
{
	static SpawnGroupData()
	{
		Il2CppClassPointerStore<SpawnGroupData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM", "SpawnGroupData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnGroupData>.NativeClassPtr);
		SpawnGroupData.NativeFieldInfoPtr_WeightSum = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnGroupData>.NativeClassPtr, "WeightSum");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnGroupData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WeightSum;
	[FieldOffset(0)]
	public float WeightSum;
}
