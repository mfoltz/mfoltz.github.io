---
nav_exclude: true
search_exclude: true
---

# CastOptionRoot

```csharp
[StructLayout(2)]
public struct CastOptionRoot
{
	static CastOptionRoot()
	{
		Il2CppClassPointerStore<CastOptionRoot>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "CastOptionRoot");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastOptionRoot>.NativeClassPtr);
		CastOptionRoot.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionRoot>.NativeClassPtr, "MaxRange");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastOptionRoot>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	[FieldOffset(0)]
	public float MaxRange;
}
