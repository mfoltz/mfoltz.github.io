---
nav_exclude: true
search_exclude: true
---

# CastleIndexBufferSingleton

```csharp
public struct CastleIndexBufferSingleton
{
	static CastleIndexBufferSingleton()
	{
		Il2CppClassPointerStore<CastleIndexBufferSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CastleIndexBufferSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleIndexBufferSingleton>.NativeClassPtr);
		CastleIndexBufferSingleton.NativeFieldInfoPtr_InFlight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleIndexBufferSingleton>.NativeClassPtr, "InFlight");
		CastleIndexBufferSingleton.NativeFieldInfoPtr_PrevResponseTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleIndexBufferSingleton>.NativeClassPtr, "PrevResponseTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleIndexBufferSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_InFlight;
	private static readonly IntPtr NativeFieldInfoPtr_PrevResponseTime;

	public bool InFlight;

	public double PrevResponseTime;
}
```
