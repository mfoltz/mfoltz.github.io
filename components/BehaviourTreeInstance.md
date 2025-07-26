# BehaviourTreeInstance

```csharp
[StructLayout(2)]
public struct BehaviourTreeInstance
{
	static BehaviourTreeInstance()
	{
		Il2CppClassPointerStore<BehaviourTreeInstance>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Behaviours", "BehaviourTreeInstance");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTreeInstance>.NativeClassPtr);
		BehaviourTreeInstance.NativeFieldInfoPtr_TreeEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeInstance>.NativeClassPtr, "TreeEntity");
		BehaviourTreeInstance.NativeFieldInfoPtr_ExpectedTreeEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeInstance>.NativeClassPtr, "ExpectedTreeEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTreeInstance>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TreeEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ExpectedTreeEntity;
	[FieldOffset(0)]
	public Entity TreeEntity;
	[FieldOffset(8)]
	public ModifiableEntity ExpectedTreeEntity;
}
