---
nav_exclude: true
search_exclude: true
---

# FluffTypeEnabled

```csharp
[StructLayout(2)]
public struct FluffTypeEnabled
{
	static FluffTypeEnabled()
	{
		Il2CppClassPointerStore<FluffTypeEnabled>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "FluffTypeEnabled");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FluffTypeEnabled>.NativeClassPtr);
		FluffTypeEnabled.NativeFieldInfoPtr_Enabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FluffTypeEnabled>.NativeClassPtr, "Enabled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FluffTypeEnabled>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Enabled;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Enabled;
}
