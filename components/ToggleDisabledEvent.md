# ToggleDisabledEvent

```csharp
[StructLayout(2)]
public struct ToggleDisabledEvent
{
	static ToggleDisabledEvent()
	{
		Il2CppClassPointerStore<ToggleDisabledEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ToggleDisabledEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ToggleDisabledEvent>.NativeClassPtr);
		ToggleDisabledEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ToggleDisabledEvent>.NativeClassPtr, "Entity");
		ToggleDisabledEvent.NativeFieldInfoPtr_EntityTags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ToggleDisabledEvent>.NativeClassPtr, "EntityTags");
		ToggleDisabledEvent.NativeFieldInfoPtr_Disable = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ToggleDisabledEvent>.NativeClassPtr, "Disable");
		ToggleDisabledEvent.NativeFieldInfoPtr_WasDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ToggleDisabledEvent>.NativeClassPtr, "WasDisabled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ToggleDisabledEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_EntityTags;
	private static readonly IntPtr NativeFieldInfoPtr_Disable;
	private static readonly IntPtr NativeFieldInfoPtr_WasDisabled;
	[FieldOffset(0)]
	public Entity Entity;
	[FieldOffset(8)]
	public ToggleDisableEntityTags EntityTags;
	[FieldOffset(9)]
	[MarshalAs(4)]
	public bool Disable;
	[FieldOffset(10)]
	[MarshalAs(4)]
	public bool WasDisabled;
}
