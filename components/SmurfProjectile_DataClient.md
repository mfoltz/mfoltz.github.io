---
nav_exclude: true
search_exclude: true
---

# SmurfProjectile_DataClient

```csharp
public struct SmurfProjectile_DataClient
{
	static SmurfProjectile_DataClient()
	{
		Il2CppClassPointerStore<SmurfProjectile_DataClient>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "SmurfProjectile_DataClient");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SmurfProjectile_DataClient>.NativeClassPtr);
		SmurfProjectile_DataClient.NativeFieldInfoPtr_UpdateSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmurfProjectile_DataClient>.NativeClassPtr, "UpdateSequence");
		SmurfProjectile_DataClient.NativeFieldInfoPtr_SequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmurfProjectile_DataClient>.NativeClassPtr, "SequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SmurfProjectile_DataClient>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UpdateSequence;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceState;

	public SequenceGUID UpdateSequence;

	public SequenceState SequenceState;
}
```
