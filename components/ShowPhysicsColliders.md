# ShowPhysicsColliders

```csharp
[StructLayout(2)]
public struct ShowPhysicsColliders
{
	static ShowPhysicsColliders()
	{
		Il2CppClassPointerStore<ShowPhysicsColliders>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "ShowPhysicsColliders");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShowPhysicsColliders>.NativeClassPtr);
		ShowPhysicsColliders.NativeFieldInfoPtr_CollisionFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowPhysicsColliders>.NativeClassPtr, "CollisionFilter");
		ShowPhysicsColliders.NativeFieldInfoPtr_ShowServerWorld = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowPhysicsColliders>.NativeClassPtr, "ShowServerWorld");
		ShowPhysicsColliders.NativeFieldInfoPtr_MaterialToUse = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowPhysicsColliders>.NativeClassPtr, "MaterialToUse");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShowPhysicsColliders>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CollisionFilter;
	private static readonly IntPtr NativeFieldInfoPtr_ShowServerWorld;
	private static readonly IntPtr NativeFieldInfoPtr_MaterialToUse;
	[FieldOffset(0)]
	public uint CollisionFilter;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool ShowServerWorld;
	[FieldOffset(8)]
	public DebugPhysicsColliderMaterial MaterialToUse;
}
