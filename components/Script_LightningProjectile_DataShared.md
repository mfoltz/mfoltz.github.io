---
nav_exclude: true
search_exclude: true
---

# Script_LightningProjectile_DataShared

```csharp
[StructLayout(2)]
public struct Script_LightningProjectile_DataShared
{
	static Script_LightningProjectile_DataShared()
	{
		Il2CppClassPointerStore<Script_LightningProjectile_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_LightningProjectile_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_LightningProjectile_DataShared>.NativeClassPtr);
		Script_LightningProjectile_DataShared.NativeFieldInfoPtr_MinAnglePerNode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LightningProjectile_DataShared>.NativeClassPtr, "MinAnglePerNode");
		Script_LightningProjectile_DataShared.NativeFieldInfoPtr_MaxAnglePerNode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LightningProjectile_DataShared>.NativeClassPtr, "MaxAnglePerNode");
		Script_LightningProjectile_DataShared.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LightningProjectile_DataShared>.NativeClassPtr, "Range");
		Script_LightningProjectile_DataShared.NativeFieldInfoPtr_MinRangeForAngleChange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LightningProjectile_DataShared>.NativeClassPtr, "MinRangeForAngleChange");
		Script_LightningProjectile_DataShared.NativeFieldInfoPtr_MaxRangeForAngleChange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LightningProjectile_DataShared>.NativeClassPtr, "MaxRangeForAngleChange");
		Script_LightningProjectile_DataShared.NativeFieldInfoPtr_StartRight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LightningProjectile_DataShared>.NativeClassPtr, "StartRight");
		Script_LightningProjectile_DataShared.NativeFieldInfoPtr_InitialRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LightningProjectile_DataShared>.NativeClassPtr, "InitialRotation");
		Script_LightningProjectile_DataShared.NativeFieldInfoPtr_InitialPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LightningProjectile_DataShared>.NativeClassPtr, "InitialPosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_LightningProjectile_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinAnglePerNode;
	private static readonly IntPtr NativeFieldInfoPtr_MaxAnglePerNode;
	private static readonly IntPtr NativeFieldInfoPtr_Range;
	private static readonly IntPtr NativeFieldInfoPtr_MinRangeForAngleChange;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRangeForAngleChange;
	private static readonly IntPtr NativeFieldInfoPtr_StartRight;
	private static readonly IntPtr NativeFieldInfoPtr_InitialRotation;
	private static readonly IntPtr NativeFieldInfoPtr_InitialPosition;
	[FieldOffset(0)]
	public float MinAnglePerNode;
	[FieldOffset(4)]
	public float MaxAnglePerNode;
	[FieldOffset(8)]
	public float Range;
	[FieldOffset(12)]
	public float MinRangeForAngleChange;
	[FieldOffset(16)]
	public float MaxRangeForAngleChange;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool StartRight;
	[FieldOffset(24)]
	public quaternion InitialRotation;
	[FieldOffset(40)]
	public float3 InitialPosition;
}
