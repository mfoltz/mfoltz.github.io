---
nav_exclude: true
search_exclude: true
---

# RagdollBoneTransformElement

```csharp
public struct RagdollBoneTransformElement
{
	static RagdollBoneTransformElement()
	{
		Il2CppClassPointerStore<RagdollBoneTransformElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RagdollBoneTransformElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RagdollBoneTransformElement>.NativeClassPtr);
		RagdollBoneTransformElement.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollBoneTransformElement>.NativeClassPtr, "Position");
		RagdollBoneTransformElement.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollBoneTransformElement>.NativeClassPtr, "Rotation");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RagdollBoneTransformElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;

	public Vector3 Position;

	public Quaternion Rotation;
}
```

## Client Systems

- [RagdollDriverSystem_WriteBones](/systems/client/RagdollDriverSystem_WriteBones)
