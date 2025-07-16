# SubSceneSpawnChainPrefab

```csharp
[StructLayout(2)]
public struct SubSceneSpawnChainPrefab
{
	static SubSceneSpawnChainPrefab()
	{
		Il2CppClassPointerStore<SubSceneSpawnChainPrefab>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SubSceneSpawnChainPrefab");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SubSceneSpawnChainPrefab>.NativeClassPtr);
		SubSceneSpawnChainPrefab.NativeFieldInfoPtr_GUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SubSceneSpawnChainPrefab>.NativeClassPtr, "GUID");
		SubSceneSpawnChainPrefab.NativeFieldInfoPtr_PrefabType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SubSceneSpawnChainPrefab>.NativeClassPtr, "PrefabType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SubSceneSpawnChainPrefab>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GUID;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabType;
	[FieldOffset(0)]
	public PrefabGUID GUID;
	[FieldOffset(4)]
	public SubSceneSpawnChainPrefabType PrefabType;
}
