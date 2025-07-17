---
nav_exclude: true
search_exclude: true
---

# ProxyPrefabIndex

```csharp
[StructLayout(2)]
public struct ProxyPrefabIndex
{
	static ProxyPrefabIndex()
	{
		Il2CppClassPointerStore<ProxyPrefabIndex>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ProxyPrefabIndex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProxyPrefabIndex>.NativeClassPtr);
		ProxyPrefabIndex.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProxyPrefabIndex>.NativeClassPtr, "Index");
		ProxyPrefabIndex.NativeFieldInfoPtr_Visible = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProxyPrefabIndex>.NativeClassPtr, "Visible");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProxyPrefabIndex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Index;
	private static readonly IntPtr NativeFieldInfoPtr_Visible;
	[FieldOffset(0)]
	public int Index;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool Visible;
}
