---
nav_exclude: true
search_exclude: true
---

```csharp
public struct StartItemBuffer
{
	static StartItemBuffer()
	{
		Il2CppClassPointerStore<StartItemBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StartItemBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StartItemBuffer>.NativeClassPtr);
		StartItemBuffer.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StartItemBuffer>.NativeClassPtr, "Type");
		StartItemBuffer.NativeFieldInfoPtr_Stacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StartItemBuffer>.NativeClassPtr, "Stacks");
		StartItemBuffer.NativeFieldInfoPtr_PreviousEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StartItemBuffer>.NativeClassPtr, "PreviousEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StartItemBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_Stacks;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousEntity;

	public PrefabGUID Type;

	public int Stacks;

	public Entity PreviousEntity;
}
```
