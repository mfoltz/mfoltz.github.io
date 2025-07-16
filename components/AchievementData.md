# AchievementData

```csharp
[StructLayout(2)]
public struct AchievementData
{
	static AchievementData()
	{
		Il2CppClassPointerStore<AchievementData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AchievementData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AchievementData>.NativeClassPtr);
		AchievementData.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementData>.NativeClassPtr, "Level");
		AchievementData.NativeFieldInfoPtr_Reward = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementData>.NativeClassPtr, "Reward");
		AchievementData.NativeFieldInfoPtr_Dependency = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementData>.NativeClassPtr, "Dependency");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AchievementData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	private static readonly IntPtr NativeFieldInfoPtr_Reward;
	private static readonly IntPtr NativeFieldInfoPtr_Dependency;
	[FieldOffset(0)]
	public int Level;
	[FieldOffset(4)]
	public PrefabGUID Reward;
	[FieldOffset(8)]
	public PrefabGUID Dependency;
}
