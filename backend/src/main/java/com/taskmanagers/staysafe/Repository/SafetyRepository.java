package com.taskmanagers.staysafe.Repository;
import com.taskmanagers.staysafe.domain.ReportEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SafetyRepository extends MongoRepository<ReportEntity, String>{
}
