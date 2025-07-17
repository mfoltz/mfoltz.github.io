---
nav_exclude: true
search_exclude: true
---

# CastleRailing

```csharp
[StructLayout(2)]
public struct CastleRailing
{
	static CastleRailing()
	{
		Il2CppClassPointerStore<CastleRailing>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleRailing");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRailing>.NativeClassPtr);
		CastleRailing.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRailing>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRailing>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	[FieldOffset(0)]
	public RailingType Type;
}
