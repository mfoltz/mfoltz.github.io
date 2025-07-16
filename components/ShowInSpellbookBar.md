# ShowInSpellbookBar

```csharp
[StructLayout(2)]
public struct ShowInSpellbookBar
{
	static ShowInSpellbookBar()
	{
		Il2CppClassPointerStore<ShowInSpellbookBar>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM", "ShowInSpellbookBar");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShowInSpellbookBar>.NativeClassPtr);
		ShowInSpellbookBar.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowInSpellbookBar>.NativeClassPtr, "PrefabGUID");
		ShowInSpellbookBar.NativeFieldInfoPtr_DisplayLifetime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowInSpellbookBar>.NativeClassPtr, "DisplayLifetime");
		ShowInSpellbookBar.NativeFieldInfoPtr_HideLifetimeText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowInSpellbookBar>.NativeClassPtr, "HideLifetimeText");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShowInSpellbookBar>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_DisplayLifetime;
	private static readonly IntPtr NativeFieldInfoPtr_HideLifetimeText;
	[FieldOffset(0)]
	public PrefabGUID PrefabGUID;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool DisplayLifetime;
	[FieldOffset(5)]
	[MarshalAs(4)]
	public bool HideLifetimeText;
}
