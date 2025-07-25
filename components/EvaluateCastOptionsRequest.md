---
nav_exclude: true
search_exclude: true
---

# EvaluateCastOptionsRequest

```csharp
public struct EvaluateCastOptionsRequest
{
	static EvaluateCastOptionsRequest()
	{
		Il2CppClassPointerStore<EvaluateCastOptionsRequest>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "EvaluateCastOptionsRequest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EvaluateCastOptionsRequest>.NativeClassPtr);
		EvaluateCastOptionsRequest.NativeFieldInfoPtr_Input = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvaluateCastOptionsRequest>.NativeClassPtr, "Input");
		EvaluateCastOptionsRequest.NativeFieldInfoPtr_InternalState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvaluateCastOptionsRequest>.NativeClassPtr, "InternalState");
		EvaluateCastOptionsRequest.NativeFieldInfoPtr_Response = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvaluateCastOptionsRequest>.NativeClassPtr, "Response");
		EvaluateCastOptionsRequest.NativeFieldInfoPtr_SuccessFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvaluateCastOptionsRequest>.NativeClassPtr, "SuccessFrame");
		EvaluateCastOptionsRequest.NativeFieldInfoPtr_Status = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvaluateCastOptionsRequest>.NativeClassPtr, "Status");
		EvaluateCastOptionsRequest.NativeFieldInfoPtr_Destroy = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvaluateCastOptionsRequest>.NativeClassPtr, "Destroy");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EvaluateCastOptionsRequest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Input;
	private static readonly IntPtr NativeFieldInfoPtr_InternalState;
	private static readonly IntPtr NativeFieldInfoPtr_Response;
	private static readonly IntPtr NativeFieldInfoPtr_SuccessFrame;
	private static readonly IntPtr NativeFieldInfoPtr_Status;
	private static readonly IntPtr NativeFieldInfoPtr_Destroy;

	public EvaluateCastOptionsRequestInput Input;

	public EvaluateCastOptionsRequestInternalState InternalState;

	public EvaluateCastOptionsRequestResponse Response;

	public int SuccessFrame;

	public EvaluateCastOptionsRequestStatus Status;

	public bool Destroy;
}
```
