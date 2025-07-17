---
nav_exclude: true
search_exclude: true
---

# PlaySequenceOnTargetOnDamageTaken

```csharp
public struct PlaySequenceOnTargetOnDamageTaken
{
	static PlaySequenceOnTargetOnDamageTaken()
	{
		Il2CppClassPointerStore<PlaySequenceOnTargetOnDamageTaken>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PlaySequenceOnTargetOnDamageTaken");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlaySequenceOnTargetOnDamageTaken>.NativeClassPtr);
		PlaySequenceOnTargetOnDamageTaken.NativeFieldInfoPtr_SequencePrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaySequenceOnTargetOnDamageTaken>.NativeClassPtr, "SequencePrefabGuid");
		PlaySequenceOnTargetOnDamageTaken.NativeFieldInfoPtr_DamageThreshold = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaySequenceOnTargetOnDamageTaken>.NativeClassPtr, "DamageThreshold");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlaySequenceOnTargetOnDamageTaken>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequencePrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_DamageThreshold;

	public SequenceGUID SequencePrefabGuid;

	public float DamageThreshold;
}
```
