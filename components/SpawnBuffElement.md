---
nav_exclude: true
search_exclude: true
---

# SpawnBuffElement

```csharp
[StructLayout(2)]
public struct SpawnBuffElement
{
	static SpawnBuffElement()
	{
		Il2CppClassPointerStore<SpawnBuffElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpawnBuffElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnBuffElement>.NativeClassPtr);
		SpawnBuffElement.NativeFieldInfoPtr_Kind = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnBuffElement>.NativeClassPtr, "Kind");
		SpawnBuffElement.NativeFieldInfoPtr_Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnBuffElement>.NativeClassPtr, "Buff");
		SpawnBuffElement.NativeFieldInfoPtr_OriginPositionFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnBuffElement>.NativeClassPtr, "OriginPositionFactor");
		SpawnBuffElement.NativeFieldInfoPtr_Weight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnBuffElement>.NativeClassPtr, "Weight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnBuffElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Kind;
	private static readonly IntPtr NativeFieldInfoPtr_Buff;
	private static readonly IntPtr NativeFieldInfoPtr_OriginPositionFactor;
	private static readonly IntPtr NativeFieldInfoPtr_Weight;
	[FieldOffset(0)]
	public SpawnBuffKind Kind;
	[FieldOffset(4)]
	public PrefabGUID Buff;
	[FieldOffset(8)]
	public float OriginPositionFactor;
	[FieldOffset(12)]
	public float Weight;
}
