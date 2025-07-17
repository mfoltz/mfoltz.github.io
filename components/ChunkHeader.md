---
nav_exclude: true
search_exclude: true
---

# ChunkHeader

```csharp
[StructLayout(2)]
public struct ChunkHeader
{
	static ChunkHeader()
	{
		Il2CppClassPointerStore<ChunkHeader>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "ChunkHeader");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkHeader>.NativeClassPtr);
		ChunkHeader.NativeFieldInfoPtr_ArchetypeChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkHeader>.NativeClassPtr, "ArchetypeChunk");
		ChunkHeader.NativeMethodInfoPtr_get_Null_Public_Static_get_ChunkHeader_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkHeader>.NativeClassPtr, 100666894);
	}
	public unsafe static ChunkHeader Null
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkHeader.NativeMethodInfoPtr_get_Null_Public_Static_get_ChunkHeader_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkHeader>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ArchetypeChunk;
	private static readonly IntPtr NativeMethodInfoPtr_get_Null_Public_Static_get_ChunkHeader_0;
	[FieldOffset(0)]
	public ArchetypeChunk ArchetypeChunk;
}
