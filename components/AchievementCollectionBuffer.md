---
nav_exclude: true
search_exclude: true
---

# AchievementCollectionBuffer

```csharp
[StructLayout(2)]
public struct AchievementCollectionBuffer
{
	static AchievementCollectionBuffer()
	{
		Il2CppClassPointerStore<AchievementCollectionBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.UI", "AchievementCollectionBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AchievementCollectionBuffer>.NativeClassPtr);
		AchievementCollectionBuffer.NativeFieldInfoPtr_Entry = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementCollectionBuffer>.NativeClassPtr, "Entry");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AchievementCollectionBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entry;
	[FieldOffset(0)]
	public PrefabGUID Entry;
}
