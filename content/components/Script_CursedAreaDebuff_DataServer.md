---
nav_exclude: true
search_exclude: true
---

# Script_CursedAreaDebuff_DataServer

```csharp
public struct Script_CursedAreaDebuff_DataServer
{
	static Script_CursedAreaDebuff_DataServer()
	{
		Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Gameplay.Scripting", "Script_CursedAreaDebuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr);
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_DynamicStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "DynamicStacks");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_DynamicStacksPerTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "DynamicStacksPerTick");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_TimeInterval = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "TimeInterval");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_Timer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "Timer");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_DamagePerTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "DamagePerTick");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_DecreaseTimeInterval = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "DecreaseTimeInterval");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_CurseBlockTimeInterval = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "CurseBlockTimeInterval");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_CurseBlockDecreaseDynamicStacksPerTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "CurseBlockDecreaseDynamicStacksPerTick");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_DecreaseDynamicStacksPerTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "DecreaseDynamicStacksPerTick");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_VisionModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "VisionModificationId");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_VisionReductionPerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "VisionReductionPerStack");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_VisionStartValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "VisionStartValue");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_VisionMinValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "VisionMinValue");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_ImmunityBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "ImmunityBuff");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_BlockCurseBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "BlockCurseBuff");
		Script_CursedAreaDebuff_DataServer.NativeFieldInfoPtr_CurseBlockStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, "CurseBlockStacks");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CursedAreaDebuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DynamicStacks;
	private static readonly IntPtr NativeFieldInfoPtr_DynamicStacksPerTick;
	private static readonly IntPtr NativeFieldInfoPtr_TimeInterval;
	private static readonly IntPtr NativeFieldInfoPtr_Timer;
	private static readonly IntPtr NativeFieldInfoPtr_DamagePerTick;
	private static readonly IntPtr NativeFieldInfoPtr_DecreaseTimeInterval;
	private static readonly IntPtr NativeFieldInfoPtr_CurseBlockTimeInterval;
	private static readonly IntPtr NativeFieldInfoPtr_CurseBlockDecreaseDynamicStacksPerTick;
	private static readonly IntPtr NativeFieldInfoPtr_DecreaseDynamicStacksPerTick;
	private static readonly IntPtr NativeFieldInfoPtr_VisionModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_VisionReductionPerStack;
	private static readonly IntPtr NativeFieldInfoPtr_VisionStartValue;
	private static readonly IntPtr NativeFieldInfoPtr_VisionMinValue;
	private static readonly IntPtr NativeFieldInfoPtr_ImmunityBuff;
	private static readonly IntPtr NativeFieldInfoPtr_BlockCurseBuff;
	private static readonly IntPtr NativeFieldInfoPtr_CurseBlockStacks;

	public float DynamicStacks;

	public float DynamicStacksPerTick;

	public float TimeInterval;

	public float Timer;

	public float DamagePerTick;

	public float DecreaseTimeInterval;

	public float CurseBlockTimeInterval;

	public float CurseBlockDecreaseDynamicStacksPerTick;

	public float DecreaseDynamicStacksPerTick;

	public ModificationId VisionModificationId;

	public float VisionReductionPerStack;

	public float VisionStartValue;

	public float VisionMinValue;

	public PrefabGUID ImmunityBuff;

	public PrefabGUID BlockCurseBuff;

	public byte CurseBlockStacks;
}
```
