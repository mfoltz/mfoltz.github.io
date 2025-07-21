---
nav_exclude: true
search_exclude: false
---

# SpellModBlobReference_UI

```csharp
public struct SpellModBlobReference_UI
{
	static SpellModBlobReference_UI()
	{
		Il2CppClassPointerStore<SpellModBlobReference_UI>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "SpellModBlobReference_UI");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModBlobReference_UI>.NativeClassPtr);
		SpellModBlobReference_UI.NativeFieldInfoPtr_SpellMod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModBlobReference_UI>.NativeClassPtr, "SpellMod");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModBlobReference_UI>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod;

	public BlobAssetReference<SpellModBlob_UI> SpellMod;
}
```
