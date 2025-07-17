---
nav_exclude: true
search_exclude: true
---

# Buff_StacksIncreaseEvent

```csharp
[StructLayout(2)]
public struct Buff_StacksIncreaseEvent
{
	static Buff_StacksIncreaseEvent()
	{
		Il2CppClassPointerStore<Buff_StacksIncreaseEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Buff_StacksIncreaseEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff_StacksIncreaseEvent>.NativeClassPtr);
		Buff_StacksIncreaseEvent.NativeFieldInfoPtr_Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_StacksIncreaseEvent>.NativeClassPtr, "Buff");
		Buff_StacksIncreaseEvent.NativeFieldInfoPtr_NewStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_StacksIncreaseEvent>.NativeClassPtr, "NewStacks");
		Buff_StacksIncreaseEvent.NativeFieldInfoPtr_OldStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_StacksIncreaseEvent>.NativeClassPtr, "OldStacks");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff_StacksIncreaseEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Buff;
	private static readonly IntPtr NativeFieldInfoPtr_NewStacks;
	private static readonly IntPtr NativeFieldInfoPtr_OldStacks;
	[FieldOffset(0)]
	public Entity Buff;
	[FieldOffset(8)]
	public byte NewStacks;
	[FieldOffset(9)]
	public byte OldStacks;
}
