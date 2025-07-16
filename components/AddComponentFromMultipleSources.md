# AddComponentFromMultipleSources

```csharp
[StructLayout(2)]
public struct AddComponentFromMultipleSources
{
	static AddComponentFromMultipleSources()
	{
		Il2CppClassPointerStore<AddComponentFromMultipleSources>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM", "AddComponentFromMultipleSources");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AddComponentFromMultipleSources>.NativeClassPtr);
		AddComponentFromMultipleSources.NativeFieldInfoPtr_TargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AddComponentFromMultipleSources>.NativeClassPtr, "TargetEntity");
		AddComponentFromMultipleSources.NativeFieldInfoPtr_TypeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AddComponentFromMultipleSources>.NativeClassPtr, "TypeIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AddComponentFromMultipleSources>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_TypeIndex;
	[FieldOffset(0)]
	public Entity TargetEntity;
	[FieldOffset(8)]
	public TypeIndex TypeIndex;
}
