---
nav_exclude: true
search_exclude: false
---

# NetworkedPrefabChildren

```csharp
public struct NetworkedPrefabChildren
{
	static NetworkedPrefabChildren()
	{
		Il2CppClassPointerStore<NetworkedPrefabChildren>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Tiles", "NetworkedPrefabChildren");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetworkedPrefabChildren>.NativeClassPtr);
		NetworkedPrefabChildren.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkedPrefabChildren>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetworkedPrefabChildren>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;

	public BlobAssetReference<NetworkedPrefabChildrenData> Data;
}
```
