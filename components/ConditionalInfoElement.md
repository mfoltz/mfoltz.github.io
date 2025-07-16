# ConditionalInfoElement

```csharp
[StructLayout(2)]
public struct ConditionalInfoElement
{
	static ConditionalInfoElement()
	{
		Il2CppClassPointerStore<ConditionalInfoElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.HUD", "ConditionalInfoElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ConditionalInfoElement>.NativeClassPtr);
		ConditionalInfoElement.NativeFieldInfoPtr_Placement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConditionalInfoElement>.NativeClassPtr, "Placement");
		ConditionalInfoElement.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConditionalInfoElement>.NativeClassPtr, "Type");
		ConditionalInfoElement.NativeFieldInfoPtr_Text = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConditionalInfoElement>.NativeClassPtr, "Text");
		ConditionalInfoElement.NativeFieldInfoPtr_LocalOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConditionalInfoElement>.NativeClassPtr, "LocalOffset");
		ConditionalInfoElement.NativeFieldInfoPtr_Conditional = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConditionalInfoElement>.NativeClassPtr, "Conditional");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ConditionalInfoElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Placement;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_Text;
	private static readonly IntPtr NativeFieldInfoPtr_LocalOffset;
	private static readonly IntPtr NativeFieldInfoPtr_Conditional;
	[FieldOffset(0)]
	public InfoTextPlacement Placement;
	[FieldOffset(1)]
	public InfoTextType Type;
	[FieldOffset(4)]
	public LocalizationKey Text;
	[FieldOffset(20)]
	public float3 LocalOffset;
	[FieldOffset(32)]
	public BlobAssetReference<ConditionBlob> Conditional;
}
