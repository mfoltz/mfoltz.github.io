---
nav_exclude: true
search_exclude: true
---

# RandomizeVoiceMap

```csharp
public struct RandomizeVoiceMap
{
	static RandomizeVoiceMap()
	{
		Il2CppClassPointerStore<RandomizeVoiceMap>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RandomizeVoiceMap");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RandomizeVoiceMap>.NativeClassPtr);
		RandomizeVoiceMap.NativeFieldInfoPtr_VoiceIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RandomizeVoiceMap>.NativeClassPtr, "VoiceIndex");
		RandomizeVoiceMap.NativeFieldInfoPtr_NumOptions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RandomizeVoiceMap>.NativeClassPtr, "NumOptions");
		RandomizeVoiceMap.NativeFieldInfoPtr_RandomVoiceData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RandomizeVoiceMap>.NativeClassPtr, "RandomVoiceData");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RandomizeVoiceMap>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VoiceIndex;
	private static readonly IntPtr NativeFieldInfoPtr_NumOptions;
	private static readonly IntPtr NativeFieldInfoPtr_RandomVoiceData;

	public int VoiceIndex;

	public int NumOptions;

	public BlobAssetReference<RandomVoiceData> RandomVoiceData;
}
```
