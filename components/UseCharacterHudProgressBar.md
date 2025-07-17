---
nav_exclude: true
search_exclude: true
---

# UseCharacterHudProgressBar

```csharp
[StructLayout(2)]
public struct UseCharacterHudProgressBar
{
	static UseCharacterHudProgressBar()
	{
		Il2CppClassPointerStore<UseCharacterHudProgressBar>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "UseCharacterHudProgressBar");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UseCharacterHudProgressBar>.NativeClassPtr);
		UseCharacterHudProgressBar.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseCharacterHudProgressBar>.NativeClassPtr, "Target");
		UseCharacterHudProgressBar.NativeFieldInfoPtr_BuffOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseCharacterHudProgressBar>.NativeClassPtr, "BuffOwner");
		UseCharacterHudProgressBar.NativeFieldInfoPtr_GuidHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseCharacterHudProgressBar>.NativeClassPtr, "GuidHash");
		UseCharacterHudProgressBar.NativeFieldInfoPtr_Importance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseCharacterHudProgressBar>.NativeClassPtr, "Importance");
		UseCharacterHudProgressBar.NativeFieldInfoPtr_Progress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseCharacterHudProgressBar>.NativeClassPtr, "Progress");
		UseCharacterHudProgressBar.NativeFieldInfoPtr_MaxProgress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseCharacterHudProgressBar>.NativeClassPtr, "MaxProgress");
		UseCharacterHudProgressBar.NativeFieldInfoPtr_ShowFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseCharacterHudProgressBar>.NativeClassPtr, "ShowFilter");
		UseCharacterHudProgressBar.NativeFieldInfoPtr_ShowOn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseCharacterHudProgressBar>.NativeClassPtr, "ShowOn");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UseCharacterHudProgressBar>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_BuffOwner;
	private static readonly IntPtr NativeFieldInfoPtr_GuidHash;
	private static readonly IntPtr NativeFieldInfoPtr_Importance;
	private static readonly IntPtr NativeFieldInfoPtr_Progress;
	private static readonly IntPtr NativeFieldInfoPtr_MaxProgress;
	private static readonly IntPtr NativeFieldInfoPtr_ShowFilter;
	private static readonly IntPtr NativeFieldInfoPtr_ShowOn;
	[FieldOffset(0)]
	public Entity Target;
	[FieldOffset(8)]
	public Entity BuffOwner;
	[FieldOffset(16)]
	public int GuidHash;
	[FieldOffset(20)]
	public int Importance;
	[FieldOffset(24)]
	public float Progress;
	[FieldOffset(28)]
	public float MaxProgress;
	[FieldOffset(32)]
	public HudShowFilter ShowFilter;
	[FieldOffset(36)]
	public HudShowOn ShowOn;
}
