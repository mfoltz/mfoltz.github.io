---
nav_exclude: true
search_exclude: true
---

# LocalToWorld

```csharp
public struct LocalToWorld
{
	static LocalToWorld()
	{
		Il2CppClassPointerStore<LocalToWorld>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Transforms.dll", "Unity.Transforms", "LocalToWorld");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LocalToWorld>.NativeClassPtr);
		LocalToWorld.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LocalToWorld>.NativeClassPtr, "Value");
		LocalToWorld.NativeMethodInfoPtr_get_Right_Public_get_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalToWorld>.NativeClassPtr, 100663344);
		LocalToWorld.NativeMethodInfoPtr_get_Up_Public_get_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalToWorld>.NativeClassPtr, 100663345);
		LocalToWorld.NativeMethodInfoPtr_get_Forward_Public_get_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalToWorld>.NativeClassPtr, 100663346);
		LocalToWorld.NativeMethodInfoPtr_get_Position_Public_get_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalToWorld>.NativeClassPtr, 100663347);
		LocalToWorld.NativeMethodInfoPtr_get_Rotation_Public_get_quaternion_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalToWorld>.NativeClassPtr, 100663348);
	}
	public unsafe float3 Right
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalToWorld.NativeMethodInfoPtr_get_Right_Public_get_float3_0, ref this, (void**)ptr, ref intPtr2);
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
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalToWorld.NativeMethodInfoPtr_get_Up_Public_get_float3_0, ref this, (void**)ptr, ref intPtr2);
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
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalToWorld.NativeMethodInfoPtr_get_Forward_Public_get_float3_0, ref this, (void**)ptr, ref intPtr2);
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
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalToWorld.NativeMethodInfoPtr_get_Position_Public_get_float3_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe quaternion Rotation
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalToWorld.NativeMethodInfoPtr_get_Rotation_Public_get_quaternion_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LocalToWorld>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_get_Right_Public_get_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Up_Public_get_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Forward_Public_get_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Position_Public_get_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Rotation_Public_get_quaternion_0;

	public float4x4 Value;
}
```
