---
nav_exclude: true
search_exclude: false
---

# CastleTeleporterElement

```csharp
public struct CastleTeleporterElement
{
	static CastleTeleporterElement()
	{
		Il2CppClassPointerStore<CastleTeleporterElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleTeleporterElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleTeleporterElement>.NativeClassPtr);
		CastleTeleporterElement.NativeFieldInfoPtr_CastleTeleporterMaxGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTeleporterElement>.NativeClassPtr, "CastleTeleporterMaxGroup");
		CastleTeleporterElement.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTeleporterElement>.NativeClassPtr, "Entity");
		CastleTeleporterElement.NativeFieldInfoPtr_Group = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTeleporterElement>.NativeClassPtr, "Group");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleTeleporterElement>.NativeClassPtr, ref this));
	}
	public unsafe static byte CastleTeleporterMaxGroup
	{
		get
		{
			byte result;
			IL2CPP.il2cpp_field_static_get_value(CastleTeleporterElement.NativeFieldInfoPtr_CastleTeleporterMaxGroup, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(CastleTeleporterElement.NativeFieldInfoPtr_CastleTeleporterMaxGroup, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastleTeleporterMaxGroup;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Group;

	public NetworkedEntity Entity;

	public byte Group;
}
```
