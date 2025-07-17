---
nav_exclude: true
search_exclude: true
---

# ClientReplayPlayerEnabled

```csharp
[StructLayout(2)]
public struct ClientReplayPlayerEnabled
{
	static ClientReplayPlayerEnabled()
	{
		Il2CppClassPointerStore<ClientReplayPlayerEnabled>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Replays", "ClientReplayPlayerEnabled");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ClientReplayPlayerEnabled>.NativeClassPtr);
		ClientReplayPlayerEnabled.NativeFieldInfoPtr_FilePath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientReplayPlayerEnabled>.NativeClassPtr, "FilePath");
		ClientReplayPlayerEnabled.NativeFieldInfoPtr_CurrentTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientReplayPlayerEnabled>.NativeClassPtr, "CurrentTime");
		ClientReplayPlayerEnabled.NativeFieldInfoPtr_CurrentFraction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientReplayPlayerEnabled>.NativeClassPtr, "CurrentFraction");
		ClientReplayPlayerEnabled.NativeFieldInfoPtr_CurrentSnapshot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientReplayPlayerEnabled>.NativeClassPtr, "CurrentSnapshot");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ClientReplayPlayerEnabled>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FilePath;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentTime;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentFraction;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentSnapshot;
	[FieldOffset(0)]
	public FixedString512Bytes FilePath;
	[FieldOffset(512)]
	public double CurrentTime;
	[FieldOffset(520)]
	public float CurrentFraction;
	[FieldOffset(524)]
	public int CurrentSnapshot;
}
