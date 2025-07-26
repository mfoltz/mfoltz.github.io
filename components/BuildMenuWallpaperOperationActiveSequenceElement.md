# BuildMenuWallpaperOperationActiveSequenceElement

```csharp
[StructLayout(2)]
public struct BuildMenuWallpaperOperationActiveSequenceElement
{
	static BuildMenuWallpaperOperationActiveSequenceElement()
	{
		Il2CppClassPointerStore<BuildMenuWallpaperOperationActiveSequenceElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "BuildMenuWallpaperOperationActiveSequenceElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuildMenuWallpaperOperationActiveSequenceElement>.NativeClassPtr);
		BuildMenuWallpaperOperationActiveSequenceElement.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildMenuWallpaperOperationActiveSequenceElement>.NativeClassPtr, "Sequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuildMenuWallpaperOperationActiveSequenceElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
	[FieldOffset(0)]
	public SequenceState Sequence;
}
