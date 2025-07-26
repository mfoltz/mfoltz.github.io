# BuffCategory

```csharp
[StructLayout(2)]
public struct BuffCategory
{
	static BuffCategory()
	{
		Il2CppClassPointerStore<BuffCategory>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BuffCategory");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffCategory>.NativeClassPtr);
		BuffCategory.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffCategory>.NativeClassPtr, "Level");
		BuffCategory.NativeFieldInfoPtr_Groups = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffCategory>.NativeClassPtr, "Groups");
		BuffCategory.NativeFieldInfoPtr_KeepOldest = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffCategory>.NativeClassPtr, "KeepOldest");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffCategory>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	private static readonly IntPtr NativeFieldInfoPtr_Groups;
	private static readonly IntPtr NativeFieldInfoPtr_KeepOldest;
	[FieldOffset(0)]
	public int Level;
	[FieldOffset(8)]
	public BuffCategoryFlag Groups;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool KeepOldest;
}
