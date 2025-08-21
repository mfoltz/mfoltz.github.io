---
nav_exclude: true
search_exclude: true
---

```csharp
public struct JumpFromCliffs
{
	static JumpFromCliffs()
	{
		Il2CppClassPointerStore<JumpFromCliffs>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "JumpFromCliffs");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<JumpFromCliffs>.NativeClassPtr);
		JumpFromCliffs.NativeFieldInfoPtr_LastTranslation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffs>.NativeClassPtr, "LastTranslation");
		JumpFromCliffs.NativeFieldInfoPtr_MaxDot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffs>.NativeClassPtr, "MaxDot");
		JumpFromCliffs.NativeFieldInfoPtr_JumpDownTravelBuffPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffs>.NativeClassPtr, "JumpDownTravelBuffPrefabGuid");
		JumpFromCliffs.NativeFieldInfoPtr_JumpUpBuffPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffs>.NativeClassPtr, "JumpUpBuffPrefabGuid");
		JumpFromCliffs.NativeFieldInfoPtr_CheckAgainstMapFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffs>.NativeClassPtr, "CheckAgainstMapFlags");
		JumpFromCliffs.NativeFieldInfoPtr_AllowJump = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffs>.NativeClassPtr, "AllowJump");
		JumpFromCliffs.NativeFieldInfoPtr_BlockJump = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffs>.NativeClassPtr, "BlockJump");
		JumpFromCliffs.NativeFieldInfoPtr_IsInJump = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffs>.NativeClassPtr, "IsInJump");
		JumpFromCliffs.NativeFieldInfoPtr_CanJumpDown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffs>.NativeClassPtr, "CanJumpDown");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<JumpFromCliffs>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastTranslation;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDot;
	private static readonly IntPtr NativeFieldInfoPtr_JumpDownTravelBuffPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_JumpUpBuffPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_CheckAgainstMapFlags;
	private static readonly IntPtr NativeFieldInfoPtr_AllowJump;
	private static readonly IntPtr NativeFieldInfoPtr_BlockJump;
	private static readonly IntPtr NativeFieldInfoPtr_IsInJump;
	private static readonly IntPtr NativeFieldInfoPtr_CanJumpDown;

	public float3 LastTranslation;

	public ModifiableFloat MaxDot;

	public PrefabGUID JumpDownTravelBuffPrefabGuid;

	public PrefabGUID JumpUpBuffPrefabGuid;

	public MapCollisionFlags CheckAgainstMapFlags;

	public ModifiableBool AllowJump;

	public ModifiableBool BlockJump;

	public bool IsInJump;

	public bool CanJumpDown;
}
```
