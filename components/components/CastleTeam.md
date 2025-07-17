---
nav_exclude: true
search_exclude: true
---

# CastleTeam

```csharp
[StructLayout(2)]
public struct CastleTeam
{
	static CastleTeam()
	{
		Il2CppClassPointerStore<CastleTeam>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CastleTeam");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleTeam>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleTeam>.NativeClassPtr, ref this));
	}
}
