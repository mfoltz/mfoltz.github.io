---
nav_exclude: true
search_exclude: true
---

# CombatMusicSource_Client

```csharp
[StructLayout(2)]
public struct CombatMusicSource_Client
{
	static CombatMusicSource_Client()
	{
		Il2CppClassPointerStore<CombatMusicSource_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CombatMusicSource_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CombatMusicSource_Client>.NativeClassPtr);
		CombatMusicSource_Client.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CombatMusicSource_Client>.NativeClassPtr, "SequenceGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CombatMusicSource_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	[FieldOffset(0)]
	public SequenceGUID SequenceGuid;
}
