package com.taskmanagers.staysafe.domain;

public record Report(
        String overview,
        String description,
        int severityScore,
        SeverityCategory category
) {
    public enum SeverityCategory {
        LOW,
        MEDIUM,
        HIGH
    }
}
