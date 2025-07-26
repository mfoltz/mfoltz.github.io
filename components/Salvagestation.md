# Salvagestation

```csharp
[StructLayout(2)]
public struct Salvagestation
{
	static Salvagestation()
	{
		Il2CppClassPointerStore<Salvagestation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Salvagestation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr);
		Salvagestation.NativeFieldInfoPtr_InputInventoryEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "InputInventoryEntity");
		Salvagestation.NativeFieldInfoPtr_OutputInventoryEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "OutputInventoryEntity");
		Salvagestation.NativeFieldInfoPtr_Progress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "Progress");
		Salvagestation.NativeFieldInfoPtr_CurrentItemGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "CurrentItemGuid");
		Salvagestation.NativeFieldInfoPtr_Status = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "Status");
		Salvagestation.NativeFieldInfoPtr_InventoryPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "InventoryPrefabGuid");
		Salvagestation.NativeFieldInfoPtr_ActiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "ActiveSequenceGuid");
		Salvagestation.NativeFieldInfoPtr_InactiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "InactiveSequenceGuid");
		Salvagestation.NativeFieldInfoPtr_ActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "ActiveSequenceState");
		Salvagestation.NativeFieldInfoPtr_InactiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "InactiveSequenceState");
		Salvagestation.NativeFieldInfoPtr_Active = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "Active");
		Salvagestation.NativeFieldInfoPtr_IsWorking = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "IsWorking");
		Salvagestation.NativeFieldInfoPtr_LastInventoryChangedVersion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, "LastInventoryChangedVersion");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Salvagestation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_InputInventoryEntity;
	private static readonly IntPtr NativeFieldInfoPtr_OutputInventoryEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Progress;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentItemGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Status;
	private static readonly IntPtr NativeFieldInfoPtr_InventoryPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_InactiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_InactiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_Active;
	private static readonly IntPtr NativeFieldInfoPtr_IsWorking;
	private static readonly IntPtr NativeFieldInfoPtr_LastInventoryChangedVersion;
	[FieldOffset(0)]
	public NetworkedEntity InputInventoryEntity;
	[FieldOffset(12)]
	public NetworkedEntity OutputInventoryEntity;
	[FieldOffset(24)]
	public float Progress;
	[FieldOffset(28)]
	public PrefabGUID CurrentItemGuid;
	[FieldOffset(32)]
	public SalvageStatus Status;
	[FieldOffset(36)]
	public PrefabGUID InventoryPrefabGuid;
	[FieldOffset(40)]
	public SequenceGUID ActiveSequenceGuid;
	[FieldOffset(44)]
	public SequenceGUID InactiveSequenceGuid;
	[FieldOffset(48)]
	public SequenceState ActiveSequenceState;
	[FieldOffset(56)]
	public SequenceState InactiveSequenceState;
	[FieldOffset(64)]
	[MarshalAs(4)]
	public bool Active;
	[FieldOffset(65)]
	[MarshalAs(4)]
	public bool IsWorking;
	[FieldOffset(66)]
	public byte LastInventoryChangedVersion;
}
