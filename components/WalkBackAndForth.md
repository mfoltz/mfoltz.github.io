---
nav_exclude: true
search_exclude: true
---

# WalkBackAndForth

```csharp
public struct WalkBackAndForth
{
	static WalkBackAndForth()
	{
		Il2CppClassPointerStore<WalkBackAndForth>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "WalkBackAndForth");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WalkBackAndForth>.NativeClassPtr);
		WalkBackAndForth.NativeFieldInfoPtr_Distance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WalkBackAndForth>.NativeClassPtr, "Distance");
		WalkBackAndForth.NativeFieldInfoPtr_StartPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WalkBackAndForth>.NativeClassPtr, "StartPosition");
		WalkBackAndForth.NativeFieldInfoPtr_Left = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WalkBackAndForth>.NativeClassPtr, "Left");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WalkBackAndForth>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Distance;
	private static readonly IntPtr NativeFieldInfoPtr_StartPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Left;

	public float Distance;

	public Nullable_Unboxed<float2> StartPosition;

	public bool Left;
}
```

## Server Systems

- [ProjectM.WalkBackAndForthSystem](/systems/ProjectM.WalkBackAndForthSystem)
