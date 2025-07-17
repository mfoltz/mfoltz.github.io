---
nav_exclude: true
search_exclude: true
---

# SmurfProjectile_HitListServer

```csharp
public struct SmurfProjectile_HitListServer
{
	static SmurfProjectile_HitListServer()
	{
		Il2CppClassPointerStore<SmurfProjectile_HitListServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "SmurfProjectile_HitListServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SmurfProjectile_HitListServer>.NativeClassPtr);
		SmurfProjectile_HitListServer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmurfProjectile_HitListServer>.NativeClassPtr, "Entity");
		SmurfProjectile_HitListServer.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SmurfProjectile_HitListServer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SmurfProjectile_HitListServer>.NativeClassPtr, 100665594);
	}

	public unsafe bool Equals(SmurfProjectile_HitListServer other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SmurfProjectile_HitListServer.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SmurfProjectile_HitListServer_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SmurfProjectile_HitListServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SmurfProjectile_HitListServer_0;

	public Entity Entity;
}
```
