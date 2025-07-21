---
nav_exclude: true
search_exclude: false
---

# Mountable

```csharp
public struct Mountable
{
	static Mountable()
	{
		Il2CppClassPointerStore<Mountable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Mountable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Mountable>.NativeClassPtr);
		Mountable.NativeFieldInfoPtr_MaxSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable>.NativeClassPtr, "MaxSpeed");
		Mountable.NativeFieldInfoPtr_Acceleration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable>.NativeClassPtr, "Acceleration");
		Mountable.NativeFieldInfoPtr_RotationSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable>.NativeClassPtr, "RotationSpeed");
		Mountable.NativeFieldInfoPtr_Mounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable>.NativeClassPtr, "Mounter");
		Mountable.NativeFieldInfoPtr_MountBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable>.NativeClassPtr, "MountBuff");
		Mountable.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable>.NativeClassPtr, "Blob");
		Mountable.NativeFieldInfoPtr_HasNearbyUsers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable>.NativeClassPtr, "HasNearbyUsers");
		Mountable.NativeFieldInfoPtr_DemountTargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable>.NativeClassPtr, "DemountTargetPosition");
		Mountable.NativeFieldInfoPtr_DemountSpeedModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable>.NativeClassPtr, "DemountSpeedModId");
		Mountable.NativeFieldInfoPtr_DemountClientPreviousTargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable>.NativeClassPtr, "DemountClientPreviousTargetPosition");
		Mountable.NativeFieldInfoPtr_DecelerationForce = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable>.NativeClassPtr, "DecelerationForce");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Mountable>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_Acceleration;
	private static readonly IntPtr NativeFieldInfoPtr_RotationSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_Mounter;
	private static readonly IntPtr NativeFieldInfoPtr_MountBuff;
	private static readonly IntPtr NativeFieldInfoPtr_Blob;
	private static readonly IntPtr NativeFieldInfoPtr_HasNearbyUsers;
	private static readonly IntPtr NativeFieldInfoPtr_DemountTargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_DemountSpeedModId;
	private static readonly IntPtr NativeFieldInfoPtr_DemountClientPreviousTargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_DecelerationForce;

	public float MaxSpeed;

	public float Acceleration;

	public float RotationSpeed;

	public Entity Mounter;

	public PrefabGUID MountBuff;

	public BlobAssetReference<Mountable.BlobData> Blob;

	public bool HasNearbyUsers;

	public float2 DemountTargetPosition;

	public ModificationId DemountSpeedModId;

	public float2 DemountClientPreviousTargetPosition;

	public float DecelerationForce;

	public struct BlobData
	{
		static BlobData()
		{
			Il2CppClassPointerStore<Mountable.BlobData>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<Mountable>.NativeClassPtr, "BlobData");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Mountable.BlobData>.NativeClassPtr);
			Mountable.BlobData.NativeFieldInfoPtr_MaxSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable.BlobData>.NativeClassPtr, "MaxSpeed");
			Mountable.BlobData.NativeFieldInfoPtr_Acceleration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable.BlobData>.NativeClassPtr, "Acceleration");
			Mountable.BlobData.NativeFieldInfoPtr_RotationSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable.BlobData>.NativeClassPtr, "RotationSpeed");
			Mountable.BlobData.NativeFieldInfoPtr_MaxStatSpawnPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable.BlobData>.NativeClassPtr, "MaxStatSpawnPercentage");
			Mountable.BlobData.NativeFieldInfoPtr_StatSpawnValueResolution = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable.BlobData>.NativeClassPtr, "StatSpawnValueResolution");
			Mountable.BlobData.NativeFieldInfoPtr_DecelerationForceCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable.BlobData>.NativeClassPtr, "DecelerationForceCurve");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Mountable.BlobData>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_MaxSpeed;
		private static readonly IntPtr NativeFieldInfoPtr_Acceleration;
		private static readonly IntPtr NativeFieldInfoPtr_RotationSpeed;
		private static readonly IntPtr NativeFieldInfoPtr_MaxStatSpawnPercentage;
		private static readonly IntPtr NativeFieldInfoPtr_StatSpawnValueResolution;
		private static readonly IntPtr NativeFieldInfoPtr_DecelerationForceCurve;

		public Mountable.BlobData.Stat MaxSpeed;

		public Mountable.BlobData.Stat Acceleration;

		public Mountable.BlobData.Stat RotationSpeed;

		public float MaxStatSpawnPercentage;

		public float StatSpawnValueResolution;

		public CurveReference DecelerationForceCurve;

		public struct Stat
		{
			static Stat()
			{
				Il2CppClassPointerStore<Mountable.BlobData.Stat>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<Mountable.BlobData>.NativeClassPtr, "Stat");
				IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Mountable.BlobData.Stat>.NativeClassPtr);
				Mountable.BlobData.Stat.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable.BlobData.Stat>.NativeClassPtr, "Range");
				Mountable.BlobData.Stat.NativeFieldInfoPtr_VisualFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mountable.BlobData.Stat>.NativeClassPtr, "VisualFactor");
			}
			public Object BoxIl2CppObject()
			{
				return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Mountable.BlobData.Stat>.NativeClassPtr, ref this));
			}
			private static readonly IntPtr NativeFieldInfoPtr_Range;
			private static readonly IntPtr NativeFieldInfoPtr_VisualFactor;

			public FloatRange Range;

			public float VisualFactor;
		}
	}
}
```

## Server Systems

- [MountStatsSpawnSystem_Server](/systems/server/MountStatsSpawnSystem_Server)
- [MountSystem_Shared](/systems/server/MountSystem_Shared)

## Client Systems

- [MountSystem_Shared](/systems/client/MountSystem_Shared)
