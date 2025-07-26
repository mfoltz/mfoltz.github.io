# ScrollingCombatText

```csharp
[StructLayout(2)]
public struct ScrollingCombatText
{
	static ScrollingCombatText()
	{
		Il2CppClassPointerStore<ScrollingCombatText>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.UI", "ScrollingCombatText");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ScrollingCombatText>.NativeClassPtr);
		ScrollingCombatText.NativeFieldInfoPtr_Initialized = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatText>.NativeClassPtr, "Initialized");
		ScrollingCombatText.NativeFieldInfoPtr_Spawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatText>.NativeClassPtr, "Spawned");
		ScrollingCombatText.NativeFieldInfoPtr_StartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatText>.NativeClassPtr, "StartTime");
		ScrollingCombatText.NativeFieldInfoPtr_SpawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatText>.NativeClassPtr, "SpawnTime");
		ScrollingCombatText.NativeFieldInfoPtr_SourceDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatText>.NativeClassPtr, "SourceDirection");
		ScrollingCombatText.NativeFieldInfoPtr_RandomXZDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatText>.NativeClassPtr, "RandomXZDirection");
		ScrollingCombatText.NativeFieldInfoPtr_RandomXZForce = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatText>.NativeClassPtr, "RandomXZForce");
		ScrollingCombatText.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatText>.NativeClassPtr, "Value");
		ScrollingCombatText.NativeFieldInfoPtr_ValueScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatText>.NativeClassPtr, "ValueScale");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ScrollingCombatText>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Initialized;
	private static readonly IntPtr NativeFieldInfoPtr_Spawned;
	private static readonly IntPtr NativeFieldInfoPtr_StartTime;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTime;
	private static readonly IntPtr NativeFieldInfoPtr_SourceDirection;
	private static readonly IntPtr NativeFieldInfoPtr_RandomXZDirection;
	private static readonly IntPtr NativeFieldInfoPtr_RandomXZForce;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_ValueScale;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Initialized;
	[FieldOffset(1)]
	[MarshalAs(4)]
	public bool Spawned;
	[FieldOffset(4)]
	public float StartTime;
	[FieldOffset(8)]
	public float SpawnTime;
	[FieldOffset(12)]
	public float3 SourceDirection;
	[FieldOffset(24)]
	public float3 RandomXZDirection;
	[FieldOffset(36)]
	public float RandomXZForce;
	[FieldOffset(40)]
	public float Value;
	[FieldOffset(44)]
	public float ValueScale;
}
