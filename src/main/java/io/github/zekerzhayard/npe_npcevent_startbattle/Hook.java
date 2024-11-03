package io.github.zekerzhayard.npe_npcevent_startbattle;

import com.pixelmonmod.pixelmon.battles.controller.participants.EntityParticipant;
import net.minecraft.world.entity.Entity;

public class Hook {
    public static Entity getEntity(EntityParticipant participant) {
        return participant == null ? null : participant.getEntity();
    }
}
