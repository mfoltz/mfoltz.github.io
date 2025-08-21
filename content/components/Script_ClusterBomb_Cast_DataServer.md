---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_ClusterBomb_Cast_DataServer
{
	static Script_ClusterBomb_Cast_DataServer()
	{
		Il2CppClassPointerStore<Script_ClusterBomb_Cast_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ClusterBomb_Cast_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ClusterBomb_Cast_DataServer>.NativeClassPtr);
		Script_ClusterBomb_Cast_DataServer.NativeFieldInfoPtr_NewThrowEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ClusterBomb_Cast_DataServer>.NativeClassPtr, "NewThrowEntity");
		Script_ClusterBomb_Cast_DataServer.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ClusterBomb_Cast_DataServer>.NativeClassPtr, "Count");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ClusterBomb_Cast_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NewThrowEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Count;

	public PrefabGUID NewThrowEntity;

	public int Count;
}
```
