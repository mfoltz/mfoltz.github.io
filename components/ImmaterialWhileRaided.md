---
nav_exclude: true
search_exclude: false
---

# ImmaterialWhileRaided

```csharp
public struct ImmaterialWhileRaided
{
	static ImmaterialWhileRaided()
	{
		Il2CppClassPointerStore<ImmaterialWhileRaided>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "ImmaterialWhileRaided");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ImmaterialWhileRaided>.NativeClassPtr);
		ImmaterialWhileRaided.NativeFieldInfoPtr_BuffStateId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ImmaterialWhileRaided>.NativeClassPtr, "BuffStateId");
		ImmaterialWhileRaided.NativeFieldInfoPtr_TileModelId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ImmaterialWhileRaided>.NativeClassPtr, "TileModelId");
		ImmaterialWhileRaided.NativeMethodInfoPtr_get_IsImmaterial_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ImmaterialWhileRaided>.NativeClassPtr, 100671695);
	}
	public unsafe bool IsImmaterial
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ImmaterialWhileRaided.NativeMethodInfoPtr_get_IsImmaterial_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ImmaterialWhileRaided>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffStateId;
	private static readonly IntPtr NativeFieldInfoPtr_TileModelId;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsImmaterial_Public_get_Boolean_0;

	public ModificationId BuffStateId;

	public ModificationId TileModelId;
}
```
