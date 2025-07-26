# ChangeTranslationOverTime_DataShared

```csharp
[StructLayout(2)]
public struct ChangeTranslationOverTime_DataShared
{
	static ChangeTranslationOverTime_DataShared()
	{
		Il2CppClassPointerStore<ChangeTranslationOverTime_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "ChangeTranslationOverTime_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChangeTranslationOverTime_DataShared>.NativeClassPtr);
		ChangeTranslationOverTime_DataShared.NativeFieldInfoPtr_TranslationToMove = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeTranslationOverTime_DataShared>.NativeClassPtr, "TranslationToMove");
		ChangeTranslationOverTime_DataShared.NativeFieldInfoPtr_StartPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeTranslationOverTime_DataShared>.NativeClassPtr, "StartPosition");
		ChangeTranslationOverTime_DataShared.NativeFieldInfoPtr_TargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeTranslationOverTime_DataShared>.NativeClassPtr, "TargetPosition");
		ChangeTranslationOverTime_DataShared.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeTranslationOverTime_DataShared>.NativeClassPtr, "Duration");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChangeTranslationOverTime_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TranslationToMove;
	private static readonly IntPtr NativeFieldInfoPtr_StartPosition;
	private static readonly IntPtr NativeFieldInfoPtr_TargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	[FieldOffset(0)]
	public float3 TranslationToMove;
	[FieldOffset(12)]
	public float3 StartPosition;
	[FieldOffset(24)]
	public float3 TargetPosition;
	[FieldOffset(36)]
	public float Duration;
}
