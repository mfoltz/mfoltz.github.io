---
nav_exclude: true
search_exclude: true
---

# AchievementInProgressElement

```csharp
public struct AchievementInProgressElement
{
	static AchievementInProgressElement()
	{
		Il2CppClassPointerStore<AchievementInProgressElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AchievementInProgressElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AchievementInProgressElement>.NativeClassPtr);
		AchievementInProgressElement.NativeFieldInfoPtr_AchievementPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementInProgressElement>.NativeClassPtr, "AchievementPrefabGuid");
		AchievementInProgressElement.NativeFieldInfoPtr_CompletedAmount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementInProgressElement>.NativeClassPtr, "CompletedAmount");
		AchievementInProgressElement.NativeMethodInfoPtr_get_IsInProgress_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AchievementInProgressElement>.NativeClassPtr, 100666889);
		AchievementInProgressElement.NativeMethodInfoPtr_get_IsNotInProgress_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AchievementInProgressElement>.NativeClassPtr, 100666890);
	}
	public unsafe bool IsInProgress
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AchievementInProgressElement.NativeMethodInfoPtr_get_IsInProgress_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool IsNotInProgress
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AchievementInProgressElement.NativeMethodInfoPtr_get_IsNotInProgress_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AchievementInProgressElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AchievementPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_CompletedAmount;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsInProgress_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsNotInProgress_Public_get_Boolean_0;

	public PrefabGUID AchievementPrefabGuid;

	public int CompletedAmount;
}
```
