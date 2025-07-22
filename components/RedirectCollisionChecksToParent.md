---
nav_exclude: true
search_exclude: true
---

# RedirectCollisionChecksToParent

```csharp
public struct RedirectCollisionChecksToParent
{
	static RedirectCollisionChecksToParent()
	{
		Il2CppClassPointerStore<RedirectCollisionChecksToParent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Physics", "RedirectCollisionChecksToParent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RedirectCollisionChecksToParent>.NativeClassPtr);
		RedirectCollisionChecksToParent.NativeFieldInfoPtr_Parent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RedirectCollisionChecksToParent>.NativeClassPtr, "Parent");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RedirectCollisionChecksToParent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Parent;

	public Entity Parent;
}
```
