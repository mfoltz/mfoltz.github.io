---
nav_exclude: true
search_exclude: false
---

# Height

```csharp
public struct Height
{
	static Height()
	{
		Il2CppClassPointerStore<Height>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Height");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Height>.NativeClassPtr);
		Height.NativeFieldInfoPtr_LastPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Height>.NativeClassPtr, "LastPosition");
		Height.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Height>.NativeClassPtr, "Value");
		Height.NativeFieldInfoPtr_ServerHeightLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Height>.NativeClassPtr, "ServerHeightLevel");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Height>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_ServerHeightLevel;

	public float3 LastPosition;

	public float Value;

	public byte ServerHeightLevel;
}
```

## Server Systems

- [HeightCorrectionSpawnSystem](/systems/server/HeightCorrectionSpawnSystem)
- [HeightCorrectionSystem](/systems/server/HeightCorrectionSystem)

## Client Systems

- [HeightCorrectionSystem](/systems/client/HeightCorrectionSystem)
