---
nav_exclude: true
search_exclude: true
---

# BuffReappliedEvent

```csharp
[StructLayout(2)]
public struct BuffReappliedEvent
{
	static BuffReappliedEvent()
	{
		Il2CppClassPointerStore<BuffReappliedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BuffReappliedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffReappliedEvent>.NativeClassPtr);
		BuffReappliedEvent.NativeFieldInfoPtr_BuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffReappliedEvent>.NativeClassPtr, "BuffEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffReappliedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffEntity;
	[FieldOffset(0)]
	public Entity BuffEntity;
}
