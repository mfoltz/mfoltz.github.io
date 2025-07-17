---
nav_exclude: true
search_exclude: true
---

# LinkToJointOwner

```csharp
public struct LinkToJointOwner
{
	static LinkToJointOwner()
	{
		Il2CppClassPointerStore<LinkToJointOwner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "LinkToJointOwner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LinkToJointOwner>.NativeClassPtr);
		LinkToJointOwner.NativeFieldInfoPtr_OwnerPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LinkToJointOwner>.NativeClassPtr, "OwnerPrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LinkToJointOwner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OwnerPrefab;

	public Entity OwnerPrefab;
}
```
