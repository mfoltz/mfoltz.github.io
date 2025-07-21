---
nav_exclude: true
search_exclude: false
---

# DropTableOnDeath

```csharp
public struct DropTableOnDeath
{
	static DropTableOnDeath()
	{
		Il2CppClassPointerStore<DropTableOnDeath>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "DropTableOnDeath");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DropTableOnDeath>.NativeClassPtr);
		DropTableOnDeath.NativeFieldInfoPtr_Dropped = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableOnDeath>.NativeClassPtr, "Dropped");
		DropTableOnDeath.NativeFieldInfoPtr_CustomDropArc = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableOnDeath>.NativeClassPtr, "CustomDropArc");
		DropTableOnDeath.NativeFieldInfoPtr_MinRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableOnDeath>.NativeClassPtr, "MinRange");
		DropTableOnDeath.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableOnDeath>.NativeClassPtr, "MaxRange");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DropTableOnDeath>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Dropped;
	private static readonly IntPtr NativeFieldInfoPtr_CustomDropArc;
	private static readonly IntPtr NativeFieldInfoPtr_MinRange;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;

	public bool Dropped;

	public PrefabGUID CustomDropArc;

	public float MinRange;

	public float MaxRange;
}
```
