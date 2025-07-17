---
nav_exclude: true
search_exclude: true
---

# MegaStaticInstanceBuffer

```csharp
[StructLayout(2)]
public struct MegaStaticInstanceBuffer
{
	static MegaStaticInstanceBuffer()
	{
		Il2CppClassPointerStore<MegaStaticInstanceBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MegaStaticInstanceBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MegaStaticInstanceBuffer>.NativeClassPtr);
		MegaStaticInstanceBuffer.NativeFieldInfoPtr_Instance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticInstanceBuffer>.NativeClassPtr, "Instance");
		MegaStaticInstanceBuffer.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticInstanceBuffer>.NativeClassPtr, "Prefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MegaStaticInstanceBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Instance;
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;
	[FieldOffset(0)]
	public Entity Instance;
	[FieldOffset(8)]
	public PrefabGUID Prefab;
}
