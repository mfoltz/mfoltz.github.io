---
nav_exclude: true
search_exclude: false
---

# Script_GarlicAreaDebuff_DataServer

```csharp
public struct Script_GarlicAreaDebuff_DataServer
{
	static Script_GarlicAreaDebuff_DataServer()
	{
		Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Gameplay.Scripting", "Script_GarlicAreaDebuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataServer>.NativeClassPtr);
		Script_GarlicAreaDebuff_DataServer.NativeFieldInfoPtr_DynamicStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataServer>.NativeClassPtr, "DynamicStacks");
		Script_GarlicAreaDebuff_DataServer.NativeFieldInfoPtr_DynamicStacksPerTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataServer>.NativeClassPtr, "DynamicStacksPerTick");
		Script_GarlicAreaDebuff_DataServer.NativeFieldInfoPtr_TimeInterval = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataServer>.NativeClassPtr, "TimeInterval");
		Script_GarlicAreaDebuff_DataServer.NativeFieldInfoPtr_Timer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataServer>.NativeClassPtr, "Timer");
		Script_GarlicAreaDebuff_DataServer.NativeFieldInfoPtr_DamagePerTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataServer>.NativeClassPtr, "DamagePerTick");
		Script_GarlicAreaDebuff_DataServer.NativeFieldInfoPtr_DecreaseTimeInterval = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataServer>.NativeClassPtr, "DecreaseTimeInterval");
		Script_GarlicAreaDebuff_DataServer.NativeFieldInfoPtr_DecreaseDynamicStacksPerTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataServer>.NativeClassPtr, "DecreaseDynamicStacksPerTick");
		Script_GarlicAreaDebuff_DataServer.NativeFieldInfoPtr_GarlicFever = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataServer>.NativeClassPtr, "GarlicFever");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DynamicStacks;
	private static readonly IntPtr NativeFieldInfoPtr_DynamicStacksPerTick;
	private static readonly IntPtr NativeFieldInfoPtr_TimeInterval;
	private static readonly IntPtr NativeFieldInfoPtr_Timer;
	private static readonly IntPtr NativeFieldInfoPtr_DamagePerTick;
	private static readonly IntPtr NativeFieldInfoPtr_DecreaseTimeInterval;
	private static readonly IntPtr NativeFieldInfoPtr_DecreaseDynamicStacksPerTick;
	private static readonly IntPtr NativeFieldInfoPtr_GarlicFever;

	public float DynamicStacks;

	public float DynamicStacksPerTick;

	public float TimeInterval;

	public float Timer;

	public float DamagePerTick;

	public float DecreaseTimeInterval;

	public float DecreaseDynamicStacksPerTick;

	public PrefabGUID GarlicFever;
}
```
