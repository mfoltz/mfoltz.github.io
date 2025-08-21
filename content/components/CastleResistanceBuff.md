---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastleResistanceBuff
{
	static CastleResistanceBuff()
	{
		Il2CppClassPointerStore<CastleResistanceBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CastleResistanceBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleResistanceBuff>.NativeClassPtr);
		CastleResistanceBuff.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleResistanceBuff>.NativeClassPtr, "Modifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleResistanceBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;

	public half Modifier;
}
```
