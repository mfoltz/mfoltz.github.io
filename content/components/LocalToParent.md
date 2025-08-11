---
nav_exclude: true
search_exclude: true
---

# LocalToParent

```csharp
public struct LocalToParent
{
	static LocalToParent()
	{
		Il2CppClassPointerStore<LocalToParent>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Transforms", "LocalToParent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LocalToParent>.NativeClassPtr);
		LocalToParent.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LocalToParent>.NativeClassPtr, "Value");
		LocalToParent.NativeMethodInfoPtr_get_Right_Public_get_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalToParent>.NativeClassPtr, 100663468);
		LocalToParent.NativeMethodInfoPtr_get_Up_Public_get_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalToParent>.NativeClassPtr, 100663469);
		LocalToParent.NativeMethodInfoPtr_get_Forward_Public_get_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalToParent>.NativeClassPtr, 100663470);
		LocalToParent.NativeMethodInfoPtr_get_Position_Public_get_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalToParent>.NativeClassPtr, 100663471);
	}
	public unsafe float3 Right
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalToParent.NativeMethodInfoPtr_get_Right_Public_get_float3_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float3 Up
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalToParent.NativeMethodInfoPtr_get_Up_Public_get_float3_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float3 Forward
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalToParent.NativeMethodInfoPtr_get_Forward_Public_get_float3_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float3 Position
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalToParent.NativeMethodInfoPtr_get_Position_Public_get_float3_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LocalToParent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_get_Right_Public_get_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Up_Public_get_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Forward_Public_get_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Position_Public_get_float3_0;

	public float4x4 Value;
}
```
