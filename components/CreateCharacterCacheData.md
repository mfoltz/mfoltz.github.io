---
nav_exclude: true
search_exclude: true
---

# CreateCharacterCacheData

```csharp
[StructLayout(2)]
public struct CreateCharacterCacheData
{
	static CreateCharacterCacheData()
	{
		Il2CppClassPointerStore<CreateCharacterCacheData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CreateCharacterCacheData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateCharacterCacheData>.NativeClassPtr);
		CreateCharacterCacheData.NativeFieldInfoPtr_GenderIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterCacheData>.NativeClassPtr, "GenderIndex");
		CreateCharacterCacheData.NativeFieldInfoPtr_SkintoneIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterCacheData>.NativeClassPtr, "SkintoneIndex");
		CreateCharacterCacheData.NativeFieldInfoPtr_FaceIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterCacheData>.NativeClassPtr, "FaceIndex");
		CreateCharacterCacheData.NativeFieldInfoPtr_EyeColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterCacheData>.NativeClassPtr, "EyeColorIndex");
		CreateCharacterCacheData.NativeFieldInfoPtr_HairStyleIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterCacheData>.NativeClassPtr, "HairStyleIndex");
		CreateCharacterCacheData.NativeFieldInfoPtr_HairColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterCacheData>.NativeClassPtr, "HairColorIndex");
		CreateCharacterCacheData.NativeFieldInfoPtr_FeaturesIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterCacheData>.NativeClassPtr, "FeaturesIndex");
		CreateCharacterCacheData.NativeFieldInfoPtr_AccessoriesIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterCacheData>.NativeClassPtr, "AccessoriesIndex");
		CreateCharacterCacheData.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterCacheData>.NativeClassPtr, "Name");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateCharacterCacheData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GenderIndex;
	private static readonly IntPtr NativeFieldInfoPtr_SkintoneIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FaceIndex;
	private static readonly IntPtr NativeFieldInfoPtr_EyeColorIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HairStyleIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HairColorIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FeaturesIndex;
	private static readonly IntPtr NativeFieldInfoPtr_AccessoriesIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	[FieldOffset(0)]
	public byte GenderIndex;
	[FieldOffset(1)]
	public byte SkintoneIndex;
	[FieldOffset(2)]
	public byte FaceIndex;
	[FieldOffset(3)]
	public byte EyeColorIndex;
	[FieldOffset(4)]
	public byte HairStyleIndex;
	[FieldOffset(5)]
	public byte HairColorIndex;
	[FieldOffset(6)]
	public byte FeaturesIndex;
	[FieldOffset(7)]
	public byte AccessoriesIndex;
	[FieldOffset(8)]
	public FixedString64Bytes Name;
}
