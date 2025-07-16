# AssetRebakingDependencyElement

```csharp
[StructLayout(2)]
public struct AssetRebakingDependencyElement
{
	static AssetRebakingDependencyElement()
	{
		Il2CppClassPointerStore<AssetRebakingDependencyElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "AssetRebakingDependencyElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AssetRebakingDependencyElement>.NativeClassPtr);
		AssetRebakingDependencyElement.NativeFieldInfoPtr_AssetToRebake = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AssetRebakingDependencyElement>.NativeClassPtr, "AssetToRebake");
		AssetRebakingDependencyElement.NativeFieldInfoPtr_AssetToListenForChangesOn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AssetRebakingDependencyElement>.NativeClassPtr, "AssetToListenForChangesOn");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AssetRebakingDependencyElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AssetToRebake;
	private static readonly IntPtr NativeFieldInfoPtr_AssetToListenForChangesOn;
	[FieldOffset(0)]
	public AssetGuid AssetToRebake;
	[FieldOffset(16)]
	public AssetGuid AssetToListenForChangesOn;
}
