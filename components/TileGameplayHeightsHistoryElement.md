---
nav_exclude: true
search_exclude: true
---

# TileGameplayHeightsHistoryElement

```csharp
[StructLayout(2)]
public struct TileGameplayHeightsHistoryElement
{
	static TileGameplayHeightsHistoryElement()
	{
		Il2CppClassPointerStore<TileGameplayHeightsHistoryElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "TileGameplayHeightsHistoryElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TileGameplayHeightsHistoryElement>.NativeClassPtr);
		TileGameplayHeightsHistoryElement.NativeFieldInfoPtr_CompressedHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TileGameplayHeightsHistoryElement>.NativeClassPtr, "CompressedHeight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TileGameplayHeightsHistoryElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CompressedHeight;
	[FieldOffset(0)]
	public ushort CompressedHeight;
}
