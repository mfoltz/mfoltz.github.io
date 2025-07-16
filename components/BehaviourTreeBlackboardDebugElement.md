# BehaviourTreeBlackboardDebugElement

```csharp
[StructLayout(2)]
public struct BehaviourTreeBlackboardDebugElement
{
	static BehaviourTreeBlackboardDebugElement()
	{
		Il2CppClassPointerStore<BehaviourTreeBlackboardDebugElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Behaviours", "BehaviourTreeBlackboardDebugElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTreeBlackboardDebugElement>.NativeClassPtr);
		BehaviourTreeBlackboardDebugElement.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeBlackboardDebugElement>.NativeClassPtr, "Guid");
		BehaviourTreeBlackboardDebugElement.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeBlackboardDebugElement>.NativeClassPtr, "Name");
		BehaviourTreeBlackboardDebugElement.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeBlackboardDebugElement>.NativeClassPtr, "Index");
		BehaviourTreeBlackboardDebugElement.NativeFieldInfoPtr_RegisterType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeBlackboardDebugElement>.NativeClassPtr, "RegisterType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTreeBlackboardDebugElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_Index;
	private static readonly IntPtr NativeFieldInfoPtr_RegisterType;
	[FieldOffset(0)]
	public FixedString64Bytes Guid;
	[FieldOffset(64)]
	public FixedString64Bytes Name;
	[FieldOffset(128)]
	public int Index;
	[FieldOffset(132)]
	public BlackboardRegisterType RegisterType;
}
