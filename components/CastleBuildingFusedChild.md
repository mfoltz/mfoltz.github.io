# CastleBuildingFusedChild

```csharp
[StructLayout(2)]
public struct CastleBuildingFusedChild
{
	static CastleBuildingFusedChild()
	{
		Il2CppClassPointerStore<CastleBuildingFusedChild>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleBuildingFusedChild");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleBuildingFusedChild>.NativeClassPtr);
		CastleBuildingFusedChild.NativeFieldInfoPtr_ParentEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingFusedChild>.NativeClassPtr, "ParentEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleBuildingFusedChild>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ParentEntity;
	[FieldOffset(0)]
	public NetworkedEntity ParentEntity;
}
