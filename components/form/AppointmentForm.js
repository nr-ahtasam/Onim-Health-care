import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {useState} from "react";

export default function AppointmentForm(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    dateTime: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <div className="bg-[#0f1b2a] rounded-br-[50px] p-6 md:p-8 shadow-xl max-w-[400px]">
      <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">Book an appointment</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter your name"
          className="rounded-none bg-transparent border-gray-700 text-white placeholder:text-white"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Enter your email"
          className="rounded-none bg-transparent border-gray-700 text-white placeholder:text-white"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          type="tel"
          placeholder="Enter your phone number"
          className="rounded-none bg-transparent border-gray-700 text-white placeholder:text-white"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <Select
          onValueChange={(value) => setFormData({ ...formData, department: value })}
          value={formData.department}
        >
          <SelectTrigger className="rounded-none w-full bg-transparent border-gray-700 text-white placeholder:text-white">
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cardiology">Cardiology</SelectItem>
            <SelectItem value="orthopedics">Orthopedics</SelectItem>
            <SelectItem value="neurology">Neurology</SelectItem>
            <SelectItem value="pediatrics">Pediatrics</SelectItem>
            <SelectItem value="gynecology">Gynecology</SelectItem>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => setFormData({ ...formData, dateTime: value })}
          value={formData.dateTime}
        >
          <SelectTrigger className="rounded-none w-full bg-transparent border-gray-700 text-white placeholder:text-white">
            <SelectValue placeholder="Select date and time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
            <SelectItem value="afternoon">Afternoon (1PM - 4PM)</SelectItem>
            <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="w-fit rounded-full bg-white text-blue-500 hover:bg-gray-200">
          Default Button
        </Button>
      </form>
    </div>
  )
}