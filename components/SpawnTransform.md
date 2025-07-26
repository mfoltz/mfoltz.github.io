# SpawnTransform

```csharp
[StructLayout(2)]
public struct SpawnTransform
{
	static SpawnTransform()
	{
		Il2CppClassPointerStore<SpawnTransform>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpawnTransform");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnTransform>.NativeClassPtr);
		SpawnTransform.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnTransform>.NativeClassPtr, "Position");
		SpawnTransform.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnTransform>.NativeClassPtr, "Rotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnTransform>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	[FieldOffset(0)]
	public float3 Position;
	[FieldOffset(12)]
	public quaternion Rotation;
}
