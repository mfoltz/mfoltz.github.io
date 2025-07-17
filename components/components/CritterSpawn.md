---
nav_exclude: true
search_exclude: true
---

# CritterSpawn

```csharp
[StructLayout(2)]
public struct CritterSpawn
{
	static CritterSpawn()
	{
		Il2CppClassPointerStore<CritterSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CritterSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CritterSpawn>.NativeClassPtr);
		CritterSpawn.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterSpawn>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CritterSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	[FieldOffset(0)]
	public BlobAssetReference<CritterSpawnBlob> Data;
}
