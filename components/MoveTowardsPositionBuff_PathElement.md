---
nav_exclude: true
search_exclude: true
---

# MoveTowardsPositionBuff_PathElement

```csharp
public struct MoveTowardsPositionBuff_PathElement
{
	static MoveTowardsPositionBuff_PathElement()
	{
		Il2CppClassPointerStore<MoveTowardsPositionBuff_PathElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MoveTowardsPositionBuff_PathElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoveTowardsPositionBuff_PathElement>.NativeClassPtr);
		MoveTowardsPositionBuff_PathElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveTowardsPositionBuff_PathElement>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoveTowardsPositionBuff_PathElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public TileCoordinate Value;
}
```

## Server Systems

- [MoveTowardsPositionSystem_Server_Create](/systems/server/MoveTowardsPositionSystem_Server_Create)
- [MoveTowardsPositionSystem_Server_Update](/systems/server/MoveTowardsPositionSystem_Server_Update)
