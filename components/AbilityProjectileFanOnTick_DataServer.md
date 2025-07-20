---
nav_exclude: true
search_exclude: true
---

# AbilityProjectileFanOnTick_DataServer

```csharp
public struct AbilityProjectileFanOnTick_DataServer
{
	static AbilityProjectileFanOnTick_DataServer()
	{
		Il2CppClassPointerStore<AbilityProjectileFanOnTick_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "AbilityProjectileFanOnTick_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityProjectileFanOnTick_DataServer>.NativeClassPtr);
		AbilityProjectileFanOnTick_DataServer.NativeFieldInfoPtr_Angle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityProjectileFanOnTick_DataServer>.NativeClassPtr, "Angle");
		AbilityProjectileFanOnTick_DataServer.NativeFieldInfoPtr_RandomOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityProjectileFanOnTick_DataServer>.NativeClassPtr, "RandomOffset");
		AbilityProjectileFanOnTick_DataServer.NativeFieldInfoPtr_IndividualRandom = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityProjectileFanOnTick_DataServer>.NativeClassPtr, "IndividualRandom");
		AbilityProjectileFanOnTick_DataServer.NativeFieldInfoPtr_NewProjectileEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityProjectileFanOnTick_DataServer>.NativeClassPtr, "NewProjectileEntity");
		AbilityProjectileFanOnTick_DataServer.NativeFieldInfoPtr_NewProjectileEntityAlternate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityProjectileFanOnTick_DataServer>.NativeClassPtr, "NewProjectileEntityAlternate");
		AbilityProjectileFanOnTick_DataServer.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityProjectileFanOnTick_DataServer>.NativeClassPtr, "Count");
		AbilityProjectileFanOnTick_DataServer.NativeFieldInfoPtr_TickCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityProjectileFanOnTick_DataServer>.NativeClassPtr, "TickCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityProjectileFanOnTick_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Angle;
	private static readonly IntPtr NativeFieldInfoPtr_RandomOffset;
	private static readonly IntPtr NativeFieldInfoPtr_IndividualRandom;
	private static readonly IntPtr NativeFieldInfoPtr_NewProjectileEntity;
	private static readonly IntPtr NativeFieldInfoPtr_NewProjectileEntityAlternate;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	private static readonly IntPtr NativeFieldInfoPtr_TickCount;

	public float Angle;

	public float RandomOffset;

	public float IndividualRandom;

	public PrefabGUID NewProjectileEntity;

	public PrefabGUID NewProjectileEntityAlternate;

	public int Count;

	public int TickCount;
}
```
