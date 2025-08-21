---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_MultiThrow_Cast_DataServer
{
	static Script_MultiThrow_Cast_DataServer()
	{
		Il2CppClassPointerStore<Script_MultiThrow_Cast_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_MultiThrow_Cast_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_MultiThrow_Cast_DataServer>.NativeClassPtr);
		Script_MultiThrow_Cast_DataServer.NativeFieldInfoPtr_MinRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiThrow_Cast_DataServer>.NativeClassPtr, "MinRange");
		Script_MultiThrow_Cast_DataServer.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiThrow_Cast_DataServer>.NativeClassPtr, "MaxRange");
		Script_MultiThrow_Cast_DataServer.NativeFieldInfoPtr_OffsetAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiThrow_Cast_DataServer>.NativeClassPtr, "OffsetAngle");
		Script_MultiThrow_Cast_DataServer.NativeFieldInfoPtr_RandomAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiThrow_Cast_DataServer>.NativeClassPtr, "RandomAngle");
		Script_MultiThrow_Cast_DataServer.NativeFieldInfoPtr_NewThrowEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiThrow_Cast_DataServer>.NativeClassPtr, "NewThrowEntity");
		Script_MultiThrow_Cast_DataServer.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiThrow_Cast_DataServer>.NativeClassPtr, "Count");
		Script_MultiThrow_Cast_DataServer.NativeFieldInfoPtr_IndividualRandom = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiThrow_Cast_DataServer>.NativeClassPtr, "IndividualRandom");
		Script_MultiThrow_Cast_DataServer.NativeFieldInfoPtr_UseAimDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_MultiThrow_Cast_DataServer>.NativeClassPtr, "UseAimDirection");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_MultiThrow_Cast_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinRange;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_OffsetAngle;
	private static readonly IntPtr NativeFieldInfoPtr_RandomAngle;
	private static readonly IntPtr NativeFieldInfoPtr_NewThrowEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	private static readonly IntPtr NativeFieldInfoPtr_IndividualRandom;
	private static readonly IntPtr NativeFieldInfoPtr_UseAimDirection;

	public float MinRange;

	public float MaxRange;

	public float OffsetAngle;

	public float RandomAngle;

	public PrefabGUID NewThrowEntity;

	public int Count;

	public bool IndividualRandom;

	public bool UseAimDirection;
}
```
