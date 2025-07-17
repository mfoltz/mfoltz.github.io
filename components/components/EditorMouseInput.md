---
nav_exclude: true
search_exclude: true
---

# EditorMouseInput

```csharp
[StructLayout(2)]
public struct EditorMouseInput
{
	static EditorMouseInput()
	{
		Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "EditorMouseInput");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr);
		EditorMouseInput.NativeFieldInfoPtr_CameraMouseRay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr, "CameraMouseRay");
		EditorMouseInput.NativeFieldInfoPtr_MousePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr, "MousePosition");
		EditorMouseInput.NativeFieldInfoPtr_LastMousePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr, "LastMousePosition");
		EditorMouseInput.NativeFieldInfoPtr_PressedThisFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr, "PressedThisFrame");
		EditorMouseInput.NativeFieldInfoPtr_ReleasedThisFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr, "ReleasedThisFrame");
		EditorMouseInput.NativeFieldInfoPtr_CurrentPressed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr, "CurrentPressed");
		EditorMouseInput.NativeFieldInfoPtr_MouseWithinSceneView = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr, "MouseWithinSceneView");
		EditorMouseInput.NativeMethodInfoPtr_IsPressed_Public_Boolean_MouseButtons_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr, 100664110);
		EditorMouseInput.NativeMethodInfoPtr_WasPressedThisFrame_Public_Boolean_MouseButtons_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr, 100664111);
		EditorMouseInput.NativeMethodInfoPtr_WasReleasedThisFrame_Public_Boolean_MouseButtons_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr, 100664112);
	}
	[CallerCount(0)]
	public unsafe bool IsPressed(MouseButtons button)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref button;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EditorMouseInput.NativeMethodInfoPtr_IsPressed_Public_Boolean_MouseButtons_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool WasPressedThisFrame(MouseButtons button)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref button;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EditorMouseInput.NativeMethodInfoPtr_WasPressedThisFrame_Public_Boolean_MouseButtons_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool WasReleasedThisFrame(MouseButtons button)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref button;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EditorMouseInput.NativeMethodInfoPtr_WasReleasedThisFrame_Public_Boolean_MouseButtons_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditorMouseInput>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CameraMouseRay;
	private static readonly IntPtr NativeFieldInfoPtr_MousePosition;
	private static readonly IntPtr NativeFieldInfoPtr_LastMousePosition;
	private static readonly IntPtr NativeFieldInfoPtr_PressedThisFrame;
	private static readonly IntPtr NativeFieldInfoPtr_ReleasedThisFrame;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentPressed;
	private static readonly IntPtr NativeFieldInfoPtr_MouseWithinSceneView;
	private static readonly IntPtr NativeMethodInfoPtr_IsPressed_Public_Boolean_MouseButtons_0;
	private static readonly IntPtr NativeMethodInfoPtr_WasPressedThisFrame_Public_Boolean_MouseButtons_0;
	private static readonly IntPtr NativeMethodInfoPtr_WasReleasedThisFrame_Public_Boolean_MouseButtons_0;
	[FieldOffset(0)]
	public Nullable_Unboxed<Ray> CameraMouseRay;
	[FieldOffset(28)]
	public Vector2 MousePosition;
	[FieldOffset(36)]
	public Nullable_Unboxed<Vector2> LastMousePosition;
	[FieldOffset(48)]
	public MouseButtons PressedThisFrame;
	[FieldOffset(52)]
	public MouseButtons ReleasedThisFrame;
	[FieldOffset(56)]
	public MouseButtons CurrentPressed;
	[FieldOffset(60)]
	[MarshalAs(4)]
	public bool MouseWithinSceneView;
}
