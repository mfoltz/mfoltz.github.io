---
nav_exclude: true
search_exclude: true
---

# Script_SpawnAnotherThrowSameDirection_DataServer

```csharp
[StructLayout(2)]
public struct Script_SpawnAnotherThrowSameDirection_DataServer
{
	static Script_SpawnAnotherThrowSameDirection_DataServer()
	{
		Il2CppClassPointerStore<Script_SpawnAnotherThrowSameDirection_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SpawnAnotherThrowSameDirection_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SpawnAnotherThrowSameDirection_DataServer>.NativeClassPtr);
		Script_SpawnAnotherThrowSameDirection_DataServer.NativeFieldInfoPtr_NewThrowEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnAnotherThrowSameDirection_DataServer>.NativeClassPtr, "NewThrowEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SpawnAnotherThrowSameDirection_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NewThrowEntity;
	[FieldOffset(0)]
	public PrefabGUID NewThrowEntity;
}
