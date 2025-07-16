# NPCServantColorIndex

```csharp
[StructLayout(2)]
public struct NPCServantColorIndex
{
	static NPCServantColorIndex()
	{
		Il2CppClassPointerStore<NPCServantColorIndex>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "NPCServantColorIndex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NPCServantColorIndex>.NativeClassPtr);
		NPCServantColorIndex.NativeFieldInfoPtr_EyeColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NPCServantColorIndex>.NativeClassPtr, "EyeColorIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NPCServantColorIndex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EyeColorIndex;
	[FieldOffset(0)]
	public byte EyeColorIndex;
}
