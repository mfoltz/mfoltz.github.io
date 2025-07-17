---
nav_exclude: true
search_exclude: true
---

# ModifyMovementSpeedBuffModification

```csharp
[StructLayout(2)]
public struct ModifyMovementSpeedBuffModification
{
	static ModifyMovementSpeedBuffModification()
	{
		Il2CppClassPointerStore<ModifyMovementSpeedBuffModification>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyMovementSpeedBuffModification");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyMovementSpeedBuffModification>.NativeClassPtr);
		ModifyMovementSpeedBuffModification.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementSpeedBuffModification>.NativeClassPtr, "Target");
		ModifyMovementSpeedBuffModification.NativeFieldInfoPtr_Id = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementSpeedBuffModification>.NativeClassPtr, "Id");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyMovementSpeedBuffModification>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_Id;
	[FieldOffset(0)]
	public Entity Target;
	[FieldOffset(8)]
	public ModificationId Id;
}
