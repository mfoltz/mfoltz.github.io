---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PhysicsConstrainedBodyPair
{
	static PhysicsConstrainedBodyPair()
	{
		Il2CppClassPointerStore<PhysicsConstrainedBodyPair>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "PhysicsConstrainedBodyPair");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsConstrainedBodyPair>.NativeClassPtr);
		PhysicsConstrainedBodyPair.NativeFieldInfoPtr_Entities = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsConstrainedBodyPair>.NativeClassPtr, "Entities");
		PhysicsConstrainedBodyPair.NativeFieldInfoPtr_EnableCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsConstrainedBodyPair>.NativeClassPtr, "EnableCollision");
		PhysicsConstrainedBodyPair.NativeMethodInfoPtr_get_EntityA_Public_get_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsConstrainedBodyPair>.NativeClassPtr, 100665784);
		PhysicsConstrainedBodyPair.NativeMethodInfoPtr_get_EntityB_Public_get_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsConstrainedBodyPair>.NativeClassPtr, 100665785);
		PhysicsConstrainedBodyPair.NativeMethodInfoPtr__ctor_Public_Void_Entity_Entity_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsConstrainedBodyPair>.NativeClassPtr, 100665786);
	}
	public unsafe Entity EntityA
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsConstrainedBodyPair.NativeMethodInfoPtr_get_EntityA_Public_get_Entity_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe Entity EntityB
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsConstrainedBodyPair.NativeMethodInfoPtr_get_EntityB_Public_get_Entity_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe PhysicsConstrainedBodyPair(Entity entityA, Entity entityB, bool enableCollision)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityA;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityB;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref enableCollision;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsConstrainedBodyPair.NativeMethodInfoPtr__ctor_Public_Void_Entity_Entity_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsConstrainedBodyPair>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entities;
	private static readonly IntPtr NativeFieldInfoPtr_EnableCollision;
	private static readonly IntPtr NativeMethodInfoPtr_get_EntityA_Public_get_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_EntityB_Public_get_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Entity_Entity_Boolean_0;

	public EntityPair Entities;

	public int EnableCollision;
}
```
