# BlueprintRequirementBuffer

```csharp
[StructLayout(2)]
public struct BlueprintRequirementBuffer
{
	static BlueprintRequirementBuffer()
	{
		Il2CppClassPointerStore<BlueprintRequirementBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BlueprintRequirementBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlueprintRequirementBuffer>.NativeClassPtr);
		BlueprintRequirementBuffer.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintRequirementBuffer>.NativeClassPtr, "PrefabGUID");
		BlueprintRequirementBuffer.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintRequirementBuffer>.NativeClassPtr, "Amount");
		BlueprintRequirementBuffer.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlueprintRequirementBuffer>.NativeClassPtr, 100664084);
	}
	public unsafe InventoryBuffer ToInventoryBuffer
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlueprintRequirementBuffer.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BlueprintRequirementBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0;
	[FieldOffset(0)]
	public PrefabGUID PrefabGUID;
	[FieldOffset(4)]
	public int Amount;
}
