---
nav_exclude: true
search_exclude: true
---

# CloudCookie

```csharp
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

	public float2 Speed;

	public float Alpha;

	public float Size;

	public float Scale;

	public float VolumetricMultiplier;

	public CloudWrapModeEnum WrapMode;

	public byte TextureIndex;

	public byte MipLevel;

	public bool InvertColors;
}
```

## Server Systems

- [ProjectM.BonfireSystemUpdateCloud](/systems/ProjectM.BonfireSystemUpdateCloud)
