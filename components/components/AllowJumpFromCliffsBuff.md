---
nav_exclude: true
search_exclude: true
---

# AllowJumpFromCliffsBuff

```csharp
[StructLayout(2)]
public struct AllowJumpFromCliffsBuff
{
	static AllowJumpFromCliffsBuff()
	{
		Il2CppClassPointerStore<AllowJumpFromCliffsBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AllowJumpFromCliffsBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AllowJumpFromCliffsBuff>.NativeClassPtr);
		AllowJumpFromCliffsBuff.NativeFieldInfoPtr_AllowJumpModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AllowJumpFromCliffsBuff>.NativeClassPtr, "AllowJumpModificationId");
		AllowJumpFromCliffsBuff.NativeFieldInfoPtr_BlockJumpModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AllowJumpFromCliffsBuff>.NativeClassPtr, "BlockJumpModificationId");
		AllowJumpFromCliffsBuff.NativeFieldInfoPtr_ModificationPriority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AllowJumpFromCliffsBuff>.NativeClassPtr, "ModificationPriority");
		AllowJumpFromCliffsBuff.NativeFieldInfoPtr_AllowJump = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AllowJumpFromCliffsBuff>.NativeClassPtr, "AllowJump");
		AllowJumpFromCliffsBuff.NativeFieldInfoPtr_BlockJump = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AllowJumpFromCliffsBuff>.NativeClassPtr, "BlockJump");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AllowJumpFromCliffsBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AllowJumpModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_BlockJumpModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationPriority;
	private static readonly IntPtr NativeFieldInfoPtr_AllowJump;
	private static readonly IntPtr NativeFieldInfoPtr_BlockJump;
	[FieldOffset(0)]
	public ModificationId AllowJumpModificationId;
	[FieldOffset(4)]
	public ModificationId BlockJumpModificationId;
	[FieldOffset(8)]
	public int ModificationPriority;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool AllowJump;
	[FieldOffset(13)]
	[MarshalAs(4)]
	public bool BlockJump;
}
