# DestroyAfterDuration

```csharp
[StructLayout(2)]
public struct DestroyAfterDuration
{
	static DestroyAfterDuration()
	{
		Il2CppClassPointerStore<DestroyAfterDuration>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DestroyAfterDuration");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyAfterDuration>.NativeClassPtr);
		DestroyAfterDuration.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyAfterDuration>.NativeClassPtr, "Duration");
		DestroyAfterDuration.NativeFieldInfoPtr_EndTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyAfterDuration>.NativeClassPtr, "EndTime");
		DestroyAfterDuration.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyAfterDuration>.NativeClassPtr, "Condition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyAfterDuration>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_EndTime;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	[FieldOffset(0)]
	public float Duration;
	[FieldOffset(8)]
	public double EndTime;
	[FieldOffset(16)]
	public BlobAssetReference<ConditionBlob> Condition;
}
