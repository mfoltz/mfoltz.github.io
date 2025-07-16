# HybridModel

```csharp
[StructLayout(2)]
public struct HybridModel
{
	static HybridModel()
	{
		Il2CppClassPointerStore<HybridModel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Hybrid", "HybridModel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModel>.NativeClassPtr);
		HybridModel.NativeFieldInfoPtr_GameplayEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModel>.NativeClassPtr, "GameplayEntity");
		HybridModel.NativeFieldInfoPtr_ModelType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModel>.NativeClassPtr, "ModelType");
		HybridModel.NativeFieldInfoPtr_IsFemale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModel>.NativeClassPtr, "IsFemale");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ModelType;
	private static readonly IntPtr NativeFieldInfoPtr_IsFemale;
	[FieldOffset(0)]
	public Entity GameplayEntity;
	[FieldOffset(8)]
	public HybridModelType ModelType;
	[FieldOffset(9)]
	[MarshalAs(4)]
	public bool IsFemale;
}
