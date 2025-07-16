# CombatMusicListener_Shared

```csharp
[StructLayout(2)]
public struct CombatMusicListener_Shared
{
	static CombatMusicListener_Shared()
	{
		Il2CppClassPointerStore<CombatMusicListener_Shared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CombatMusicListener_Shared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CombatMusicListener_Shared>.NativeClassPtr);
		CombatMusicListener_Shared.NativeFieldInfoPtr_UnitPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CombatMusicListener_Shared>.NativeClassPtr, "UnitPrefabGuid");
		CombatMusicListener_Shared.NativeFieldInfoPtr_PlayOutro = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CombatMusicListener_Shared>.NativeClassPtr, "PlayOutro");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CombatMusicListener_Shared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnitPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_PlayOutro;
	[FieldOffset(0)]
	public PrefabGUID UnitPrefabGuid;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool PlayOutro;
}
