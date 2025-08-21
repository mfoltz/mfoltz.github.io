---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DiminishingReturnBuff
{
	static DiminishingReturnBuff()
	{
		Il2CppClassPointerStore<DiminishingReturnBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DiminishingReturnBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DiminishingReturnBuff>.NativeClassPtr);
		DiminishingReturnBuff.NativeFieldInfoPtr_DiminishedBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiminishingReturnBuff>.NativeClassPtr, "DiminishedBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DiminishingReturnBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DiminishedBuff;

	public Entity DiminishedBuff;
}
```
