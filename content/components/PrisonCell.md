---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PrisonCell
{
	static PrisonCell()
	{
		Il2CppClassPointerStore<PrisonCell>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PrisonCell");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrisonCell>.NativeClassPtr);
		PrisonCell.NativeFieldInfoPtr_ImprisonedEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrisonCell>.NativeClassPtr, "ImprisonedEntity");
		PrisonCell.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrisonCell>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrisonCell>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ImprisonedEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Blob;

	public NetworkedEntity ImprisonedEntity;

	public BlobAssetReference<PrisonCell.BlobData> Blob;

	public struct BlobData
	{
		static BlobData()
		{
			Il2CppClassPointerStore<PrisonCell.BlobData>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<PrisonCell>.NativeClassPtr, "BlobData");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrisonCell.BlobData>.NativeClassPtr);
			PrisonCell.BlobData.NativeFieldInfoPtr_Buff_PsychicForm = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrisonCell.BlobData>.NativeClassPtr, "Buff_PsychicForm");
			PrisonCell.BlobData.NativeFieldInfoPtr_LKey_RequiresPsychicForm = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrisonCell.BlobData>.NativeClassPtr, "LKey_RequiresPsychicForm");
			PrisonCell.BlobData.NativeFieldInfoPtr_LKey_TargetIsImmune = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrisonCell.BlobData>.NativeClassPtr, "LKey_TargetIsImmune");
			PrisonCell.BlobData.NativeFieldInfoPtr_ImprisonedBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrisonCell.BlobData>.NativeClassPtr, "ImprisonedBuff");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrisonCell.BlobData>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_Buff_PsychicForm;
		private static readonly IntPtr NativeFieldInfoPtr_LKey_RequiresPsychicForm;
		private static readonly IntPtr NativeFieldInfoPtr_LKey_TargetIsImmune;
		private static readonly IntPtr NativeFieldInfoPtr_ImprisonedBuff;

		public PrefabGUID Buff_PsychicForm;

		public AssetGuid LKey_RequiresPsychicForm;

		public AssetGuid LKey_TargetIsImmune;

		public PrefabGUID ImprisonedBuff;
	}
}
```
