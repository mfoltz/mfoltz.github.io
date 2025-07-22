---
nav_exclude: true
search_exclude: false
---

# AssetSwapColliderBuffer

```csharp
public struct AssetSwapColliderBuffer
{
	static AssetSwapColliderBuffer()
	{
		Il2CppClassPointerStore<AssetSwapColliderBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.AssetSwapping", "AssetSwapColliderBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AssetSwapColliderBuffer>.NativeClassPtr);
		AssetSwapColliderBuffer.NativeFieldInfoPtr_AssetSwapConfig = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AssetSwapColliderBuffer>.NativeClassPtr, "AssetSwapConfig");
		AssetSwapColliderBuffer.NativeFieldInfoPtr_ColliderEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AssetSwapColliderBuffer>.NativeClassPtr, "ColliderEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AssetSwapColliderBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AssetSwapConfig;
	private static readonly IntPtr NativeFieldInfoPtr_ColliderEntity;

	public BlobAssetReference<AssetSwapConfig> AssetSwapConfig;

	public Entity ColliderEntity;
}
```
