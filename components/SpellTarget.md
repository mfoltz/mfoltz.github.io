# SpellTarget

```csharp
[StructLayout(2)]
public struct SpellTarget
{
	static SpellTarget()
	{
		Il2CppClassPointerStore<SpellTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpellTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellTarget>.NativeClassPtr);
		SpellTarget.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellTarget>.NativeClassPtr, "Target");
		SpellTarget.NativeFieldInfoPtr_DestroyIfNotInteractable = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellTarget>.NativeClassPtr, "DestroyIfNotInteractable");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyIfNotInteractable;
	[FieldOffset(0)]
	public NetworkedEntity Target;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool DestroyIfNotInteractable;
}
