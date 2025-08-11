---
nav_exclude: true
search_exclude: true
---

# CastleBuildingAttachmentActiveBuffsBuffer

```csharp
public struct CastleBuildingAttachmentActiveBuffsBuffer
{
	static CastleBuildingAttachmentActiveBuffsBuffer()
	{
		Il2CppClassPointerStore<CastleBuildingAttachmentActiveBuffsBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleBuildingAttachmentActiveBuffsBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleBuildingAttachmentActiveBuffsBuffer>.NativeClassPtr);
		CastleBuildingAttachmentActiveBuffsBuffer.NativeFieldInfoPtr_ParentEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachmentActiveBuffsBuffer>.NativeClassPtr, "ParentEntity");
		CastleBuildingAttachmentActiveBuffsBuffer.NativeFieldInfoPtr_ChildEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachmentActiveBuffsBuffer>.NativeClassPtr, "ChildEntity");
		CastleBuildingAttachmentActiveBuffsBuffer.NativeFieldInfoPtr_BuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachmentActiveBuffsBuffer>.NativeClassPtr, "BuffEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleBuildingAttachmentActiveBuffsBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ParentEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ChildEntity;
	private static readonly IntPtr NativeFieldInfoPtr_BuffEntity;

	public Entity ParentEntity;

	public Entity ChildEntity;

	public Entity BuffEntity;
}
```
