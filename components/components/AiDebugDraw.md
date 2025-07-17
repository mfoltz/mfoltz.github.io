---
nav_exclude: true
search_exclude: true
---

# AiDebugDraw

```csharp
[StructLayout(2)]
public struct AiDebugDraw
{
	static AiDebugDraw()
	{
		Il2CppClassPointerStore<AiDebugDraw>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Pathfinding.dll", "ProjectM", "AiDebugDraw");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AiDebugDraw>.NativeClassPtr);
		AiDebugDraw.NativeFieldInfoPtr_CurrentTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiDebugDraw>.NativeClassPtr, "CurrentTarget");
		AiDebugDraw.NativeFieldInfoPtr_AggroRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiDebugDraw>.NativeClassPtr, "AggroRadius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AiDebugDraw>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentTarget;
	private static readonly IntPtr NativeFieldInfoPtr_AggroRadius;
	[FieldOffset(0)]
	public float2 CurrentTarget;
	[FieldOffset(8)]
	public float AggroRadius;
}
