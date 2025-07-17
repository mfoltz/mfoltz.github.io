---
nav_exclude: true
search_exclude: true
---

# FormationOffsetBuffer

```csharp
[StructLayout(2)]
public struct FormationOffsetBuffer
{
	static FormationOffsetBuffer()
	{
		Il2CppClassPointerStore<FormationOffsetBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "FormationOffsetBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FormationOffsetBuffer>.NativeClassPtr);
		FormationOffsetBuffer.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FormationOffsetBuffer>.NativeClassPtr, "Offset");
		FormationOffsetBuffer.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FormationOffsetBuffer>.NativeClassPtr, "Rotation");
		FormationOffsetBuffer.NativeFieldInfoPtr_InitialRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FormationOffsetBuffer>.NativeClassPtr, "InitialRotation");
		FormationOffsetBuffer.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FormationOffsetBuffer>.NativeClassPtr, "Position");
		FormationOffsetBuffer.NativeFieldInfoPtr_FollowIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FormationOffsetBuffer>.NativeClassPtr, "FollowIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FormationOffsetBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Offset;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeFieldInfoPtr_InitialRotation;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_FollowIndex;
	[FieldOffset(0)]
	public float3 Offset;
	[FieldOffset(12)]
	public quaternion Rotation;
	[FieldOffset(28)]
	public quaternion InitialRotation;
	[FieldOffset(44)]
	public Nullable_Unboxed<float3> Position;
	[FieldOffset(60)]
	public int FollowIndex;
}
