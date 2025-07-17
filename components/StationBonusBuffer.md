---
nav_exclude: true
search_exclude: true
---

# StationBonusBuffer

```csharp
public struct StationBonusBuffer
{
	static StationBonusBuffer()
	{
		Il2CppClassPointerStore<StationBonusBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StationBonusBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StationBonusBuffer>.NativeClassPtr);
		StationBonusBuffer.NativeFieldInfoPtr_StationBonusGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StationBonusBuffer>.NativeClassPtr, "StationBonusGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StationBonusBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StationBonusGuid;

	public PrefabGUID StationBonusGuid;
}
```
