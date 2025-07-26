# AbilityPositionInaccuracy

```csharp
[StructLayout(2)]
public struct AbilityPositionInaccuracy
{
	static AbilityPositionInaccuracy()
	{
		Il2CppClassPointerStore<AbilityPositionInaccuracy>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityPositionInaccuracy");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityPositionInaccuracy>.NativeClassPtr);
		AbilityPositionInaccuracy.NativeFieldInfoPtr_CurrentOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPositionInaccuracy>.NativeClassPtr, "CurrentOffset");
		AbilityPositionInaccuracy.NativeFieldInfoPtr_MinDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPositionInaccuracy>.NativeClassPtr, "MinDistance");
		AbilityPositionInaccuracy.NativeFieldInfoPtr_MaxDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPositionInaccuracy>.NativeClassPtr, "MaxDistance");
		AbilityPositionInaccuracy.NativeFieldInfoPtr_OnlyOnMovingTargets = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPositionInaccuracy>.NativeClassPtr, "OnlyOnMovingTargets");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityPositionInaccuracy>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentOffset;
	private static readonly IntPtr NativeFieldInfoPtr_MinDistance;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistance;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyOnMovingTargets;
	[FieldOffset(0)]
	public float2 CurrentOffset;
	[FieldOffset(8)]
	public float MinDistance;
	[FieldOffset(12)]
	public float MaxDistance;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool OnlyOnMovingTargets;
}
