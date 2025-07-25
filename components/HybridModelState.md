---
nav_exclude: true
search_exclude: true
---

# HybridModelState

```csharp
public struct HybridModelState
{
	static HybridModelState()
	{
		Il2CppClassPointerStore<HybridModelState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "HybridModelState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModelState>.NativeClassPtr);
		HybridModelState.NativeFieldInfoPtr_Visibility = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelState>.NativeClassPtr, "Visibility");
		HybridModelState.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelState>.NativeClassPtr, "Position");
		HybridModelState.NativeMethodInfoPtr_DefaultState_Public_Static_HybridModelState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridModelState>.NativeClassPtr, 100685825);
	}

	public unsafe static HybridModelState DefaultState()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridModelState.NativeMethodInfoPtr_DefaultState_Public_Static_HybridModelState_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModelState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Visibility;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeMethodInfoPtr_DefaultState_Public_Static_HybridModelState_0;

	public HybridModelState.VisibilityState Visibility;

	public HybridModelState.PositionState Position;

	public struct VisibilityState
	{
		static VisibilityState()
		{
			Il2CppClassPointerStore<HybridModelState.VisibilityState>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<HybridModelState>.NativeClassPtr, "VisibilityState");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModelState.VisibilityState>.NativeClassPtr);
			HybridModelState.VisibilityState.NativeFieldInfoPtr_Initialized = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelState.VisibilityState>.NativeClassPtr, "Initialized");
			HybridModelState.VisibilityState.NativeFieldInfoPtr_Visible = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelState.VisibilityState>.NativeClassPtr, "Visible");
			HybridModelState.VisibilityState.NativeFieldInfoPtr_DoFading = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelState.VisibilityState>.NativeClassPtr, "DoFading");
			HybridModelState.VisibilityState.NativeFieldInfoPtr_Occluded = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelState.VisibilityState>.NativeClassPtr, "Occluded");
			HybridModelState.VisibilityState.NativeFieldInfoPtr_Alpha = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelState.VisibilityState>.NativeClassPtr, "Alpha");
			HybridModelState.VisibilityState.NativeMethodInfoPtr_ShouldShow_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridModelState.VisibilityState>.NativeClassPtr, 100685826);
			HybridModelState.VisibilityState.NativeMethodInfoPtr_IsSameVisibility_Public_Boolean_byref_VisibilityState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridModelState.VisibilityState>.NativeClassPtr, 100685827);
		}

		public unsafe bool ShouldShow()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridModelState.VisibilityState.NativeMethodInfoPtr_ShouldShow_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		public unsafe bool IsSameVisibility([In] ref HybridModelState.VisibilityState newState)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &newState;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridModelState.VisibilityState.NativeMethodInfoPtr_IsSameVisibility_Public_Boolean_byref_VisibilityState_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModelState.VisibilityState>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_Initialized;
		private static readonly IntPtr NativeFieldInfoPtr_Visible;
		private static readonly IntPtr NativeFieldInfoPtr_DoFading;
		private static readonly IntPtr NativeFieldInfoPtr_Occluded;
		private static readonly IntPtr NativeFieldInfoPtr_Alpha;
		private static readonly IntPtr NativeMethodInfoPtr_ShouldShow_Public_Boolean_0;
		private static readonly IntPtr NativeMethodInfoPtr_IsSameVisibility_Public_Boolean_byref_VisibilityState_0;

		public bool Initialized;

		public bool Visible;

		public bool DoFading;

		public bool Occluded;

		public float Alpha;
	}

	public struct PositionState
	{
		static PositionState()
		{
			Il2CppClassPointerStore<HybridModelState.PositionState>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<HybridModelState>.NativeClassPtr, "PositionState");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModelState.PositionState>.NativeClassPtr);
			HybridModelState.PositionState.NativeFieldInfoPtr_LocalToWorld = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelState.PositionState>.NativeClassPtr, "LocalToWorld");
			HybridModelState.PositionState.NativeFieldInfoPtr_PositionWithOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelState.PositionState>.NativeClassPtr, "PositionWithOffset");
			HybridModelState.PositionState.NativeFieldInfoPtr_IsMounted = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelState.PositionState>.NativeClassPtr, "IsMounted");
			HybridModelState.PositionState.NativeFieldInfoPtr_IsRagdollDriven = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelState.PositionState>.NativeClassPtr, "IsRagdollDriven");
			HybridModelState.PositionState.NativeMethodInfoPtr_IsSamePosition_Public_Boolean_byref_PositionState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridModelState.PositionState>.NativeClassPtr, 100685828);
		}

		public unsafe bool IsSamePosition([In] ref HybridModelState.PositionState newState)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &newState;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridModelState.PositionState.NativeMethodInfoPtr_IsSamePosition_Public_Boolean_byref_PositionState_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModelState.PositionState>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_LocalToWorld;
		private static readonly IntPtr NativeFieldInfoPtr_PositionWithOffset;
		private static readonly IntPtr NativeFieldInfoPtr_IsMounted;
		private static readonly IntPtr NativeFieldInfoPtr_IsRagdollDriven;
		private static readonly IntPtr NativeMethodInfoPtr_IsSamePosition_Public_Boolean_byref_PositionState_0;

		public LocalToWorld LocalToWorld;

		public float3 PositionWithOffset;

		public bool IsMounted;

		public bool IsRagdollDriven;
	}
}
```

## Client Systems

- [HybridDynamicClothSystem](/systems/client/HybridDynamicClothSystem)
