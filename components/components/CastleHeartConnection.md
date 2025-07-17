---
nav_exclude: true
search_exclude: true
---

# CastleHeartConnection

```csharp
[StructLayout(2)]
public struct CastleHeartConnection
{
	static CastleHeartConnection()
	{
		Il2CppClassPointerStore<CastleHeartConnection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleHeartConnection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleHeartConnection>.NativeClassPtr);
		CastleHeartConnection.NativeFieldInfoPtr_CastleHeartEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartConnection>.NativeClassPtr, "CastleHeartEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleHeartConnection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastleHeartEntity;
	[FieldOffset(0)]
	public NetworkedEntity CastleHeartEntity;
}
