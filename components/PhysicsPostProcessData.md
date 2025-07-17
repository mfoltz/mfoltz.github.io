---
nav_exclude: true
search_exclude: true
---

# PhysicsPostProcessData

```csharp
[StructLayout(2)]
public struct PhysicsPostProcessData
{
	static PhysicsPostProcessData()
	{
		Il2CppClassPointerStore<PhysicsPostProcessData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "PhysicsPostProcessData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsPostProcessData>.NativeClassPtr);
		PhysicsPostProcessData.NativeFieldInfoPtr_LocalToWorldMatrix = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsPostProcessData>.NativeClassPtr, "LocalToWorldMatrix");
		PhysicsPostProcessData.NativeFieldInfoPtr_LossyScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsPostProcessData>.NativeClassPtr, "LossyScale");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsPostProcessData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LocalToWorldMatrix;
	private static readonly IntPtr NativeFieldInfoPtr_LossyScale;
	[FieldOffset(0)]
	public float4x4 LocalToWorldMatrix;
	[FieldOffset(64)]
	public float3 LossyScale;
}
