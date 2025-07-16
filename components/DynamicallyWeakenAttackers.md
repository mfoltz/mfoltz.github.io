# DynamicallyWeakenAttackers

```csharp
[StructLayout(2)]
public struct DynamicallyWeakenAttackers
{
	static DynamicallyWeakenAttackers()
	{
		Il2CppClassPointerStore<DynamicallyWeakenAttackers>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DynamicallyWeakenAttackers");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DynamicallyWeakenAttackers>.NativeClassPtr);
		DynamicallyWeakenAttackers.NativeFieldInfoPtr_Multiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DynamicallyWeakenAttackers>.NativeClassPtr, "Multiplier");
		DynamicallyWeakenAttackers.NativeFieldInfoPtr_MultiplierReductionFactorPerCrowdedness = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DynamicallyWeakenAttackers>.NativeClassPtr, "MultiplierReductionFactorPerCrowdedness");
		DynamicallyWeakenAttackers.NativeFieldInfoPtr_MaxPlayers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DynamicallyWeakenAttackers>.NativeClassPtr, "MaxPlayers");
		DynamicallyWeakenAttackers.NativeMethodInfoPtr_get_Empty_Public_Static_get_DynamicallyWeakenAttackers_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DynamicallyWeakenAttackers>.NativeClassPtr, 100664574);
		DynamicallyWeakenAttackers.NativeMethodInfoPtr_IsEmpty_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DynamicallyWeakenAttackers>.NativeClassPtr, 100664575);
	}
	public unsafe static DynamicallyWeakenAttackers Empty
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DynamicallyWeakenAttackers.NativeMethodInfoPtr_get_Empty_Public_Static_get_DynamicallyWeakenAttackers_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	public unsafe bool IsEmpty()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DynamicallyWeakenAttackers.NativeMethodInfoPtr_IsEmpty_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DynamicallyWeakenAttackers>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Multiplier;
	private static readonly IntPtr NativeFieldInfoPtr_MultiplierReductionFactorPerCrowdedness;
	private static readonly IntPtr NativeFieldInfoPtr_MaxPlayers;
	private static readonly IntPtr NativeMethodInfoPtr_get_Empty_Public_Static_get_DynamicallyWeakenAttackers_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsEmpty_Public_Boolean_0;
	[FieldOffset(0)]
	public float Multiplier;
	[FieldOffset(4)]
	public float MultiplierReductionFactorPerCrowdedness;
	[FieldOffset(8)]
	public int MaxPlayers;
}
