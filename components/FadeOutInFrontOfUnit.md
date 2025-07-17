---
nav_exclude: true
search_exclude: true
---

# FadeOutInFrontOfUnit

```csharp
[StructLayout(2)]
public struct FadeOutInFrontOfUnit
{
	static FadeOutInFrontOfUnit()
	{
		Il2CppClassPointerStore<FadeOutInFrontOfUnit>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "FadeOutInFrontOfUnit");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FadeOutInFrontOfUnit>.NativeClassPtr);
		FadeOutInFrontOfUnit.NativeFieldInfoPtr_FadeOutCompletely = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeOutInFrontOfUnit>.NativeClassPtr, "FadeOutCompletely");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FadeOutInFrontOfUnit>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FadeOutCompletely;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool FadeOutCompletely;
}
