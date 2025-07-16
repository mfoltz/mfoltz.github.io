# YieldEssenceOnDeath

```csharp
[StructLayout(2)]
public struct YieldEssenceOnDeath
{
	static YieldEssenceOnDeath()
	{
		Il2CppClassPointerStore<YieldEssenceOnDeath>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "YieldEssenceOnDeath");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<YieldEssenceOnDeath>.NativeClassPtr);
		YieldEssenceOnDeath.NativeFieldInfoPtr_EssenceGain = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<YieldEssenceOnDeath>.NativeClassPtr, "EssenceGain");
		YieldEssenceOnDeath.NativeFieldInfoPtr_EssenceItemType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<YieldEssenceOnDeath>.NativeClassPtr, "EssenceItemType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<YieldEssenceOnDeath>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EssenceGain;
	private static readonly IntPtr NativeFieldInfoPtr_EssenceItemType;
	[FieldOffset(0)]
	public int EssenceGain;
	[FieldOffset(4)]
	public PrefabGUID EssenceItemType;
}
