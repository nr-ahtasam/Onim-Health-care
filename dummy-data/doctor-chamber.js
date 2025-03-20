import DoctorChambers from "./doctor-chambers"

export default function DoctorChambersExample() {
    // Sample data
    const specialties = [
        {
            id: "1",
            name: "Critical & Intensive Care",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YXDeGvjjEzxfjjF3tEHUuTBRIP3A2z.png", // Using the provided image for the first specialty
            description: "Orci ultricies vulputate est quis non. Nam imperdiet felis orci bibendum. Eu semper montes",
        },
        {
            id: "2",
            name: "Orthopedics & Trauma",
            image: "/placeholder.svg?height=300&width=300", // Using placeholder for others
            description: "Orci ultricies vulputate est quis non. Nam imperdiet felis orci bibendum. Eu semper montes",
        },
        {
            id: "3",
            name: "Joint Replacement",
            image: "/placeholder.svg?height=300&width=300",
            description: "Orci ultricies vulputate est quis non. Nam imperdiet felis orci bibendum. Eu semper montes",
        },
        {
            id: "4",
            name: "Kidney Transplant",
            image: "/placeholder.svg?height=300&width=300",
            description: "Orci ultricies vulputate est quis non. Nam imperdiet felis orci bibendum. Eu semper montes",
        },
    ]

    return <DoctorChambers doctorName="Dr. Mohammad Shah Alam" specialties={specialties} />
}

