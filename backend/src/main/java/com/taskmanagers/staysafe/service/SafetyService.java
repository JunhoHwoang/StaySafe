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
            "All incidents you evaluate are independent and should be treated as separate cases. " +
            "Provide a quick overview of the situation that quickly delivers the general situation to first responders. " +
            "Next, give a brief but more in-depth description containing more crucial details to the situation. " +
            "Finally, assign each incident with a severity score ranging from 0-100, 0 being extremely trivial and 100 being the most severe. ";

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
