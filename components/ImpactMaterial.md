---
nav_exclude: true
search_exclude: true
---

# ImpactMaterial

```csharp
public struct ImpactMaterial
{
	static ImpactMaterial()
	{
		Il2CppClassPointerStore<ImpactMaterial>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Sequencer", "ImpactMaterial");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ImpactMaterial>.NativeClassPtr);
		ImpactMaterial.NativeFieldInfoPtr_IntType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ImpactMaterial>.NativeClassPtr, "IntType");
		ImpactMaterial.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ImpactMaterial>.NativeClassPtr, "Offset");
		ImpactMaterial.NativeFieldInfoPtr_PlayOnSelf = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ImpactMaterial>.NativeClassPtr, "PlayOnSelf");
		ImpactMaterial.NativeMethodInfoPtr_get_Type_Public_get_ImpactMaterialType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ImpactMaterial>.NativeClassPtr, 100668896);
	}
	public unsafe ImpactMaterialType Type
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ImpactMaterial.NativeMethodInfoPtr_get_Type_Public_get_ImpactMaterialType_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ImpactMaterial>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IntType;
	private static readonly IntPtr NativeFieldInfoPtr_Offset;
	private static readonly IntPtr NativeFieldInfoPtr_PlayOnSelf;
	private static readonly IntPtr NativeMethodInfoPtr_get_Type_Public_get_ImpactMaterialType_0;

	public ModifiableInt IntType;

	public float3 Offset;

	public bool PlayOnSelf;
}
```
