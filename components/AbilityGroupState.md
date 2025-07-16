# AbilityGroupState

```csharp
[StructLayout(2)]
public struct AbilityGroupState
{
	static AbilityGroupState()
	{
		Il2CppClassPointerStore<AbilityGroupState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityGroupState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityGroupState>.NativeClassPtr);
		AbilityGroupState.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupState>.NativeClassPtr, "Character");
		AbilityGroupState.NativeFieldInfoPtr_GroupId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupState>.NativeClassPtr, "GroupId");
		AbilityGroupState.NativeFieldInfoPtr_SlotIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupState>.NativeClassPtr, "SlotIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityGroupState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Character;
	private static readonly IntPtr NativeFieldInfoPtr_GroupId;
	private static readonly IntPtr NativeFieldInfoPtr_SlotIndex;
	[FieldOffset(0)]
	public NetworkedEntity Character;
	[FieldOffset(12)]
	public PrefabGUID GroupId;
	[FieldOffset(16)]
	public int SlotIndex;
}
