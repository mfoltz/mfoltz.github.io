---
nav_exclude: true
search_exclude: false
---

# SequenceBakingDependency

```csharp
public struct SequenceBakingDependency
{
	static SequenceBakingDependency()
	{
		Il2CppClassPointerStore<SequenceBakingDependency>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "Stunlock.Sequencer", "SequenceBakingDependency");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SequenceBakingDependency>.NativeClassPtr);
		SequenceBakingDependency.NativeFieldInfoPtr_SequenceEditorObjectGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceBakingDependency>.NativeClassPtr, "SequenceEditorObjectGuid");
		SequenceBakingDependency.NativeFieldInfoPtr_AssetDependencyGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceBakingDependency>.NativeClassPtr, "AssetDependencyGuid");
		SequenceBakingDependency.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SequenceBakingDependency>.NativeClassPtr, 100663625);
	}

	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SequenceBakingDependency.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SequenceBakingDependency>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceEditorObjectGuid;
	private static readonly IntPtr NativeFieldInfoPtr_AssetDependencyGuid;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;

	public AssetGuid SequenceEditorObjectGuid;

	public AssetGuid AssetDependencyGuid;
}
```
