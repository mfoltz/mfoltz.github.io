---
nav_exclude: true
search_exclude: true
---

# EditTileModelSelection

```csharp
[StructLayout(2)]
public struct EditTileModelSelection
{
	static EditTileModelSelection()
	{
		Il2CppClassPointerStore<EditTileModelSelection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "EditTileModelSelection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditTileModelSelection>.NativeClassPtr);
		EditTileModelSelection.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditTileModelSelection>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditTileModelSelection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	[FieldOffset(0)]
	public Entity Target;
}
