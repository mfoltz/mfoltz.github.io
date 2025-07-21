---
nav_exclude: true
search_exclude: false
---

# MegaStaticServerInstanceBuffer

```csharp
public struct MegaStaticServerInstanceBuffer
{
	static MegaStaticServerInstanceBuffer()
	{
		Il2CppClassPointerStore<MegaStaticServerInstanceBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MegaStaticServerInstanceBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MegaStaticServerInstanceBuffer>.NativeClassPtr);
		MegaStaticServerInstanceBuffer.NativeFieldInfoPtr_SpawnChainChild = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticServerInstanceBuffer>.NativeClassPtr, "SpawnChainChild");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MegaStaticServerInstanceBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnChainChild;

	public SpawnChainChild SpawnChainChild;
}
```
