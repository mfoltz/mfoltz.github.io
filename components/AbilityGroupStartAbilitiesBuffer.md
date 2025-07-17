---
nav_exclude: true
search_exclude: true
---

# AbilityGroupStartAbilitiesBuffer

```csharp
[StructLayout(2)]
public struct AbilityGroupStartAbilitiesBuffer
{
	static AbilityGroupStartAbilitiesBuffer()
	{
		Il2CppClassPointerStore<AbilityGroupStartAbilitiesBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityGroupStartAbilitiesBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityGroupStartAbilitiesBuffer>.NativeClassPtr);
		AbilityGroupStartAbilitiesBuffer.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupStartAbilitiesBuffer>.NativeClassPtr, "PrefabGUID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityGroupStartAbilitiesBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	[FieldOffset(0)]
	public PrefabGUID PrefabGUID;
}
