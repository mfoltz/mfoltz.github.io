---
nav_exclude: true
search_exclude: true
---

# VampireDownedBuff

```csharp
[StructLayout(2)]
public struct VampireDownedBuff
{
	static VampireDownedBuff()
	{
		Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "VampireDownedBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr);
		VampireDownedBuff.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr, "Source");
		VampireDownedBuff.NativeFieldInfoPtr_SourceSpell = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr, "SourceSpell");
		VampireDownedBuff.NativeFieldInfoPtr_SourceId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr, "SourceId");
		VampireDownedBuff.NativeFieldInfoPtr_SourceSpellId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr, "SourceSpellId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VampireDownedBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_SourceSpell;
	private static readonly IntPtr NativeFieldInfoPtr_SourceId;
	private static readonly IntPtr NativeFieldInfoPtr_SourceSpellId;
	[FieldOffset(0)]
	public Entity Source;
	[FieldOffset(8)]
	public Entity SourceSpell;
	[FieldOffset(16)]
	public PrefabGUID SourceId;
	[FieldOffset(20)]
	public PrefabGUID SourceSpellId;
}
