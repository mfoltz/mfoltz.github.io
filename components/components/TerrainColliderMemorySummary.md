---
nav_exclude: true
search_exclude: true
---

# TerrainColliderMemorySummary

```csharp
[StructLayout(2)]
public struct TerrainColliderMemorySummary
{
	static TerrainColliderMemorySummary()
	{
		Il2CppClassPointerStore<TerrainColliderMemorySummary>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Physics", "TerrainColliderMemorySummary");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainColliderMemorySummary>.NativeClassPtr);
		TerrainColliderMemorySummary.NativeFieldInfoPtr_FromAsset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainColliderMemorySummary>.NativeClassPtr, "FromAsset");
		TerrainColliderMemorySummary.NativeFieldInfoPtr_CompoundPartTotalSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainColliderMemorySummary>.NativeClassPtr, "CompoundPartTotalSize");
		TerrainColliderMemorySummary.NativeFieldInfoPtr_TotalColliderBlobsRegistered = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainColliderMemorySummary>.NativeClassPtr, "TotalColliderBlobsRegistered");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainColliderMemorySummary>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromAsset;
	private static readonly IntPtr NativeFieldInfoPtr_CompoundPartTotalSize;
	private static readonly IntPtr NativeFieldInfoPtr_TotalColliderBlobsRegistered;
	[FieldOffset(0)]
	public AssetGuid FromAsset;
	[FieldOffset(16)]
	public int CompoundPartTotalSize;
	[FieldOffset(20)]
	public int TotalColliderBlobsRegistered;
}
