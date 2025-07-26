# BehaviourTree

```csharp
[StructLayout(2)]
public struct BehaviourTree
{
	static BehaviourTree()
	{
		Il2CppClassPointerStore<BehaviourTree>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "BehaviourTree");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTree>.NativeClassPtr);
		BehaviourTree.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTree>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTree>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Blob;
	[FieldOffset(0)]
	public BlobAssetReference<BehaviourTreeBlob> Blob;
}
