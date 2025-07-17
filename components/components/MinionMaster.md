---
nav_exclude: true
search_exclude: true
---

# MinionMaster

```csharp
[StructLayout(2)]
public struct MinionMaster
{
	static MinionMaster()
	{
		Il2CppClassPointerStore<MinionMaster>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MinionMaster");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MinionMaster>.NativeClassPtr);
		MinionMaster.NativeFieldInfoPtr_TotalMaxMinions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MinionMaster>.NativeClassPtr, "TotalMaxMinions");
		MinionMaster.NativeFieldInfoPtr_MinionSpawnsThisFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MinionMaster>.NativeClassPtr, "MinionSpawnsThisFrame");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MinionMaster>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TotalMaxMinions;
	private static readonly IntPtr NativeFieldInfoPtr_MinionSpawnsThisFrame;
	[FieldOffset(0)]
	public int TotalMaxMinions;
	[FieldOffset(4)]
	public int MinionSpawnsThisFrame;
}
