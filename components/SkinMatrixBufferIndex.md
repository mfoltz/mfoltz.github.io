---
nav_exclude: true
search_exclude: true
---

# SkinMatrixBufferIndex

```csharp
public struct SkinMatrixBufferIndex
{
	static SkinMatrixBufferIndex()
	{
		Il2CppClassPointerStore<SkinMatrixBufferIndex>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "SkinMatrixBufferIndex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SkinMatrixBufferIndex>.NativeClassPtr);
		SkinMatrixBufferIndex.NativeFieldInfoPtr_Null = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SkinMatrixBufferIndex>.NativeClassPtr, "Null");
		SkinMatrixBufferIndex.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SkinMatrixBufferIndex>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SkinMatrixBufferIndex>.NativeClassPtr, ref this));
	}
	public unsafe static int Null
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(SkinMatrixBufferIndex.NativeFieldInfoPtr_Null, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(SkinMatrixBufferIndex.NativeFieldInfoPtr_Null, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_Null;
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public int Value;
}
```

## Client Systems

- [PushMeshDataSystem](/systems/client/PushMeshDataSystem)
- [PushSkinMatrixSystem](/systems/client/PushSkinMatrixSystem)
