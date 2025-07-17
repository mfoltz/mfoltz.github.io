---
nav_exclude: true
search_exclude: true
---

# MegaStaticPrefabBuffer

```csharp
[StructLayout(2)]
public struct MegaStaticPrefabBuffer
{
	static MegaStaticPrefabBuffer()
	{
		Il2CppClassPointerStore<MegaStaticPrefabBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MegaStaticPrefabBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MegaStaticPrefabBuffer>.NativeClassPtr);
		MegaStaticPrefabBuffer.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticPrefabBuffer>.NativeClassPtr, "Prefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MegaStaticPrefabBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;
	[FieldOffset(0)]
	public PrefabGUID Prefab;
}
