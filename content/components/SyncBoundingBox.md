---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SyncBoundingBox
{
	static SyncBoundingBox()
	{
		Il2CppClassPointerStore<SyncBoundingBox>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "SyncBoundingBox");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SyncBoundingBox>.NativeClassPtr);
		SyncBoundingBox.NativeFieldInfoPtr_MaxX = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncBoundingBox>.NativeClassPtr, "MaxX");
		SyncBoundingBox.NativeFieldInfoPtr_MinX = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncBoundingBox>.NativeClassPtr, "MinX");
		SyncBoundingBox.NativeFieldInfoPtr_MaxZ = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncBoundingBox>.NativeClassPtr, "MaxZ");
		SyncBoundingBox.NativeFieldInfoPtr_MinZ = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncBoundingBox>.NativeClassPtr, "MinZ");
		SyncBoundingBox.NativeMethodInfoPtr_ProjectPositionToBox_Public_float2_float2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SyncBoundingBox>.NativeClassPtr, 100670506);
	}

	public unsafe float2 ProjectPositionToBox(float2 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SyncBoundingBox.NativeMethodInfoPtr_ProjectPositionToBox_Public_float2_float2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SyncBoundingBox>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxX;
	private static readonly IntPtr NativeFieldInfoPtr_MinX;
	private static readonly IntPtr NativeFieldInfoPtr_MaxZ;
	private static readonly IntPtr NativeFieldInfoPtr_MinZ;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectPositionToBox_Public_float2_float2_0;

	public float MaxX;

	public float MinX;

	public float MaxZ;

	public float MinZ;
}
```

## Server Systems

- [SpawnCastleHeartSystem]({{% relref "systems/server/SpawnCastleHeartSystem.md" %}})
