---
nav_exclude: true
search_exclude: true
---

# BoneChainSegment_Data

```csharp
public struct BoneChainSegment_Data
{
	static BoneChainSegment_Data()
	{
		Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "BoneChainSegment_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr);
		BoneChainSegment_Data.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "Position");
		BoneChainSegment_Data.NativeFieldInfoPtr_OldPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "OldPosition");
		BoneChainSegment_Data.NativeFieldInfoPtr_OldDT = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "OldDT");
		BoneChainSegment_Data.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "Radius");
		BoneChainSegment_Data.NativeFieldInfoPtr_DistanceToParent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "DistanceToParent");
		BoneChainSegment_Data.NativeFieldInfoPtr_Damping = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "Damping");
		BoneChainSegment_Data.NativeFieldInfoPtr_Mass = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "Mass");
		BoneChainSegment_Data.NativeFieldInfoPtr_Restore = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "Restore");
		BoneChainSegment_Data.NativeFieldInfoPtr_Angle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "Angle");
		BoneChainSegment_Data.NativeFieldInfoPtr_SavedPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "SavedPosition");
		BoneChainSegment_Data.NativeFieldInfoPtr_SavedLocalPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "SavedLocalPosition");
		BoneChainSegment_Data.NativeFieldInfoPtr_SavedLocalRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "SavedLocalRotation");
		BoneChainSegment_Data.NativeFieldInfoPtr_IsEndSegment = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "IsEndSegment");
		BoneChainSegment_Data.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, "State");
		BoneChainSegment_Data.NativeMethodInfoPtr_DistanceConstrain_Public_Void_byref_BoneChainSegment_Data_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, 100685929);
	}

	public unsafe void DistanceConstrain(ref BoneChainSegment_Data neighbour, float distance, float stiffness)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &neighbour;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref distance;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref stiffness;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BoneChainSegment_Data.NativeMethodInfoPtr_DistanceConstrain_Public_Void_byref_BoneChainSegment_Data_Single_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BoneChainSegment_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_OldPosition;
	private static readonly IntPtr NativeFieldInfoPtr_OldDT;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_DistanceToParent;
	private static readonly IntPtr NativeFieldInfoPtr_Damping;
	private static readonly IntPtr NativeFieldInfoPtr_Mass;
	private static readonly IntPtr NativeFieldInfoPtr_Restore;
	private static readonly IntPtr NativeFieldInfoPtr_Angle;
	private static readonly IntPtr NativeFieldInfoPtr_SavedPosition;
	private static readonly IntPtr NativeFieldInfoPtr_SavedLocalPosition;
	private static readonly IntPtr NativeFieldInfoPtr_SavedLocalRotation;
	private static readonly IntPtr NativeFieldInfoPtr_IsEndSegment;
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeMethodInfoPtr_DistanceConstrain_Public_Void_byref_BoneChainSegment_Data_Single_Single_0;

	public float3 Position;

	public float3 OldPosition;

	public float OldDT;

	public float Radius;

	public float DistanceToParent;

	public float Damping;

	public float Mass;

	public float Restore;

	public float Angle;

	public float3 SavedPosition;

	public float3 SavedLocalPosition;

	public Quaternion SavedLocalRotation;

	public bool IsEndSegment;

	public StunclothBoneChainComponent.BoneSegmentState State;
}
```
