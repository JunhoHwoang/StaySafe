package com.taskmanagers.staysafe;

import com.opencsv.CSVReader;
import com.opencsv.bean.CsvToBeanBuilder;
import com.opencsv.exceptions.CsvException;
import com.taskmanagers.staysafe.domain.Incident;
import com.taskmanagers.staysafe.service.SafetyService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.*;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@SpringBootApplication
public class StaysafeApplication {

	public static void main(String[] args) /* throws IOException, CsvException */ {
        SpringApplication.run(StaysafeApplication.class, args);
	}

}
