---
nav_exclude: true
search_exclude: true
---

# CreateGameplayEventOnKill

```csharp
[StructLayout(2)]
public struct CreateGameplayEventOnKill
{
	static CreateGameplayEventOnKill()
	{
		Il2CppClassPointerStore<CreateGameplayEventOnKill>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventOnKill");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventOnKill>.NativeClassPtr);
		CreateGameplayEventOnKill.NativeFieldInfoPtr_Id = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnKill>.NativeClassPtr, "Id");
		CreateGameplayEventOnKill.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnKill>.NativeClassPtr, "Condition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventOnKill>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Id;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	[FieldOffset(0)]
	public GameplayEventId Id;
	[FieldOffset(8)]
	public BlobAssetReference<ConditionBlob> Condition;
}
