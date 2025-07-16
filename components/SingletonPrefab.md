# SingletonPrefab

```csharp
[StructLayout(2)]
public struct SingletonPrefab
{
	static SingletonPrefab()
	{
		Il2CppClassPointerStore<SingletonPrefab>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SingletonPrefab");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SingletonPrefab>.NativeClassPtr);
		SingletonPrefab.NativeFieldInfoPtr_AutomaticInstantiation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SingletonPrefab>.NativeClassPtr, "AutomaticInstantiation");
		SingletonPrefab.NativeFieldInfoPtr_OverrideExisting = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SingletonPrefab>.NativeClassPtr, "OverrideExisting");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SingletonPrefab>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AutomaticInstantiation;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideExisting;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool AutomaticInstantiation;
	[FieldOffset(1)]
	[MarshalAs(4)]
	public bool OverrideExisting;
}
