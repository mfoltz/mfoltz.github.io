---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CharacterHudProgressBar
{
	static CharacterHudProgressBar()
	{
		Il2CppClassPointerStore<CharacterHudProgressBar>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "CharacterHudProgressBar");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CharacterHudProgressBar>.NativeClassPtr);
		CharacterHudProgressBar.NativeFieldInfoPtr_Progress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHudProgressBar>.NativeClassPtr, "Progress");
		CharacterHudProgressBar.NativeFieldInfoPtr_MaxProgress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHudProgressBar>.NativeClassPtr, "MaxProgress");
		CharacterHudProgressBar.NativeFieldInfoPtr_ProgressBarId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHudProgressBar>.NativeClassPtr, "ProgressBarId");
		CharacterHudProgressBar.NativeFieldInfoPtr_Importance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHudProgressBar>.NativeClassPtr, "Importance");
		CharacterHudProgressBar.NativeMethodInfoPtr_Clear_Internal_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CharacterHudProgressBar>.NativeClassPtr, 100665054);
	}

	public unsafe void Clear()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CharacterHudProgressBar.NativeMethodInfoPtr_Clear_Internal_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CharacterHudProgressBar>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Progress;
	private static readonly IntPtr NativeFieldInfoPtr_MaxProgress;
	private static readonly IntPtr NativeFieldInfoPtr_ProgressBarId;
	private static readonly IntPtr NativeFieldInfoPtr_Importance;
	private static readonly IntPtr NativeMethodInfoPtr_Clear_Internal_Void_0;

	public float Progress;

	public float MaxProgress;

	public int ProgressBarId;

	public int Importance;
}
```

## Client Systems

- [CharacterHudProgressBarSystem]({{% relref "systems/client/CharacterHudProgressBarSystem.md" %}})
