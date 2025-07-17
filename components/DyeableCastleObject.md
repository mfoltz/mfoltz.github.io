---
nav_exclude: true
search_exclude: true
---

# DyeableCastleObject

```csharp
public struct DyeableCastleObject
{
	static DyeableCastleObject()
	{
		Il2CppClassPointerStore<DyeableCastleObject>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "DyeableCastleObject");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DyeableCastleObject>.NativeClassPtr);
		DyeableCastleObject.NativeFieldInfoPtr_ColorSwatchAssetGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DyeableCastleObject>.NativeClassPtr, "ColorSwatchAssetGuid");
		DyeableCastleObject.NativeFieldInfoPtr_NumColorChoices = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DyeableCastleObject>.NativeClassPtr, "NumColorChoices");
		DyeableCastleObject.NativeFieldInfoPtr_PrevColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DyeableCastleObject>.NativeClassPtr, "PrevColorIndex");
		DyeableCastleObject.NativeFieldInfoPtr_ActiveColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DyeableCastleObject>.NativeClassPtr, "ActiveColorIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DyeableCastleObject>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ColorSwatchAssetGuid;
	private static readonly IntPtr NativeFieldInfoPtr_NumColorChoices;
	private static readonly IntPtr NativeFieldInfoPtr_PrevColorIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveColorIndex;

	public PrefabGUID ColorSwatchAssetGuid;

	public byte NumColorChoices;

	public byte PrevColorIndex;

	public byte ActiveColorIndex;
}
```
