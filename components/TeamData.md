# TeamData

```csharp
[StructLayout(2)]
public struct TeamData
{
	static TeamData()
	{
		Il2CppClassPointerStore<TeamData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TeamData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TeamData>.NativeClassPtr);
		TeamData.NativeFieldInfoPtr_TeamValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeamData>.NativeClassPtr, "TeamValue");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TeamData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TeamValue;
	[FieldOffset(0)]
	public int TeamValue;
}
