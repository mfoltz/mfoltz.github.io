---
nav_exclude: true
search_exclude: true
---

# ModifyAggroRangesBuff

```csharp
public struct ModifyAggroRangesBuff
{
	static ModifyAggroRangesBuff()
	{
		Il2CppClassPointerStore<ModifyAggroRangesBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyAggroRangesBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyAggroRangesBuff>.NativeClassPtr);
		ModifyAggroRangesBuff.NativeFieldInfoPtr_AggroCircleRadiusFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAggroRangesBuff>.NativeClassPtr, "AggroCircleRadiusFactor");
		ModifyAggroRangesBuff.NativeFieldInfoPtr_AggroConeRadiusFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAggroRangesBuff>.NativeClassPtr, "AggroConeRadiusFactor");
		ModifyAggroRangesBuff.NativeFieldInfoPtr_AlertCircleRadiusFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAggroRangesBuff>.NativeClassPtr, "AlertCircleRadiusFactor");
		ModifyAggroRangesBuff.NativeFieldInfoPtr_AlertConeRadiusFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAggroRangesBuff>.NativeClassPtr, "AlertConeRadiusFactor");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyAggroRangesBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AggroCircleRadiusFactor;
	private static readonly IntPtr NativeFieldInfoPtr_AggroConeRadiusFactor;
	private static readonly IntPtr NativeFieldInfoPtr_AlertCircleRadiusFactor;
	private static readonly IntPtr NativeFieldInfoPtr_AlertConeRadiusFactor;

	public float AggroCircleRadiusFactor;

	public float AggroConeRadiusFactor;

	public float AlertCircleRadiusFactor;

	public float AlertConeRadiusFactor;
}
```
