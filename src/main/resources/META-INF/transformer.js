var ASMAPI = Java.type("net.minecraftforge.coremod.api.ASMAPI");
var Opcodes = Java.type("org.objectweb.asm.Opcodes");
var MethodInsnNode = Java.type("org.objectweb.asm.tree.MethodInsnNode");

function initializeCoreMod() {
    return {
        "NPCEvent$StartBattle_<init>": {
            "target": {
                "type": "METHOD",
                "class": "com/pixelmonmod/pixelmon/api/events/npc/NPCEvent$StartBattle",
                "methodName": "<init>",
                "methodDesc": "(Ljava/util/List;)V"
            },
            "transformer": function (mn) {
                var insnList = mn.instructions.toArray();
                for (var i = 0; i < insnList.length; i++) {
                    var node = insnList[i];
                    if (node.getOpcode() === Opcodes.INVOKEVIRTUAL && node.owner.equals("com/pixelmonmod/pixelmon/battles/controller/participants/EntityParticipant") && node.name.equals(ASMAPI.mapField("getEntity")) && node.desc.equals("()Lnet/minecraft/world/entity/Entity;")) {
                        mn.instructions.set(node, new MethodInsnNode(Opcodes.INVOKESTATIC, "io/github/zekerzhayard/npe_npcevent_startbattle/Hook", "getEntity", "(Lcom/pixelmonmod/pixelmon/battles/controller/participants/EntityParticipant;)Lnet/minecraft/world/entity/Entity;", false));
                    }
                }
                return mn;
            }
        },
        "NPCEvent$EndBattle_<init>": {
            "target": {
                "type": "METHOD",
                "class": "com/pixelmonmod/pixelmon/api/events/npc/NPCEvent$EndBattle",
                "methodName": "<init>",
                "methodDesc": "(Lcom/pixelmonmod/pixelmon/battles/controller/BattleController;Lcom/pixelmonmod/pixelmon/api/battles/BattleEndCause;ZLjava/util/Map;)V"
            },
            "transformer": function (mn) {
                var insnList = mn.instructions.toArray();
                for (var i = 0; i < insnList.length; i++) {
                    var node = insnList[i];
                    if (node.getOpcode() === Opcodes.INVOKEVIRTUAL && node.owner.equals("com/pixelmonmod/pixelmon/battles/controller/participants/EntityParticipant") && node.name.equals(ASMAPI.mapField("getEntity")) && node.desc.equals("()Lnet/minecraft/world/entity/Entity;")) {
                        mn.instructions.set(node, new MethodInsnNode(Opcodes.INVOKESTATIC, "io/github/zekerzhayard/npe_npcevent_startbattle/Hook", "getEntity", "(Lcom/pixelmonmod/pixelmon/battles/controller/participants/EntityParticipant;)Lnet/minecraft/world/entity/Entity;", false));
                    }
                }
                return mn;
            }
        }
    }
}
