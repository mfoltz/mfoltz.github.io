---
nav_exclude: true
search_exclude: true
---

# AdditionalEntityParent

```csharp
[StructLayout(2)]
public struct AdditionalEntityParent
{
	static AdditionalEntityParent()
	{
		Il2CppClassPointerStore<AdditionalEntityParent>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Hybrid.dll", "Unity.Entities", "AdditionalEntityParent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdditionalEntityParent>.NativeClassPtr);
		AdditionalEntityParent.NativeFieldInfoPtr_Parent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdditionalEntityParent>.NativeClassPtr, "Parent");
		AdditionalEntityParent.NativeFieldInfoPtr_ParentInstanceID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdditionalEntityParent>.NativeClassPtr, "ParentInstanceID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdditionalEntityParent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Parent;
	private static readonly IntPtr NativeFieldInfoPtr_ParentInstanceID;
	[FieldOffset(0)]
	public Entity Parent;
	[FieldOffset(8)]
	public int ParentInstanceID;
}
