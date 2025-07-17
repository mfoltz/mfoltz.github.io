---
nav_exclude: true
search_exclude: true
---

# TestScript_DataServer

```csharp
[StructLayout(2)]
public struct TestScript_DataServer
{
	static TestScript_DataServer()
	{
		Il2CppClassPointerStore<TestScript_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "TestScript_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TestScript_DataServer>.NativeClassPtr);
		TestScript_DataServer.NativeFieldInfoPtr_NewProjectileEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TestScript_DataServer>.NativeClassPtr, "NewProjectileEntity");
		TestScript_DataServer.NativeFieldInfoPtr_RandomOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TestScript_DataServer>.NativeClassPtr, "RandomOffset");
		TestScript_DataServer.NativeFieldInfoPtr_Angle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TestScript_DataServer>.NativeClassPtr, "Angle");
		TestScript_DataServer.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TestScript_DataServer>.NativeClassPtr, "Count");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TestScript_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NewProjectileEntity;
	private static readonly IntPtr NativeFieldInfoPtr_RandomOffset;
	private static readonly IntPtr NativeFieldInfoPtr_Angle;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	[FieldOffset(0)]
	public PrefabGUID NewProjectileEntity;
	[FieldOffset(4)]
	public float RandomOffset;
	[FieldOffset(8)]
	public float Angle;
	[FieldOffset(12)]
	public int Count;
}
