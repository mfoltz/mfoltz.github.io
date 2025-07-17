---
nav_exclude: true
search_exclude: true
---

# FallToHeight

```csharp
[StructLayout(2)]
public struct FallToHeight
{
	static FallToHeight()
	{
		Il2CppClassPointerStore<FallToHeight>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "FallToHeight");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FallToHeight>.NativeClassPtr);
		FallToHeight.NativeFieldInfoPtr_Speed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FallToHeight>.NativeClassPtr, "Speed");
		FallToHeight.NativeFieldInfoPtr_Gravity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FallToHeight>.NativeClassPtr, "Gravity");
		FallToHeight.NativeFieldInfoPtr_IsGrounded = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FallToHeight>.NativeClassPtr, "IsGrounded");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FallToHeight>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Speed;
	private static readonly IntPtr NativeFieldInfoPtr_Gravity;
	private static readonly IntPtr NativeFieldInfoPtr_IsGrounded;
	[FieldOffset(0)]
	public float Speed;
	[FieldOffset(4)]
	public ModifiableFloat Gravity;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool IsGrounded;
}
