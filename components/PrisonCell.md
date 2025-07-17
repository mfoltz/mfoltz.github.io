---
nav_exclude: true
search_exclude: true
---

# PrisonCell

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public NetworkedEntity ImprisonedEntity;
	[FieldOffset(16)]
	public BlobAssetReference<PrisonCell.BlobData> Blob;
	[StructLayout(2)]
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
		[FieldOffset(0)]
		public PrefabGUID Buff_PsychicForm;
		[FieldOffset(4)]
		public AssetGuid LKey_RequiresPsychicForm;
		[FieldOffset(20)]
		public AssetGuid LKey_TargetIsImmune;
		[FieldOffset(36)]
		public PrefabGUID ImprisonedBuff;
	}
}
