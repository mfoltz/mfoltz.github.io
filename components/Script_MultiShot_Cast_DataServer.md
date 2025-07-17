---
nav_exclude: true
search_exclude: true
---

# Script_MultiShot_Cast_DataServer

```csharp
[StructLayout(2)]
public struct Script_MultiShot_Cast_DataServer
{
	static Script_MultiShot_Cast_DataServer()
	{
		Il2CppClassPointerStore<Script_MultiShot_Cast_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_MultiShot_Cast_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_MultiShot_Cast_DataServer>.NativeClassPtr);
		Script_MultiShot_Cast_DataServer.NativeFieldInfoPtr_Angle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiShot_Cast_DataServer>.NativeClassPtr, "Angle");
		Script_MultiShot_Cast_DataServer.NativeFieldInfoPtr_OffsetAllAngles = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiShot_Cast_DataServer>.NativeClassPtr, "OffsetAllAngles");
		Script_MultiShot_Cast_DataServer.NativeFieldInfoPtr_NewProjectile = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiShot_Cast_DataServer>.NativeClassPtr, "NewProjectile");
		Script_MultiShot_Cast_DataServer.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiShot_Cast_DataServer>.NativeClassPtr, "Count");
		Script_MultiShot_Cast_DataServer.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiShot_Cast_DataServer>.NativeClassPtr, "Condition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_MultiShot_Cast_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Angle;
	private static readonly IntPtr NativeFieldInfoPtr_OffsetAllAngles;
	private static readonly IntPtr NativeFieldInfoPtr_NewProjectile;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	[FieldOffset(0)]
	public float Angle;
	[FieldOffset(4)]
	public float OffsetAllAngles;
	[FieldOffset(8)]
	public PrefabGUID NewProjectile;
	[FieldOffset(12)]
	public int Count;
	[FieldOffset(16)]
	public BlobAssetReference<ConditionBlob> Condition;
}
