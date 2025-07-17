---
nav_exclude: true
search_exclude: true
---

# BoneChain_Data

```csharp
public struct BoneChain_Data
{
	static BoneChain_Data()
	{
		Il2CppClassPointerStore<BoneChain_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "BoneChain_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BoneChain_Data>.NativeClassPtr);
		BoneChain_Data.NativeFieldInfoPtr_Weight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChain_Data>.NativeClassPtr, "Weight");
		BoneChain_Data.NativeFieldInfoPtr_Gravity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChain_Data>.NativeClassPtr, "Gravity");
		BoneChain_Data.NativeFieldInfoPtr_Spring = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChain_Data>.NativeClassPtr, "Spring");
		BoneChain_Data.NativeFieldInfoPtr_AdjustedLength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChain_Data>.NativeClassPtr, "AdjustedLength");
		BoneChain_Data.NativeFieldInfoPtr_Iterations = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChain_Data>.NativeClassPtr, "Iterations");
		BoneChain_Data.NativeFieldInfoPtr_UseWorldCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChain_Data>.NativeClassPtr, "UseWorldCollision");
		BoneChain_Data.NativeFieldInfoPtr_UseColliders = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChain_Data>.NativeClassPtr, "UseColliders");
		BoneChain_Data.NativeFieldInfoPtr_UseSelfCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChain_Data>.NativeClassPtr, "UseSelfCollision");
		BoneChain_Data.NativeFieldInfoPtr_HasInitialized = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChain_Data>.NativeClassPtr, "HasInitialized");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BoneChain_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Weight;
	private static readonly IntPtr NativeFieldInfoPtr_Gravity;
	private static readonly IntPtr NativeFieldInfoPtr_Spring;
	private static readonly IntPtr NativeFieldInfoPtr_AdjustedLength;
	private static readonly IntPtr NativeFieldInfoPtr_Iterations;
	private static readonly IntPtr NativeFieldInfoPtr_UseWorldCollision;
	private static readonly IntPtr NativeFieldInfoPtr_UseColliders;
	private static readonly IntPtr NativeFieldInfoPtr_UseSelfCollision;
	private static readonly IntPtr NativeFieldInfoPtr_HasInitialized;

	public float Weight;

	public float Gravity;

	public float Spring;

	public float AdjustedLength;

	public int Iterations;

	public bool UseWorldCollision;

	public bool UseColliders;

	public bool UseSelfCollision;

	public bool HasInitialized;
}
```
