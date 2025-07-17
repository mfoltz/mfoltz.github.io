---
nav_exclude: true
search_exclude: true
---

# PlacementDestroyData

```csharp
public struct PlacementDestroyData
{
	static PlacementDestroyData()
	{
		Il2CppClassPointerStore<PlacementDestroyData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PlacementDestroyData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlacementDestroyData>.NativeClassPtr);
		PlacementDestroyData.NativeFieldInfoPtr_DestroyReason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlacementDestroyData>.NativeClassPtr, "DestroyReason");
		PlacementDestroyData.NativeMethodInfoPtr_get_ShouldPlayDestroyEffects_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PlacementDestroyData>.NativeClassPtr, 100664092);
		PlacementDestroyData.NativeMethodInfoPtr_get_IsBeingDestroyed_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PlacementDestroyData>.NativeClassPtr, 100664093);
	}
	public unsafe bool ShouldPlayDestroyEffects
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PlacementDestroyData.NativeMethodInfoPtr_get_ShouldPlayDestroyEffects_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool IsBeingDestroyed
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PlacementDestroyData.NativeMethodInfoPtr_get_IsBeingDestroyed_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlacementDestroyData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DestroyReason;
	private static readonly IntPtr NativeMethodInfoPtr_get_ShouldPlayDestroyEffects_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsBeingDestroyed_Public_get_Boolean_0;

	public TileModelDestroyReason DestroyReason;
}
```
