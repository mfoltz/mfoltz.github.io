# InputCommandBufferElement

```csharp
[StructLayout(2)]
public struct InputCommandBufferElement
{
	static InputCommandBufferElement()
	{
		Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "InputCommandBufferElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr);
		InputCommandBufferElement.NativeFieldInfoPtr_MAX_INPUT_COMMANDS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, "MAX_INPUT_COMMANDS");
		InputCommandBufferElement.NativeFieldInfoPtr_MovementInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, "MovementInput");
		InputCommandBufferElement.NativeFieldInfoPtr_RotationInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, "RotationInput");
		InputCommandBufferElement.NativeFieldInfoPtr_RawInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, "RawInput");
		InputCommandBufferElement.NativeFieldInfoPtr_ClientFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, "ClientFrame");
		InputCommandBufferElement.NativeFieldInfoPtr_OriginalClientFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, "OriginalClientFrame");
		InputCommandBufferElement.NativeFieldInfoPtr_ServerFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, "ServerFrame");
		InputCommandBufferElement.NativeFieldInfoPtr_ClientCastStartedCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, "ClientCastStartedCounter");
		InputCommandBufferElement.NativeFieldInfoPtr_EndTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, "EndTime");
		InputCommandBufferElement.NativeFieldInfoPtr_DeltaTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, "DeltaTime");
		InputCommandBufferElement.NativeMethodInfoPtr_get_StartTime_Public_get_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, 100670543);
		InputCommandBufferElement.NativeMethodInfoPtr_SerializeReplay_Public_Static_Void_byref_NetBufferOut_byref_InputCommandBufferElement_byref_Translation_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, 100670544);
		InputCommandBufferElement.NativeMethodInfoPtr_SerializePerCommand_Public_Static_Void_byref_NetBufferOut_byref_InputCommandBufferElement_byref_InputCommandBufferElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, 100670545);
		InputCommandBufferElement.NativeMethodInfoPtr_SerializeOnce_Public_Static_Void_byref_NetBufferOut_byref_InputCommandBufferElement_byref_Translation_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, 100670546);
		InputCommandBufferElement.NativeMethodInfoPtr_DeserializeReplay_Public_Static_Void_byref_NetBufferIn_byref_InputCommandBufferElement_byref_Translation_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, 100670547);
		InputCommandBufferElement.NativeMethodInfoPtr_DeserializePerCommand_Public_Static_Void_byref_NetBufferIn_byref_InputCommandBufferElement_byref_InputCommandBufferElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, 100670548);
		InputCommandBufferElement.NativeMethodInfoPtr_DeserializeOnce_Public_Static_Void_byref_NetBufferIn_byref_InputCommandBufferElement_byref_Translation_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, 100670549);
		InputCommandBufferElement.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, 100670550);
	}
	public unsafe double StartTime
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InputCommandBufferElement.NativeMethodInfoPtr_get_StartTime_Public_get_Double_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1138047, XrefRangeEnd = 1138053, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void SerializeReplay(ref NetBufferOut netBufferOut, [In] ref InputCommandBufferElement command, [In] ref Translation userPosition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBufferOut;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &command;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &userPosition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InputCommandBufferElement.NativeMethodInfoPtr_SerializeReplay_Public_Static_Void_byref_NetBufferOut_byref_InputCommandBufferElement_byref_Translation_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 1138102, RefRangeEnd = 1138106, XrefRangeStart = 1138053, XrefRangeEnd = 1138102, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void SerializePerCommand(ref NetBufferOut netBuffer, [In] ref InputCommandBufferElement command, [In] ref InputCommandBufferElement previousCommand)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &command;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &previousCommand;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InputCommandBufferElement.NativeMethodInfoPtr_SerializePerCommand_Public_Static_Void_byref_NetBufferOut_byref_InputCommandBufferElement_byref_InputCommandBufferElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 1138124, RefRangeEnd = 1138128, XrefRangeStart = 1138106, XrefRangeEnd = 1138124, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void SerializeOnce(ref NetBufferOut netBuffer, [In] ref InputCommandBufferElement command, [In] ref Translation userPosition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &command;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &userPosition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InputCommandBufferElement.NativeMethodInfoPtr_SerializeOnce_Public_Static_Void_byref_NetBufferOut_byref_InputCommandBufferElement_byref_Translation_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1138128, XrefRangeEnd = 1138132, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void DeserializeReplay(ref NetBufferIn netBuffer, ref InputCommandBufferElement command, [In] ref Translation playerPosition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &command;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &playerPosition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InputCommandBufferElement.NativeMethodInfoPtr_DeserializeReplay_Public_Static_Void_byref_NetBufferIn_byref_InputCommandBufferElement_byref_Translation_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 1138192, RefRangeEnd = 1138195, XrefRangeStart = 1138132, XrefRangeEnd = 1138192, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void DeserializePerCommand(ref NetBufferIn netBuffer, ref InputCommandBufferElement command, [In] ref InputCommandBufferElement previousCommand)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &command;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &previousCommand;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InputCommandBufferElement.NativeMethodInfoPtr_DeserializePerCommand_Public_Static_Void_byref_NetBufferIn_byref_InputCommandBufferElement_byref_InputCommandBufferElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 1138211, RefRangeEnd = 1138214, XrefRangeStart = 1138195, XrefRangeEnd = 1138211, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void DeserializeOnce(ref NetBufferIn netBuffer, ref InputCommandBufferElement command, [In] ref Translation playerTranslation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &command;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &playerTranslation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InputCommandBufferElement.NativeMethodInfoPtr_DeserializeOnce_Public_Static_Void_byref_NetBufferIn_byref_InputCommandBufferElement_byref_Translation_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1138214, XrefRangeEnd = 1138244, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InputCommandBufferElement.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InputCommandBufferElement>.NativeClassPtr, ref this));
	}
	public unsafe static int MAX_INPUT_COMMANDS
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(InputCommandBufferElement.NativeFieldInfoPtr_MAX_INPUT_COMMANDS, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(InputCommandBufferElement.NativeFieldInfoPtr_MAX_INPUT_COMMANDS, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_MAX_INPUT_COMMANDS;
	private static readonly IntPtr NativeFieldInfoPtr_MovementInput;
	private static readonly IntPtr NativeFieldInfoPtr_RotationInput;
	private static readonly IntPtr NativeFieldInfoPtr_RawInput;
	private static readonly IntPtr NativeFieldInfoPtr_ClientFrame;
	private static readonly IntPtr NativeFieldInfoPtr_OriginalClientFrame;
	private static readonly IntPtr NativeFieldInfoPtr_ServerFrame;
	private static readonly IntPtr NativeFieldInfoPtr_ClientCastStartedCounter;
	private static readonly IntPtr NativeFieldInfoPtr_EndTime;
	private static readonly IntPtr NativeFieldInfoPtr_DeltaTime;
	private static readonly IntPtr NativeMethodInfoPtr_get_StartTime_Public_get_Double_0;
	private static readonly IntPtr NativeMethodInfoPtr_SerializeReplay_Public_Static_Void_byref_NetBufferOut_byref_InputCommandBufferElement_byref_Translation_0;
	private static readonly IntPtr NativeMethodInfoPtr_SerializePerCommand_Public_Static_Void_byref_NetBufferOut_byref_InputCommandBufferElement_byref_InputCommandBufferElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_SerializeOnce_Public_Static_Void_byref_NetBufferOut_byref_InputCommandBufferElement_byref_Translation_0;
	private static readonly IntPtr NativeMethodInfoPtr_DeserializeReplay_Public_Static_Void_byref_NetBufferIn_byref_InputCommandBufferElement_byref_Translation_0;
	private static readonly IntPtr NativeMethodInfoPtr_DeserializePerCommand_Public_Static_Void_byref_NetBufferIn_byref_InputCommandBufferElement_byref_InputCommandBufferElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_DeserializeOnce_Public_Static_Void_byref_NetBufferIn_byref_InputCommandBufferElement_byref_Translation_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	[FieldOffset(0)]
	public CommandMovementInput MovementInput;
	[FieldOffset(8)]
	public CommandRotationInput RotationInput;
	[FieldOffset(20)]
	public EntityInput RawInput;
	[FieldOffset(116)]
	public int ClientFrame;
	[FieldOffset(120)]
	public int OriginalClientFrame;
	[FieldOffset(124)]
	public int ServerFrame;
	[FieldOffset(128)]
	public int ClientCastStartedCounter;
	[FieldOffset(136)]
	public double EndTime;
	[FieldOffset(144)]
	public float DeltaTime;
	[Flags]
	public enum ChangedValues : byte
	{
		None = 0,
		All = 255,
		ServerFrame = 1,
		ClientCastStartedCounter = 2,
		MoveDirection = 4,
		TargetDirection = 8,
		RawInputMovement = 16,
		InputsPressed = 32,
		AnalogValues = 64,
		FullSync = 128
	}
}
