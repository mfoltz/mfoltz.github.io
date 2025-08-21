---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_Gorgon_Rush_Consume_DataServer
{
	static Script_Gorgon_Rush_Consume_DataServer()
	{
		Il2CppClassPointerStore<Script_Gorgon_Rush_Consume_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Gorgon_Rush_Consume_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Gorgon_Rush_Consume_DataServer>.NativeClassPtr);
		Script_Gorgon_Rush_Consume_DataServer.NativeFieldInfoPtr_SpellDamageImpact = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Gorgon_Rush_Consume_DataServer>.NativeClassPtr, "SpellDamageImpact");
		Script_Gorgon_Rush_Consume_DataServer.NativeFieldInfoPtr_SpellDamageArea = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Gorgon_Rush_Consume_DataServer>.NativeClassPtr, "SpellDamageArea");
		Script_Gorgon_Rush_Consume_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Gorgon_Rush_Consume_DataServer>.NativeClassPtr, "Radius");
		Script_Gorgon_Rush_Consume_DataServer.NativeFieldInfoPtr_BuffType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Gorgon_Rush_Consume_DataServer>.NativeClassPtr, "BuffType");
		Script_Gorgon_Rush_Consume_DataServer.NativeFieldInfoPtr_ConsumeSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Gorgon_Rush_Consume_DataServer>.NativeClassPtr, "ConsumeSequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Gorgon_Rush_Consume_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellDamageImpact;
	private static readonly IntPtr NativeFieldInfoPtr_SpellDamageArea;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_BuffType;
	private static readonly IntPtr NativeFieldInfoPtr_ConsumeSequence;

	public DealDamageParameters SpellDamageImpact;

	public DealDamageParameters SpellDamageArea;

	public float Radius;

	public PrefabGUID BuffType;

	public SequenceGUID ConsumeSequence;
}
```
