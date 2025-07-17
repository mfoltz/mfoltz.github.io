---
nav_exclude: true
search_exclude: true
---

# JumpFromCliffsTravelBuff

```csharp
[StructLayout(2)]
public struct JumpFromCliffsTravelBuff
{
	static JumpFromCliffsTravelBuff()
	{
		Il2CppClassPointerStore<JumpFromCliffsTravelBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "JumpFromCliffsTravelBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<JumpFromCliffsTravelBuff>.NativeClassPtr);
		JumpFromCliffsTravelBuff.NativeFieldInfoPtr_StartPositionServer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffsTravelBuff>.NativeClassPtr, "StartPositionServer");
		JumpFromCliffsTravelBuff.NativeFieldInfoPtr_StartPositionClient = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffsTravelBuff>.NativeClassPtr, "StartPositionClient");
		JumpFromCliffsTravelBuff.NativeFieldInfoPtr_EndPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffsTravelBuff>.NativeClassPtr, "EndPosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<JumpFromCliffsTravelBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartPositionServer;
	private static readonly IntPtr NativeFieldInfoPtr_StartPositionClient;
	private static readonly IntPtr NativeFieldInfoPtr_EndPosition;
	[FieldOffset(0)]
	public float3 StartPositionServer;
	[FieldOffset(12)]
	public float3 StartPositionClient;
	[FieldOffset(24)]
	public float3 EndPosition;
}
