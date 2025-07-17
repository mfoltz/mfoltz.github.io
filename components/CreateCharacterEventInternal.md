---
nav_exclude: true
search_exclude: true
---

# CreateCharacterEventInternal

```csharp
public struct CreateCharacterEventInternal
{
	static CreateCharacterEventInternal()
	{
		Il2CppClassPointerStore<CreateCharacterEventInternal>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateCharacterEventInternal");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateCharacterEventInternal>.NativeClassPtr);
		CreateCharacterEventInternal.NativeFieldInfoPtr_FromCharacter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEventInternal>.NativeClassPtr, "FromCharacter");
		CreateCharacterEventInternal.NativeFieldInfoPtr_Customization = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEventInternal>.NativeClassPtr, "Customization");
		CreateCharacterEventInternal.NativeFieldInfoPtr_FadeOutEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEventInternal>.NativeClassPtr, "FadeOutEntity");
		CreateCharacterEventInternal.NativeFieldInfoPtr_SpawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEventInternal>.NativeClassPtr, "SpawnTime");
		CreateCharacterEventInternal.NativeFieldInfoPtr_Done = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEventInternal>.NativeClassPtr, "Done");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateCharacterEventInternal>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromCharacter;
	private static readonly IntPtr NativeFieldInfoPtr_Customization;
	private static readonly IntPtr NativeFieldInfoPtr_FadeOutEntity;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTime;
	private static readonly IntPtr NativeFieldInfoPtr_Done;

	public FromCharacter FromCharacter;

	public CustomizationFeatures Customization;

	public Entity FadeOutEntity;

	public double SpawnTime;

	public bool Done;
}
```
