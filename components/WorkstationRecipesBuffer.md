# WorkstationRecipesBuffer

```csharp
[StructLayout(2)]
public struct WorkstationRecipesBuffer
{
	static WorkstationRecipesBuffer()
	{
		Il2CppClassPointerStore<WorkstationRecipesBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "WorkstationRecipesBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorkstationRecipesBuffer>.NativeClassPtr);
		WorkstationRecipesBuffer.NativeFieldInfoPtr_RecipeGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorkstationRecipesBuffer>.NativeClassPtr, "RecipeGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorkstationRecipesBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RecipeGuid;
	[FieldOffset(0)]
	public PrefabGUID RecipeGuid;
}
