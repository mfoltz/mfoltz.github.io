---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AimDirectionPreviewComponent
{
	static AimDirectionPreviewComponent()
	{
		Il2CppClassPointerStore<AimDirectionPreviewComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "AimDirectionPreviewComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimDirectionPreviewComponent>.NativeClassPtr);
		AimDirectionPreviewComponent.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimDirectionPreviewComponent>.NativeClassPtr, "Sequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimDirectionPreviewComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;

	public SequenceGUID Sequence;
}
```

## Client Systems

- [AimDirectionPreviewAssetSystem]({{% relref "systems/client/AimDirectionPreviewAssetSystem.md" %}})
