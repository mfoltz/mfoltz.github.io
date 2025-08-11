---
nav_exclude: true
search_exclude: true
---

# RecordedCameraFrame

```csharp
public struct RecordedCameraFrame
{
	static RecordedCameraFrame()
	{
		Il2CppClassPointerStore<RecordedCameraFrame>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RecordedCameraFrame");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RecordedCameraFrame>.NativeClassPtr);
		RecordedCameraFrame.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecordedCameraFrame>.NativeClassPtr, "Position");
		RecordedCameraFrame.NativeFieldInfoPtr_Forward = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecordedCameraFrame>.NativeClassPtr, "Forward");
		RecordedCameraFrame.NativeFieldInfoPtr_Up = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecordedCameraFrame>.NativeClassPtr, "Up");
		RecordedCameraFrame.NativeFieldInfoPtr_KeyFrameTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecordedCameraFrame>.NativeClassPtr, "KeyFrameTime");
		RecordedCameraFrame.NativeMethodInfoPtr_Serialize_Public_Static_Void_BinaryWriter_RecordedCameraFrame_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RecordedCameraFrame>.NativeClassPtr, 100663859);
		RecordedCameraFrame.NativeMethodInfoPtr_Deserialize_Public_Static_RecordedCameraFrame_BinaryReader_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RecordedCameraFrame>.NativeClassPtr, 100663860);
	}

	public unsafe static void Serialize(BinaryWriter writer, RecordedCameraFrame data)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(writer);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref data;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RecordedCameraFrame.NativeMethodInfoPtr_Serialize_Public_Static_Void_BinaryWriter_RecordedCameraFrame_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static RecordedCameraFrame Deserialize(BinaryReader reader)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(reader);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RecordedCameraFrame.NativeMethodInfoPtr_Deserialize_Public_Static_RecordedCameraFrame_BinaryReader_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RecordedCameraFrame>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Forward;
	private static readonly IntPtr NativeFieldInfoPtr_Up;
	private static readonly IntPtr NativeFieldInfoPtr_KeyFrameTime;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Static_Void_BinaryWriter_RecordedCameraFrame_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Static_RecordedCameraFrame_BinaryReader_0;

	public float3 Position;

	public float3 Forward;

	public float3 Up;

	public double KeyFrameTime;
}
```
