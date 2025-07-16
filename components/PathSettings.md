# PathSettings

```csharp
[StructLayout(2)]
public struct PathSettings
{
	static PathSettings()
	{
		Il2CppClassPointerStore<PathSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PathSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PathSettings>.NativeClassPtr);
		PathSettings.NativeFieldInfoPtr_Looping = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathSettings>.NativeClassPtr, "Looping");
		PathSettings.NativeFieldInfoPtr_PathColor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathSettings>.NativeClassPtr, "PathColor");
		PathSettings.NativeFieldInfoPtr_FirstNode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathSettings>.NativeClassPtr, "FirstNode");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PathSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Looping;
	private static readonly IntPtr NativeFieldInfoPtr_PathColor;
	private static readonly IntPtr NativeFieldInfoPtr_FirstNode;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Looping;
	[FieldOffset(4)]
	public Color PathColor;
	[FieldOffset(20)]
	public Entity FirstNode;
}
