# Script_FindClosestSpellTarget_DataServer

```csharp
[StructLayout(2)]
public struct Script_FindClosestSpellTarget_DataServer
{
	static Script_FindClosestSpellTarget_DataServer()
	{
		Il2CppClassPointerStore<Script_FindClosestSpellTarget_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_FindClosestSpellTarget_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_FindClosestSpellTarget_DataServer>.NativeClassPtr);
		Script_FindClosestSpellTarget_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_FindClosestSpellTarget_DataServer>.NativeClassPtr, "Radius");
		Script_FindClosestSpellTarget_DataServer.NativeFieldInfoPtr_HitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_FindClosestSpellTarget_DataServer>.NativeClassPtr, "HitFilter");
		Script_FindClosestSpellTarget_DataServer.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_FindClosestSpellTarget_DataServer>.NativeClassPtr, "Condition");
		Script_FindClosestSpellTarget_DataServer.NativeFieldInfoPtr_OnlyUnits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_FindClosestSpellTarget_DataServer>.NativeClassPtr, "OnlyUnits");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_FindClosestSpellTarget_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_HitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyUnits;
	[FieldOffset(0)]
	public float Radius;
	[FieldOffset(4)]
	public HitFilter HitFilter;
	[FieldOffset(8)]
	public BlobAssetReference<ConditionBlob> Condition;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool OnlyUnits;
}
