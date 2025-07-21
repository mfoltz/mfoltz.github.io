---
nav_exclude: true
search_exclude: false
---

# TerritoryTile

```csharp
public struct TerritoryTile
{
	static TerritoryTile()
	{
		Il2CppClassPointerStore<TerritoryTile>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.CastleBuilding.Systems.dll", "ProjectM.CastleBuilding", "TerritoryTile");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerritoryTile>.NativeClassPtr);
		TerritoryTile.NativeFieldInfoPtr_MeshEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerritoryTile>.NativeClassPtr, "MeshEntity");
		TerritoryTile.NativeFieldInfoPtr_SideMeshEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerritoryTile>.NativeClassPtr, "SideMeshEntity");
		TerritoryTile.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TerritoryTile_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerritoryTile>.NativeClassPtr, 100664454);
	}

	public unsafe bool Equals(TerritoryTile other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerritoryTile.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TerritoryTile_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerritoryTile>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MeshEntity;
	private static readonly IntPtr NativeFieldInfoPtr_SideMeshEntity;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TerritoryTile_0;

	public Entity MeshEntity;

	public Entity SideMeshEntity;
}
```
