---
nav_exclude: true
search_exclude: true
---

# UnitSpawnHandler

```csharp
[StructLayout(2)]
public struct UnitSpawnHandler
{
	static UnitSpawnHandler()
	{
		Il2CppClassPointerStore<UnitSpawnHandler>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UnitSpawnHandler");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitSpawnHandler>.NativeClassPtr);
		UnitSpawnHandler.NativeFieldInfoPtr_StationEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnHandler>.NativeClassPtr, "StationEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitSpawnHandler>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StationEntity;
	[FieldOffset(0)]
	public Entity StationEntity;
}
