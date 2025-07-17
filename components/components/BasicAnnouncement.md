---
nav_exclude: true
search_exclude: true
---

# BasicAnnouncement

```csharp
[StructLayout(2)]
public struct BasicAnnouncement
{
	static BasicAnnouncement()
	{
		Il2CppClassPointerStore<BasicAnnouncement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "BasicAnnouncement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BasicAnnouncement>.NativeClassPtr);
		BasicAnnouncement.NativeFieldInfoPtr_HeaderKey = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BasicAnnouncement>.NativeClassPtr, "HeaderKey");
		BasicAnnouncement.NativeFieldInfoPtr_SubHeaderKey = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BasicAnnouncement>.NativeClassPtr, "SubHeaderKey");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BasicAnnouncement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HeaderKey;
	private static readonly IntPtr NativeFieldInfoPtr_SubHeaderKey;
	[FieldOffset(0)]
	public LocalizationKey HeaderKey;
	[FieldOffset(16)]
	public LocalizationKey SubHeaderKey;
}
