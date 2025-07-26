# SpellLevelSource

```csharp
[StructLayout(2)]
public struct SpellLevelSource
{
	static SpellLevelSource()
	{
		Il2CppClassPointerStore<SpellLevelSource>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpellLevelSource");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellLevelSource>.NativeClassPtr);
		SpellLevelSource.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellLevelSource>.NativeClassPtr, "Level");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellLevelSource>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	[FieldOffset(0)]
	public float Level;
}
