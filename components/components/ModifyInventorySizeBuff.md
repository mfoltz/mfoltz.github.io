---
nav_exclude: true
search_exclude: true
---

# ModifyInventorySizeBuff

```csharp
[StructLayout(2)]
public struct ModifyInventorySizeBuff
{
	static ModifyInventorySizeBuff()
	{
		Il2CppClassPointerStore<ModifyInventorySizeBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyInventorySizeBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyInventorySizeBuff>.NativeClassPtr);
		ModifyInventorySizeBuff.NativeFieldInfoPtr_SlotCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyInventorySizeBuff>.NativeClassPtr, "SlotCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyInventorySizeBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SlotCount;
	[FieldOffset(0)]
	public int SlotCount;
}
