---
nav_exclude: true
search_exclude: true
---

# LoadToTargetWorld

```csharp
public struct LoadToTargetWorld
{
	static LoadToTargetWorld()
	{
		Il2CppClassPointerStore<LoadToTargetWorld>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "LoadToTargetWorld");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LoadToTargetWorld>.NativeClassPtr);
		LoadToTargetWorld.NativeFieldInfoPtr_WorldType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadToTargetWorld>.NativeClassPtr, "WorldType");
		LoadToTargetWorld.NativeFieldInfoPtr_TrimPersistentData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadToTargetWorld>.NativeClassPtr, "TrimPersistentData");
		LoadToTargetWorld.NativeMethodInfoPtr_get_TargetsMultipleWorlds_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LoadToTargetWorld>.NativeClassPtr, 100663782);
	}
	public unsafe bool TargetsMultipleWorlds
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LoadToTargetWorld.NativeMethodInfoPtr_get_TargetsMultipleWorlds_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LoadToTargetWorld>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WorldType;
	private static readonly IntPtr NativeFieldInfoPtr_TrimPersistentData;
	private static readonly IntPtr NativeMethodInfoPtr_get_TargetsMultipleWorlds_Public_get_Boolean_0;

	public WorldType WorldType;

	public bool TrimPersistentData;
}
```
