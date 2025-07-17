---
nav_exclude: true
search_exclude: true
---

# SpellModBlobReference

```csharp
[StructLayout(2)]
public struct SpellModBlobReference
{
	static SpellModBlobReference()
	{
		Il2CppClassPointerStore<SpellModBlobReference>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "SpellModBlobReference");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModBlobReference>.NativeClassPtr);
		SpellModBlobReference.NativeFieldInfoPtr_SpellMod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModBlobReference>.NativeClassPtr, "SpellMod");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModBlobReference>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod;
	[FieldOffset(0)]
	public BlobAssetReference<SpellModBlob> SpellMod;
}
