---
nav_exclude: true
search_exclude: true
---

# Prisonstation

```csharp
[StructLayout(2)]
public struct Prisonstation
{
	static Prisonstation()
	{
		Il2CppClassPointerStore<Prisonstation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Prisonstation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Prisonstation>.NativeClassPtr);
		Prisonstation.NativeFieldInfoPtr_CurrentRecipeGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Prisonstation>.NativeClassPtr, "CurrentRecipeGuid");
		Prisonstation.NativeFieldInfoPtr_Progress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Prisonstation>.NativeClassPtr, "Progress");
		Prisonstation.NativeFieldInfoPtr_Status = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Prisonstation>.NativeClassPtr, "Status");
		Prisonstation.NativeFieldInfoPtr_IsWorking = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Prisonstation>.NativeClassPtr, "IsWorking");
		Prisonstation.NativeFieldInfoPtr_LastInventoryChangedVersion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Prisonstation>.NativeClassPtr, "LastInventoryChangedVersion");
		Prisonstation.NativeFieldInfoPtr_HasPrisoner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Prisonstation>.NativeClassPtr, "HasPrisoner");
		Prisonstation.NativeFieldInfoPtr_NewCraftAction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Prisonstation>.NativeClassPtr, "NewCraftAction");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Prisonstation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentRecipeGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Progress;
	private static readonly IntPtr NativeFieldInfoPtr_Status;
	private static readonly IntPtr NativeFieldInfoPtr_IsWorking;
	private static readonly IntPtr NativeFieldInfoPtr_LastInventoryChangedVersion;
	private static readonly IntPtr NativeFieldInfoPtr_HasPrisoner;
	private static readonly IntPtr NativeFieldInfoPtr_NewCraftAction;
	[FieldOffset(0)]
	public PrefabGUID CurrentRecipeGuid;
	[FieldOffset(4)]
	public float Progress;
	[FieldOffset(8)]
	public RefinementStatus Status;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool IsWorking;
	[FieldOffset(13)]
	public byte LastInventoryChangedVersion;
	[FieldOffset(14)]
	[MarshalAs(4)]
	public bool HasPrisoner;
	[FieldOffset(15)]
	[MarshalAs(4)]
	public bool NewCraftAction;
}
