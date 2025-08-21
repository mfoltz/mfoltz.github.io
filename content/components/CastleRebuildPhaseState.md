---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastleRebuildPhaseState
{
	static CastleRebuildPhaseState()
	{
		Il2CppClassPointerStore<CastleRebuildPhaseState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleRebuildPhaseState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildPhaseState>.NativeClassPtr);
		CastleRebuildPhaseState.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildPhaseState>.NativeClassPtr, "State");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildPhaseState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_State;

	public PhaseState State;
}
```
