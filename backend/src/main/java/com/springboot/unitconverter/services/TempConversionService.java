package com.springboot.unitconverter.services;

import com.springboot.unitconverter.models.ConvertRequest;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

@Service
public class TempConversionService {
    public double convert(ConvertRequest req) {
        String from = req.getFromUnit();
        String to = req.getToUnit();

        double value = req.getValue();
        double celsius = toCelsius(value, from);

        return fromCelsius(celsius, to);
    }

    private double toCelsius(double value, String unit) {
        return switch (unit) {
            case "celsius" -> value;
            case "fahrenheit" -> (value - 32) * 5/9;
            case "kelvin" -> value - 273.15;
            default -> throw new IllegalArgumentException("Unknown unit: " + unit);
        };
    }

    private double fromCelsius(double celsius, String unit) {
        return switch (unit) {
            case "celsius" -> celsius;
            case "fahrenheit" -> (celsius * 9/5) + 32;
            case "kelvin" -> celsius + 273.15;
            default -> throw new IllegalArgumentException("Unknown unit: " + unit);
        };
    }
}
