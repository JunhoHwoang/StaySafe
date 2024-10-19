package com.taskmanagers.staysafe;

import com.opencsv.CSVReader;
import com.opencsv.bean.CsvToBeanBuilder;
import com.opencsv.exceptions.CsvException;
import com.taskmanagers.staysafe.domain.Incident;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@SpringBootApplication
public class StaysafeApplication {

	public static void main(String[] args) throws IOException, CsvException {
		//SpringApplication.run(StaysafeApplication.class, args);
		ClassLoader classLoader = StaysafeApplication.class.getClassLoader();
		File file = new File(Objects.requireNonNull(classLoader.getResource("data/incidents.csv")).getFile());

		List<Incident> incidents = new CsvToBeanBuilder<Incident>(new FileReader(file))
				.withType(Incident.class)
				.build()
				.parse();

		incidents.forEach(System.out::println);
	}

}
