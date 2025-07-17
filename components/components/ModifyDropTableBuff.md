---
nav_exclude: true
search_exclude: true
---

# ModifyDropTableBuff

```csharp
[StructLayout(2)]
public struct ModifyDropTableBuff
{
	static ModifyDropTableBuff()
	{
		Il2CppClassPointerStore<ModifyDropTableBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyDropTableBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyDropTableBuff>.NativeClassPtr);
		ModifyDropTableBuff.NativeFieldInfoPtr_DropTable = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyDropTableBuff>.NativeClassPtr, "DropTable");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyDropTableBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DropTable;
	[FieldOffset(0)]
	public PrefabGUID DropTable;
}
