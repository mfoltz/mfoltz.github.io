---
nav_exclude: true
search_exclude: true
---

# NameableInteractable

```csharp
public struct NameableInteractable
{
	static NameableInteractable()
	{
		Il2CppClassPointerStore<NameableInteractable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "NameableInteractable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NameableInteractable>.NativeClassPtr);
		NameableInteractable.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NameableInteractable>.NativeClassPtr, "Name");
		NameableInteractable.NativeFieldInfoPtr_OnlyAllyRename = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NameableInteractable>.NativeClassPtr, "OnlyAllyRename");
		NameableInteractable.NativeFieldInfoPtr_OnlyAllySee = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NameableInteractable>.NativeClassPtr, "OnlyAllySee");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NameableInteractable>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyAllyRename;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyAllySee;

	public FixedString64Bytes Name;

	public bool OnlyAllyRename;

	public bool OnlyAllySee;
}
```
