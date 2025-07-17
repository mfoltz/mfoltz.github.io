---
nav_exclude: true
search_exclude: true
---

# RagdollCreateData

```csharp
[StructLayout(2)]
public struct RagdollCreateData
{
	static RagdollCreateData()
	{
		Il2CppClassPointerStore<RagdollCreateData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RagdollCreateData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RagdollCreateData>.NativeClassPtr);
		RagdollCreateData.NativeFieldInfoPtr_RagdollForce = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollCreateData>.NativeClassPtr, "RagdollForce");
		RagdollCreateData.NativeFieldInfoPtr_HybridModelUserEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollCreateData>.NativeClassPtr, "HybridModelUserEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RagdollCreateData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RagdollForce;
	private static readonly IntPtr NativeFieldInfoPtr_HybridModelUserEntity;
	[FieldOffset(0)]
	public float3 RagdollForce;
	[FieldOffset(12)]
	public Entity HybridModelUserEntity;
}
