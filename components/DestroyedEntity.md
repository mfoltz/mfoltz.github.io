---
nav_exclude: true
search_exclude: true
---

# DestroyedEntity

```csharp
[StructLayout(2)]
public struct DestroyedEntity
{
	static DestroyedEntity()
	{
		Il2CppClassPointerStore<DestroyedEntity>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "DestroyedEntity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyedEntity>.NativeClassPtr);
		DestroyedEntity.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyedEntity>.NativeClassPtr, "PrefabGUID");
		DestroyedEntity.NativeFieldInfoPtr_NetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyedEntity>.NativeClassPtr, "NetworkId");
		DestroyedEntity.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyedEntity>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyedEntity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public PrefabGUID PrefabGUID;
	[FieldOffset(4)]
	public NetworkId NetworkId;
	[FieldOffset(16)]
	public Entity Entity;
}
