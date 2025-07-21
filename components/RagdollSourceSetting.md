---
nav_exclude: true
search_exclude: false
---

# RagdollSourceSetting

```csharp
public struct RagdollSourceSetting
{
	static RagdollSourceSetting()
	{
		Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RagdollSourceSetting");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr);
		RagdollSourceSetting.NativeFieldInfoPtr_ManualDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr, "ManualDirection");
		RagdollSourceSetting.NativeFieldInfoPtr_Force = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr, "Force");
		RagdollSourceSetting.NativeFieldInfoPtr_ManualDirectionWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr, "ManualDirectionWeight");
		RagdollSourceSetting.NativeFieldInfoPtr_InheritDirectionWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr, "InheritDirectionWeight");
		RagdollSourceSetting.NativeFieldInfoPtr_AwayFromSourceWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr, "AwayFromSourceWeight");
		RagdollSourceSetting.NativeFieldInfoPtr_TowardsSourceWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr, "TowardsSourceWeight");
		RagdollSourceSetting.NativeFieldInfoPtr_InheritDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr, "InheritDirection");
		RagdollSourceSetting.NativeFieldInfoPtr_AwayFromSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr, "AwayFromSource");
		RagdollSourceSetting.NativeFieldInfoPtr_TowardsSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr, "TowardsSource");
		RagdollSourceSetting.NativeFieldInfoPtr_UseManualDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr, "UseManualDirection");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RagdollSourceSetting>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ManualDirection;
	private static readonly IntPtr NativeFieldInfoPtr_Force;
	private static readonly IntPtr NativeFieldInfoPtr_ManualDirectionWeight;
	private static readonly IntPtr NativeFieldInfoPtr_InheritDirectionWeight;
	private static readonly IntPtr NativeFieldInfoPtr_AwayFromSourceWeight;
	private static readonly IntPtr NativeFieldInfoPtr_TowardsSourceWeight;
	private static readonly IntPtr NativeFieldInfoPtr_InheritDirection;
	private static readonly IntPtr NativeFieldInfoPtr_AwayFromSource;
	private static readonly IntPtr NativeFieldInfoPtr_TowardsSource;
	private static readonly IntPtr NativeFieldInfoPtr_UseManualDirection;

	public float3 ManualDirection;

	public float Force;

	public float ManualDirectionWeight;

	public float InheritDirectionWeight;

	public float AwayFromSourceWeight;

	public float TowardsSourceWeight;

	public bool InheritDirection;

	public bool AwayFromSource;

	public bool TowardsSource;

	public bool UseManualDirection;
}
```
