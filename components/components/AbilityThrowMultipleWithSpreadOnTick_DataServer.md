---
nav_exclude: true
search_exclude: true
---

# AbilityThrowMultipleWithSpreadOnTick_DataServer

```csharp
[StructLayout(2)]
public struct AbilityThrowMultipleWithSpreadOnTick_DataServer
{
	static AbilityThrowMultipleWithSpreadOnTick_DataServer()
	{
		Il2CppClassPointerStore<AbilityThrowMultipleWithSpreadOnTick_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "AbilityThrowMultipleWithSpreadOnTick_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityThrowMultipleWithSpreadOnTick_DataServer>.NativeClassPtr);
		AbilityThrowMultipleWithSpreadOnTick_DataServer.NativeFieldInfoPtr_RandomHitRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityThrowMultipleWithSpreadOnTick_DataServer>.NativeClassPtr, "RandomHitRadius");
		AbilityThrowMultipleWithSpreadOnTick_DataServer.NativeFieldInfoPtr_NewThrowEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityThrowMultipleWithSpreadOnTick_DataServer>.NativeClassPtr, "NewThrowEntity");
		AbilityThrowMultipleWithSpreadOnTick_DataServer.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityThrowMultipleWithSpreadOnTick_DataServer>.NativeClassPtr, "Count");
		AbilityThrowMultipleWithSpreadOnTick_DataServer.NativeFieldInfoPtr_UseUnitPositionInsteadOfAimPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityThrowMultipleWithSpreadOnTick_DataServer>.NativeClassPtr, "UseUnitPositionInsteadOfAimPosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityThrowMultipleWithSpreadOnTick_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RandomHitRadius;
	private static readonly IntPtr NativeFieldInfoPtr_NewThrowEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	private static readonly IntPtr NativeFieldInfoPtr_UseUnitPositionInsteadOfAimPosition;
	[FieldOffset(0)]
	public float RandomHitRadius;
	[FieldOffset(4)]
	public PrefabGUID NewThrowEntity;
	[FieldOffset(8)]
	public int Count;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool UseUnitPositionInsteadOfAimPosition;
}
