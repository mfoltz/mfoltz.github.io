# PlacementOperationRequest

```csharp
[StructLayout(2)]
public struct PlacementOperationRequest
{
	static PlacementOperationRequest()
	{
		Il2CppClassPointerStore<PlacementOperationRequest>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.Placement", "PlacementOperationRequest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlacementOperationRequest>.NativeClassPtr);
		PlacementOperationRequest.NativeFieldInfoPtr_PlacementOperation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlacementOperationRequest>.NativeClassPtr, "PlacementOperation");
		PlacementOperationRequest.NativeFieldInfoPtr_CallerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlacementOperationRequest>.NativeClassPtr, "CallerEntity");
		PlacementOperationRequest.NativeFieldInfoPtr_FunctionHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlacementOperationRequest>.NativeClassPtr, "FunctionHash");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlacementOperationRequest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PlacementOperation;
	private static readonly IntPtr NativeFieldInfoPtr_CallerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_FunctionHash;
	[FieldOffset(0)]
	public GetPlacementResult.Operation PlacementOperation;
	[FieldOffset(64)]
	public Entity CallerEntity;
	[FieldOffset(72)]
	public int FunctionHash;
}
