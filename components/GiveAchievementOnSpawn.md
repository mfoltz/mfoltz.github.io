# GiveAchievementOnSpawn

```csharp
[StructLayout(2)]
public struct GiveAchievementOnSpawn
{
	static GiveAchievementOnSpawn()
	{
		Il2CppClassPointerStore<GiveAchievementOnSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GiveAchievementOnSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GiveAchievementOnSpawn>.NativeClassPtr);
		GiveAchievementOnSpawn.NativeFieldInfoPtr_Achievement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GiveAchievementOnSpawn>.NativeClassPtr, "Achievement");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GiveAchievementOnSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Achievement;
	[FieldOffset(0)]
	public PrefabGUID Achievement;
}
