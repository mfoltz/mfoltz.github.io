---
nav_exclude: true
search_exclude: true
---

# LargestFluffBounds

```csharp
[StructLayout(2)]
public struct LargestFluffBounds
{
	static LargestFluffBounds()
	{
		Il2CppClassPointerStore<LargestFluffBounds>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "LargestFluffBounds");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LargestFluffBounds>.NativeClassPtr);
		LargestFluffBounds.NativeFieldInfoPtr_LargestRootSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LargestFluffBounds>.NativeClassPtr, "LargestRootSize");
		LargestFluffBounds.NativeFieldInfoPtr_LargestExtendSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LargestFluffBounds>.NativeClassPtr, "LargestExtendSize");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LargestFluffBounds>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LargestRootSize;
	private static readonly IntPtr NativeFieldInfoPtr_LargestExtendSize;
	[FieldOffset(0)]
	public int2 LargestRootSize;
	[FieldOffset(8)]
	public int2 LargestExtendSize;
}
