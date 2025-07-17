---
nav_exclude: true
search_exclude: true
---

# AddSequencerPropsBaking

```csharp
[StructLayout(2)]
public struct AddSequencerPropsBaking
{
	static AddSequencerPropsBaking()
	{
		Il2CppClassPointerStore<AddSequencerPropsBaking>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "AddSequencerPropsBaking");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AddSequencerPropsBaking>.NativeClassPtr);
		AddSequencerPropsBaking.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AddSequencerPropsBaking>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AddSequencerPropsBaking>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public Entity Entity;
}
