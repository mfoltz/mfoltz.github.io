---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Stealthable
{
	static Stealthable()
	{
		Il2CppClassPointerStore<Stealthable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Stealthable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Stealthable>.NativeClassPtr);
		Stealthable.NativeFieldInfoPtr_IsStealthed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Stealthable>.NativeClassPtr, "IsStealthed");
		Stealthable.NativeFieldInfoPtr_AlwaysShowVFX = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Stealthable>.NativeClassPtr, "AlwaysShowVFX");
		Stealthable.NativeFieldInfoPtr_StealthBushId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Stealthable>.NativeClassPtr, "StealthBushId");
		Stealthable.NativeFieldInfoPtr_ModelInvisible = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Stealthable>.NativeClassPtr, "ModelInvisible");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Stealthable>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsStealthed;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysShowVFX;
	private static readonly IntPtr NativeFieldInfoPtr_StealthBushId;
	private static readonly IntPtr NativeFieldInfoPtr_ModelInvisible;

	public ModifiableBool IsStealthed;

	public ModifiableBool AlwaysShowVFX;

	public ModifiableInt StealthBushId;

	public ModifiableBool ModelInvisible;
}
```
