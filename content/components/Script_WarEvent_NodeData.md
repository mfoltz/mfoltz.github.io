---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_WarEvent_NodeData
{
	static Script_WarEvent_NodeData()
	{
		Il2CppClassPointerStore<Script_WarEvent_NodeData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "Script_WarEvent_NodeData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_WarEvent_NodeData>.NativeClassPtr);
		Script_WarEvent_NodeData.NativeFieldInfoPtr_CurrentGateState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData>.NativeClassPtr, "CurrentGateState");
		Script_WarEvent_NodeData.NativeFieldInfoPtr_DropArc = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData>.NativeClassPtr, "DropArc");
		Script_WarEvent_NodeData.NativeFieldInfoPtr_ResourceDropStackSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData>.NativeClassPtr, "ResourceDropStackSize");
		Script_WarEvent_NodeData.NativeFieldInfoPtr_LifeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData>.NativeClassPtr, "LifeTime");
		Script_WarEvent_NodeData.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData>.NativeClassPtr, "Duration");
		Script_WarEvent_NodeData.NativeFieldInfoPtr_UnitKilledSequencePrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData>.NativeClassPtr, "UnitKilledSequencePrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_WarEvent_NodeData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentGateState;
	private static readonly IntPtr NativeFieldInfoPtr_DropArc;
	private static readonly IntPtr NativeFieldInfoPtr_ResourceDropStackSize;
	private static readonly IntPtr NativeFieldInfoPtr_LifeTime;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_UnitKilledSequencePrefab;

	public Script_WarEvent_NodeData.GateState CurrentGateState;

	public PrefabGUID DropArc;

	public int ResourceDropStackSize;

	public float LifeTime;

	public float Duration;

	public PrefabGUID UnitKilledSequencePrefab;
	public enum GateState
	{
		Inactive,
		Active,
		Destroying,
		Destroying_WithoutLoot
	}
}
```
