---
nav_exclude: true
search_exclude: true
---

# AimPreviewCommonData

```csharp
[StructLayout(2)]
public struct AimPreviewCommonData
{
	static AimPreviewCommonData()
	{
		Il2CppClassPointerStore<AimPreviewCommonData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.AimPreviewSplines.Component", "AimPreviewCommonData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewCommonData>.NativeClassPtr);
		AimPreviewCommonData.NativeFieldInfoPtr_HeightOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewCommonData>.NativeClassPtr, "HeightOffset");
		AimPreviewCommonData.NativeFieldInfoPtr_PrevLocalToWorldMatrix = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewCommonData>.NativeClassPtr, "PrevLocalToWorldMatrix");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewCommonData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HeightOffset;
	private static readonly IntPtr NativeFieldInfoPtr_PrevLocalToWorldMatrix;
	[FieldOffset(0)]
	public float HeightOffset;
	[FieldOffset(4)]
	public float4x4 PrevLocalToWorldMatrix;
}
