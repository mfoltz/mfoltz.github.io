# CastleHeartCurrentTeam

```csharp
[StructLayout(2)]
public struct CastleHeartCurrentTeam
{
	static CastleHeartCurrentTeam()
	{
		Il2CppClassPointerStore<CastleHeartCurrentTeam>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleHeartCurrentTeam");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleHeartCurrentTeam>.NativeClassPtr);
		CastleHeartCurrentTeam.NativeFieldInfoPtr_Team = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartCurrentTeam>.NativeClassPtr, "Team");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleHeartCurrentTeam>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Team;
	[FieldOffset(0)]
	public Team Team;
}
