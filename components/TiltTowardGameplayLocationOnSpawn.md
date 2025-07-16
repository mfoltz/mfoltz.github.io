# TiltTowardGameplayLocationOnSpawn

```csharp
[StructLayout(2)]
public struct TiltTowardGameplayLocationOnSpawn
{
	static TiltTowardGameplayLocationOnSpawn()
	{
		Il2CppClassPointerStore<TiltTowardGameplayLocationOnSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TiltTowardGameplayLocationOnSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TiltTowardGameplayLocationOnSpawn>.NativeClassPtr);
		TiltTowardGameplayLocationOnSpawn.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TiltTowardGameplayLocationOnSpawn>.NativeClassPtr, "Offset");
		TiltTowardGameplayLocationOnSpawn.NativeFieldInfoPtr_MinDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TiltTowardGameplayLocationOnSpawn>.NativeClassPtr, "MinDistance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TiltTowardGameplayLocationOnSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Offset;
	private static readonly IntPtr NativeFieldInfoPtr_MinDistance;
	[FieldOffset(0)]
	public float3 Offset;
	[FieldOffset(12)]
	public float MinDistance;
}
