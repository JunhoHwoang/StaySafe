package com.taskmanagers.staysafe.controller;

import com.taskmanagers.staysafe.domain.ReportEntity;
import com.taskmanagers.staysafe.service.SafetyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/reports")
public class ReportController {
    private final SafetyService safetyService;

    public ReportController(SafetyService safetyService) {
        this.safetyService = safetyService;
    }
    @GetMapping
    public ResponseEntity<List<ReportEntity>> getReports() {
        List<ReportEntity> reports = safetyService.getAllReports();
        return new ResponseEntity<>(reports, HttpStatus.OK);
    }
}
