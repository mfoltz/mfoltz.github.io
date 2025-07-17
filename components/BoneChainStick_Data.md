---
nav_exclude: true
search_exclude: true
---

# BoneChainStick_Data

```csharp
public struct BoneChainStick_Data
{
	static BoneChainStick_Data()
	{
		Il2CppClassPointerStore<BoneChainStick_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "BoneChainStick_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BoneChainStick_Data>.NativeClassPtr);
		BoneChainStick_Data.NativeFieldInfoPtr_Length = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainStick_Data>.NativeClassPtr, "Length");
		BoneChainStick_Data.NativeFieldInfoPtr_Stiffness = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainStick_Data>.NativeClassPtr, "Stiffness");
		BoneChainStick_Data.NativeFieldInfoPtr_FirstSegmentIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainStick_Data>.NativeClassPtr, "FirstSegmentIndex");
		BoneChainStick_Data.NativeFieldInfoPtr_SecondSegmentIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoneChainStick_Data>.NativeClassPtr, "SecondSegmentIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BoneChainStick_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Length;
	private static readonly IntPtr NativeFieldInfoPtr_Stiffness;
	private static readonly IntPtr NativeFieldInfoPtr_FirstSegmentIndex;
	private static readonly IntPtr NativeFieldInfoPtr_SecondSegmentIndex;

	public float Length;

	public float Stiffness;

	public int FirstSegmentIndex;

	public int SecondSegmentIndex;
}
```
