package com.taskmanagers.staysafe.controller;

import com.taskmanagers.staysafe.domain.Incident;
import com.taskmanagers.staysafe.domain.Report;
import com.taskmanagers.staysafe.domain.ReportEntity;
import com.taskmanagers.staysafe.service.SafetyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpResponse;

@RestController
@RequestMapping(path = "/reports")
public class SafetyController {

    private final SafetyService safetyService;

    public SafetyController(SafetyService safetyService) {
        this.safetyService = safetyService;
    }

    @PostMapping
    public ResponseEntity<ReportEntity> getReports() {
        ReportEntity report = safetyService.evaluate();
        return new ResponseEntity<>(report, HttpStatus.OK);
    }
}
