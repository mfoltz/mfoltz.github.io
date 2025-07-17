---
nav_exclude: true
search_exclude: true
---

# SyncToUserBitMask

```csharp
public struct SyncToUserBitMask
{
	static SyncToUserBitMask()
	{
		Il2CppClassPointerStore<SyncToUserBitMask>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "SyncToUserBitMask");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SyncToUserBitMask>.NativeClassPtr);
		SyncToUserBitMask.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncToUserBitMask>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SyncToUserBitMask>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public UserBitMask128 Value;
}
```
