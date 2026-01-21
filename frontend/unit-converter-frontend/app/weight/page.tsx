import ConverterLayout from "@/components/Layout/ConverterLayout"

const Weight = () => {
    const weightUnits = [
        { value: "milligram", label: "Milligram" },
        { value: "gram", label: "Gram" },
        { value: "kilogram", label: "Kilogram" },
        { value: "ton", label: "Ton" },
        { value: "ounce", label: "Ounce" },
        { value: "pound", label: "Pound" }
    ]

    return (
        <>
            <ConverterLayout
                title={"Weight"}
                units={weightUnits}
            />
        </>
    )
}

export default Weight