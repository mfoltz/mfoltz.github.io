# HitColliderCast

```csharp
[StructLayout(2)]
public struct HitColliderCast
{
	static HitColliderCast()
	{
		Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "HitColliderCast");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr);
		HitColliderCast.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "Offset");
		HitColliderCast.NativeFieldInfoPtr_Shape = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "Shape");
		HitColliderCast.NativeFieldInfoPtr_AfterDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "AfterDuration");
		HitColliderCast.NativeFieldInfoPtr_TerrainColliderModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "TerrainColliderModifier");
		HitColliderCast.NativeFieldInfoPtr_PrioritySettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "PrioritySettings");
		HitColliderCast.NativeFieldInfoPtr_CollisionCheckType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "CollisionCheckType");
		HitColliderCast.NativeFieldInfoPtr_PrimaryFilterFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "PrimaryFilterFlags");
		HitColliderCast.NativeFieldInfoPtr_PrimaryTargets_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "PrimaryTargets_Count");
		HitColliderCast.NativeFieldInfoPtr_SecondaryTargets_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "SecondaryTargets_Count");
		HitColliderCast.NativeFieldInfoPtr_ContinuousCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "ContinuousCollision");
		HitColliderCast.NativeFieldInfoPtr_IncludeTerrain = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "IncludeTerrain");
		HitColliderCast.NativeFieldInfoPtr_CanHitThroughBlockSpellCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "CanHitThroughBlockSpellCollision");
		HitColliderCast.NativeFieldInfoPtr_IgnoreImmaterial = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "IgnoreImmaterial");
		HitColliderCast.NativeFieldInfoPtr_Handled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "Handled");
		HitColliderCast.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, 100668635);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 88936, XrefRangeEnd = 88937, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HitColliderCast.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Offset;
	private static readonly IntPtr NativeFieldInfoPtr_Shape;
	private static readonly IntPtr NativeFieldInfoPtr_AfterDuration;
	private static readonly IntPtr NativeFieldInfoPtr_TerrainColliderModifier;
	private static readonly IntPtr NativeFieldInfoPtr_PrioritySettings;
	private static readonly IntPtr NativeFieldInfoPtr_CollisionCheckType;
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryFilterFlags;
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryTargets_Count;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryTargets_Count;
	private static readonly IntPtr NativeFieldInfoPtr_ContinuousCollision;
	private static readonly IntPtr NativeFieldInfoPtr_IncludeTerrain;
	private static readonly IntPtr NativeFieldInfoPtr_CanHitThroughBlockSpellCollision;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreImmaterial;
	private static readonly IntPtr NativeFieldInfoPtr_Handled;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public float3 Offset;
	[FieldOffset(12)]
	public TriggerShape Shape;
	[FieldOffset(32)]
	public float AfterDuration;
	[FieldOffset(36)]
	public float TerrainColliderModifier;
	[FieldOffset(40)]
	public AoEFilterSettings PrioritySettings;
	[FieldOffset(64)]
	public CollisionTrigger CollisionCheckType;
	[FieldOffset(68)]
	public CollisionFilterFlags PrimaryFilterFlags;
	[FieldOffset(72)]
	public int PrimaryTargets_Count;
	[FieldOffset(76)]
	public int SecondaryTargets_Count;
	[FieldOffset(80)]
	[MarshalAs(4)]
	public bool ContinuousCollision;
	[FieldOffset(81)]
	[MarshalAs(4)]
	public bool IncludeTerrain;
	[FieldOffset(82)]
	[MarshalAs(4)]
	public bool CanHitThroughBlockSpellCollision;
	[FieldOffset(83)]
	[MarshalAs(4)]
	public bool IgnoreImmaterial;
	[FieldOffset(84)]
	[MarshalAs(4)]
	public bool Handled;
	[StructLayout(2)]
	public struct CollisionCastOnSpawn
	{
		static CollisionCastOnSpawn()
		{
			Il2CppClassPointerStore<HitColliderCast.CollisionCastOnSpawn>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "CollisionCastOnSpawn");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HitColliderCast.CollisionCastOnSpawn>.NativeClassPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HitColliderCast.CollisionCastOnSpawn>.NativeClassPtr, ref this));
		}
	}
	[StructLayout(2)]
	public struct CollisionCastOnUpdate
	{
		static CollisionCastOnUpdate()
		{
			Il2CppClassPointerStore<HitColliderCast.CollisionCastOnUpdate>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "CollisionCastOnUpdate");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HitColliderCast.CollisionCastOnUpdate>.NativeClassPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HitColliderCast.CollisionCastOnUpdate>.NativeClassPtr, ref this));
		}
	}
	[StructLayout(2)]
	public struct CollisionCastOnDestroy
	{
		static CollisionCastOnDestroy()
		{
			Il2CppClassPointerStore<HitColliderCast.CollisionCastOnDestroy>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<HitColliderCast>.NativeClassPtr, "CollisionCastOnDestroy");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HitColliderCast.CollisionCastOnDestroy>.NativeClassPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HitColliderCast.CollisionCastOnDestroy>.NativeClassPtr, ref this));
		}
	}
}
