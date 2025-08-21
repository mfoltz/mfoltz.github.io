---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TestPersistenceV2Save
{
	static TestPersistenceV2Save()
	{
		Il2CppClassPointerStore<TestPersistenceV2Save>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TestPersistenceV2Save");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TestPersistenceV2Save>.NativeClassPtr);
		TestPersistenceV2Save.NativeFieldInfoPtr_SaveDirectoryPath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TestPersistenceV2Save>.NativeClassPtr, "SaveDirectoryPath");
		TestPersistenceV2Save.NativeFieldInfoPtr_SaveFileName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TestPersistenceV2Save>.NativeClassPtr, "SaveFileName");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TestPersistenceV2Save>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SaveDirectoryPath;
	private static readonly IntPtr NativeFieldInfoPtr_SaveFileName;

	public FixedString512Bytes SaveDirectoryPath;

	public FixedString512Bytes SaveFileName;
}
```
