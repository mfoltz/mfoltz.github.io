---
nav_exclude: true
search_exclude: true
---

# IdleAISound

```csharp
[StructLayout(2)]
public struct IdleAISound
{
	static IdleAISound()
	{
		Il2CppClassPointerStore<IdleAISound>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Audio", "IdleAISound");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<IdleAISound>.NativeClassPtr);
		IdleAISound.NativeFieldInfoPtr_LastSetSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISound>.NativeClassPtr, "LastSetSpeed");
		IdleAISound.NativeFieldInfoPtr_MaxSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISound>.NativeClassPtr, "MaxSpeed");
		IdleAISound.NativeFieldInfoPtr_IsAggro = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISound>.NativeClassPtr, "IsAggro");
		IdleAISound.NativeFieldInfoPtr_Active = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISound>.NativeClassPtr, "Active");
		IdleAISound.NativeFieldInfoPtr_Deleted = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISound>.NativeClassPtr, "Deleted");
		IdleAISound.NativeFieldInfoPtr_HasError = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IdleAISound>.NativeClassPtr, "HasError");
		IdleAISound.NativeMethodInfoPtr_ShouldUpdate_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<IdleAISound>.NativeClassPtr, 100671812);
		IdleAISound.NativeMethodInfoPtr_ShouldStartSound_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<IdleAISound>.NativeClassPtr, 100671813);
	}
	[CallerCount(0)]
	public unsafe bool ShouldUpdate()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(IdleAISound.NativeMethodInfoPtr_ShouldUpdate_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool ShouldStartSound()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(IdleAISound.NativeMethodInfoPtr_ShouldStartSound_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<IdleAISound>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastSetSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_MaxSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_IsAggro;
	private static readonly IntPtr NativeFieldInfoPtr_Active;
	private static readonly IntPtr NativeFieldInfoPtr_Deleted;
	private static readonly IntPtr NativeFieldInfoPtr_HasError;
	private static readonly IntPtr NativeMethodInfoPtr_ShouldUpdate_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_ShouldStartSound_Public_Boolean_0;
	[FieldOffset(0)]
	public float LastSetSpeed;
	[FieldOffset(4)]
	public float MaxSpeed;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool IsAggro;
	[FieldOffset(9)]
	[MarshalAs(4)]
	public bool Active;
	[FieldOffset(10)]
	[MarshalAs(4)]
	public bool Deleted;
	[FieldOffset(11)]
	[MarshalAs(4)]
	public bool HasError;
}
