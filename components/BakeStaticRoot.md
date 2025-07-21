---
nav_exclude: true
search_exclude: false
---

# BakeStaticRoot

```csharp
public struct BakeStaticRoot
{
	static BakeStaticRoot()
	{
		Il2CppClassPointerStore<BakeStaticRoot>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "BakeStaticRoot");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakeStaticRoot>.NativeClassPtr);
		BakeStaticRoot.NativeFieldInfoPtr_Body = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakeStaticRoot>.NativeClassPtr, "Body");
		BakeStaticRoot.NativeFieldInfoPtr_ConvertedBodyInstanceID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakeStaticRoot>.NativeClassPtr, "ConvertedBodyInstanceID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakeStaticRoot>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Body;
	private static readonly IntPtr NativeFieldInfoPtr_ConvertedBodyInstanceID;

	public Entity Body;

	public int ConvertedBodyInstanceID;
}
```
