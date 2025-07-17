---
nav_exclude: true
search_exclude: true
---

# SpawnStructure_WeakenState_DataShared

```csharp
[StructLayout(2)]
public struct SpawnStructure_WeakenState_DataShared
{
	static SpawnStructure_WeakenState_DataShared()
	{
		Il2CppClassPointerStore<SpawnStructure_WeakenState_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "SpawnStructure_WeakenState_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnStructure_WeakenState_DataShared>.NativeClassPtr);
		SpawnStructure_WeakenState_DataShared.NativeFieldInfoPtr_OnDamageTakenListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnStructure_WeakenState_DataShared>.NativeClassPtr, "OnDamageTakenListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnStructure_WeakenState_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageTakenListener;
	[FieldOffset(0)]
	public ListenerId OnDamageTakenListener;
}
