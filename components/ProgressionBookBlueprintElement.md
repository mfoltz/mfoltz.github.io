# ProgressionBookBlueprintElement

```csharp
[StructLayout(2)]
public struct ProgressionBookBlueprintElement
{
	static ProgressionBookBlueprintElement()
	{
		Il2CppClassPointerStore<ProgressionBookBlueprintElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProgressionBookBlueprintElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProgressionBookBlueprintElement>.NativeClassPtr);
		ProgressionBookBlueprintElement.NativeFieldInfoPtr_Blueprint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressionBookBlueprintElement>.NativeClassPtr, "Blueprint");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProgressionBookBlueprintElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Blueprint;
	[FieldOffset(0)]
	public PrefabGUID Blueprint;
}
