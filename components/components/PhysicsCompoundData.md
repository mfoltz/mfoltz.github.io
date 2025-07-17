---
nav_exclude: true
search_exclude: true
---

# PhysicsCompoundData

```csharp
[StructLayout(2)]
public struct PhysicsCompoundData
{
	static PhysicsCompoundData()
	{
		Il2CppClassPointerStore<PhysicsCompoundData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "PhysicsCompoundData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsCompoundData>.NativeClassPtr);
		PhysicsCompoundData.NativeFieldInfoPtr_Hash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsCompoundData>.NativeClassPtr, "Hash");
		PhysicsCompoundData.NativeFieldInfoPtr_ConvertedBodyInstanceID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsCompoundData>.NativeClassPtr, "ConvertedBodyInstanceID");
		PhysicsCompoundData.NativeFieldInfoPtr_AssociateBlobToBody = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsCompoundData>.NativeClassPtr, "AssociateBlobToBody");
		PhysicsCompoundData.NativeFieldInfoPtr_DeferredCompoundBlob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsCompoundData>.NativeClassPtr, "DeferredCompoundBlob");
		PhysicsCompoundData.NativeFieldInfoPtr_RegisterBlob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsCompoundData>.NativeClassPtr, "RegisterBlob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsCompoundData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Hash;
	private static readonly IntPtr NativeFieldInfoPtr_ConvertedBodyInstanceID;
	private static readonly IntPtr NativeFieldInfoPtr_AssociateBlobToBody;
	private static readonly IntPtr NativeFieldInfoPtr_DeferredCompoundBlob;
	private static readonly IntPtr NativeFieldInfoPtr_RegisterBlob;
	[FieldOffset(0)]
	public Hash128 Hash;
	[FieldOffset(16)]
	public int ConvertedBodyInstanceID;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool AssociateBlobToBody;
	[FieldOffset(21)]
	[MarshalAs(4)]
	public bool DeferredCompoundBlob;
	[FieldOffset(22)]
	[MarshalAs(4)]
	public bool RegisterBlob;
}
