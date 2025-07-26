# RagdollStreamingTokens

```csharp
[StructLayout(2)]
public struct RagdollStreamingTokens
{
	static RagdollStreamingTokens()
	{
		Il2CppClassPointerStore<RagdollStreamingTokens>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RagdollStreamingTokens");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RagdollStreamingTokens>.NativeClassPtr);
		RagdollStreamingTokens.NativeFieldInfoPtr_OverrideToken = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollStreamingTokens>.NativeClassPtr, "OverrideToken");
		RagdollStreamingTokens.NativeFieldInfoPtr_BaseToken = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollStreamingTokens>.NativeClassPtr, "BaseToken");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RagdollStreamingTokens>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OverrideToken;
	private static readonly IntPtr NativeFieldInfoPtr_BaseToken;
	[FieldOffset(0)]
	public AssetReferenceToken OverrideToken;
	[FieldOffset(28)]
	public AssetReferenceToken BaseToken;
}
