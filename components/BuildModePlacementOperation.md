---
nav_exclude: true
search_exclude: true
---

# BuildModePlacementOperation

```csharp
public struct BuildModePlacementOperation
{
	static BuildModePlacementOperation()
	{
		Il2CppClassPointerStore<BuildModePlacementOperation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "BuildModePlacementOperation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuildModePlacementOperation>.NativeClassPtr);
		BuildModePlacementOperation.NativeFieldInfoPtr_LastPlacementOperation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModePlacementOperation>.NativeClassPtr, "LastPlacementOperation");
		BuildModePlacementOperation.NativeFieldInfoPtr_CurrentPlacementResult = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModePlacementOperation>.NativeClassPtr, "CurrentPlacementResult");
		BuildModePlacementOperation.NativeFieldInfoPtr_CanAfford = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModePlacementOperation>.NativeClassPtr, "CanAfford");
		BuildModePlacementOperation.NativeFieldInfoPtr_HasLineOfSight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModePlacementOperation>.NativeClassPtr, "HasLineOfSight");
		BuildModePlacementOperation.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildModePlacementOperation>.NativeClassPtr, 100681646);
	}

	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildModePlacementOperation.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuildModePlacementOperation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastPlacementOperation;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentPlacementResult;
	private static readonly IntPtr NativeFieldInfoPtr_CanAfford;
	private static readonly IntPtr NativeFieldInfoPtr_HasLineOfSight;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0;

	public GetPlacementResult.Operation LastPlacementOperation;

	public PlacementResult CurrentPlacementResult;

	public bool CanAfford;

	public bool HasLineOfSight;
}
```
