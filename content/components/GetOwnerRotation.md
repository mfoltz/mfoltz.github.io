---
nav_exclude: true
search_exclude: true
---

```csharp
public struct GetOwnerRotation
{
	static GetOwnerRotation()
	{
		Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GetOwnerRotation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr);
		GetOwnerRotation.NativeFieldInfoPtr_OffsetDegreesClockwise = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr, "OffsetDegreesClockwise");
		GetOwnerRotation.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr, "Type");
		GetOwnerRotation.NativeFieldInfoPtr_RotationSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr, "RotationSource");
		GetOwnerRotation.NativeFieldInfoPtr_InverseRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr, "InverseRotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OffsetDegreesClockwise;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_RotationSource;
	private static readonly IntPtr NativeFieldInfoPtr_InverseRotation;

	public float OffsetDegreesClockwise;

	public GetRotationType Type;

	public GetOwnerRotationComponent.GetRotationSource RotationSource;

	public bool InverseRotation;
}
```

## Server Systems

- [GetOwnerRotationOnSpawnSystem]({{% relref "systems/server/GetOwnerRotationOnSpawnSystem.md" %}})
- [GetOwnerRotationSystem]({{% relref "systems/server/GetOwnerRotationSystem.md" %}})
