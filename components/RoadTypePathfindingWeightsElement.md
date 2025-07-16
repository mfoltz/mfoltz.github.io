# RoadTypePathfindingWeightsElement

```csharp
[StructLayout(2)]
public struct RoadTypePathfindingWeightsElement
{
	static RoadTypePathfindingWeightsElement()
	{
		Il2CppClassPointerStore<RoadTypePathfindingWeightsElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "RoadTypePathfindingWeightsElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RoadTypePathfindingWeightsElement>.NativeClassPtr);
		RoadTypePathfindingWeightsElement.NativeFieldInfoPtr_RoadTypeCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoadTypePathfindingWeightsElement>.NativeClassPtr, "RoadTypeCount");
		RoadTypePathfindingWeightsElement.NativeFieldInfoPtr_WeightFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoadTypePathfindingWeightsElement>.NativeClassPtr, "WeightFactor");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RoadTypePathfindingWeightsElement>.NativeClassPtr, ref this));
	}
	public unsafe static int RoadTypeCount
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(RoadTypePathfindingWeightsElement.NativeFieldInfoPtr_RoadTypeCount, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(RoadTypePathfindingWeightsElement.NativeFieldInfoPtr_RoadTypeCount, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_RoadTypeCount;
	private static readonly IntPtr NativeFieldInfoPtr_WeightFactor;
	[FieldOffset(0)]
	public float WeightFactor;
}
