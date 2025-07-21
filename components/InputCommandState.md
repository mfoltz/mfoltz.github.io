---
nav_exclude: true
search_exclude: false
---

# InputCommandState

```csharp
public struct InputCommandState
{
	static InputCommandState()
	{
		Il2CppClassPointerStore<InputCommandState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "InputCommandState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InputCommandState>.NativeClassPtr);
		InputCommandState.NativeFieldInfoPtr_Translation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandState>.NativeClassPtr, "Translation");
		InputCommandState.NativeFieldInfoPtr_LastTranslation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandState>.NativeClassPtr, "LastTranslation");
		InputCommandState.NativeFieldInfoPtr_Velocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandState>.NativeClassPtr, "Velocity");
		InputCommandState.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandState>.NativeClassPtr, "Rotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InputCommandState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Translation;
	private static readonly IntPtr NativeFieldInfoPtr_LastTranslation;
	private static readonly IntPtr NativeFieldInfoPtr_Velocity;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;

	public Translation Translation;

	public LastTranslation LastTranslation;

	public Velocity Velocity;

	public Rotation Rotation;
}
```
