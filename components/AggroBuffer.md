---
nav_exclude: true
search_exclude: false
---

# AggroBuffer

```csharp
public struct AggroBuffer
{
	static AggroBuffer()
	{
		Il2CppClassPointerStore<AggroBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AggroBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AggroBuffer>.NativeClassPtr);
		AggroBuffer.NativeFieldInfoPtr_TaggedForRemovalTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroBuffer>.NativeClassPtr, "TaggedForRemovalTime");
		AggroBuffer.NativeFieldInfoPtr_ProximityValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroBuffer>.NativeClassPtr, "ProximityValue");
		AggroBuffer.NativeFieldInfoPtr_DamageValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroBuffer>.NativeClassPtr, "DamageValue");
		AggroBuffer.NativeFieldInfoPtr_ExternalValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroBuffer>.NativeClassPtr, "ExternalValue");
		AggroBuffer.NativeFieldInfoPtr_Weight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroBuffer>.NativeClassPtr, "Weight");
		AggroBuffer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroBuffer>.NativeClassPtr, "Entity");
		AggroBuffer.NativeFieldInfoPtr_IsPlayer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroBuffer>.NativeClassPtr, "IsPlayer");
		AggroBuffer.NativeMethodInfoPtr_get_Value_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AggroBuffer>.NativeClassPtr, 100663954);
	}
	public unsafe float Value
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AggroBuffer.NativeMethodInfoPtr_get_Value_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AggroBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TaggedForRemovalTime;
	private static readonly IntPtr NativeFieldInfoPtr_ProximityValue;
	private static readonly IntPtr NativeFieldInfoPtr_DamageValue;
	private static readonly IntPtr NativeFieldInfoPtr_ExternalValue;
	private static readonly IntPtr NativeFieldInfoPtr_Weight;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_IsPlayer;
	private static readonly IntPtr NativeMethodInfoPtr_get_Value_Public_get_Single_0;

	public double TaggedForRemovalTime;

	public float ProximityValue;

	public float DamageValue;

	public float ExternalValue;

	public float Weight;

	public Entity Entity;

	public bool IsPlayer;
}
```

## Server Systems

- [GetOwnerPrimaryAggroTargetOnSpawnSystem](/systems/server/GetOwnerPrimaryAggroTargetOnSpawnSystem)
- [MinionSpawnSystem](/systems/server/MinionSpawnSystem)
