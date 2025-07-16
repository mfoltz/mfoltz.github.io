# EditorKeyboardInput

```csharp
[StructLayout(2)]
public struct EditorKeyboardInput
{
	static EditorKeyboardInput()
	{
		Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "EditorKeyboardInput");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr);
		EditorKeyboardInput.NativeFieldInfoPtr_KeyCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr, "KeyCount");
		EditorKeyboardInput.NativeFieldInfoPtr_AllPressedKeys = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr, "AllPressedKeys");
		EditorKeyboardInput.NativeFieldInfoPtr_AllNewPressedKeys = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr, "AllNewPressedKeys");
		EditorKeyboardInput.NativeFieldInfoPtr_AllNewReleasedKeys = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr, "AllNewReleasedKeys");
		EditorKeyboardInput.NativeMethodInfoPtr_WasPressedThisFrame_Public_Boolean_KeyCode_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr, 100664113);
		EditorKeyboardInput.NativeMethodInfoPtr_WasReleasedThisFrame_Public_Boolean_KeyCode_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr, 100664114);
		EditorKeyboardInput.NativeMethodInfoPtr_IsPressed_Public_Boolean_KeyCode_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr, 100664115);
		EditorKeyboardInput.NativeMethodInfoPtr_AssertKeyCode_Private_Static_Void_KeyCode_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr, 100664116);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2019922, XrefRangeEnd = 2019923, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool WasPressedThisFrame(KeyCode keyCode)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref keyCode;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EditorKeyboardInput.NativeMethodInfoPtr_WasPressedThisFrame_Public_Boolean_KeyCode_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2019923, XrefRangeEnd = 2019924, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool WasReleasedThisFrame(KeyCode keyCode)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref keyCode;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EditorKeyboardInput.NativeMethodInfoPtr_WasReleasedThisFrame_Public_Boolean_KeyCode_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2019924, XrefRangeEnd = 2019925, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsPressed(KeyCode keyCode)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref keyCode;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EditorKeyboardInput.NativeMethodInfoPtr_IsPressed_Public_Boolean_KeyCode_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 2019925, RefRangeEnd = 2019928, XrefRangeStart = 2019925, XrefRangeEnd = 2019925, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void AssertKeyCode(KeyCode keyCode)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref keyCode;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EditorKeyboardInput.NativeMethodInfoPtr_AssertKeyCode_Private_Static_Void_KeyCode_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr, ref this));
	}
	public unsafe static int KeyCount
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(EditorKeyboardInput.NativeFieldInfoPtr_KeyCount, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(EditorKeyboardInput.NativeFieldInfoPtr_KeyCount, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_KeyCount;
	private static readonly IntPtr NativeFieldInfoPtr_AllPressedKeys;
	private static readonly IntPtr NativeFieldInfoPtr_AllNewPressedKeys;
	private static readonly IntPtr NativeFieldInfoPtr_AllNewReleasedKeys;
	private static readonly IntPtr NativeMethodInfoPtr_WasPressedThisFrame_Public_Boolean_KeyCode_0;
	private static readonly IntPtr NativeMethodInfoPtr_WasReleasedThisFrame_Public_Boolean_KeyCode_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsPressed_Public_Boolean_KeyCode_0;
	private static readonly IntPtr NativeMethodInfoPtr_AssertKeyCode_Private_Static_Void_KeyCode_0;
	[FieldOffset(0)]
	public EditorKeyboardInput._AllPressedKeys_e__FixedBuffer AllPressedKeys;
	[FieldOffset(510)]
	public EditorKeyboardInput._AllNewPressedKeys_e__FixedBuffer AllNewPressedKeys;
	[FieldOffset(1020)]
	public EditorKeyboardInput._AllNewReleasedKeys_e__FixedBuffer AllNewReleasedKeys;
	[ObfuscatedName("ProjectM.Terrain.EditorKeyboardInput+<AllNewPressedKeys>e__FixedBuffer")]
	[StructLayout(2)]
	public struct _AllNewPressedKeys_e__FixedBuffer
	{
		static _AllNewPressedKeys_e__FixedBuffer()
		{
			Il2CppClassPointerStore<EditorKeyboardInput._AllNewPressedKeys_e__FixedBuffer>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr, "<AllNewPressedKeys>e__FixedBuffer");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditorKeyboardInput._AllNewPressedKeys_e__FixedBuffer>.NativeClassPtr);
			EditorKeyboardInput._AllNewPressedKeys_e__FixedBuffer.NativeFieldInfoPtr_FixedElementField = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorKeyboardInput._AllNewPressedKeys_e__FixedBuffer>.NativeClassPtr, "FixedElementField");
		}
		public Il2CppSystem.Object BoxIl2CppObject()
		{
			return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditorKeyboardInput._AllNewPressedKeys_e__FixedBuffer>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_FixedElementField;
		[FieldOffset(0)]
		[MarshalAs(4)]
		public bool FixedElementField;
	}
	[ObfuscatedName("ProjectM.Terrain.EditorKeyboardInput+<AllNewReleasedKeys>e__FixedBuffer")]
	[StructLayout(2)]
	public struct _AllNewReleasedKeys_e__FixedBuffer
	{
		static _AllNewReleasedKeys_e__FixedBuffer()
		{
			Il2CppClassPointerStore<EditorKeyboardInput._AllNewReleasedKeys_e__FixedBuffer>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr, "<AllNewReleasedKeys>e__FixedBuffer");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditorKeyboardInput._AllNewReleasedKeys_e__FixedBuffer>.NativeClassPtr);
			EditorKeyboardInput._AllNewReleasedKeys_e__FixedBuffer.NativeFieldInfoPtr_FixedElementField = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorKeyboardInput._AllNewReleasedKeys_e__FixedBuffer>.NativeClassPtr, "FixedElementField");
		}
		public Il2CppSystem.Object BoxIl2CppObject()
		{
			return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditorKeyboardInput._AllNewReleasedKeys_e__FixedBuffer>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_FixedElementField;
		[FieldOffset(0)]
		[MarshalAs(4)]
		public bool FixedElementField;
	}
	[ObfuscatedName("ProjectM.Terrain.EditorKeyboardInput+<AllPressedKeys>e__FixedBuffer")]
	[StructLayout(2)]
	public struct _AllPressedKeys_e__FixedBuffer
	{
		static _AllPressedKeys_e__FixedBuffer()
		{
			Il2CppClassPointerStore<EditorKeyboardInput._AllPressedKeys_e__FixedBuffer>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<EditorKeyboardInput>.NativeClassPtr, "<AllPressedKeys>e__FixedBuffer");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditorKeyboardInput._AllPressedKeys_e__FixedBuffer>.NativeClassPtr);
			EditorKeyboardInput._AllPressedKeys_e__FixedBuffer.NativeFieldInfoPtr_FixedElementField = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorKeyboardInput._AllPressedKeys_e__FixedBuffer>.NativeClassPtr, "FixedElementField");
		}
		public Il2CppSystem.Object BoxIl2CppObject()
		{
			return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditorKeyboardInput._AllPressedKeys_e__FixedBuffer>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_FixedElementField;
		[FieldOffset(0)]
		[MarshalAs(4)]
		public bool FixedElementField;
	}
}
