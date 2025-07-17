---
nav_exclude: true
search_exclude: true
---

# IdleAISoundBuffer

```csharp
public struct IdleAISoundBuffer
{
	static IdleAISoundBuffer()
	{
		Il2CppClassPointerStore<IdleAISoundBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Audio", "IdleAISoundBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<IdleAISoundBuffer>.NativeClassPtr);
		IdleAISoundBuffer.NativeFieldInfoPtr_SoundEventEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISoundBuffer>.NativeClassPtr, "SoundEventEntity");
		IdleAISoundBuffer.NativeFieldInfoPtr_SoundGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISoundBuffer>.NativeClassPtr, "SoundGuid");
		IdleAISoundBuffer.NativeFieldInfoPtr_StopBehaviour = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISoundBuffer>.NativeClassPtr, "StopBehaviour");
		IdleAISoundBuffer.NativeFieldInfoPtr_StopMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISoundBuffer>.NativeClassPtr, "StopMode");
		IdleAISoundBuffer.NativeFieldInfoPtr_VolumeRatio = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISoundBuffer>.NativeClassPtr, "VolumeRatio");
		IdleAISoundBuffer.NativeFieldInfoPtr_PitchRatio = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISoundBuffer>.NativeClassPtr, "PitchRatio");
		IdleAISoundBuffer.NativeFieldInfoPtr_Active = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISoundBuffer>.NativeClassPtr, "Active");
		IdleAISoundBuffer.NativeFieldInfoPtr_SetMovementParameter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISoundBuffer>.NativeClassPtr, "SetMovementParameter");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<IdleAISoundBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SoundEventEntity;
	private static readonly IntPtr NativeFieldInfoPtr_SoundGuid;
	private static readonly IntPtr NativeFieldInfoPtr_StopBehaviour;
	private static readonly IntPtr NativeFieldInfoPtr_StopMode;
	private static readonly IntPtr NativeFieldInfoPtr_VolumeRatio;
	private static readonly IntPtr NativeFieldInfoPtr_PitchRatio;
	private static readonly IntPtr NativeFieldInfoPtr_Active;
	private static readonly IntPtr NativeFieldInfoPtr_SetMovementParameter;

	public Entity SoundEventEntity;

	public FmodEventGuid SoundGuid;

	public IdleSoundStopBehaviour StopBehaviour;

	public IdleAIStudioEventStopModeEnum StopMode;

	public float VolumeRatio;

	public float PitchRatio;

	public bool Active;

	public bool SetMovementParameter;
}
```
