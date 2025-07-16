# Script_Blood_CrimsonBeam_DataShared

```csharp
[StructLayout(2)]
public struct Script_Blood_CrimsonBeam_DataShared
{
	static Script_Blood_CrimsonBeam_DataShared()
	{
		Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Blood_CrimsonBeam_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataShared>.NativeClassPtr);
		Script_Blood_CrimsonBeam_DataShared.NativeFieldInfoPtr_HitFilterInt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataShared>.NativeClassPtr, "HitFilterInt");
		Script_Blood_CrimsonBeam_DataShared.NativeFieldInfoPtr_BoxSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataShared>.NativeClassPtr, "BoxSize");
		Script_Blood_CrimsonBeam_DataShared.NativeFieldInfoPtr_BoxOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataShared>.NativeClassPtr, "BoxOffset");
		Script_Blood_CrimsonBeam_DataShared.NativeFieldInfoPtr_TargetFilterCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataShared>.NativeClassPtr, "TargetFilterCondition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HitFilterInt;
	private static readonly IntPtr NativeFieldInfoPtr_BoxSize;
	private static readonly IntPtr NativeFieldInfoPtr_BoxOffset;
	private static readonly IntPtr NativeFieldInfoPtr_TargetFilterCondition;
	[FieldOffset(0)]
	public byte HitFilterInt;
	[FieldOffset(4)]
	public float3 BoxSize;
	[FieldOffset(16)]
	public float3 BoxOffset;
	[FieldOffset(32)]
	public BlobAssetReference<ConditionBlob> TargetFilterCondition;
}
