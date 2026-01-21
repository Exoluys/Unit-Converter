package com.springboot.unitconverter.services;

import com.springboot.unitconverter.models.ConvertRequest;
import org.springframework.stereotype.Service;

@Service
public class WeightConversionService {
    public double convert(ConvertRequest req) {
        String from = req.getFromUnit();
        String to = req.getToUnit();

        double value = req.getValue();
        double kilograms = convertToKilograms(value, from);

        return convertFromKilograms(kilograms, to);
    }

    private double convertToKilograms(double value, String unit) {
        return switch (unit) {
            case "milligram" -> value / 1000000;
            case "gram" -> value / 1000;
            case "kilogram" -> value;
            case "ton" -> value * 1000;
            case "ounce" -> value * 0.0283495;
            case "pound" -> value * 0.453592;
            case "stone" -> value * 6.35029;
            default -> throw new IllegalArgumentException("Unknown unit: " + unit);
        };
    }

    private double convertFromKilograms(double kilograms, String unit) {
        return switch (unit) {
            case "milligram" -> kilograms * 1000000;
            case "gram" -> kilograms * 1000;
            case "kilogram" -> kilograms;
            case "ton" -> kilograms / 1000;
            case "ounce" -> kilograms / 0.0283495;
            case "pound" -> kilograms / 0.453592;
            case "stone" -> kilograms / 6.35029;
            default -> throw new IllegalArgumentException("Unknown unit: " + unit);
        };
    }
}
