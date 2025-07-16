# ModifyImpactMaterialBuff

```csharp
[StructLayout(2)]
public struct ModifyImpactMaterialBuff
{
	static ModifyImpactMaterialBuff()
	{
		Il2CppClassPointerStore<ModifyImpactMaterialBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyImpactMaterialBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyImpactMaterialBuff>.NativeClassPtr);
		ModifyImpactMaterialBuff.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyImpactMaterialBuff>.NativeClassPtr, "Type");
		ModifyImpactMaterialBuff.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyImpactMaterialBuff>.NativeClassPtr, "ModificationId");
		ModifyImpactMaterialBuff.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyImpactMaterialBuff>.NativeClassPtr, "Priority");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyImpactMaterialBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_Priority;
	[FieldOffset(0)]
	public ImpactMaterialType Type;
	[FieldOffset(4)]
	public ModificationId ModificationId;
	[FieldOffset(8)]
	public int Priority;
}
