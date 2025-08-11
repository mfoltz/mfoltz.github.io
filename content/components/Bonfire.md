---
nav_exclude: true
search_exclude: true
---

# Bonfire

```csharp
public struct Bonfire
{
	static Bonfire()
	{
		Il2CppClassPointerStore<Bonfire>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Bonfire");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Bonfire>.NativeClassPtr);
		Bonfire.NativeFieldInfoPtr_ActiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Bonfire>.NativeClassPtr, "ActiveSequenceGuid");
		Bonfire.NativeFieldInfoPtr_ActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Bonfire>.NativeClassPtr, "ActiveSequenceState");
		Bonfire.NativeFieldInfoPtr_InputItem = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Bonfire>.NativeClassPtr, "InputItem");
		Bonfire.NativeFieldInfoPtr_Strength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Bonfire>.NativeClassPtr, "Strength");
		Bonfire.NativeFieldInfoPtr_BurnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Bonfire>.NativeClassPtr, "BurnTime");
		Bonfire.NativeFieldInfoPtr_TimeToGetToFullStrength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Bonfire>.NativeClassPtr, "TimeToGetToFullStrength");
		Bonfire.NativeFieldInfoPtr_TimeToGetToZeroStrength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Bonfire>.NativeClassPtr, "TimeToGetToZeroStrength");
		Bonfire.NativeFieldInfoPtr_StartScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Bonfire>.NativeClassPtr, "StartScale");
		Bonfire.NativeFieldInfoPtr_EndScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Bonfire>.NativeClassPtr, "EndScale");
		Bonfire.NativeFieldInfoPtr_IsActive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Bonfire>.NativeClassPtr, "IsActive");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Bonfire>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_InputItem;
	private static readonly IntPtr NativeFieldInfoPtr_Strength;
	private static readonly IntPtr NativeFieldInfoPtr_BurnTime;
	private static readonly IntPtr NativeFieldInfoPtr_TimeToGetToFullStrength;
	private static readonly IntPtr NativeFieldInfoPtr_TimeToGetToZeroStrength;
	private static readonly IntPtr NativeFieldInfoPtr_StartScale;
	private static readonly IntPtr NativeFieldInfoPtr_EndScale;
	private static readonly IntPtr NativeFieldInfoPtr_IsActive;

	public SequenceGUID ActiveSequenceGuid;

	public SequenceState ActiveSequenceState;

	public PrefabGUID InputItem;

	public float Strength;

	public float BurnTime;

	public float TimeToGetToFullStrength;

	public float TimeToGetToZeroStrength;

	public float StartScale;

	public float EndScale;

	public bool IsActive;
}
```

## Server Systems

- [BonfireSystemUpdateCloud](/systems/server/BonfireSystemUpdateCloud)
- [BonfireSystem_Server](/systems/server/BonfireSystem_Server)

## Client Systems

- [BonfireSystemUpdateCloud](/systems/client/BonfireSystemUpdateCloud)
- [BonfireSystem_Client](/systems/client/BonfireSystem_Client)
