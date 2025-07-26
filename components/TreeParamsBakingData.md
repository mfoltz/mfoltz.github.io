# TreeParamsBakingData

```csharp
[StructLayout(2)]
public struct TreeParamsBakingData
{
	static TreeParamsBakingData()
	{
		Il2CppClassPointerStore<TreeParamsBakingData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Wind", "TreeParamsBakingData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TreeParamsBakingData>.NativeClassPtr);
		TreeParamsBakingData.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TreeParamsBakingData>.NativeClassPtr, "Entity");
		TreeParamsBakingData.NativeFieldInfoPtr_Params0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TreeParamsBakingData>.NativeClassPtr, "Params0");
		TreeParamsBakingData.NativeFieldInfoPtr_Params1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TreeParamsBakingData>.NativeClassPtr, "Params1");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TreeParamsBakingData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Params0;
	private static readonly IntPtr NativeFieldInfoPtr_Params1;
	[FieldOffset(0)]
	public Entity Entity;
	[FieldOffset(8)]
	public float4 Params0;
	[FieldOffset(24)]
	public float4 Params1;
}
