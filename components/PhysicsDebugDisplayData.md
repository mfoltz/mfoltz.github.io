---
nav_exclude: true
search_exclude: true
---

# PhysicsDebugDisplayData

```csharp
public struct PhysicsDebugDisplayData
{
	static PhysicsDebugDisplayData()
	{
		Il2CppClassPointerStore<PhysicsDebugDisplayData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "PhysicsDebugDisplayData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsDebugDisplayData>.NativeClassPtr);
		PhysicsDebugDisplayData.NativeFieldInfoPtr_DrawColliders = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsDebugDisplayData>.NativeClassPtr, "DrawColliders");
		PhysicsDebugDisplayData.NativeFieldInfoPtr_DrawColliderEdges = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsDebugDisplayData>.NativeClassPtr, "DrawColliderEdges");
		PhysicsDebugDisplayData.NativeFieldInfoPtr_DrawColliderAabbs = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsDebugDisplayData>.NativeClassPtr, "DrawColliderAabbs");
		PhysicsDebugDisplayData.NativeFieldInfoPtr_DrawBroadphase = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsDebugDisplayData>.NativeClassPtr, "DrawBroadphase");
		PhysicsDebugDisplayData.NativeFieldInfoPtr_DrawMassProperties = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsDebugDisplayData>.NativeClassPtr, "DrawMassProperties");
		PhysicsDebugDisplayData.NativeFieldInfoPtr_DrawContacts = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsDebugDisplayData>.NativeClassPtr, "DrawContacts");
		PhysicsDebugDisplayData.NativeFieldInfoPtr_DrawCollisionEvents = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsDebugDisplayData>.NativeClassPtr, "DrawCollisionEvents");
		PhysicsDebugDisplayData.NativeFieldInfoPtr_DrawTriggerEvents = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsDebugDisplayData>.NativeClassPtr, "DrawTriggerEvents");
		PhysicsDebugDisplayData.NativeFieldInfoPtr_DrawJoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsDebugDisplayData>.NativeClassPtr, "DrawJoints");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsDebugDisplayData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DrawColliders;
	private static readonly IntPtr NativeFieldInfoPtr_DrawColliderEdges;
	private static readonly IntPtr NativeFieldInfoPtr_DrawColliderAabbs;
	private static readonly IntPtr NativeFieldInfoPtr_DrawBroadphase;
	private static readonly IntPtr NativeFieldInfoPtr_DrawMassProperties;
	private static readonly IntPtr NativeFieldInfoPtr_DrawContacts;
	private static readonly IntPtr NativeFieldInfoPtr_DrawCollisionEvents;
	private static readonly IntPtr NativeFieldInfoPtr_DrawTriggerEvents;
	private static readonly IntPtr NativeFieldInfoPtr_DrawJoints;

	public int DrawColliders;

	public int DrawColliderEdges;

	public int DrawColliderAabbs;

	public int DrawBroadphase;

	public int DrawMassProperties;

	public int DrawContacts;

	public int DrawCollisionEvents;

	public int DrawTriggerEvents;

	public int DrawJoints;
}
```
