---
nav_exclude: true
search_exclude: true
---

# NetworkSnapshot

```csharp
public struct NetworkSnapshot
{
	static NetworkSnapshot()
	{
		Il2CppClassPointerStore<NetworkSnapshot>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "NetworkSnapshot");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetworkSnapshot>.NativeClassPtr);
		NetworkSnapshot.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkSnapshot>.NativeClassPtr, "Type");
		NetworkSnapshot.NativeMethodInfoPtr__ctor_Public_Void_NetworkSnapshotType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkSnapshot>.NativeClassPtr, 100670424);
	}

	public unsafe NetworkSnapshot(NetworkSnapshotType type)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref type;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkSnapshot.NativeMethodInfoPtr__ctor_Public_Void_NetworkSnapshotType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetworkSnapshot>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_NetworkSnapshotType_0;

	public readonly NetworkSnapshotType Type;
}
```

## Server Systems

- [SetSnapshotOnDestroyedEntitiesSystem](/systems/server/SetSnapshotOnDestroyedEntitiesSystem)

## Client Systems

- [CleanUpWeakRefsSystem](/systems/client/CleanUpWeakRefsSystem)
