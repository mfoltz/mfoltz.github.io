---
nav_exclude: true
search_exclude: true
---

# AbilityBar_Client

```csharp
public struct AbilityBar_Client
{
	static AbilityBar_Client()
	{
		Il2CppClassPointerStore<AbilityBar_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityBar_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityBar_Client>.NativeClassPtr);
		AbilityBar_Client.NativeFieldInfoPtr_ClientCastGroupNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Client>.NativeClassPtr, "ClientCastGroupNetworkId");
		AbilityBar_Client.NativeFieldInfoPtr_SimulatedData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Client>.NativeClassPtr, "SimulatedData");
		AbilityBar_Client.NativeFieldInfoPtr_ActionRemappings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Client>.NativeClassPtr, "ActionRemappings");
		AbilityBar_Client.NativeFieldInfoPtr_AimPreviewInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Client>.NativeClassPtr, "AimPreviewInstance");
		AbilityBar_Client.NativeFieldInfoPtr_ClientCastStartedCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Client>.NativeClassPtr, "ClientCastStartedCounter");
		AbilityBar_Client.NativeFieldInfoPtr_ClientInterruptCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Client>.NativeClassPtr, "ClientInterruptCounter");
		AbilityBar_Client.NativeFieldInfoPtr_HandledServerInterruptCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Client>.NativeClassPtr, "HandledServerInterruptCounter");
		AbilityBar_Client.NativeFieldInfoPtr_IsSimulating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Client>.NativeClassPtr, "IsSimulating");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityBar_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ClientCastGroupNetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_SimulatedData;
	private static readonly IntPtr NativeFieldInfoPtr_ActionRemappings;
	private static readonly IntPtr NativeFieldInfoPtr_AimPreviewInstance;
	private static readonly IntPtr NativeFieldInfoPtr_ClientCastStartedCounter;
	private static readonly IntPtr NativeFieldInfoPtr_ClientInterruptCounter;
	private static readonly IntPtr NativeFieldInfoPtr_HandledServerInterruptCounter;
	private static readonly IntPtr NativeFieldInfoPtr_IsSimulating;

	public NetworkId ClientCastGroupNetworkId;

	public AbilityBar_Shared SimulatedData;

	public AbilityButtonInputActionRemappings ActionRemappings;

	public Entity AimPreviewInstance;

	public int ClientCastStartedCounter;

	public int ClientInterruptCounter;

	public int HandledServerInterruptCounter;

	public bool IsSimulating;
}
```

## Client Systems

- [AbilityBarParentBinderSystem](/systems/client/AbilityBarParentBinderSystem)
