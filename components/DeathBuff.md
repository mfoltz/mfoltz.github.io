---
nav_exclude: true
search_exclude: true
---

# DeathBuff

```csharp
[StructLayout(2)]
public struct DeathBuff
{
	static DeathBuff()
	{
		Il2CppClassPointerStore<DeathBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DeathBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DeathBuff>.NativeClassPtr);
		DeathBuff.NativeFieldInfoPtr_DestroyAfterDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathBuff>.NativeClassPtr, "DestroyAfterDuration");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DeathBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DestroyAfterDuration;
	[FieldOffset(0)]
	public float DestroyAfterDuration;
}
