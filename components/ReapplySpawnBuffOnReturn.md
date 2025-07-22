---
nav_exclude: true
search_exclude: false
---

# ReapplySpawnBuffOnReturn

```csharp
public struct ReapplySpawnBuffOnReturn
{
	static ReapplySpawnBuffOnReturn()
	{
		Il2CppClassPointerStore<ReapplySpawnBuffOnReturn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ReapplySpawnBuffOnReturn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReapplySpawnBuffOnReturn>.NativeClassPtr);
		ReapplySpawnBuffOnReturn.NativeFieldInfoPtr_Kind = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReapplySpawnBuffOnReturn>.NativeClassPtr, "Kind");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReapplySpawnBuffOnReturn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Kind;

	public SpawnBuffKind Kind;
}
```
