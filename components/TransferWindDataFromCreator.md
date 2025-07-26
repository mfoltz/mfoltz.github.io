---
nav_exclude: true
search_exclude: true
---

# TransferWindDataFromCreator

```csharp
public struct TransferWindDataFromCreator
{
	static TransferWindDataFromCreator()
	{
		Il2CppClassPointerStore<TransferWindDataFromCreator>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TransferWindDataFromCreator");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TransferWindDataFromCreator>.NativeClassPtr);
		TransferWindDataFromCreator.NativeFieldInfoPtr_CreatorEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransferWindDataFromCreator>.NativeClassPtr, "CreatorEntity");
		TransferWindDataFromCreator.NativeFieldInfoPtr_LinkedBufferIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransferWindDataFromCreator>.NativeClassPtr, "LinkedBufferIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TransferWindDataFromCreator>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CreatorEntity;
	private static readonly IntPtr NativeFieldInfoPtr_LinkedBufferIndex;

	public Entity CreatorEntity;

	public int LinkedBufferIndex;
}
```
