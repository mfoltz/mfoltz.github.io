---
nav_exclude: true
search_exclude: true
---

# BehaviourTreeBlackboardSize

```csharp
[StructLayout(2)]
public struct BehaviourTreeBlackboardSize
{
	static BehaviourTreeBlackboardSize()
	{
		Il2CppClassPointerStore<BehaviourTreeBlackboardSize>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Behaviours", "BehaviourTreeBlackboardSize");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTreeBlackboardSize>.NativeClassPtr);
		BehaviourTreeBlackboardSize.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeBlackboardSize>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTreeBlackboardSize>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public int Value;
}
