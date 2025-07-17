---
nav_exclude: true
search_exclude: true
---

# MostRecentFixedTime

```csharp
[StructLayout(2)]
public struct MostRecentFixedTime
{
	static MostRecentFixedTime()
	{
		Il2CppClassPointerStore<MostRecentFixedTime>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics.GraphicsIntegration", "MostRecentFixedTime");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MostRecentFixedTime>.NativeClassPtr);
		MostRecentFixedTime.NativeFieldInfoPtr_DeltaTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MostRecentFixedTime>.NativeClassPtr, "DeltaTime");
		MostRecentFixedTime.NativeFieldInfoPtr_ElapsedTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MostRecentFixedTime>.NativeClassPtr, "ElapsedTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MostRecentFixedTime>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DeltaTime;
	private static readonly IntPtr NativeFieldInfoPtr_ElapsedTime;
	[FieldOffset(0)]
	public double DeltaTime;
	[FieldOffset(8)]
	public double ElapsedTime;
}
