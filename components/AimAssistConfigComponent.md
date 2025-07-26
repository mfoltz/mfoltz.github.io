# AimAssistConfigComponent

```csharp
[StructLayout(2)]
public struct AimAssistConfigComponent
{
	static AimAssistConfigComponent()
	{
		Il2CppClassPointerStore<AimAssistConfigComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AimAssistConfigComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimAssistConfigComponent>.NativeClassPtr);
		AimAssistConfigComponent.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimAssistConfigComponent>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimAssistConfigComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	[FieldOffset(0)]
	public BlobAssetReference<AimAssistConfigBlob> Data;
}
