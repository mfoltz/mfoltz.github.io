---
nav_exclude: true
search_exclude: true
---

# SlashersHitList_DataServer

```csharp
[StructLayout(2)]
public struct SlashersHitList_DataServer
{
	static SlashersHitList_DataServer()
	{
		Il2CppClassPointerStore<SlashersHitList_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "SlashersHitList_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SlashersHitList_DataServer>.NativeClassPtr);
		SlashersHitList_DataServer.NativeFieldInfoPtr_HitEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SlashersHitList_DataServer>.NativeClassPtr, "HitEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SlashersHitList_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HitEntity;
	[FieldOffset(0)]
	public Entity HitEntity;
}
