---
nav_exclude: true
search_exclude: true
---

# Refinementstation

```csharp
public struct Refinementstation
{
	static Refinementstation()
	{
		Il2CppClassPointerStore<Refinementstation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Refinementstation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr);
		Refinementstation.NativeFieldInfoPtr_RefiningStartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, "RefiningStartTime");
		Refinementstation.NativeFieldInfoPtr_InputInventoryEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, "InputInventoryEntity");
		Refinementstation.NativeFieldInfoPtr_OutputInventoryEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, "OutputInventoryEntity");
		Refinementstation.NativeFieldInfoPtr_CurrentRecipeGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, "CurrentRecipeGuid");
		Refinementstation.NativeFieldInfoPtr_Status = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, "Status");
		Refinementstation.NativeFieldInfoPtr_InventoryPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, "InventoryPrefabGuid");
		Refinementstation.NativeFieldInfoPtr_ActiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, "ActiveSequenceGuid");
		Refinementstation.NativeFieldInfoPtr_InactiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, "InactiveSequenceGuid");
		Refinementstation.NativeFieldInfoPtr_ActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, "ActiveSequenceState");
		Refinementstation.NativeFieldInfoPtr_InactiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, "InactiveSequenceState");
		Refinementstation.NativeFieldInfoPtr_IsWorking = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, "IsWorking");
		Refinementstation.NativeFieldInfoPtr_LastInventoryChangedVersion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, "LastInventoryChangedVersion");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Refinementstation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RefiningStartTime;
	private static readonly IntPtr NativeFieldInfoPtr_InputInventoryEntity;
	private static readonly IntPtr NativeFieldInfoPtr_OutputInventoryEntity;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentRecipeGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Status;
	private static readonly IntPtr NativeFieldInfoPtr_InventoryPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_InactiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_InactiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_IsWorking;
	private static readonly IntPtr NativeFieldInfoPtr_LastInventoryChangedVersion;

	public double RefiningStartTime;

	public NetworkedEntity InputInventoryEntity;

	public NetworkedEntity OutputInventoryEntity;

	public PrefabGUID CurrentRecipeGuid;

	public RefinementStatus Status;

	public PrefabGUID InventoryPrefabGuid;

	public SequenceGUID ActiveSequenceGuid;

	public SequenceGUID InactiveSequenceGuid;

	public SequenceState ActiveSequenceState;

	public SequenceState InactiveSequenceState;

	public bool IsWorking;

	public byte LastInventoryChangedVersion;
}
```

## Server Systems

- [ProjectM.RefinementstationSpawnSystem](/systems/ProjectM.RefinementstationSpawnSystem)
