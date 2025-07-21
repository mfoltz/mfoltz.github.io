---
nav_exclude: true
search_exclude: false
---

# PhysicsRubble

```csharp
public struct PhysicsRubble
{
	static PhysicsRubble()
	{
		Il2CppClassPointerStore<PhysicsRubble>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Physics", "PhysicsRubble");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsRubble>.NativeClassPtr);
		PhysicsRubble.NativeFieldInfoPtr_Age = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsRubble>.NativeClassPtr, "Age");
		PhysicsRubble.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsRubble>.NativeClassPtr, "Duration");
		PhysicsRubble.NativeFieldInfoPtr_DissolveDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsRubble>.NativeClassPtr, "DissolveDuration");
		PhysicsRubble.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsRubble>.NativeClassPtr, "Sequence");
		PhysicsRubble.NativeFieldInfoPtr_SpawnedSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsRubble>.NativeClassPtr, "SpawnedSequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsRubble>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Age;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_DissolveDuration;
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnedSequence;

	public float Age;

	public float Duration;

	public float DissolveDuration;

	public SequenceGUID Sequence;

	public bool SpawnedSequence;
}
```

## Client Systems

- [PhysicsRubbleSystem](/systems/client/PhysicsRubbleSystem)
