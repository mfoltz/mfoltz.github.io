# PrefabDependency

```csharp
[StructLayout(2)]
public struct PrefabDependency
{
	static PrefabDependency()
	{
		Il2CppClassPointerStore<PrefabDependency>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "PrefabDependency");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrefabDependency>.NativeClassPtr);
		PrefabDependency.NativeFieldInfoPtr_DependencyType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabDependency>.NativeClassPtr, "DependencyType");
		PrefabDependency.NativeFieldInfoPtr_From = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabDependency>.NativeClassPtr, "From");
		PrefabDependency.NativeFieldInfoPtr_To = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabDependency>.NativeClassPtr, "To");
		PrefabDependency.NativeFieldInfoPtr_ToAssetGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabDependency>.NativeClassPtr, "ToAssetGuid");
		PrefabDependency.NativeMethodInfoPtr_TryGetDependencyGUID_Public_Boolean_byref_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabDependency>.NativeClassPtr, 100663657);
	}
	[CallerCount(0)]
	public unsafe bool TryGetDependencyGUID(out PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabDependency.NativeMethodInfoPtr_TryGetDependencyGUID_Public_Boolean_byref_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrefabDependency>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DependencyType;
	private static readonly IntPtr NativeFieldInfoPtr_From;
	private static readonly IntPtr NativeFieldInfoPtr_To;
	private static readonly IntPtr NativeFieldInfoPtr_ToAssetGuid;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetDependencyGUID_Public_Boolean_byref_PrefabGUID_0;
	[FieldOffset(0)]
	public ConversionDependency DependencyType;
	[FieldOffset(4)]
	public Entity From;
	[FieldOffset(12)]
	public PrefabIdentifier To;
	[FieldOffset(16)]
	public AssetGuid ToAssetGuid;
}
