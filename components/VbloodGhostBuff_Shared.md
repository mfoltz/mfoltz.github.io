# VbloodGhostBuff_Shared

```csharp
[StructLayout(2)]
public struct VbloodGhostBuff_Shared
{
	static VbloodGhostBuff_Shared()
	{
		Il2CppClassPointerStore<VbloodGhostBuff_Shared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "VbloodGhostBuff_Shared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VbloodGhostBuff_Shared>.NativeClassPtr);
		VbloodGhostBuff_Shared.NativeFieldInfoPtr_DestroyTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VbloodGhostBuff_Shared>.NativeClassPtr, "DestroyTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VbloodGhostBuff_Shared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DestroyTime;
	[FieldOffset(0)]
	public double DestroyTime;
}
