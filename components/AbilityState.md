# AbilityState

```csharp
[StructLayout(2)]
public struct AbilityState
{
	static AbilityState()
	{
		Il2CppClassPointerStore<AbilityState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityState>.NativeClassPtr);
		AbilityState.NativeFieldInfoPtr_AbilityId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityState>.NativeClassPtr, "AbilityId");
		AbilityState.NativeFieldInfoPtr_GroupEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityState>.NativeClassPtr, "GroupEntity");
		AbilityState.NativeFieldInfoPtr_AbilityTypeFlag = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityState>.NativeClassPtr, "AbilityTypeFlag");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityId;
	private static readonly IntPtr NativeFieldInfoPtr_GroupEntity;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityTypeFlag;
	[FieldOffset(0)]
	public PrefabGUID AbilityId;
	[FieldOffset(4)]
	public NetworkedEntity GroupEntity;
	[FieldOffset(16)]
	public AbilityTypeFlag AbilityTypeFlag;
}
