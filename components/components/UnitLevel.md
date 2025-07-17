---
nav_exclude: true
search_exclude: true
---

# UnitLevel

```csharp
[StructLayout(2)]
public struct UnitLevel
{
	static UnitLevel()
	{
		Il2CppClassPointerStore<UnitLevel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnitLevel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitLevel>.NativeClassPtr);
		UnitLevel.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitLevel>.NativeClassPtr, "Level");
		UnitLevel.NativeFieldInfoPtr_HideLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitLevel>.NativeClassPtr, "HideLevel");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitLevel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	private static readonly IntPtr NativeFieldInfoPtr_HideLevel;
	[FieldOffset(0)]
	public ModifiableInt Level;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool HideLevel;
}
