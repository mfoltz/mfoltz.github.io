---
nav_exclude: true
search_exclude: true
---

# Interactable

```csharp
[StructLayout(2)]
public struct Interactable
{
	static Interactable()
	{
		Il2CppClassPointerStore<Interactable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Interactable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Interactable>.NativeClassPtr);
		Interactable.NativeFieldInfoPtr_CurrentTargetSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactable>.NativeClassPtr, "CurrentTargetSequenceGuid");
		Interactable.NativeFieldInfoPtr_IgnoreLineOfSight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactable>.NativeClassPtr, "IgnoreLineOfSight");
		Interactable.NativeFieldInfoPtr_IgnoreBlockInteract = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactable>.NativeClassPtr, "IgnoreBlockInteract");
		Interactable.NativeFieldInfoPtr_UseInteractAbilityName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactable>.NativeClassPtr, "UseInteractAbilityName");
		Interactable.NativeFieldInfoPtr_Disabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactable>.NativeClassPtr, "Disabled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Interactable>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentTargetSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreLineOfSight;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreBlockInteract;
	private static readonly IntPtr NativeFieldInfoPtr_UseInteractAbilityName;
	private static readonly IntPtr NativeFieldInfoPtr_Disabled;
	[FieldOffset(0)]
	public SequenceGUID CurrentTargetSequenceGuid;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool IgnoreLineOfSight;
	[FieldOffset(5)]
	[MarshalAs(4)]
	public bool IgnoreBlockInteract;
	[FieldOffset(6)]
	[MarshalAs(4)]
	public bool UseInteractAbilityName;
	[FieldOffset(7)]
	[MarshalAs(4)]
	public bool Disabled;
}
