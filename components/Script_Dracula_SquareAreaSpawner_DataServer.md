# Script_Dracula_SquareAreaSpawner_DataServer

```csharp
[StructLayout(2)]
public struct Script_Dracula_SquareAreaSpawner_DataServer
{
	static Script_Dracula_SquareAreaSpawner_DataServer()
	{
		Il2CppClassPointerStore<Script_Dracula_SquareAreaSpawner_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Dracula_SquareAreaSpawner_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Dracula_SquareAreaSpawner_DataServer>.NativeClassPtr);
		Script_Dracula_SquareAreaSpawner_DataServer.NativeFieldInfoPtr_ObjectToSpawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SquareAreaSpawner_DataServer>.NativeClassPtr, "ObjectToSpawn");
		Script_Dracula_SquareAreaSpawner_DataServer.NativeFieldInfoPtr_SquareSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SquareAreaSpawner_DataServer>.NativeClassPtr, "SquareSize");
		Script_Dracula_SquareAreaSpawner_DataServer.NativeFieldInfoPtr_GridMaxSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SquareAreaSpawner_DataServer>.NativeClassPtr, "GridMaxSize");
		Script_Dracula_SquareAreaSpawner_DataServer.NativeFieldInfoPtr_SquareSpawnChance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SquareAreaSpawner_DataServer>.NativeClassPtr, "SquareSpawnChance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Dracula_SquareAreaSpawner_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ObjectToSpawn;
	private static readonly IntPtr NativeFieldInfoPtr_SquareSize;
	private static readonly IntPtr NativeFieldInfoPtr_GridMaxSize;
	private static readonly IntPtr NativeFieldInfoPtr_SquareSpawnChance;
	[FieldOffset(0)]
	public PrefabGUID ObjectToSpawn;
	[FieldOffset(4)]
	public float SquareSize;
	[FieldOffset(8)]
	public float GridMaxSize;
	[FieldOffset(12)]
	public float SquareSpawnChance;
}
