---
nav_exclude: true
search_exclude: true
---

# CastleRebuildTransferUniquePair

```csharp
public struct CastleRebuildTransferUniquePair
{
	static CastleRebuildTransferUniquePair()
	{
		Il2CppClassPointerStore<CastleRebuildTransferUniquePair>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.Rebuilding", "CastleRebuildTransferUniquePair");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildTransferUniquePair>.NativeClassPtr);
		CastleRebuildTransferUniquePair.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferUniquePair>.NativeClassPtr, "Source");
		CastleRebuildTransferUniquePair.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferUniquePair>.NativeClassPtr, "Target");
		CastleRebuildTransferUniquePair.NativeFieldInfoPtr_SourceTransferred = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferUniquePair>.NativeClassPtr, "SourceTransferred");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildTransferUniquePair>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_SourceTransferred;

	public Entity Source;

	public Entity Target;

	public bool SourceTransferred;
}
```
