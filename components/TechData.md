---
nav_exclude: true
search_exclude: true
---

# TechData

```csharp
[StructLayout(2)]
public struct TechData
{
	static TechData()
	{
		Il2CppClassPointerStore<TechData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TechData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TechData>.NativeClassPtr);
		TechData.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TechData>.NativeClassPtr, "Entity");
		TechData.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TechData>.NativeClassPtr, "Guid");
		TechData.NativeFieldInfoPtr_TechCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TechData>.NativeClassPtr, "TechCategory");
		TechData.NativeFieldInfoPtr_CraftDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TechData>.NativeClassPtr, "CraftDuration");
		TechData.NativeFieldInfoPtr_HudSortingOrder = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TechData>.NativeClassPtr, "HudSortingOrder");
		TechData.NativeFieldInfoPtr_NeverShowQuestionmarkResearch = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TechData>.NativeClassPtr, "NeverShowQuestionmarkResearch");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TechData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_TechCategory;
	private static readonly IntPtr NativeFieldInfoPtr_CraftDuration;
	private static readonly IntPtr NativeFieldInfoPtr_HudSortingOrder;
	private static readonly IntPtr NativeFieldInfoPtr_NeverShowQuestionmarkResearch;
	[FieldOffset(0)]
	public Entity Entity;
	[FieldOffset(8)]
	public PrefabGUID Guid;
	[FieldOffset(12)]
	public TechCategory TechCategory;
	[FieldOffset(16)]
	public float CraftDuration;
	[FieldOffset(20)]
	public int HudSortingOrder;
	[FieldOffset(24)]
	[MarshalAs(4)]
	public bool NeverShowQuestionmarkResearch;
}
