# MeshRendererFadingSetup

```csharp
[StructLayout(2)]
public struct MeshRendererFadingSetup
{
	static MeshRendererFadingSetup()
	{
		Il2CppClassPointerStore<MeshRendererFadingSetup>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "MeshRendererFadingSetup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MeshRendererFadingSetup>.NativeClassPtr);
		MeshRendererFadingSetup.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshRendererFadingSetup>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MeshRendererFadingSetup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public Entity Entity;
}
