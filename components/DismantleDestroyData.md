# DismantleDestroyData

```csharp
[StructLayout(2)]
public struct DismantleDestroyData
{
	static DismantleDestroyData()
	{
		Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DismantleDestroyData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr);
		DismantleDestroyData.NativeFieldInfoPtr_DismantleDestroyTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr, "DismantleDestroyTime");
		DismantleDestroyData.NativeFieldInfoPtr_DismantleSequenceInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr, "DismantleSequenceInstance");
		DismantleDestroyData.NativeFieldInfoPtr_SkipDismantleTimeIfReplaced = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr, "SkipDismantleTimeIfReplaced");
		DismantleDestroyData.NativeFieldInfoPtr_WasDismantled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr, "WasDismantled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DismantleDestroyTime;
	private static readonly IntPtr NativeFieldInfoPtr_DismantleSequenceInstance;
	private static readonly IntPtr NativeFieldInfoPtr_SkipDismantleTimeIfReplaced;
	private static readonly IntPtr NativeFieldInfoPtr_WasDismantled;
	[FieldOffset(0)]
	public float DismantleDestroyTime;
	[FieldOffset(4)]
	public SequenceState DismantleSequenceInstance;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool SkipDismantleTimeIfReplaced;
	[FieldOffset(13)]
	[MarshalAs(4)]
	public bool WasDismantled;
}
