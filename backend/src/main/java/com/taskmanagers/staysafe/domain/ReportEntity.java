package com.taskmanagers.staysafe.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Data
@Document
public class ReportEntity{
    @Id
    private int id;
    private String date;
    private String time;


    private String overview;
    private String description;
    private int severityScore;
    private SeverityCategory category;
    private List<Hazard> hazards;
    private String solution;
    private String prevention;
    private String lesson;
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
