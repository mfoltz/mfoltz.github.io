---
nav_exclude: true
search_exclude: false
---

# TechItemRequirementBuffer

```csharp
public struct TechItemRequirementBuffer
{
	static TechItemRequirementBuffer()
	{
		Il2CppClassPointerStore<TechItemRequirementBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TechItemRequirementBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TechItemRequirementBuffer>.NativeClassPtr);
		TechItemRequirementBuffer.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TechItemRequirementBuffer>.NativeClassPtr, "Guid");
		TechItemRequirementBuffer.NativeFieldInfoPtr_Stacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TechItemRequirementBuffer>.NativeClassPtr, "Stacks");
		TechItemRequirementBuffer.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TechItemRequirementBuffer>.NativeClassPtr, 100664699);
	}
	public unsafe InventoryBuffer ToInventoryBuffer
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TechItemRequirementBuffer.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TechItemRequirementBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_Stacks;
	private static readonly IntPtr NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0;

	public PrefabGUID Guid;

	public int Stacks;
}
```

## Server Systems

- [SetupServerSettings](/systems/server/SetupServerSettings)

## Client Systems

- [SetupServerSettings](/systems/client/SetupServerSettings)
