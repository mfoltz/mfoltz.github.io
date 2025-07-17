---
nav_exclude: true
search_exclude: true
---

# WorldFrame

```csharp
[StructLayout(2)]
public struct WorldFrame
{
	static WorldFrame()
	{
		Il2CppClassPointerStore<WorldFrame>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "WorldFrame");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldFrame>.NativeClassPtr);
		WorldFrame.NativeFieldInfoPtr_Frame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldFrame>.NativeClassPtr, "Frame");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldFrame>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Frame;
	[FieldOffset(0)]
	public int Frame;
}
