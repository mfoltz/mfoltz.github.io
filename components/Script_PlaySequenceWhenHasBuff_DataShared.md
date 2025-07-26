# Script_PlaySequenceWhenHasBuff_DataShared

```csharp
[StructLayout(2)]
public struct Script_PlaySequenceWhenHasBuff_DataShared
{
	static Script_PlaySequenceWhenHasBuff_DataShared()
	{
		Il2CppClassPointerStore<Script_PlaySequenceWhenHasBuff_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_PlaySequenceWhenHasBuff_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_PlaySequenceWhenHasBuff_DataShared>.NativeClassPtr);
		Script_PlaySequenceWhenHasBuff_DataShared.NativeFieldInfoPtr_BuffSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_PlaySequenceWhenHasBuff_DataShared>.NativeClassPtr, "BuffSequenceState");
		Script_PlaySequenceWhenHasBuff_DataShared.NativeFieldInfoPtr_BuffType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_PlaySequenceWhenHasBuff_DataShared>.NativeClassPtr, "BuffType");
		Script_PlaySequenceWhenHasBuff_DataShared.NativeFieldInfoPtr_BuffSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_PlaySequenceWhenHasBuff_DataShared>.NativeClassPtr, "BuffSequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_PlaySequenceWhenHasBuff_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_BuffType;
	private static readonly IntPtr NativeFieldInfoPtr_BuffSequence;
	[FieldOffset(0)]
	public SequenceState BuffSequenceState;
	[FieldOffset(8)]
	public PrefabGUID BuffType;
	[FieldOffset(12)]
	public SequenceGUID BuffSequence;
}
