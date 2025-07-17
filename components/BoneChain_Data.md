---
nav_exclude: true
search_exclude: true
---

# BoneChain_Data

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public float Weight;
	[FieldOffset(4)]
	public float Gravity;
	[FieldOffset(8)]
	public float Spring;
	[FieldOffset(12)]
	public float AdjustedLength;
	[FieldOffset(16)]
	public int Iterations;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool UseWorldCollision;
	[FieldOffset(21)]
	[MarshalAs(4)]
	public bool UseColliders;
	[FieldOffset(22)]
	[MarshalAs(4)]
	public bool UseSelfCollision;
	[FieldOffset(23)]
	[MarshalAs(4)]
	public bool HasInitialized;
}
