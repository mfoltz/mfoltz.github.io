---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PlayerLastValidPosition
{
	static PlayerLastValidPosition()
	{
		Il2CppClassPointerStore<PlayerLastValidPosition>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PlayerLastValidPosition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlayerLastValidPosition>.NativeClassPtr);
		PlayerLastValidPosition.NativeFieldInfoPtr_LastValidPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerLastValidPosition>.NativeClassPtr, "LastValidPosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlayerLastValidPosition>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastValidPosition;

	public float3 LastValidPosition;
}
```
