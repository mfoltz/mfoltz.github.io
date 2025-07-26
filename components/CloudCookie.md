# CloudCookie

```csharp
[StructLayout(2)]
public struct CloudCookie
{
	static CloudCookie()
	{
		Il2CppClassPointerStore<CloudCookie>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CloudCookie");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CloudCookie>.NativeClassPtr);
		CloudCookie.NativeFieldInfoPtr_Speed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CloudCookie>.NativeClassPtr, "Speed");
		CloudCookie.NativeFieldInfoPtr_Alpha = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CloudCookie>.NativeClassPtr, "Alpha");
		CloudCookie.NativeFieldInfoPtr_Size = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CloudCookie>.NativeClassPtr, "Size");
		CloudCookie.NativeFieldInfoPtr_Scale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CloudCookie>.NativeClassPtr, "Scale");
		CloudCookie.NativeFieldInfoPtr_VolumetricMultiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CloudCookie>.NativeClassPtr, "VolumetricMultiplier");
		CloudCookie.NativeFieldInfoPtr_WrapMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CloudCookie>.NativeClassPtr, "WrapMode");
		CloudCookie.NativeFieldInfoPtr_TextureIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CloudCookie>.NativeClassPtr, "TextureIndex");
		CloudCookie.NativeFieldInfoPtr_MipLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CloudCookie>.NativeClassPtr, "MipLevel");
		CloudCookie.NativeFieldInfoPtr_InvertColors = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CloudCookie>.NativeClassPtr, "InvertColors");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CloudCookie>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Speed;
	private static readonly IntPtr NativeFieldInfoPtr_Alpha;
	private static readonly IntPtr NativeFieldInfoPtr_Size;
	private static readonly IntPtr NativeFieldInfoPtr_Scale;
	private static readonly IntPtr NativeFieldInfoPtr_VolumetricMultiplier;
	private static readonly IntPtr NativeFieldInfoPtr_WrapMode;
	private static readonly IntPtr NativeFieldInfoPtr_TextureIndex;
	private static readonly IntPtr NativeFieldInfoPtr_MipLevel;
	private static readonly IntPtr NativeFieldInfoPtr_InvertColors;
	[FieldOffset(0)]
	public float2 Speed;
	[FieldOffset(8)]
	public float Alpha;
	[FieldOffset(12)]
	public float Size;
	[FieldOffset(16)]
	public float Scale;
	[FieldOffset(20)]
	public float VolumetricMultiplier;
	[FieldOffset(24)]
	public CloudWrapModeEnum WrapMode;
	[FieldOffset(25)]
	public byte TextureIndex;
	[FieldOffset(26)]
	public byte MipLevel;
	[FieldOffset(27)]
	[MarshalAs(4)]
	public bool InvertColors;
}
