# LightningConsumer

```csharp
[StructLayout(2)]
public struct LightningConsumer
{
	static LightningConsumer()
	{
		Il2CppClassPointerStore<LightningConsumer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.LightningStorm", "LightningConsumer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LightningConsumer>.NativeClassPtr);
		LightningConsumer.NativeFieldInfoPtr_ReplacePrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningConsumer>.NativeClassPtr, "ReplacePrefab");
		LightningConsumer.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningConsumer>.NativeClassPtr, "Prefab");
		LightningConsumer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningConsumer>.NativeClassPtr, "Radius");
		LightningConsumer.NativeFieldInfoPtr_ReplacePrefabIgnoreCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningConsumer>.NativeClassPtr, "ReplacePrefabIgnoreCollision");
		LightningConsumer.NativeFieldInfoPtr_AlterPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningConsumer>.NativeClassPtr, "AlterPosition");
		LightningConsumer.NativeFieldInfoPtr_SetConsumerAsOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningConsumer>.NativeClassPtr, "SetConsumerAsOwner");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LightningConsumer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ReplacePrefab;
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_ReplacePrefabIgnoreCollision;
	private static readonly IntPtr NativeFieldInfoPtr_AlterPosition;
	private static readonly IntPtr NativeFieldInfoPtr_SetConsumerAsOwner;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool ReplacePrefab;
	[FieldOffset(4)]
	public PrefabGUID Prefab;
	[FieldOffset(8)]
	public float Radius;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool ReplacePrefabIgnoreCollision;
	[FieldOffset(13)]
	[MarshalAs(4)]
	public bool AlterPosition;
	[FieldOffset(14)]
	[MarshalAs(4)]
	public bool SetConsumerAsOwner;
}
