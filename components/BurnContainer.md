---
nav_exclude: true
search_exclude: true
---

# BurnContainer

```csharp
public struct BurnContainer
{
	static BurnContainer()
	{
		Il2CppClassPointerStore<BurnContainer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BurnContainer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BurnContainer>.NativeClassPtr);
		BurnContainer.NativeFieldInfoPtr_Progress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BurnContainer>.NativeClassPtr, "Progress");
		BurnContainer.NativeFieldInfoPtr_Enabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BurnContainer>.NativeClassPtr, "Enabled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BurnContainer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Progress;
	private static readonly IntPtr NativeFieldInfoPtr_Enabled;

	public float Progress;

	public bool Enabled;
}
```

## Server Systems

- [ProjectM.BonfireSystem_Server](/systems/ProjectM.BonfireSystem_Server)
