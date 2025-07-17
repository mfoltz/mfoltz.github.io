---
nav_exclude: true
search_exclude: true
---

# PlayerDeathContainer

```csharp
[StructLayout(2)]
public struct PlayerDeathContainer
{
	static PlayerDeathContainer()
	{
		Il2CppClassPointerStore<PlayerDeathContainer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PlayerDeathContainer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlayerDeathContainer>.NativeClassPtr);
		PlayerDeathContainer.NativeFieldInfoPtr_DeadUserEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerDeathContainer>.NativeClassPtr, "DeadUserEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlayerDeathContainer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DeadUserEntity;
	[FieldOffset(0)]
	public Entity DeadUserEntity;
}
