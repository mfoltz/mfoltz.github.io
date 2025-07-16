# PassiveRequirementBuffer

```csharp
[StructLayout(2)]
public struct PassiveRequirementBuffer
{
	static PassiveRequirementBuffer()
	{
		Il2CppClassPointerStore<PassiveRequirementBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PassiveRequirementBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PassiveRequirementBuffer>.NativeClassPtr);
		PassiveRequirementBuffer.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PassiveRequirementBuffer>.NativeClassPtr, "Guid");
		PassiveRequirementBuffer.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PassiveRequirementBuffer>.NativeClassPtr, "Amount");
		PassiveRequirementBuffer.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PassiveRequirementBuffer>.NativeClassPtr, 100666099);
	}
	public unsafe InventoryBuffer ToInventoryBuffer
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PassiveRequirementBuffer.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PassiveRequirementBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0;
	[FieldOffset(0)]
	public PrefabGUID Guid;
	[FieldOffset(4)]
	public int Amount;
}
