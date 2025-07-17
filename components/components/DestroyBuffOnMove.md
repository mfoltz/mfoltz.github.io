---
nav_exclude: true
search_exclude: true
---

# DestroyBuffOnMove

```csharp
[StructLayout(2)]
public struct DestroyBuffOnMove
{
	static DestroyBuffOnMove()
	{
		Il2CppClassPointerStore<DestroyBuffOnMove>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DestroyBuffOnMove");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyBuffOnMove>.NativeClassPtr);
		DestroyBuffOnMove.NativeFieldInfoPtr_minAge = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyBuffOnMove>.NativeClassPtr, "minAge");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyBuffOnMove>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_minAge;
	[FieldOffset(0)]
	public float minAge;
}
