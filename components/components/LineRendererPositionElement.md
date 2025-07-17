---
nav_exclude: true
search_exclude: true
---

# LineRendererPositionElement

```csharp
[StructLayout(2)]
public struct LineRendererPositionElement
{
	static LineRendererPositionElement()
	{
		Il2CppClassPointerStore<LineRendererPositionElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "LineRendererPositionElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LineRendererPositionElement>.NativeClassPtr);
		LineRendererPositionElement.NativeFieldInfoPtr_LineRendererIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LineRendererPositionElement>.NativeClassPtr, "LineRendererIndex");
		LineRendererPositionElement.NativeFieldInfoPtr_PositionIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LineRendererPositionElement>.NativeClassPtr, "PositionIndex");
		LineRendererPositionElement.NativeFieldInfoPtr_PositionValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LineRendererPositionElement>.NativeClassPtr, "PositionValue");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LineRendererPositionElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LineRendererIndex;
	private static readonly IntPtr NativeFieldInfoPtr_PositionIndex;
	private static readonly IntPtr NativeFieldInfoPtr_PositionValue;
	[FieldOffset(0)]
	public int LineRendererIndex;
	[FieldOffset(4)]
	public int PositionIndex;
	[FieldOffset(8)]
	public float3 PositionValue;
}
