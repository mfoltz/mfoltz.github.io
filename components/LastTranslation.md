---
nav_exclude: true
search_exclude: true
---

# LastTranslation

```csharp
[Serializable]
[StructLayout(2)]
public struct LastTranslation
{
	static LastTranslation()
	{
		Il2CppClassPointerStore<LastTranslation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "LastTranslation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LastTranslation>.NativeClassPtr);
		LastTranslation.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LastTranslation>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LastTranslation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float3 Value;
}
