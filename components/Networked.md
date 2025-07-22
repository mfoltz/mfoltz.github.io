---
nav_exclude: true
search_exclude: false
---

# Networked

```csharp
public struct Networked
{
	static Networked()
	{
		Il2CppClassPointerStore<Networked>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "Networked");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Networked>.NativeClassPtr);
		Networked.NativeFieldInfoPtr_CreateFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Networked>.NativeClassPtr, "CreateFrame");
		Networked.NativeMethodInfoPtr__ctor_Public_Void_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Networked>.NativeClassPtr, 100670248);
	}

	public unsafe Networked(int createFrame)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref createFrame;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Networked.NativeMethodInfoPtr__ctor_Public_Void_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Networked>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CreateFrame;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Int32_0;

	public int CreateFrame;
}
```

## Server Systems

- [NetworkedCreateTimeSystem](/systems/server/NetworkedCreateTimeSystem)
- [StaticTransformUpdateSystem_ReactToSpawn_Server](/systems/server/StaticTransformUpdateSystem_ReactToSpawn_Server)
- [UpdateSnapshotsSystem](/systems/server/UpdateSnapshotsSystem)
