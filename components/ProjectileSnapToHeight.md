# ProjectileSnapToHeight

```csharp
[StructLayout(2)]
public struct ProjectileSnapToHeight
{
	static ProjectileSnapToHeight()
	{
		Il2CppClassPointerStore<ProjectileSnapToHeight>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProjectileSnapToHeight");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProjectileSnapToHeight>.NativeClassPtr);
		ProjectileSnapToHeight.NativeFieldInfoPtr_GameplayHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProjectileSnapToHeight>.NativeClassPtr, "GameplayHeight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProjectileSnapToHeight>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GameplayHeight;
	[FieldOffset(0)]
	public float GameplayHeight;
}
