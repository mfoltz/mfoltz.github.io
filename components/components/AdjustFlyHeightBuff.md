---
nav_exclude: true
search_exclude: true
---

# AdjustFlyHeightBuff

```csharp
[StructLayout(2)]
public struct AdjustFlyHeightBuff
{
	static AdjustFlyHeightBuff()
	{
		Il2CppClassPointerStore<AdjustFlyHeightBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AdjustFlyHeightBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdjustFlyHeightBuff>.NativeClassPtr);
		AdjustFlyHeightBuff.NativeFieldInfoPtr_Height = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdjustFlyHeightBuff>.NativeClassPtr, "Height");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdjustFlyHeightBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Height;
	[FieldOffset(0)]
	public float Height;
}
