---
nav_exclude: true
search_exclude: true
---

# ReplaceDropTableElement

```csharp
[StructLayout(2)]
public struct ReplaceDropTableElement
{
	static ReplaceDropTableElement()
	{
		Il2CppClassPointerStore<ReplaceDropTableElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ReplaceDropTableElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReplaceDropTableElement>.NativeClassPtr);
		ReplaceDropTableElement.NativeFieldInfoPtr_OriginalDropTable = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceDropTableElement>.NativeClassPtr, "OriginalDropTable");
		ReplaceDropTableElement.NativeFieldInfoPtr_ReplaceWithDropTable = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceDropTableElement>.NativeClassPtr, "ReplaceWithDropTable");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReplaceDropTableElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OriginalDropTable;
	private static readonly IntPtr NativeFieldInfoPtr_ReplaceWithDropTable;
	[FieldOffset(0)]
	public PrefabGUID OriginalDropTable;
	[FieldOffset(4)]
	public PrefabGUID ReplaceWithDropTable;
}
