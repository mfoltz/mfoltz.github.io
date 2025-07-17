---
nav_exclude: true
search_exclude: true
---

# OccluderIndex

```csharp
[StructLayout(2)]
public struct OccluderIndex
{
	static OccluderIndex()
	{
		Il2CppClassPointerStore<OccluderIndex>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "OccluderIndex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OccluderIndex>.NativeClassPtr);
		OccluderIndex.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OccluderIndex>.NativeClassPtr, "Index");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OccluderIndex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Index;
	[FieldOffset(0)]
	public int Index;
}
