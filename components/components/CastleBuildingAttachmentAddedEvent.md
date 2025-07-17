---
nav_exclude: true
search_exclude: true
---

# CastleBuildingAttachmentAddedEvent

```csharp
[StructLayout(2)]
public struct CastleBuildingAttachmentAddedEvent
{
	static CastleBuildingAttachmentAddedEvent()
	{
		Il2CppClassPointerStore<CastleBuildingAttachmentAddedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleBuildingAttachmentAddedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleBuildingAttachmentAddedEvent>.NativeClassPtr);
		CastleBuildingAttachmentAddedEvent.NativeFieldInfoPtr_PlacementTypes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachmentAddedEvent>.NativeClassPtr, "PlacementTypes");
		CastleBuildingAttachmentAddedEvent.NativeFieldInfoPtr_AttachTo = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachmentAddedEvent>.NativeClassPtr, "AttachTo");
		CastleBuildingAttachmentAddedEvent.NativeFieldInfoPtr_ParentEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachmentAddedEvent>.NativeClassPtr, "ParentEntity");
		CastleBuildingAttachmentAddedEvent.NativeFieldInfoPtr_ChildEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachmentAddedEvent>.NativeClassPtr, "ChildEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleBuildingAttachmentAddedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PlacementTypes;
	private static readonly IntPtr NativeFieldInfoPtr_AttachTo;
	private static readonly IntPtr NativeFieldInfoPtr_ParentEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ChildEntity;
	[FieldOffset(0)]
	public PlacementTypeData PlacementTypes;
	[FieldOffset(56)]
	public PlacementTypeData AttachTo;
	[FieldOffset(112)]
	public Entity ParentEntity;
	[FieldOffset(120)]
	public Entity ChildEntity;
}
