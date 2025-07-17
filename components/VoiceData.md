---
nav_exclude: true
search_exclude: true
---

# VoiceData

```csharp
[StructLayout(2)]
public struct VoiceData
{
	static VoiceData()
	{
		Il2CppClassPointerStore<VoiceData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "VoiceData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VoiceData>.NativeClassPtr);
		VoiceData.NativeFieldInfoPtr_VoiceMapping = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VoiceData>.NativeClassPtr, "VoiceMapping");
		VoiceData.NativeFieldInfoPtr_VoiceMappingFemale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VoiceData>.NativeClassPtr, "VoiceMappingFemale");
		VoiceData.NativeFieldInfoPtr_ForcedVoiceMapping = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VoiceData>.NativeClassPtr, "ForcedVoiceMapping");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VoiceData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VoiceMapping;
	private static readonly IntPtr NativeFieldInfoPtr_VoiceMappingFemale;
	private static readonly IntPtr NativeFieldInfoPtr_ForcedVoiceMapping;
	[FieldOffset(0)]
	public PrefabGUID VoiceMapping;
	[FieldOffset(4)]
	public PrefabGUID VoiceMappingFemale;
	[FieldOffset(8)]
	public ModifiablePrefabGUID ForcedVoiceMapping;
}
