---
nav_exclude: true
search_exclude: true
---

# ProgressionMapper

```csharp
[StructLayout(2)]
public struct ProgressionMapper
{
	static ProgressionMapper()
	{
		Il2CppClassPointerStore<ProgressionMapper>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ProgressionMapper");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProgressionMapper>.NativeClassPtr);
		ProgressionMapper.NativeFieldInfoPtr_ProgressionEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressionMapper>.NativeClassPtr, "ProgressionEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProgressionMapper>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ProgressionEntity;
	[FieldOffset(0)]
	public NetworkedEntity ProgressionEntity;
}
