---
nav_exclude: true
search_exclude: true
---

```csharp
public struct QueueEntityTransformEdit
{
	static QueueEntityTransformEdit()
	{
		Il2CppClassPointerStore<QueueEntityTransformEdit>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core.Authoring", "QueueEntityTransformEdit");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<QueueEntityTransformEdit>.NativeClassPtr);
		QueueEntityTransformEdit.NativeFieldInfoPtr_TargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<QueueEntityTransformEdit>.NativeClassPtr, "TargetEntity");
		QueueEntityTransformEdit.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<QueueEntityTransformEdit>.NativeClassPtr, "Position");
		QueueEntityTransformEdit.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<QueueEntityTransformEdit>.NativeClassPtr, "Rotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<QueueEntityTransformEdit>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;

	public Entity TargetEntity;

	public float3 Position;

	public quaternion Rotation;
}
```
