# Script_Interact_Inspect_Data

```csharp
[StructLayout(2)]
public struct Script_Interact_Inspect_Data
{
	static Script_Interact_Inspect_Data()
	{
		Il2CppClassPointerStore<Script_Interact_Inspect_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Gameplay", "Script_Interact_Inspect_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Interact_Inspect_Data>.NativeClassPtr);
		Script_Interact_Inspect_Data.NativeFieldInfoPtr_Initialized = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Interact_Inspect_Data>.NativeClassPtr, "Initialized");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Interact_Inspect_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Initialized;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Initialized;
}
