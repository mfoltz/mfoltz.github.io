# Script_SetSpellTargetToAIPoiType_DataServer

```csharp
[StructLayout(2)]
public struct Script_SetSpellTargetToAIPoiType_DataServer
{
	static Script_SetSpellTargetToAIPoiType_DataServer()
	{
		Il2CppClassPointerStore<Script_SetSpellTargetToAIPoiType_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SetSpellTargetToAIPoiType_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SetSpellTargetToAIPoiType_DataServer>.NativeClassPtr);
		Script_SetSpellTargetToAIPoiType_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetSpellTargetToAIPoiType_DataServer>.NativeClassPtr, "Radius");
		Script_SetSpellTargetToAIPoiType_DataServer.NativeFieldInfoPtr_HitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetSpellTargetToAIPoiType_DataServer>.NativeClassPtr, "HitFilter");
		Script_SetSpellTargetToAIPoiType_DataServer.NativeFieldInfoPtr_AIPoiType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetSpellTargetToAIPoiType_DataServer>.NativeClassPtr, "AIPoiType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SetSpellTargetToAIPoiType_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_HitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_AIPoiType;
	[FieldOffset(0)]
	public float Radius;
	[FieldOffset(4)]
	public HitFilter HitFilter;
	[FieldOffset(5)]
	public AiPointOfInterestType AIPoiType;
}
