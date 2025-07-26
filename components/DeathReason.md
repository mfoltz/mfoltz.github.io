# DeathReason

```csharp
[StructLayout(2)]
public struct DeathReason
{
	static DeathReason()
	{
		Il2CppClassPointerStore<DeathReason>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DeathReason");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DeathReason>.NativeClassPtr);
		DeathReason.NativeFieldInfoPtr_PrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathReason>.NativeClassPtr, "PrefabGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DeathReason>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuid;
	[FieldOffset(0)]
	public PrefabGUID PrefabGuid;
}
