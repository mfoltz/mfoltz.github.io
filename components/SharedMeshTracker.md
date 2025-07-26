# SharedMeshTracker

```csharp
[StructLayout(2)]
public struct SharedMeshTracker
{
	static SharedMeshTracker()
	{
		Il2CppClassPointerStore<SharedMeshTracker>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "SharedMeshTracker");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SharedMeshTracker>.NativeClassPtr);
		SharedMeshTracker.NativeFieldInfoPtr_VersionHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SharedMeshTracker>.NativeClassPtr, "VersionHash");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SharedMeshTracker>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VersionHash;
	[FieldOffset(0)]
	public int VersionHash;
}
