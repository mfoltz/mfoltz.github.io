---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BulletHellParticleSystem
{
	static BulletHellParticleSystem()
	{
		Il2CppClassPointerStore<BulletHellParticleSystem>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "BulletHellParticleSystem");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BulletHellParticleSystem>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BulletHellParticleSystem>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [ParticleBudgetSystem]({{% relref "systems/client/ParticleBudgetSystem.md" %}})
