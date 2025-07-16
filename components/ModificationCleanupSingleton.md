# ModificationCleanupSingleton

```csharp
[StructLayout(2)]
public struct ModificationCleanupSingleton
{
	static ModificationCleanupSingleton()
	{
		Il2CppClassPointerStore<ModificationCleanupSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ModificationCleanupSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModificationCleanupSingleton>.NativeClassPtr);
		ModificationCleanupSingleton.NativeFieldInfoPtr_FixedLooseModifications = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationCleanupSingleton>.NativeClassPtr, "FixedLooseModifications");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModificationCleanupSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FixedLooseModifications;
	[FieldOffset(0)]
	public int FixedLooseModifications;
}
