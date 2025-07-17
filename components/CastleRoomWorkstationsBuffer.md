---
nav_exclude: true
search_exclude: true
---

# CastleRoomWorkstationsBuffer

```csharp
[StructLayout(2)]
public struct CastleRoomWorkstationsBuffer
{
	static CastleRoomWorkstationsBuffer()
	{
		Il2CppClassPointerStore<CastleRoomWorkstationsBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleRoomWorkstationsBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRoomWorkstationsBuffer>.NativeClassPtr);
		CastleRoomWorkstationsBuffer.NativeFieldInfoPtr_WorkstationEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoomWorkstationsBuffer>.NativeClassPtr, "WorkstationEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRoomWorkstationsBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WorkstationEntity;
	[FieldOffset(0)]
	public Entity WorkstationEntity;
}
