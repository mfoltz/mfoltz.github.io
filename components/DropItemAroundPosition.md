---
nav_exclude: true
search_exclude: true
---

# DropItemAroundPosition

```csharp
public struct DropItemAroundPosition
{
	static DropItemAroundPosition()
	{
		Il2CppClassPointerStore<DropItemAroundPosition>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DropItemAroundPosition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DropItemAroundPosition>.NativeClassPtr);
		DropItemAroundPosition.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropItemAroundPosition>.NativeClassPtr, "Position");
		DropItemAroundPosition.NativeFieldInfoPtr_Direction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropItemAroundPosition>.NativeClassPtr, "Direction");
		DropItemAroundPosition.NativeFieldInfoPtr_MinRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropItemAroundPosition>.NativeClassPtr, "MinRange");
		DropItemAroundPosition.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropItemAroundPosition>.NativeClassPtr, "MaxRange");
		DropItemAroundPosition.NativeFieldInfoPtr_ItemEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropItemAroundPosition>.NativeClassPtr, "ItemEntity");
		DropItemAroundPosition.NativeFieldInfoPtr_ItemHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropItemAroundPosition>.NativeClassPtr, "ItemHash");
		DropItemAroundPosition.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropItemAroundPosition>.NativeClassPtr, "Amount");
		DropItemAroundPosition.NativeFieldInfoPtr_CustomDropArcPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropItemAroundPosition>.NativeClassPtr, "CustomDropArcPrefab");
		DropItemAroundPosition.NativeFieldInfoPtr_DontMerge = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropItemAroundPosition>.NativeClassPtr, "DontMerge");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DropItemAroundPosition>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Direction;
	private static readonly IntPtr NativeFieldInfoPtr_MinRange;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_ItemEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ItemHash;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeFieldInfoPtr_CustomDropArcPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_DontMerge;

	public float3 Position;

	public Nullable_Unboxed<float2> Direction;

	public Nullable_Unboxed<float> MinRange;

	public Nullable_Unboxed<float> MaxRange;

	public Entity ItemEntity;

	public PrefabGUID ItemHash;

	public int Amount;

	public Nullable_Unboxed<Entity> CustomDropArcPrefab;

	public bool DontMerge;
}
```
