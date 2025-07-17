---
nav_exclude: true
search_exclude: true
---

# Script_ConfuseDummy_DataServer

```csharp
[StructLayout(2)]
public struct Script_ConfuseDummy_DataServer
{
	static Script_ConfuseDummy_DataServer()
	{
		Il2CppClassPointerStore<Script_ConfuseDummy_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Script_ConfuseDummy_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ConfuseDummy_DataServer>.NativeClassPtr);
		Script_ConfuseDummy_DataServer.NativeFieldInfoPtr_DestroyOnCreatorDestroyed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ConfuseDummy_DataServer>.NativeClassPtr, "DestroyOnCreatorDestroyed");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ConfuseDummy_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DestroyOnCreatorDestroyed;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool DestroyOnCreatorDestroyed;
}
