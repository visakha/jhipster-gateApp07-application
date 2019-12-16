package com.viz.gateapp.myapp.web.rest;

import com.viz.gateapp.myapp.service.GateApp07KafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/gate-app-07-kafka")
public class GateApp07KafkaResource {

    private final Logger log = LoggerFactory.getLogger(GateApp07KafkaResource.class);

    private GateApp07KafkaProducer kafkaProducer;

    public GateApp07KafkaResource(GateApp07KafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping("/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        log.debug("REST request to send to Kafka topic the message : {}", message);
        this.kafkaProducer.send(message);
    }
}
