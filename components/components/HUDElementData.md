---
nav_exclude: true
search_exclude: true
---

# HUDElementData

```csharp
[StructLayout(2)]
public struct HUDElementData
{
	static HUDElementData()
	{
		Il2CppClassPointerStore<HUDElementData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "HUDElementData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HUDElementData>.NativeClassPtr);
		HUDElementData.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HUDElementData>.NativeClassPtr, "Guid");
		HUDElementData.NativeFieldInfoPtr_ElementType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HUDElementData>.NativeClassPtr, "ElementType");
		HUDElementData.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HUDElementData>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HUDElementData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_ElementType;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public PrefabGUID Guid;
	[FieldOffset(4)]
	public HUDElementType ElementType;
	[FieldOffset(8)]
	public Entity Entity;
}
