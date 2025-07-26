# RagdollDriver

```csharp
[StructLayout(2)]
public struct RagdollDriver
{
	static RagdollDriver()
	{
		Il2CppClassPointerStore<RagdollDriver>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RagdollDriver");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RagdollDriver>.NativeClassPtr);
		RagdollDriver.NativeFieldInfoPtr_SpawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollDriver>.NativeClassPtr, "SpawnTime");
		RagdollDriver.NativeFieldInfoPtr_DrivenEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollDriver>.NativeClassPtr, "DrivenEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RagdollDriver>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTime;
	private static readonly IntPtr NativeFieldInfoPtr_DrivenEntity;
	[FieldOffset(0)]
	public float SpawnTime;
	[FieldOffset(4)]
	public Entity DrivenEntity;
}
