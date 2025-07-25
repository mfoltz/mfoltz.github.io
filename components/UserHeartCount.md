---
nav_exclude: true
search_exclude: true
---

# UserHeartCount

```csharp
public struct UserHeartCount
{
	static UserHeartCount()
	{
		Il2CppClassPointerStore<UserHeartCount>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "UserHeartCount");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserHeartCount>.NativeClassPtr);
		UserHeartCount.NativeFieldInfoPtr_HeartCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserHeartCount>.NativeClassPtr, "HeartCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserHeartCount>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HeartCount;

	public int HeartCount;
}
```
