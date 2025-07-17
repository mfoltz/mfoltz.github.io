---
nav_exclude: true
search_exclude: true
---

# SpiderCocoonSpawns_DataServer

```csharp
[StructLayout(2)]
public struct SpiderCocoonSpawns_DataServer
{
	static SpiderCocoonSpawns_DataServer()
	{
		Il2CppClassPointerStore<SpiderCocoonSpawns_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "SpiderCocoonSpawns_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpiderCocoonSpawns_DataServer>.NativeClassPtr);
		SpiderCocoonSpawns_DataServer.NativeFieldInfoPtr_CocoonSpawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderCocoonSpawns_DataServer>.NativeClassPtr, "CocoonSpawn");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpiderCocoonSpawns_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CocoonSpawn;
	[FieldOffset(0)]
	public PrefabGUID CocoonSpawn;
}
