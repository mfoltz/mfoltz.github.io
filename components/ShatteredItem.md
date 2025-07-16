# ShatteredItem

```csharp
[StructLayout(2)]
public struct ShatteredItem
{
	static ShatteredItem()
	{
		Il2CppClassPointerStore<ShatteredItem>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ShatteredItem");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShatteredItem>.NativeClassPtr);
		ShatteredItem.NativeFieldInfoPtr_RequiredItem = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShatteredItem>.NativeClassPtr, "RequiredItem");
		ShatteredItem.NativeFieldInfoPtr_OutputItem = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShatteredItem>.NativeClassPtr, "OutputItem");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShatteredItem>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RequiredItem;
	private static readonly IntPtr NativeFieldInfoPtr_OutputItem;
	[FieldOffset(0)]
	public PrefabGUID RequiredItem;
	[FieldOffset(4)]
	public PrefabGUID OutputItem;
}
