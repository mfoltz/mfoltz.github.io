---
nav_exclude: true
search_exclude: true
---

# CharacterHUD

```csharp
public struct CharacterHUD
{
	static CharacterHUD()
	{
		Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CharacterHUD");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr);
		CharacterHUD.NativeFieldInfoPtr_CacheFlag = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, "CacheFlag");
		CharacterHUD.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, "Name");
		CharacterHUD.NativeFieldInfoPtr_PrefabTypeInt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, "PrefabTypeInt");
		CharacterHUD.NativeFieldInfoPtr_BloodPrefabTypeInt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, "BloodPrefabTypeInt");
		CharacterHUD.NativeFieldInfoPtr_Height = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, "Height");
		CharacterHUD.NativeFieldInfoPtr_LocalizedName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, "LocalizedName");
		CharacterHUD.NativeFieldInfoPtr_LocalizedDesc = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, "LocalizedDesc");
		CharacterHUD.NativeFieldInfoPtr_EnemyColorTeamIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, "EnemyColorTeamIndex");
		CharacterHUD.NativeFieldInfoPtr_HoveredTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, "HoveredTime");
		CharacterHUD.NativeFieldInfoPtr_DisableTargetInfoPanel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, "DisableTargetInfoPanel");
		CharacterHUD.NativeMethodInfoPtr_get_PrefabType_Public_get_CharacterHUDEntryType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, 100664095);
		CharacterHUD.NativeMethodInfoPtr_get_BloodPrefabType_Public_get_CharacterHUDEntryType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, 100664096);
	}
	public unsafe CharacterHUDEntryType PrefabType
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CharacterHUD.NativeMethodInfoPtr_get_PrefabType_Public_get_CharacterHUDEntryType_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe CharacterHUDEntryType BloodPrefabType
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CharacterHUD.NativeMethodInfoPtr_get_BloodPrefabType_Public_get_CharacterHUDEntryType_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CharacterHUD>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CacheFlag;
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabTypeInt;
	private static readonly IntPtr NativeFieldInfoPtr_BloodPrefabTypeInt;
	private static readonly IntPtr NativeFieldInfoPtr_Height;
	private static readonly IntPtr NativeFieldInfoPtr_LocalizedName;
	private static readonly IntPtr NativeFieldInfoPtr_LocalizedDesc;
	private static readonly IntPtr NativeFieldInfoPtr_EnemyColorTeamIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HoveredTime;
	private static readonly IntPtr NativeFieldInfoPtr_DisableTargetInfoPanel;
	private static readonly IntPtr NativeMethodInfoPtr_get_PrefabType_Public_get_CharacterHUDEntryType_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_BloodPrefabType_Public_get_CharacterHUDEntryType_0;

	public HUDShowFlag CacheFlag;

	public FixedString64Bytes Name;

	public ModifiableInt PrefabTypeInt;

	public ModifiableInt BloodPrefabTypeInt;

	public ModifiableFloat Height;

	public AssetGuid LocalizedName;

	public AssetGuid LocalizedDesc;

	public int EnemyColorTeamIndex;

	public double HoveredTime;

	public bool DisableTargetInfoPanel;
}
```

## Client Systems

- [ReservedEnemyTeamSystem](/systems/client/ReservedEnemyTeamSystem)
