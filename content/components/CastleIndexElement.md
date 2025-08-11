---
nav_exclude: true
search_exclude: true
---

# CastleIndexElement

```csharp
public struct CastleIndexElement
{
	static CastleIndexElement()
	{
		Il2CppClassPointerStore<CastleIndexElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CastleIndexElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleIndexElement>.NativeClassPtr);
		CastleIndexElement.NativeFieldInfoPtr_ItemId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleIndexElement>.NativeClassPtr, "ItemId");
		CastleIndexElement.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleIndexElement>.NativeClassPtr, "Amount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleIndexElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ItemId;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;

	public PrefabGUID ItemId;

	public int Amount;
}
```
