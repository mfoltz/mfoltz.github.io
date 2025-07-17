---
nav_exclude: true
search_exclude: true
---

# CreateGameplayEventOnLeaveCliff

```csharp
[StructLayout(2)]
public struct CreateGameplayEventOnLeaveCliff
{
	static CreateGameplayEventOnLeaveCliff()
	{
		Il2CppClassPointerStore<CreateGameplayEventOnLeaveCliff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventOnLeaveCliff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventOnLeaveCliff>.NativeClassPtr);
		CreateGameplayEventOnLeaveCliff.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnLeaveCliff>.NativeClassPtr, "EventId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventOnLeaveCliff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	[FieldOffset(0)]
	public GameplayEventId EventId;
}
