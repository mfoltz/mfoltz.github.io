---
nav_exclude: true
search_exclude: true
---

# UnitSpawnPointBuffer

```csharp
[StructLayout(2)]
public struct UnitSpawnPointBuffer
{
	static UnitSpawnPointBuffer()
	{
		Il2CppClassPointerStore<UnitSpawnPointBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UnitSpawnPointBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitSpawnPointBuffer>.NativeClassPtr);
		UnitSpawnPointBuffer.NativeFieldInfoPtr_Point = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnPointBuffer>.NativeClassPtr, "Point");
		UnitSpawnPointBuffer.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnPointBuffer>.NativeClassPtr, "Rotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitSpawnPointBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Point;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	[FieldOffset(0)]
	public float3 Point;
	[FieldOffset(12)]
	public float Rotation;
}
