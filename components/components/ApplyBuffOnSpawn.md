---
nav_exclude: true
search_exclude: true
---

# ApplyBuffOnSpawn

```csharp
[StructLayout(2)]
public struct ApplyBuffOnSpawn
{
	static ApplyBuffOnSpawn()
	{
		Il2CppClassPointerStore<ApplyBuffOnSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ApplyBuffOnSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ApplyBuffOnSpawn>.NativeClassPtr);
		ApplyBuffOnSpawn.NativeFieldInfoPtr_Kind = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnSpawn>.NativeClassPtr, "Kind");
		ApplyBuffOnSpawn.NativeFieldInfoPtr_SpawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnSpawn>.NativeClassPtr, "SpawnTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ApplyBuffOnSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Kind;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTime;
	[FieldOffset(0)]
	public SpawnBuffKind Kind;
	[FieldOffset(8)]
	public double SpawnTime;
}
