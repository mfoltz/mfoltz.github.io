---
nav_exclude: true
search_exclude: false
---

# Script_Slashers_DashHit_DataServer

```csharp
public struct Script_Slashers_DashHit_DataServer
{
	static Script_Slashers_DashHit_DataServer()
	{
		Il2CppClassPointerStore<Script_Slashers_DashHit_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Slashers_DashHit_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Slashers_DashHit_DataServer>.NativeClassPtr);
		Script_Slashers_DashHit_DataServer.NativeFieldInfoPtr_SpellDamageImpact = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Slashers_DashHit_DataServer>.NativeClassPtr, "SpellDamageImpact");
		Script_Slashers_DashHit_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Slashers_DashHit_DataServer>.NativeClassPtr, "Radius");
		Script_Slashers_DashHit_DataServer.NativeFieldInfoPtr_ImpactSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Slashers_DashHit_DataServer>.NativeClassPtr, "ImpactSequence");
		Script_Slashers_DashHit_DataServer.NativeFieldInfoPtr_HitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Slashers_DashHit_DataServer>.NativeClassPtr, "HitFilter");
		Script_Slashers_DashHit_DataServer.NativeFieldInfoPtr_DashReturn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Slashers_DashHit_DataServer>.NativeClassPtr, "DashReturn");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Slashers_DashHit_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellDamageImpact;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_ImpactSequence;
	private static readonly IntPtr NativeFieldInfoPtr_HitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_DashReturn;

	public DealDamageParameters SpellDamageImpact;

	public float Radius;

	public SequenceGUID ImpactSequence;

	public HitFilter HitFilter;

	public bool DashReturn;
}
```
