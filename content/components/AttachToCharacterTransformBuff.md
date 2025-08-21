---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AttachToCharacterTransformBuff
{
	static AttachToCharacterTransformBuff()
	{
		Il2CppClassPointerStore<AttachToCharacterTransformBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AttachToCharacterTransformBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AttachToCharacterTransformBuff>.NativeClassPtr);
		AttachToCharacterTransformBuff.NativeFieldInfoPtr_ClientPositionOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachToCharacterTransformBuff>.NativeClassPtr, "ClientPositionOffset");
		AttachToCharacterTransformBuff.NativeFieldInfoPtr_ClientRotationOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachToCharacterTransformBuff>.NativeClassPtr, "ClientRotationOffset");
		AttachToCharacterTransformBuff.NativeFieldInfoPtr_ServerPositionOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachToCharacterTransformBuff>.NativeClassPtr, "ServerPositionOffset");
		AttachToCharacterTransformBuff.NativeFieldInfoPtr_HybridBone = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachToCharacterTransformBuff>.NativeClassPtr, "HybridBone");
		AttachToCharacterTransformBuff.NativeFieldInfoPtr_CopyPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachToCharacterTransformBuff>.NativeClassPtr, "CopyPosition");
		AttachToCharacterTransformBuff.NativeFieldInfoPtr_CopyRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachToCharacterTransformBuff>.NativeClassPtr, "CopyRotation");
		AttachToCharacterTransformBuff.NativeFieldInfoPtr_MatchAnimatorLocomotion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachToCharacterTransformBuff>.NativeClassPtr, "MatchAnimatorLocomotion");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AttachToCharacterTransformBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ClientPositionOffset;
	private static readonly IntPtr NativeFieldInfoPtr_ClientRotationOffset;
	private static readonly IntPtr NativeFieldInfoPtr_ServerPositionOffset;
	private static readonly IntPtr NativeFieldInfoPtr_HybridBone;
	private static readonly IntPtr NativeFieldInfoPtr_CopyPosition;
	private static readonly IntPtr NativeFieldInfoPtr_CopyRotation;
	private static readonly IntPtr NativeFieldInfoPtr_MatchAnimatorLocomotion;

	public float3 ClientPositionOffset;

	public float3 ClientRotationOffset;

	public float3 ServerPositionOffset;

	public int HybridBone;

	public bool CopyPosition;

	public bool CopyRotation;

	public bool MatchAnimatorLocomotion;
}
```

## Server Systems

- [HybridAttachPointTransformSystem]({{% relref "systems/server/HybridAttachPointTransformSystem.md" %}})

## Client Systems

- [HybridAttachPointTransformSystem]({{% relref "systems/client/HybridAttachPointTransformSystem.md" %}})
- [HybridAttachPointTransformSystem_Client]({{% relref "systems/client/HybridAttachPointTransformSystem_Client.md" %}})
- [VisibilitySystem_CopyStateFromBuffTarget]({{% relref "systems/client/VisibilitySystem_CopyStateFromBuffTarget.md" %}})
