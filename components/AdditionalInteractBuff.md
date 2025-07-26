# AdditionalInteractBuff

```csharp
[StructLayout(2)]
public struct AdditionalInteractBuff
{
	static AdditionalInteractBuff()
	{
		Il2CppClassPointerStore<AdditionalInteractBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AdditionalInteractBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdditionalInteractBuff>.NativeClassPtr);
		AdditionalInteractBuff.NativeFieldInfoPtr_Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdditionalInteractBuff>.NativeClassPtr, "Buff");
		AdditionalInteractBuff.NativeFieldInfoPtr_BuffInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdditionalInteractBuff>.NativeClassPtr, "BuffInstance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdditionalInteractBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Buff;
	private static readonly IntPtr NativeFieldInfoPtr_BuffInstance;
	[FieldOffset(0)]
	public PrefabGUID Buff;
	[FieldOffset(4)]
	public Entity BuffInstance;
}
