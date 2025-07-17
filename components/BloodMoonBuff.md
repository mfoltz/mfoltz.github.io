---
nav_exclude: true
search_exclude: true
---

# BloodMoonBuff

```csharp
[StructLayout(2)]
public struct BloodMoonBuff
{
	static BloodMoonBuff()
	{
		Il2CppClassPointerStore<BloodMoonBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodMoonBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodMoonBuff>.NativeClassPtr);
		BloodMoonBuff.NativeFieldInfoPtr_Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodMoonBuff>.NativeClassPtr, "Buff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodMoonBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Buff;
	[FieldOffset(0)]
	public PrefabGUID Buff;
}
