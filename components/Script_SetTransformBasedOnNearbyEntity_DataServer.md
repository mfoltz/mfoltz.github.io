# Script_SetTransformBasedOnNearbyEntity_DataServer

```csharp
[StructLayout(2)]
public struct Script_SetTransformBasedOnNearbyEntity_DataServer
{
	static Script_SetTransformBasedOnNearbyEntity_DataServer()
	{
		Il2CppClassPointerStore<Script_SetTransformBasedOnNearbyEntity_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SetTransformBasedOnNearbyEntity_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SetTransformBasedOnNearbyEntity_DataServer>.NativeClassPtr);
		Script_SetTransformBasedOnNearbyEntity_DataServer.NativeFieldInfoPtr_NearbyEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetTransformBasedOnNearbyEntity_DataServer>.NativeClassPtr, "NearbyEntity");
		Script_SetTransformBasedOnNearbyEntity_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetTransformBasedOnNearbyEntity_DataServer>.NativeClassPtr, "Radius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SetTransformBasedOnNearbyEntity_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NearbyEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	[FieldOffset(0)]
	public PrefabIdentifier NearbyEntity;
	[FieldOffset(4)]
	public float Radius;
}
