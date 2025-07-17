---
nav_exclude: true
search_exclude: true
---

# Script_BatformSCT_DataServer

```csharp
[StructLayout(2)]
public struct Script_BatformSCT_DataServer
{
	static Script_BatformSCT_DataServer()
	{
		Il2CppClassPointerStore<Script_BatformSCT_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_BatformSCT_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_BatformSCT_DataServer>.NativeClassPtr);
		Script_BatformSCT_DataServer.NativeFieldInfoPtr_FailText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BatformSCT_DataServer>.NativeClassPtr, "FailText");
		Script_BatformSCT_DataServer.NativeFieldInfoPtr_FailSoulShardText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BatformSCT_DataServer>.NativeClassPtr, "FailSoulShardText");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_BatformSCT_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FailText;
	private static readonly IntPtr NativeFieldInfoPtr_FailSoulShardText;
	[FieldOffset(0)]
	public AssetGuid FailText;
	[FieldOffset(16)]
	public AssetGuid FailSoulShardText;
}
