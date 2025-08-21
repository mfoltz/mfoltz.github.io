---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Crowdedness
{
	static Crowdedness()
	{
		Il2CppClassPointerStore<Crowdedness>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Crowdedness");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Crowdedness>.NativeClassPtr);
		Crowdedness.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Crowdedness>.NativeClassPtr, "Value");
		Crowdedness.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Crowdedness>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Crowdedness>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_Blob;

	public float Value;

	public BlobAssetReference<Crowdedness.BlobData> Blob;

	public struct BlobData
	{
		static BlobData()
		{
			Il2CppClassPointerStore<Crowdedness.BlobData>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<Crowdedness>.NativeClassPtr, "BlobData");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Crowdedness.BlobData>.NativeClassPtr);
			Crowdedness.BlobData.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Crowdedness.BlobData>.NativeClassPtr, "Range");
			Crowdedness.BlobData.NativeFieldInfoPtr_FastTransitionTime_PlayerVersusEnvironment = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Crowdedness.BlobData>.NativeClassPtr, "FastTransitionTime_PlayerVersusEnvironment");
			Crowdedness.BlobData.NativeFieldInfoPtr_FastTransitionTime_PlayerVersusPlayer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Crowdedness.BlobData>.NativeClassPtr, "FastTransitionTime_PlayerVersusPlayer");
			Crowdedness.BlobData.NativeFieldInfoPtr_SlowTransitionTime_PlayerVersusEnvironment = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Crowdedness.BlobData>.NativeClassPtr, "SlowTransitionTime_PlayerVersusEnvironment");
			Crowdedness.BlobData.NativeFieldInfoPtr_SlowTransitionTime_PlayerVersusPlayer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Crowdedness.BlobData>.NativeClassPtr, "SlowTransitionTime_PlayerVersusPlayer");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Crowdedness.BlobData>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_Range;
		private static readonly IntPtr NativeFieldInfoPtr_FastTransitionTime_PlayerVersusEnvironment;
		private static readonly IntPtr NativeFieldInfoPtr_FastTransitionTime_PlayerVersusPlayer;
		private static readonly IntPtr NativeFieldInfoPtr_SlowTransitionTime_PlayerVersusEnvironment;
		private static readonly IntPtr NativeFieldInfoPtr_SlowTransitionTime_PlayerVersusPlayer;

		public float Range;

		public float FastTransitionTime_PlayerVersusEnvironment;

		public float FastTransitionTime_PlayerVersusPlayer;

		public float SlowTransitionTime_PlayerVersusEnvironment;

		public float SlowTransitionTime_PlayerVersusPlayer;
	}
}
```
