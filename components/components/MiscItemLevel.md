---
nav_exclude: true
search_exclude: true
---

# MiscItemLevel

```csharp
[StructLayout(2)]
public struct MiscItemLevel
{
	static MiscItemLevel()
	{
		Il2CppClassPointerStore<MiscItemLevel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MiscItemLevel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MiscItemLevel>.NativeClassPtr);
		MiscItemLevel.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MiscItemLevel>.NativeClassPtr, "Level");
		MiscItemLevel.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MiscItemLevel>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MiscItemLevel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;
	[FieldOffset(0)]
	public float Level;
	[FieldOffset(4)]
	public ModificationId ModificationId;
}
