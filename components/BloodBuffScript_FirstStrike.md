---
nav_exclude: true
search_exclude: true
---

# BloodBuffScript_FirstStrike

```csharp
[StructLayout(2)]
public struct BloodBuffScript_FirstStrike
{
	static BloodBuffScript_FirstStrike()
	{
		Il2CppClassPointerStore<BloodBuffScript_FirstStrike>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodBuffScript_FirstStrike");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuffScript_FirstStrike>.NativeClassPtr);
		BloodBuffScript_FirstStrike.NativeFieldInfoPtr_FirstStrikeBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_FirstStrike>.NativeClassPtr, "FirstStrikeBonus");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuffScript_FirstStrike>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FirstStrikeBonus;
	[FieldOffset(0)]
	public float FirstStrikeBonus;
}
