# LastPathRequest

```csharp
[StructLayout(2)]
public struct LastPathRequest
{
	static LastPathRequest()
	{
		Il2CppClassPointerStore<LastPathRequest>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Pathfinding.dll", "ProjectM.Pathfinding", "LastPathRequest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LastPathRequest>.NativeClassPtr);
		LastPathRequest.NativeFieldInfoPtr_PathRequest = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LastPathRequest>.NativeClassPtr, "PathRequest");
		LastPathRequest.NativeFieldInfoPtr_HasLastPathRequest = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LastPathRequest>.NativeClassPtr, "HasLastPathRequest");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LastPathRequest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PathRequest;
	private static readonly IntPtr NativeFieldInfoPtr_HasLastPathRequest;
	[FieldOffset(0)]
	public PathRequest PathRequest;
	[FieldOffset(84)]
	[MarshalAs(4)]
	public bool HasLastPathRequest;
}
