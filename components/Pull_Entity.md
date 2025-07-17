---
nav_exclude: true
search_exclude: true
---

# Pull_Entity

```csharp
[StructLayout(2)]
public struct Pull_Entity
{
	static Pull_Entity()
	{
		Il2CppClassPointerStore<Pull_Entity>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "Pull_Entity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Pull_Entity>.NativeClassPtr);
		Pull_Entity.NativeFieldInfoPtr_BlackboardIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Pull_Entity>.NativeClassPtr, "BlackboardIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Pull_Entity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlackboardIndex;
	[FieldOffset(0)]
	public int BlackboardIndex;
}
