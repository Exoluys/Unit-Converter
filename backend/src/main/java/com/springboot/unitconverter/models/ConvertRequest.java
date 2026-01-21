package com.springboot.unitconverter.models;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ConvertRequest {

    private double value;
    private String fromUnit;
    private String toUnit;

}
