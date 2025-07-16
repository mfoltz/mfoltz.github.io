# VBloodUnit

```csharp
[StructLayout(2)]
public struct VBloodUnit
{
	static VBloodUnit()
	{
		Il2CppClassPointerStore<VBloodUnit>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "VBloodUnit");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VBloodUnit>.NativeClassPtr);
		VBloodUnit.NativeFieldInfoPtr_CanBeTracked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodUnit>.NativeClassPtr, "CanBeTracked");
		VBloodUnit.NativeFieldInfoPtr_OverrideLockedVBloodUnit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodUnit>.NativeClassPtr, "OverrideLockedVBloodUnit");
		VBloodUnit.NativeFieldInfoPtr_UnlocksTrophyOnFeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodUnit>.NativeClassPtr, "UnlocksTrophyOnFeed");
		VBloodUnit.NativeFieldInfoPtr_UnlocksTrophyOnFeedBrutal = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodUnit>.NativeClassPtr, "UnlocksTrophyOnFeedBrutal");
		VBloodUnit.NativeFieldInfoPtr_LastNonExploitTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodUnit>.NativeClassPtr, "LastNonExploitTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VBloodUnit>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CanBeTracked;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideLockedVBloodUnit;
	private static readonly IntPtr NativeFieldInfoPtr_UnlocksTrophyOnFeed;
	private static readonly IntPtr NativeFieldInfoPtr_UnlocksTrophyOnFeedBrutal;
	private static readonly IntPtr NativeFieldInfoPtr_LastNonExploitTime;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool CanBeTracked;
	[FieldOffset(4)]
	public PrefabGUID OverrideLockedVBloodUnit;
	[FieldOffset(8)]
	public Trophy UnlocksTrophyOnFeed;
	[FieldOffset(12)]
	public Trophy UnlocksTrophyOnFeedBrutal;
	[FieldOffset(16)]
	public double LastNonExploitTime;
}
