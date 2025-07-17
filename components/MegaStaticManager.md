---
nav_exclude: true
search_exclude: true
---

# MegaStaticManager

```csharp
[StructLayout(2)]
public struct MegaStaticManager
{
	static MegaStaticManager()
	{
		Il2CppClassPointerStore<MegaStaticManager>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MegaStaticManager");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MegaStaticManager>.NativeClassPtr);
		MegaStaticManager.NativeFieldInfoPtr_ToChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticManager>.NativeClassPtr, "ToChunk");
		MegaStaticManager.NativeFieldInfoPtr_StartIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticManager>.NativeClassPtr, "StartIndex");
		MegaStaticManager.NativeFieldInfoPtr_ActiveMegaStatics = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticManager>.NativeClassPtr, "ActiveMegaStatics");
		MegaStaticManager.NativeFieldInfoPtr_ActiveDestroys = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticManager>.NativeClassPtr, "ActiveDestroys");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MegaStaticManager>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ToChunk;
	private static readonly IntPtr NativeFieldInfoPtr_StartIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveMegaStatics;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveDestroys;
	[FieldOffset(0)]
	public TerrainChunk ToChunk;
	[FieldOffset(2)]
	public short StartIndex;
	[FieldOffset(4)]
	public int ActiveMegaStatics;
	[FieldOffset(8)]
	public int ActiveDestroys;
}
