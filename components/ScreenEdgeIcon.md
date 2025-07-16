# ScreenEdgeIcon

```csharp
[StructLayout(2)]
public struct ScreenEdgeIcon
{
	static ScreenEdgeIcon()
	{
		Il2CppClassPointerStore<ScreenEdgeIcon>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM", "ScreenEdgeIcon");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ScreenEdgeIcon>.NativeClassPtr);
		ScreenEdgeIcon.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScreenEdgeIcon>.NativeClassPtr, "Guid");
		ScreenEdgeIcon.NativeFieldInfoPtr_OnlyShowIfOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScreenEdgeIcon>.NativeClassPtr, "OnlyShowIfOwner");
		ScreenEdgeIcon.NativeFieldInfoPtr_OnlyShowIfAlly = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScreenEdgeIcon>.NativeClassPtr, "OnlyShowIfAlly");
		ScreenEdgeIcon.NativeFieldInfoPtr_IsActive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScreenEdgeIcon>.NativeClassPtr, "IsActive");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ScreenEdgeIcon>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyShowIfOwner;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyShowIfAlly;
	private static readonly IntPtr NativeFieldInfoPtr_IsActive;
	[FieldOffset(0)]
	public PrefabGUID Guid;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool OnlyShowIfOwner;
	[FieldOffset(5)]
	[MarshalAs(4)]
	public bool OnlyShowIfAlly;
	[FieldOffset(6)]
	[MarshalAs(4)]
	public bool IsActive;
}
