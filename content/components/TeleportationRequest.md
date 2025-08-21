---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TeleportationRequest
{
	static TeleportationRequest()
	{
		Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TeleportationRequest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr);
		TeleportationRequest.NativeFieldInfoPtr_PlayerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "PlayerEntity");
		TeleportationRequest.NativeFieldInfoPtr_TeleportationType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "TeleportationType");
		TeleportationRequest.NativeFieldInfoPtr_FromTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "FromTarget");
		TeleportationRequest.NativeFieldInfoPtr_ToTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "ToTarget");
		TeleportationRequest.NativeFieldInfoPtr_CustomTravelBuffPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "CustomTravelBuffPrefab");
		TeleportationRequest.NativeFieldInfoPtr_EnableCheatChecks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "EnableCheatChecks");
		TeleportationRequest.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "Offset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PlayerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_TeleportationType;
	private static readonly IntPtr NativeFieldInfoPtr_FromTarget;
	private static readonly IntPtr NativeFieldInfoPtr_ToTarget;
	private static readonly IntPtr NativeFieldInfoPtr_CustomTravelBuffPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_EnableCheatChecks;
	private static readonly IntPtr NativeFieldInfoPtr_Offset;

	public Entity PlayerEntity;

	public TeleportationType TeleportationType;

	public Entity FromTarget;

	public Entity ToTarget;

	public PrefabGUID CustomTravelBuffPrefab;

	public bool EnableCheatChecks;

	public float3 Offset;
}
```

## Server Systems

- [TeleportationRequestSystem]({{% relref "systems/server/TeleportationRequestSystem.md" %}})
