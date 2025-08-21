---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BloodHuntBuffer
{
	static BloodHuntBuffer()
	{
		Il2CppClassPointerStore<BloodHuntBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BloodHuntBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodHuntBuffer>.NativeClassPtr);
		BloodHuntBuffer.NativeFieldInfoPtr_BloodHuntTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodHuntBuffer>.NativeClassPtr, "BloodHuntTarget");
		BloodHuntBuffer.NativeFieldInfoPtr_IsUnlockedByStation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodHuntBuffer>.NativeClassPtr, "IsUnlockedByStation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodHuntBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BloodHuntTarget;
	private static readonly IntPtr NativeFieldInfoPtr_IsUnlockedByStation;

	public PrefabGUID BloodHuntTarget;

	public bool IsUnlockedByStation;
}
```
