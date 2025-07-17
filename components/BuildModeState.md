---
nav_exclude: true
search_exclude: true
---

# BuildModeState

```csharp
[StructLayout(2)]
public struct BuildModeState
{
	static BuildModeState()
	{
		Il2CppClassPointerStore<BuildModeState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "BuildModeState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr);
		BuildModeState.NativeFieldInfoPtr_WorldPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "WorldPosition");
		BuildModeState.NativeFieldInfoPtr_CursorRay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "CursorRay");
		BuildModeState.NativeFieldInfoPtr_Context = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "Context");
		BuildModeState.NativeFieldInfoPtr_Place = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "Place");
		BuildModeState.NativeFieldInfoPtr_Select = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "Select");
		BuildModeState.NativeFieldInfoPtr_Deselect = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "Deselect");
		BuildModeState.NativeFieldInfoPtr_Dismantle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "Dismantle");
		BuildModeState.NativeFieldInfoPtr_Repair = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "Repair");
		BuildModeState.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "Rotation");
		BuildModeState.NativeFieldInfoPtr_ControllerType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "ControllerType");
		BuildModeState.NativeFieldInfoPtr_AutoSnapToPoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "AutoSnapToPoints");
		BuildModeState.NativeFieldInfoPtr_AutoSnapToGrid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "AutoSnapToGrid");
		BuildModeState.NativeFieldInfoPtr_IsWorldInteractionAllowed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, "IsWorldInteractionAllowed");
		BuildModeState.NativeMethodInfoPtr_get_CanHover_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, 100681658);
		BuildModeState.NativeMethodInfoPtr_get_BuildingFromInventory_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, 100681659);
		BuildModeState.NativeMethodInfoPtr_HandleInput_Public_Void_byref_InputState_byref_Translation_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, 100681660);
		BuildModeState.NativeMethodInfoPtr_HandleInputState_Private_Static_Void_Boolean_byref_BuildActionState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, 100681661);
	}
	public unsafe bool CanHover
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildModeState.NativeMethodInfoPtr_get_CanHover_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool BuildingFromInventory
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildModeState.NativeMethodInfoPtr_get_BuildingFromInventory_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 253060, RefRangeEnd = 253061, XrefRangeStart = 253034, XrefRangeEnd = 253060, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void HandleInput([In] ref InputState inputState, [In] ref Translation cameraTranslation, float3 cursorPosition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &inputState;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &cameraTranslation;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref cursorPosition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildModeState.NativeMethodInfoPtr_HandleInput_Public_Void_byref_InputState_byref_Translation_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe static void HandleInputState(bool inputPressed, ref BuildActionState state)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref inputPressed;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &state;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildModeState.NativeMethodInfoPtr_HandleInputState_Private_Static_Void_Boolean_byref_BuildActionState_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuildModeState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WorldPosition;
	private static readonly IntPtr NativeFieldInfoPtr_CursorRay;
	private static readonly IntPtr NativeFieldInfoPtr_Context;
	private static readonly IntPtr NativeFieldInfoPtr_Place;
	private static readonly IntPtr NativeFieldInfoPtr_Select;
	private static readonly IntPtr NativeFieldInfoPtr_Deselect;
	private static readonly IntPtr NativeFieldInfoPtr_Dismantle;
	private static readonly IntPtr NativeFieldInfoPtr_Repair;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeFieldInfoPtr_ControllerType;
	private static readonly IntPtr NativeFieldInfoPtr_AutoSnapToPoints;
	private static readonly IntPtr NativeFieldInfoPtr_AutoSnapToGrid;
	private static readonly IntPtr NativeFieldInfoPtr_IsWorldInteractionAllowed;
	private static readonly IntPtr NativeMethodInfoPtr_get_CanHover_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_BuildingFromInventory_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_HandleInput_Public_Void_byref_InputState_byref_Translation_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_HandleInputState_Private_Static_Void_Boolean_byref_BuildActionState_0;
	[FieldOffset(0)]
	public float3 WorldPosition;
	[FieldOffset(12)]
	public Ray CursorRay;
	[FieldOffset(36)]
	public BuildModeContext Context;
	[FieldOffset(37)]
	public BuildActionState Place;
	[FieldOffset(38)]
	public BuildActionState Select;
	[FieldOffset(39)]
	public BuildActionState Deselect;
	[FieldOffset(40)]
	public BuildActionState Dismantle;
	[FieldOffset(41)]
	public BuildActionState Repair;
	[FieldOffset(42)]
	public TileRotation Rotation;
	[FieldOffset(43)]
	public ControllerType ControllerType;
	[FieldOffset(44)]
	[MarshalAs(4)]
	public bool AutoSnapToPoints;
	[FieldOffset(45)]
	[MarshalAs(4)]
	public bool AutoSnapToGrid;
	[FieldOffset(46)]
	[MarshalAs(4)]
	public bool IsWorldInteractionAllowed;
}
