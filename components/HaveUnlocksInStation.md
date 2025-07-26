# HaveUnlocksInStation

```csharp
[StructLayout(2)]
public struct HaveUnlocksInStation
{
	static HaveUnlocksInStation()
	{
		Il2CppClassPointerStore<HaveUnlocksInStation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "HaveUnlocksInStation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HaveUnlocksInStation>.NativeClassPtr);
		HaveUnlocksInStation.NativeFieldInfoPtr_CanUnlock = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HaveUnlocksInStation>.NativeClassPtr, "CanUnlock");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HaveUnlocksInStation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CanUnlock;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool CanUnlock;
}
