---
nav_exclude: true
search_exclude: false
---

# JewelArithmeticModification

```csharp
public struct JewelArithmeticModification
{
	static JewelArithmeticModification()
	{
		Il2CppClassPointerStore<JewelArithmeticModification>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "JewelArithmeticModification");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<JewelArithmeticModification>.NativeClassPtr);
		JewelArithmeticModification.NativeFieldInfoPtr_TargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelArithmeticModification>.NativeClassPtr, "TargetEntity");
		JewelArithmeticModification.NativeFieldInfoPtr_TargetType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelArithmeticModification>.NativeClassPtr, "TargetType");
		JewelArithmeticModification.NativeFieldInfoPtr_Id = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelArithmeticModification>.NativeClassPtr, "Id");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<JewelArithmeticModification>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_TargetType;
	private static readonly IntPtr NativeFieldInfoPtr_Id;

	public Entity TargetEntity;

	public SpellModArithmeticModifiableTarget TargetType;

	public ModificationId Id;
}
```
