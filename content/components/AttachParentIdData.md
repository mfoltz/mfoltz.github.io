---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AttachParentIdData
{
	static AttachParentIdData()
	{
		Il2CppClassPointerStore<AttachParentIdData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AttachParentIdData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AttachParentIdData>.NativeClassPtr);
		AttachParentIdData.NativeFieldInfoPtr_CurrentIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachParentIdData>.NativeClassPtr, "CurrentIndex");
		AttachParentIdData.NativeMethodInfoPtr_GetParentIdCount_Public_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AttachParentIdData>.NativeClassPtr, 100667118);
	}

	public unsafe int GetParentIdCount()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AttachParentIdData.NativeMethodInfoPtr_GetParentIdCount_Public_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AttachParentIdData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentIndex;
	private static readonly IntPtr NativeMethodInfoPtr_GetParentIdCount_Public_Int32_0;

	public int CurrentIndex;
}
```

## Server Systems

- [AttachParentIdSystem]({{% relref "systems/server/AttachParentIdSystem.md" %}})
