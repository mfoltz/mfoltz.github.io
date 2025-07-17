---
nav_exclude: true
search_exclude: true
---

# VBloodShapeshiftData

```csharp
[StructLayout(2)]
public struct VBloodShapeshiftData
{
	static VBloodShapeshiftData()
	{
		Il2CppClassPointerStore<VBloodShapeshiftData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "VBloodShapeshiftData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VBloodShapeshiftData>.NativeClassPtr);
		VBloodShapeshiftData.NativeFieldInfoPtr_CanBeCastWhileMounted = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodShapeshiftData>.NativeClassPtr, "CanBeCastWhileMounted");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VBloodShapeshiftData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CanBeCastWhileMounted;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool CanBeCastWhileMounted;
}
