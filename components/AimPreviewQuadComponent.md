---
nav_exclude: true
search_exclude: true
---

# AimPreviewQuadComponent

```csharp
[StructLayout(2)]
public struct AimPreviewQuadComponent
{
	static AimPreviewQuadComponent()
	{
		Il2CppClassPointerStore<AimPreviewQuadComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.AimPreviewSplines.Component", "AimPreviewQuadComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewQuadComponent>.NativeClassPtr);
		AimPreviewQuadComponent.NativeFieldInfoPtr_Width = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewQuadComponent>.NativeClassPtr, "Width");
		AimPreviewQuadComponent.NativeFieldInfoPtr_Length = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewQuadComponent>.NativeClassPtr, "Length");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewQuadComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Width;
	private static readonly IntPtr NativeFieldInfoPtr_Length;
	[FieldOffset(0)]
	public float Width;
	[FieldOffset(4)]
	public float Length;
}
