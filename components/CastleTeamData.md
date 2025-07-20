---
nav_exclude: true
search_exclude: true
---

# CastleTeamData

```csharp
public struct CastleTeamData
{
	static CastleTeamData()
	{
		Il2CppClassPointerStore<CastleTeamData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CastleTeamData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleTeamData>.NativeClassPtr);
		CastleTeamData.NativeFieldInfoPtr_CastleHeart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTeamData>.NativeClassPtr, "CastleHeart");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleTeamData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastleHeart;

	public Entity CastleHeart;
}
```
