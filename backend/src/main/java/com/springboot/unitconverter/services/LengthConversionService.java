package com.springboot.unitconverter.services;

import com.springboot.unitconverter.models.ConvertRequest;
import org.springframework.stereotype.Service;

@Service
public class LengthConversionService {
    public double convert(ConvertRequest req) {
        String from = req.getFromUnit();
        String to = req.getToUnit();

        double value = req.getValue();
        double meters = convertToMeters(value, from);

        return convertFromMeters(meters, to);
    }

    private double convertToMeters(double value, String unit) {
        return switch (unit) {
            case "millimeter" -> value / 1000;
            case "centimeter" -> value / 100;
            case "meter" -> value;
            case "kilometer" -> value * 1000;
            case "inch" -> value * 0.0254;
            case "foot" -> value * 0.3048;
            case "yard" -> value * 0.9144;
            case "mile" -> value * 1609.34;
            default -> throw new IllegalArgumentException("Unknown unit: " + unit);
        };
    }

    private double convertFromMeters(double meters, String unit) {
        return switch (unit) {
            case "millimeter" -> meters * 1000;
            case "centimeter" -> meters * 100;
            case "meter" -> meters;
            case "kilometer" -> meters / 1000;
            case "inch" -> meters / 0.0254;
            case "foot" -> meters / 0.3048;
            case "yard" -> meters / 0.9144;
            case "mile" -> meters / 1609.34;
            default -> throw new IllegalArgumentException("Unknown unit: " + unit);
        };
    }
}
