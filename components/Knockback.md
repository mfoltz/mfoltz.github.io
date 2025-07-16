# Knockback

```csharp
[StructLayout(2)]
public struct Knockback
{
	static Knockback()
	{
		Il2CppClassPointerStore<Knockback>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Knockback");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Knockback>.NativeClassPtr);
		Knockback.NativeFieldInfoPtr_CanCastModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Knockback>.NativeClassPtr, "CanCastModId");
		Knockback.NativeFieldInfoPtr_CanMoveModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Knockback>.NativeClassPtr, "CanMoveModId");
		Knockback.NativeFieldInfoPtr_Importance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Knockback>.NativeClassPtr, "Importance");
		Knockback.NativeFieldInfoPtr_ApplyStun = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Knockback>.NativeClassPtr, "ApplyStun");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Knockback>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CanCastModId;
	private static readonly IntPtr NativeFieldInfoPtr_CanMoveModId;
	private static readonly IntPtr NativeFieldInfoPtr_Importance;
	private static readonly IntPtr NativeFieldInfoPtr_ApplyStun;
	[FieldOffset(0)]
	public ModificationId CanCastModId;
	[FieldOffset(4)]
	public ModificationId CanMoveModId;
	[FieldOffset(8)]
	public int Importance;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool ApplyStun;
}
