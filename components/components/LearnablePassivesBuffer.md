---
nav_exclude: true
search_exclude: true
---

# LearnablePassivesBuffer

```csharp
[StructLayout(2)]
public struct LearnablePassivesBuffer
{
	static LearnablePassivesBuffer()
	{
		Il2CppClassPointerStore<LearnablePassivesBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "LearnablePassivesBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LearnablePassivesBuffer>.NativeClassPtr);
		LearnablePassivesBuffer.NativeFieldInfoPtr_Passive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LearnablePassivesBuffer>.NativeClassPtr, "Passive");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LearnablePassivesBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Passive;
	[FieldOffset(0)]
	public PrefabGUID Passive;
}
