# SetDynamicCollisionHardnessBuff

```csharp
[StructLayout(2)]
public struct SetDynamicCollisionHardnessBuff
{
	static SetDynamicCollisionHardnessBuff()
	{
		Il2CppClassPointerStore<SetDynamicCollisionHardnessBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SetDynamicCollisionHardnessBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SetDynamicCollisionHardnessBuff>.NativeClassPtr);
		SetDynamicCollisionHardnessBuff.NativeFieldInfoPtr_Hardness = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetDynamicCollisionHardnessBuff>.NativeClassPtr, "Hardness");
		SetDynamicCollisionHardnessBuff.NativeFieldInfoPtr_Targets = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetDynamicCollisionHardnessBuff>.NativeClassPtr, "Targets");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SetDynamicCollisionHardnessBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Hardness;
	private static readonly IntPtr NativeFieldInfoPtr_Targets;
	[FieldOffset(0)]
	public float Hardness;
	[FieldOffset(4)]
	public SetDynamicCollisionHardnessBuffTargets Targets;
}
