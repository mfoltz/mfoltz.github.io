---
nav_exclude: true
search_exclude: false
---

# EtherialState_DataShared

```csharp
public struct EtherialState_DataShared
{
	static EtherialState_DataShared()
	{
		Il2CppClassPointerStore<EtherialState_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "EtherialState_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EtherialState_DataShared>.NativeClassPtr);
		EtherialState_DataShared.NativeFieldInfoPtr_EtherealBuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EtherialState_DataShared>.NativeClassPtr, "EtherealBuffEntity");
		EtherialState_DataShared.NativeFieldInfoPtr_VulnerableBuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EtherialState_DataShared>.NativeClassPtr, "VulnerableBuffEntity");
		EtherialState_DataShared.NativeFieldInfoPtr_DamageReductionFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EtherialState_DataShared>.NativeClassPtr, "DamageReductionFactor");
		EtherialState_DataShared.NativeFieldInfoPtr_VulnerabilityTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EtherialState_DataShared>.NativeClassPtr, "VulnerabilityTime");
		EtherialState_DataShared.NativeFieldInfoPtr_BuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EtherialState_DataShared>.NativeClassPtr, "BuffEntity");
		EtherialState_DataShared.NativeFieldInfoPtr_Vulnerable = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EtherialState_DataShared>.NativeClassPtr, "Vulnerable");
		EtherialState_DataShared.NativeFieldInfoPtr_WasCasting = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EtherialState_DataShared>.NativeClassPtr, "WasCasting");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EtherialState_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EtherealBuffEntity;
	private static readonly IntPtr NativeFieldInfoPtr_VulnerableBuffEntity;
	private static readonly IntPtr NativeFieldInfoPtr_DamageReductionFactor;
	private static readonly IntPtr NativeFieldInfoPtr_VulnerabilityTime;
	private static readonly IntPtr NativeFieldInfoPtr_BuffEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Vulnerable;
	private static readonly IntPtr NativeFieldInfoPtr_WasCasting;

	public PrefabGUID EtherealBuffEntity;

	public PrefabGUID VulnerableBuffEntity;

	public float DamageReductionFactor;

	public float VulnerabilityTime;

	public Entity BuffEntity;

	public bool Vulnerable;

	public bool WasCasting;
}
```
