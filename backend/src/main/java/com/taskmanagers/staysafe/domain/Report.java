package com.taskmanagers.staysafe.domain;

import java.util.List;

public record Report(
        int id,
        String date,
        String time,
        String overview,
        String description,
        int severityScore,
        SeverityCategory category,
        List<Hazard> hazards,
        String solution,
        String prevention,
        String lesson
) {
    public enum SeverityCategory {
        LOW,
        MEDIUM,
        HIGH
    }
    public enum Hazard {
        SUSPENDED_LOAD,
        HIGH_ELEVATION,
        MOBILE_EQUIPMENT,
        FAST_VEHICLES,
        ROTATING_EQUIPMENT,
        HOT_SUBSTANCES,
        STEAM_EXPOSURE,
        SUSTAINED_FIRE,
        EXPLOSIONS,
        UNSTABLE_EXCAVATIONS,
        HIGH_VOLTAGE,
        ARC_FLASH,
        TOXIC_CHEMICALS
    }
}
