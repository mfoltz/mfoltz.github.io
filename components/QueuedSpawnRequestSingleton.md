# QueuedSpawnRequestSingleton

```csharp
[StructLayout(2)]
public struct QueuedSpawnRequestSingleton
{
	static QueuedSpawnRequestSingleton()
	{
		Il2CppClassPointerStore<QueuedSpawnRequestSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "QueuedSpawnRequestSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<QueuedSpawnRequestSingleton>.NativeClassPtr);
		QueuedSpawnRequestSingleton.NativeFieldInfoPtr_QueuedSpawnRequests = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<QueuedSpawnRequestSingleton>.NativeClassPtr, "QueuedSpawnRequests");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<QueuedSpawnRequestSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_QueuedSpawnRequests;
	[FieldOffset(0)]
	public NativeList<QueuedSpawnRequest> QueuedSpawnRequests;
}
