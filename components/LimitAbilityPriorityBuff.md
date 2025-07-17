---
nav_exclude: true
search_exclude: true
---

# LimitAbilityPriorityBuff

```csharp
[StructLayout(2)]
public struct LimitAbilityPriorityBuff
{
	static LimitAbilityPriorityBuff()
	{
		Il2CppClassPointerStore<LimitAbilityPriorityBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "LimitAbilityPriorityBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LimitAbilityPriorityBuff>.NativeClassPtr);
		LimitAbilityPriorityBuff.NativeFieldInfoPtr_LimitLowerPriorityThan = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LimitAbilityPriorityBuff>.NativeClassPtr, "LimitLowerPriorityThan");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LimitAbilityPriorityBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LimitLowerPriorityThan;
	[FieldOffset(0)]
	public int LimitLowerPriorityThan;
}
