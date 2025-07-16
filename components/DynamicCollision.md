# DynamicCollision

```csharp
[StructLayout(2)]
public struct DynamicCollision
{
	static DynamicCollision()
	{
		Il2CppClassPointerStore<DynamicCollision>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DynamicCollision");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DynamicCollision>.NativeClassPtr);
		DynamicCollision.NativeFieldInfoPtr_AgainstUnits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DynamicCollision>.NativeClassPtr, "AgainstUnits");
		DynamicCollision.NativeFieldInfoPtr_AgainstPlayers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DynamicCollision>.NativeClassPtr, "AgainstPlayers");
		DynamicCollision.NativeFieldInfoPtr_NetworkMultiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DynamicCollision>.NativeClassPtr, "NetworkMultiplier");
		DynamicCollision.NativeFieldInfoPtr_NetworkDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DynamicCollision>.NativeClassPtr, "NetworkDirection");
		DynamicCollision.NativeFieldInfoPtr_Immobile = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DynamicCollision>.NativeClassPtr, "Immobile");
		DynamicCollision.NativeMethodInfoPtr_GetCollisionData_Public_DynamicCollisionSettings_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DynamicCollision>.NativeClassPtr, 100668100);
	}
	[CallerCount(0)]
	public unsafe DynamicCollisionSettings GetCollisionData(bool isPlayer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref isPlayer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DynamicCollision.NativeMethodInfoPtr_GetCollisionData_Public_DynamicCollisionSettings_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DynamicCollision>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AgainstUnits;
	private static readonly IntPtr NativeFieldInfoPtr_AgainstPlayers;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkMultiplier;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkDirection;
	private static readonly IntPtr NativeFieldInfoPtr_Immobile;
	private static readonly IntPtr NativeMethodInfoPtr_GetCollisionData_Public_DynamicCollisionSettings_Boolean_0;
	[FieldOffset(0)]
	public DynamicCollisionSettings AgainstUnits;
	[FieldOffset(20)]
	public DynamicCollisionSettings AgainstPlayers;
	[FieldOffset(40)]
	public float NetworkMultiplier;
	[FieldOffset(44)]
	public float2 NetworkDirection;
	[FieldOffset(52)]
	[MarshalAs(4)]
	public bool Immobile;
}
