# ProxyDyeData

```csharp
[StructLayout(2)]
public struct ProxyDyeData
{
	static ProxyDyeData()
	{
		Il2CppClassPointerStore<ProxyDyeData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "ProxyDyeData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProxyDyeData>.NativeClassPtr);
		ProxyDyeData.NativeFieldInfoPtr_DyeOverrideIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProxyDyeData>.NativeClassPtr, "DyeOverrideIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProxyDyeData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DyeOverrideIndex;
	[FieldOffset(0)]
	public int DyeOverrideIndex;
}
