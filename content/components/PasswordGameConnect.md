---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PasswordGameConnect
{
	static PasswordGameConnect()
	{
		Il2CppClassPointerStore<PasswordGameConnect>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PasswordGameConnect");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PasswordGameConnect>.NativeClassPtr);
		PasswordGameConnect.NativeFieldInfoPtr_ConnectData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PasswordGameConnect>.NativeClassPtr, "ConnectData");
		PasswordGameConnect.NativeFieldInfoPtr_FromServerBrowser = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PasswordGameConnect>.NativeClassPtr, "FromServerBrowser");
		PasswordGameConnect.NativeFieldInfoPtr_GameModeTypeFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PasswordGameConnect>.NativeClassPtr, "GameModeTypeFilter");
		PasswordGameConnect.NativeFieldInfoPtr_ClanSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PasswordGameConnect>.NativeClassPtr, "ClanSize");
		PasswordGameConnect.NativeFieldInfoPtr_HardCore = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PasswordGameConnect>.NativeClassPtr, "HardCore");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PasswordGameConnect>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ConnectData;
	private static readonly IntPtr NativeFieldInfoPtr_FromServerBrowser;
	private static readonly IntPtr NativeFieldInfoPtr_GameModeTypeFilter;
	private static readonly IntPtr NativeFieldInfoPtr_ClanSize;
	private static readonly IntPtr NativeFieldInfoPtr_HardCore;

	public GameConnect ConnectData;

	public bool FromServerBrowser;

	public int GameModeTypeFilter;

	public int ClanSize;

	public int HardCore;
}
```
