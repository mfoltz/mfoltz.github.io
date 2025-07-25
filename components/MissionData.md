---
nav_exclude: true
search_exclude: true
---

# MissionData

```csharp
public struct MissionData
{
	static MissionData()
	{
		Il2CppClassPointerStore<MissionData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MissionData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MissionData>.NativeClassPtr);
		MissionData.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MissionData>.NativeClassPtr, "PrefabGUID");
		MissionData.NativeFieldInfoPtr_MissionDifficulty = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MissionData>.NativeClassPtr, "MissionDifficulty");
		MissionData.NativeFieldInfoPtr_ServantSlots = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MissionData>.NativeClassPtr, "ServantSlots");
		MissionData.NativeFieldInfoPtr_AlwaysUnlocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MissionData>.NativeClassPtr, "AlwaysUnlocked");
		MissionData.NativeMethodInfoPtr__ctor_Public_Void_PrefabGUID_Int32_Int32_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MissionData>.NativeClassPtr, 100665951);
	}

	public unsafe MissionData(PrefabGUID prefabGUID, int missionDifficulty, int servantSlots, bool alwaysUnlocked)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGUID;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref missionDifficulty;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref servantSlots;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref alwaysUnlocked;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MissionData.NativeMethodInfoPtr__ctor_Public_Void_PrefabGUID_Int32_Int32_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MissionData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_MissionDifficulty;
	private static readonly IntPtr NativeFieldInfoPtr_ServantSlots;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysUnlocked;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_PrefabGUID_Int32_Int32_Boolean_0;

	public readonly PrefabGUID PrefabGUID;

	public readonly int MissionDifficulty;

	public readonly int ServantSlots;

	public readonly bool AlwaysUnlocked;
}
```
