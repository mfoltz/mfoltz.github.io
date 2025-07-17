---
nav_exclude: true
search_exclude: true
---

# BaseBlockVariantBuffer

```csharp
[StructLayout(2)]
public struct BaseBlockVariantBuffer
{
	static BaseBlockVariantBuffer()
	{
		Il2CppClassPointerStore<BaseBlockVariantBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "BaseBlockVariantBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BaseBlockVariantBuffer>.NativeClassPtr);
		BaseBlockVariantBuffer.NativeFieldInfoPtr_BaseBlockTypeId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BaseBlockVariantBuffer>.NativeClassPtr, "BaseBlockTypeId");
		BaseBlockVariantBuffer.NativeFieldInfoPtr_PrefabEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BaseBlockVariantBuffer>.NativeClassPtr, "PrefabEntity");
		BaseBlockVariantBuffer.NativeFieldInfoPtr_RotationOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BaseBlockVariantBuffer>.NativeClassPtr, "RotationOffset");
		BaseBlockVariantBuffer.NativeFieldInfoPtr_TranslationOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BaseBlockVariantBuffer>.NativeClassPtr, "TranslationOffset");
		BaseBlockVariantBuffer.NativeFieldInfoPtr_SpawnRateFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BaseBlockVariantBuffer>.NativeClassPtr, "SpawnRateFactor");
		BaseBlockVariantBuffer.NativeMethodInfoPtr_get_Invalid_Public_Static_get_BaseBlockVariantBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BaseBlockVariantBuffer>.NativeClassPtr, 100664108);
	}
	public unsafe static BaseBlockVariantBuffer Invalid
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BaseBlockVariantBuffer.NativeMethodInfoPtr_get_Invalid_Public_Static_get_BaseBlockVariantBuffer_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BaseBlockVariantBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BaseBlockTypeId;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabEntity;
	private static readonly IntPtr NativeFieldInfoPtr_RotationOffset;
	private static readonly IntPtr NativeFieldInfoPtr_TranslationOffset;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnRateFactor;
	private static readonly IntPtr NativeMethodInfoPtr_get_Invalid_Public_Static_get_BaseBlockVariantBuffer_0;
	[FieldOffset(0)]
	public BaseBlockTypeId BaseBlockTypeId;
	[FieldOffset(8)]
	public Entity PrefabEntity;
	[FieldOffset(16)]
	public quaternion RotationOffset;
	[FieldOffset(32)]
	public float3 TranslationOffset;
	[FieldOffset(44)]
	public float SpawnRateFactor;
}
