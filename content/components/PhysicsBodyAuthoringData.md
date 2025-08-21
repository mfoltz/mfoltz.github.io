---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PhysicsBodyAuthoringData
{
	static PhysicsBodyAuthoringData()
	{
		Il2CppClassPointerStore<PhysicsBodyAuthoringData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "PhysicsBodyAuthoringData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsBodyAuthoringData>.NativeClassPtr);
		PhysicsBodyAuthoringData.NativeFieldInfoPtr_IsDynamic = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsBodyAuthoringData>.NativeClassPtr, "IsDynamic");
		PhysicsBodyAuthoringData.NativeFieldInfoPtr_Mass = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsBodyAuthoringData>.NativeClassPtr, "Mass");
		PhysicsBodyAuthoringData.NativeFieldInfoPtr_OverrideDefaultMassDistribution = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsBodyAuthoringData>.NativeClassPtr, "OverrideDefaultMassDistribution");
		PhysicsBodyAuthoringData.NativeFieldInfoPtr_CustomMassDistribution = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsBodyAuthoringData>.NativeClassPtr, "CustomMassDistribution");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsBodyAuthoringData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsDynamic;
	private static readonly IntPtr NativeFieldInfoPtr_Mass;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideDefaultMassDistribution;
	private static readonly IntPtr NativeFieldInfoPtr_CustomMassDistribution;

	public bool IsDynamic;

	public float Mass;

	public bool OverrideDefaultMassDistribution;

	public MassDistribution CustomMassDistribution;
}
```
