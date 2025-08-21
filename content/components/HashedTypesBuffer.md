---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HashedTypesBuffer
{
	static HashedTypesBuffer()
	{
		Il2CppClassPointerStore<HashedTypesBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Scripting", "HashedTypesBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HashedTypesBuffer>.NativeClassPtr);
		HashedTypesBuffer.NativeFieldInfoPtr_Hash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HashedTypesBuffer>.NativeClassPtr, "Hash");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HashedTypesBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Hash;

	public int Hash;
}
```

## Server Systems

- [ServerScriptRegisterSystem]({{% relref "systems/server/ServerScriptRegisterSystem.md" %}})
