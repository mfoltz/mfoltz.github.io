---
nav_exclude: true
search_exclude: true
---

# AbilityGroupSlot

```csharp
[StructLayout(2)]
public struct AbilityGroupSlot
{
	static AbilityGroupSlot()
	{
		Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityGroupSlot");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr);
		AbilityGroupSlot.NativeFieldInfoPtr_GroupGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr, "GroupGuid");
		AbilityGroupSlot.NativeFieldInfoPtr_AbilityBar = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr, "AbilityBar");
		AbilityGroupSlot.NativeFieldInfoPtr_StateEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr, "StateEntity");
		AbilityGroupSlot.NativeFieldInfoPtr_PreviousStateEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr, "PreviousStateEntity");
		AbilityGroupSlot.NativeFieldInfoPtr_SlotId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr, "SlotId");
		AbilityGroupSlot.NativeFieldInfoPtr_CopyCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr, "CopyCooldown");
		AbilityGroupSlot.NativeFieldInfoPtr_SpellModsSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr, "SpellModsSource");
		AbilityGroupSlot.NativeFieldInfoPtr_PreviousSpellModsSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr, "PreviousSpellModsSource");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GroupGuid;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityBar;
	private static readonly IntPtr NativeFieldInfoPtr_StateEntity;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousStateEntity;
	private static readonly IntPtr NativeFieldInfoPtr_SlotId;
	private static readonly IntPtr NativeFieldInfoPtr_CopyCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_SpellModsSource;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousSpellModsSource;
	[FieldOffset(0)]
	public ModifiablePrefabGUID GroupGuid;
	[FieldOffset(4)]
	public NetworkedEntity AbilityBar;
	[FieldOffset(16)]
	public NetworkedEntity StateEntity;
	[FieldOffset(28)]
	public NetworkedEntity PreviousStateEntity;
	[FieldOffset(40)]
	public int SlotId;
	[FieldOffset(44)]
	public ModifiableBool CopyCooldown;
	[FieldOffset(48)]
	public ModifiableEntity SpellModsSource;
	[FieldOffset(56)]
	public Entity PreviousSpellModsSource;
	[StructLayout(2)]
	public struct DirtyTag
	{
		static DirtyTag()
		{
			Il2CppClassPointerStore<AbilityGroupSlot.DirtyTag>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr, "DirtyTag");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityGroupSlot.DirtyTag>.NativeClassPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityGroupSlot.DirtyTag>.NativeClassPtr, ref this));
		}
	}
	[StructLayout(2)]
	public struct DirtyTag_CopyCooldown
	{
		static DirtyTag_CopyCooldown()
		{
			Il2CppClassPointerStore<AbilityGroupSlot.DirtyTag_CopyCooldown>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<AbilityGroupSlot>.NativeClassPtr, "DirtyTag_CopyCooldown");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityGroupSlot.DirtyTag_CopyCooldown>.NativeClassPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityGroupSlot.DirtyTag_CopyCooldown>.NativeClassPtr, ref this));
		}
	}
}
