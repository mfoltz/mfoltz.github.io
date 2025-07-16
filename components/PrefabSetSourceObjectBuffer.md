# PrefabSetSourceObjectBuffer

```csharp
[StructLayout(2)]
public struct PrefabSetSourceObjectBuffer
{
	static PrefabSetSourceObjectBuffer()
	{
		Il2CppClassPointerStore<PrefabSetSourceObjectBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PrefabSetSourceObjectBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrefabSetSourceObjectBuffer>.NativeClassPtr);
		PrefabSetSourceObjectBuffer.NativeFieldInfoPtr_PrefabId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabSetSourceObjectBuffer>.NativeClassPtr, "PrefabId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrefabSetSourceObjectBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabId;
	[FieldOffset(0)]
	public PrefabIdentifier PrefabId;
}
