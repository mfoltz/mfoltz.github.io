# InventoryOwner

```csharp
[StructLayout(2)]
public struct InventoryOwner
{
	static InventoryOwner()
	{
		Il2CppClassPointerStore<InventoryOwner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "InventoryOwner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InventoryOwner>.NativeClassPtr);
		InventoryOwner.NativeFieldInfoPtr_LastUpdateVersion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryOwner>.NativeClassPtr, "LastUpdateVersion");
		InventoryOwner.NativeFieldInfoPtr_HasItems = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryOwner>.NativeClassPtr, "HasItems");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InventoryOwner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastUpdateVersion;
	private static readonly IntPtr NativeFieldInfoPtr_HasItems;
	[FieldOffset(0)]
	public byte LastUpdateVersion;
	[FieldOffset(1)]
	[MarshalAs(4)]
	public bool HasItems;
}
