# Script_BranchOnRandomGameplayEventData

```csharp
[StructLayout(2)]
public struct Script_BranchOnRandomGameplayEventData
{
	static Script_BranchOnRandomGameplayEventData()
	{
		Il2CppClassPointerStore<Script_BranchOnRandomGameplayEventData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_BranchOnRandomGameplayEventData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_BranchOnRandomGameplayEventData>.NativeClassPtr);
		Script_BranchOnRandomGameplayEventData.NativeFieldInfoPtr_Chance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BranchOnRandomGameplayEventData>.NativeClassPtr, "Chance");
		Script_BranchOnRandomGameplayEventData.NativeFieldInfoPtr_ScaleOnBuffStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BranchOnRandomGameplayEventData>.NativeClassPtr, "ScaleOnBuffStacks");
		Script_BranchOnRandomGameplayEventData.NativeFieldInfoPtr_BuffStacksSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BranchOnRandomGameplayEventData>.NativeClassPtr, "BuffStacksSource");
		Script_BranchOnRandomGameplayEventData.NativeFieldInfoPtr_OnTrue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BranchOnRandomGameplayEventData>.NativeClassPtr, "OnTrue");
		Script_BranchOnRandomGameplayEventData.NativeFieldInfoPtr_OnFalse = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BranchOnRandomGameplayEventData>.NativeClassPtr, "OnFalse");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_BranchOnRandomGameplayEventData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Chance;
	private static readonly IntPtr NativeFieldInfoPtr_ScaleOnBuffStacks;
	private static readonly IntPtr NativeFieldInfoPtr_BuffStacksSource;
	private static readonly IntPtr NativeFieldInfoPtr_OnTrue;
	private static readonly IntPtr NativeFieldInfoPtr_OnFalse;
	[FieldOffset(0)]
	public float Chance;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool ScaleOnBuffStacks;
	[FieldOffset(8)]
	public PrefabGUID BuffStacksSource;
	[FieldOffset(12)]
	public GameplayEventId OnTrue;
	[FieldOffset(20)]
	public GameplayEventId OnFalse;
}
