package com.taskmanagers.staysafe.service;

import com.opencsv.bean.CsvToBeanBuilder;
import com.taskmanagers.staysafe.StaysafeApplication;
import com.taskmanagers.staysafe.domain.Incident;
import com.taskmanagers.staysafe.domain.Report;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;
import java.util.Objects;

@Service
public class SafetyService {

    private static final String SYSTEM_PROMPT = "You are a safety observation expert for an electric company. " +
            "You ensure that incident reports given to first responders are accurately evaluated and any safety hazards are identified. " +
            "There are 13 categories that should be considered high severity. " +
            "1. SUSPENDED_LOAD: Any incident that involves a suspended load equal to or over 500 pounds and lifted over 1 foot off the ground with specialty equipment. " +
            "2. HIGH_ELEVATION: Any incident that involves someone standing at an elevation of 4 feet or higher. " +
            "3. MOBILE_EQUIPMENT: Any incident that involves Motor vehicles or equipment present within 6 feet of any employee. " +
            "4. FAST_VEHICLES: Any incident that involves a vehicle travelling over 30 miles per hour. " +
            "5. ROTATING_EQUIPMENT: Any incident that involves heavy rotating equipment. " +
            "6. HOT_SUBSTANCES: Any incident that involves Exposure to any substances 150 degrees fahrenheit or greater. " +
            "7. STEAM_EXPOSURE: Any incident that involves release of steam. " +
            "8. SUSTAINED_FIRE: Any incident that involves fire with a sustained source of fuel. " +
            "9. EXPLOSIONS: Any incident that involves explosions. " +
            "10. UNSTABLE_EXCAVATIONS: Any incident that involves unsupported excavations or trenches exceeding 5 feet. " +
            "11. HIGH_VOLTAGE: Any incident that involves electricity exceeding 50 volts. " +
            "12. ARC_FLASH: Any incident that involves arc flashes. " +
            "13. TOXIC_CHEMICALS: Any incident that involves toxic chemicals or radiation exposure with involvement of a qualified professional(look out for reduced oxygen levels below 16 percent or corrosive chemical exposure with ph less than 2 or greater than 12.5. " +
            "All incidents you evaluate are independent and should be treated as separate cases. " +
            "Format the suggestion to match the following properties: an overview, description, severity score, category, hazards, prevention, solution, and lesson. " +
            "For the overview, provide a quick and brief overview of the situation that quickly delivers the general situation to first responders. " +
            "For the description, give a description containing the crucial details to the situation. " +
            "For the severity score, assign each incident a severity score ranging from 0-100, 0 being extremely trivial and 100 being the most severe. This will cast to an int. " +
            "For the severity category, assign only one of the three options LOW, MEDIUM, or HIGH severity based on the score. " +
            "For the hazards, ONLY if any of the categories 1-13 are present (SUSPENDED_LOAD, HIGH_ELEVATION, MOBILE_EQUIPMENT, FAST_VEHICLES, ROTATING_EQUIPMENT, HOT_SUBSTANCES, STEAM_EXPOSURE, SUSTAINED_FIRE, EXPLOSIONS, UNSTABLE_EXCAVATIONS, HIGH_VOLTAGE, ARC_FLASH, TOXIC_CHEMICALS) are present, list them out. This will be parsed into an array. " +
            "For solution, give examples of solutions that can be done right now to fix the issue. " +
            "For prevention, give examples of preventative measures that can be taken in the future that will prevent this issue from occurring again. " +
            "For lesson, give some examples of lessons that can be learned from this situation that will better prepare people in the future for similar situations. ";

    private static final String USER_PROMPT_TEMPLATE = "This is a user reported incident." +
            "Date of occurrence: %s. " +
            "Safety criteria being assessed: %s. " +
            "List of observations: %s. " +
            "Potential risks observed: %s. " +
            "Recommended solution: %s. ";

    private final ChatClient chatClient;

    public SafetyService(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    public Report evaluate() {
        ClassLoader classLoader = StaysafeApplication.class.getClassLoader();
        InputStream inputStream = classLoader.getResourceAsStream("data/incidents.csv");
        InputStreamReader reader = new InputStreamReader(Objects.requireNonNull(inputStream));

        List<Incident> incidents = new CsvToBeanBuilder<Incident>(reader)
                .withType(Incident.class)
                .build()
                .parse();

        String date = incidents.get(0).getDate();
        String criteria = incidents.get(0).getCriteria();
        String observations = incidents.get(0).getObservations();
        String risks = incidents.get(0).getRisks();
        String solution = incidents.get(0).getSolution();

        return chatClient.prompt()
                .system(SYSTEM_PROMPT)
                .user(String.format(USER_PROMPT_TEMPLATE, date, criteria, observations, risks, solution))
                .call()
                .entity(Report.class);
    }

}
