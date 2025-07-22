---
nav_exclude: true
search_exclude: false
---

# Footstep

```csharp
public struct Footstep
{
	static Footstep()
	{
		Il2CppClassPointerStore<Footstep>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Footstep");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Footstep>.NativeClassPtr);
		Footstep.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Footstep>.NativeClassPtr, "Guid");
		Footstep.NativeFieldInfoPtr_PlayWhenNotMoving = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Footstep>.NativeClassPtr, "PlayWhenNotMoving");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Footstep>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_PlayWhenNotMoving;

	public FmodEventGuid Guid;

	public bool PlayWhenNotMoving;
}
```
