---
nav_exclude: true
search_exclude: true
---

# Script_ApplyBuffOnAllWithBuff_Cast_DataServer

```csharp
[StructLayout(2)]
public struct Script_ApplyBuffOnAllWithBuff_Cast_DataServer
{
	static Script_ApplyBuffOnAllWithBuff_Cast_DataServer()
	{
		Il2CppClassPointerStore<Script_ApplyBuffOnAllWithBuff_Cast_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ApplyBuffOnAllWithBuff_Cast_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ApplyBuffOnAllWithBuff_Cast_DataServer>.NativeClassPtr);
		Script_ApplyBuffOnAllWithBuff_Cast_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffOnAllWithBuff_Cast_DataServer>.NativeClassPtr, "Radius");
		Script_ApplyBuffOnAllWithBuff_Cast_DataServer.NativeFieldInfoPtr_HitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffOnAllWithBuff_Cast_DataServer>.NativeClassPtr, "HitFilter");
		Script_ApplyBuffOnAllWithBuff_Cast_DataServer.NativeFieldInfoPtr_BuffRequired = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffOnAllWithBuff_Cast_DataServer>.NativeClassPtr, "BuffRequired");
		Script_ApplyBuffOnAllWithBuff_Cast_DataServer.NativeFieldInfoPtr_BuffToApply = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffOnAllWithBuff_Cast_DataServer>.NativeClassPtr, "BuffToApply");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ApplyBuffOnAllWithBuff_Cast_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_HitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_BuffRequired;
	private static readonly IntPtr NativeFieldInfoPtr_BuffToApply;
	[FieldOffset(0)]
	public float Radius;
	[FieldOffset(4)]
	public HitFilter HitFilter;
	[FieldOffset(8)]
	public PrefabGUID BuffRequired;
	[FieldOffset(12)]
	public PrefabGUID BuffToApply;
}
