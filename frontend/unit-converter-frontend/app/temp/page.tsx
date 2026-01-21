import ConverterLayout from "@/components/Layout/ConverterLayout"

const Temp = () => {
    const tempUnits = [
        { value: "celsius", label: "Celsius" },
        { value: "fahrenheit", label: "Fahrenheit" },
        { value: "kelvin", label: "Kelvin" },
    ]

    return (
        <>
            <ConverterLayout
                title={"Temperature"}
                units={tempUnits}
            />
        </>
    )
}

export default Temp