---
nav_exclude: true
search_exclude: true
---

# AbilityTarget

```csharp
[StructLayout(2)]
public struct AbilityTarget
{
	static AbilityTarget()
	{
		Il2CppClassPointerStore<AbilityTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityTarget>.NativeClassPtr);
		AbilityTarget.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityTarget>.NativeClassPtr, "Target");
		AbilityTarget.NativeFieldInfoPtr_GetTargetType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityTarget>.NativeClassPtr, "GetTargetType");
		AbilityTarget.NativeFieldInfoPtr_Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityTarget>.NativeClassPtr, "Buff");
		AbilityTarget.NativeFieldInfoPtr_BuffCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityTarget>.NativeClassPtr, "BuffCategory");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_GetTargetType;
	private static readonly IntPtr NativeFieldInfoPtr_Buff;
	private static readonly IntPtr NativeFieldInfoPtr_BuffCategory;
	[FieldOffset(0)]
	public NetworkedEntity Target;
	[FieldOffset(12)]
	public AbilityTarget.Type GetTargetType;
	[FieldOffset(16)]
	public PrefabIdentifier Buff;
	[FieldOffset(24)]
	public BuffCategoryFlag BuffCategory;
	public enum Type
	{
		None = -1,
		InteractTarget,
		GetFromBuffType,
		GetFromBuffCategory,
		GetSpellTargetFromBuffType
	}
}
