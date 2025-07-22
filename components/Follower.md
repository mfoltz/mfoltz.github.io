---
nav_exclude: true
search_exclude: false
---

# Follower

```csharp
public struct Follower
{
	static Follower()
	{
		Il2CppClassPointerStore<Follower>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Follower");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Follower>.NativeClassPtr);
		Follower.NativeFieldInfoPtr_Followed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Follower>.NativeClassPtr, "Followed");
		Follower.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Follower>.NativeClassPtr, "Offset");
		Follower.NativeFieldInfoPtr_LastOffsetUpdateTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Follower>.NativeClassPtr, "LastOffsetUpdateTime");
		Follower.NativeFieldInfoPtr_ModeModifiable = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Follower>.NativeClassPtr, "ModeModifiable");
		Follower.NativeFieldInfoPtr_Stationary = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Follower>.NativeClassPtr, "Stationary");
		Follower.NativeFieldInfoPtr_InheritRotationWhenStationary = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Follower>.NativeClassPtr, "InheritRotationWhenStationary");
		Follower.NativeMethodInfoPtr_get_Mode_Public_get_FollowMode_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Follower>.NativeClassPtr, 100663989);
	}
	public unsafe FollowMode Mode
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Follower.NativeMethodInfoPtr_get_Mode_Public_get_FollowMode_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Follower>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Followed;
	private static readonly IntPtr NativeFieldInfoPtr_Offset;
	private static readonly IntPtr NativeFieldInfoPtr_LastOffsetUpdateTime;
	private static readonly IntPtr NativeFieldInfoPtr_ModeModifiable;
	private static readonly IntPtr NativeFieldInfoPtr_Stationary;
	private static readonly IntPtr NativeFieldInfoPtr_InheritRotationWhenStationary;
	private static readonly IntPtr NativeMethodInfoPtr_get_Mode_Public_get_FollowMode_0;

	public ModifiableEntity Followed;

	public float2 Offset;

	public double LastOffsetUpdateTime;

	public ModifiableInt ModeModifiable;

	public ModifiableBool Stationary;

	public bool InheritRotationWhenStationary;
}
```
