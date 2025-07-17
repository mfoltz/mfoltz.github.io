---
nav_exclude: true
search_exclude: true
---

# RequestSceneHeader

```csharp
public struct RequestSceneHeader
{
	static RequestSceneHeader()
	{
		Il2CppClassPointerStore<RequestSceneHeader>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "RequestSceneHeader");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RequestSceneHeader>.NativeClassPtr);
		RequestSceneHeader.NativeFieldInfoPtr_HeaderData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RequestSceneHeader>.NativeClassPtr, "HeaderData");
		RequestSceneHeader.NativeMethodInfoPtr_get_IsCompleted_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RequestSceneHeader>.NativeClassPtr, 100663544);
		RequestSceneHeader.NativeMethodInfoPtr_Complete_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RequestSceneHeader>.NativeClassPtr, 100663545);
		RequestSceneHeader.NativeMethodInfoPtr_Dispose_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RequestSceneHeader>.NativeClassPtr, 100663546);
	}
	public unsafe bool IsCompleted
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RequestSceneHeader.NativeMethodInfoPtr_get_IsCompleted_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe void Complete()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RequestSceneHeader.NativeMethodInfoPtr_Complete_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RequestSceneHeader.NativeMethodInfoPtr_Dispose_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RequestSceneHeader>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HeaderData;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsCompleted_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_Complete_Public_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Void_0;

	public unsafe SceneHeaderUtility.HeaderData* HeaderData;
}
```

## Server Systems

- [Unity.Scenes.ResolveSceneReferenceSystem](/systems/Unity.Scenes.ResolveSceneReferenceSystem)
