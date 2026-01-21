import ConverterLayout from "@/components/Layout/ConverterLayout";

const Length = () => {
    const lengthUnits = [
        { value: "millimeter", label: "Millimeter" },
        { value: "centimeter", label: "Centimeter" },
        { value: "meter", label: "Meter" },
        { value: "kilometer", label: "Kilometer" },
        { value: "inch", label: "Inch" },
        { value: "foot", label: "Foot" },
        { value: "yard", label: "Yard" },
        { value: "mile", label: "Mile" }
    ];

    return (
        <ConverterLayout
            title={"Length"}
            units={lengthUnits}
        />
    )
}

export default Length