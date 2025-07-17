---
nav_exclude: true
search_exclude: true
---

# DisableAggroBuff

```csharp
[StructLayout(2)]
public struct DisableAggroBuff
{
	static DisableAggroBuff()
	{
		Il2CppClassPointerStore<DisableAggroBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DisableAggroBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisableAggroBuff>.NativeClassPtr);
		DisableAggroBuff.NativeFieldInfoPtr_Mode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableAggroBuff>.NativeClassPtr, "Mode");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisableAggroBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Mode;
	[FieldOffset(0)]
	public DisableAggroBuffMode Mode;
}
