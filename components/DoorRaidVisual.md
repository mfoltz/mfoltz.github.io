---
nav_exclude: true
search_exclude: true
---

# DoorRaidVisual

```csharp
[StructLayout(2)]
public struct DoorRaidVisual
{
	static DoorRaidVisual()
	{
		Il2CppClassPointerStore<DoorRaidVisual>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DoorRaidVisual");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DoorRaidVisual>.NativeClassPtr);
		DoorRaidVisual.NativeFieldInfoPtr_DoorOverrideSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DoorRaidVisual>.NativeClassPtr, "DoorOverrideSequence");
		DoorRaidVisual.NativeFieldInfoPtr_SequenceEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DoorRaidVisual>.NativeClassPtr, "SequenceEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DoorRaidVisual>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DoorOverrideSequence;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceEntity;
	[FieldOffset(0)]
	public SequenceGUID DoorOverrideSequence;
	[FieldOffset(4)]
	public Entity SequenceEntity;
}
