# BuffPriority_HitList_Previous

```csharp
[StructLayout(2)]
public struct BuffPriority_HitList_Previous
{
	static BuffPriority_HitList_Previous()
	{
		Il2CppClassPointerStore<BuffPriority_HitList_Previous>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BuffPriority_HitList_Previous");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffPriority_HitList_Previous>.NativeClassPtr);
		BuffPriority_HitList_Previous.NativeFieldInfoPtr_HitEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffPriority_HitList_Previous>.NativeClassPtr, "HitEntity");
		BuffPriority_HitList_Previous.NativeFieldInfoPtr_TimeHit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffPriority_HitList_Previous>.NativeClassPtr, "TimeHit");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffPriority_HitList_Previous>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HitEntity;
	private static readonly IntPtr NativeFieldInfoPtr_TimeHit;
	[FieldOffset(0)]
	public Entity HitEntity;
	[FieldOffset(8)]
	public double TimeHit;
}
