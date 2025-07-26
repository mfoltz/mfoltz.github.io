# Script_SpawnPrefabOnMiss_DataServer

```csharp
[StructLayout(2)]
public struct Script_SpawnPrefabOnMiss_DataServer
{
	static Script_SpawnPrefabOnMiss_DataServer()
	{
		Il2CppClassPointerStore<Script_SpawnPrefabOnMiss_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SpawnPrefabOnMiss_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SpawnPrefabOnMiss_DataServer>.NativeClassPtr);
		Script_SpawnPrefabOnMiss_DataServer.NativeFieldInfoPtr_SpawnEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnPrefabOnMiss_DataServer>.NativeClassPtr, "SpawnEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SpawnPrefabOnMiss_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnEntity;
	[FieldOffset(0)]
	public PrefabGUID SpawnEntity;
}
