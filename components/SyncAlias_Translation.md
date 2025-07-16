# SyncAlias_Translation

```csharp
[StructLayout(2)]
public struct SyncAlias_Translation
{
	static SyncAlias_Translation()
	{
		Il2CppClassPointerStore<SyncAlias_Translation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "SyncAlias_Translation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SyncAlias_Translation>.NativeClassPtr);
		SyncAlias_Translation.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncAlias_Translation>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SyncAlias_Translation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float3 Value;
}
