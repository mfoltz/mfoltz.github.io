# Dead

```csharp
[StructLayout(2)]
public struct Dead
{
	static Dead()
	{
		Il2CppClassPointerStore<Dead>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Dead");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Dead>.NativeClassPtr);
		Dead.NativeFieldInfoPtr_ServerTimeOfDeath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dead>.NativeClassPtr, "ServerTimeOfDeath");
		Dead.NativeFieldInfoPtr_DestroyAfterDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dead>.NativeClassPtr, "DestroyAfterDuration");
		Dead.NativeFieldInfoPtr_HIDE_TIMEOUT = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dead>.NativeClassPtr, "HIDE_TIMEOUT");
		Dead.NativeFieldInfoPtr_Killer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dead>.NativeClassPtr, "Killer");
		Dead.NativeFieldInfoPtr_KillerSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dead>.NativeClassPtr, "KillerSource");
		Dead.NativeFieldInfoPtr_DoNotDestroy = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dead>.NativeClassPtr, "DoNotDestroy");
		Dead.NativeFieldInfoPtr_StatChangeReason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dead>.NativeClassPtr, "StatChangeReason");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Dead>.NativeClassPtr, ref this));
	}
	public unsafe static float HIDE_TIMEOUT
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(Dead.NativeFieldInfoPtr_HIDE_TIMEOUT, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(Dead.NativeFieldInfoPtr_HIDE_TIMEOUT, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_ServerTimeOfDeath;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyAfterDuration;
	private static readonly IntPtr NativeFieldInfoPtr_HIDE_TIMEOUT;
	private static readonly IntPtr NativeFieldInfoPtr_Killer;
	private static readonly IntPtr NativeFieldInfoPtr_KillerSource;
	private static readonly IntPtr NativeFieldInfoPtr_DoNotDestroy;
	private static readonly IntPtr NativeFieldInfoPtr_StatChangeReason;
	[FieldOffset(0)]
	public double ServerTimeOfDeath;
	[FieldOffset(8)]
	public float DestroyAfterDuration;
	[FieldOffset(12)]
	public Entity Killer;
	[FieldOffset(20)]
	public Entity KillerSource;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool DoNotDestroy;
	[FieldOffset(29)]
	public StatChangeReason StatChangeReason;
}
