"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
export default function BookAppointment() {
    const searchParams = useSearchParams();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [doctor, setDoctor] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (searchParams) {
            setName(searchParams.get("name") || "");
            setEmail(searchParams.get("email") || "");
            setPhone(searchParams.get("phone") || "");
            setService(searchParams.get("service") || "");
            setDate(searchParams.get("date") || "");
        }
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const payload = {
          title: `Appointment - ${name}`,
          status: "publish",
          acf: {
            patient_name: name,
            patient_email: email,
            patient_phone: phone,
            service,
            doctor,
            description,
            date
          },
        };      
        try {
          const response = await fetch('https://omni.fmmethod.online/wp-json/wp/v2/appointment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
          });
      
        //   if (!response.ok) {
        //     const errorData = await response.json();
        //     throw new Error(JSON.stringify(errorData));
        //   }
      
        toast.success("Appointment booked", {
            description: "Someone from Omni Health will contact you",
            className: "bg-green-500 text-white border-none shadow-lg",
            action: {
                label: "X",
                onClick: () => console.log("Cancelled"),
              },
        });
    
      
          // Optionally reset form
          setName('');
          setEmail('');
          setPhone('');
          setService('');
          setDoctor('');
          setDate('');
          setDescription('');
        } catch (error) {
            const errorData = JSON.parse(error.message);
          toast.error("Something went wrong. Please try again.");
          console.error("API Error:", errorData);
        }
      };

    return (
        <div className="">
            {/* Header with gradient background */}
            <div className="w-full h-[300px] bg-gradient-to-r from-[#68AAF0] to-[#6BAAF1] py-16 px-4 text-white relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Book an appointment</h1>
                    <p className="text-xl">In Omni Health Care</p>
                </div>
            </div>

            <section className="relative overflow-hidden">
                {/* Gradient background */}
                <div>
                    <Image src="/images/green-ecllipse.png"
                           width={0}
                           height={0}
                           alt={"Asdf"}
                           sizes={"100vw"}
                           priority
                           className={"absolute top-0 left-0 w-auto h-full"}
                    />
                    <Image src="/images/red-ecllipse.png"
                           width={0}
                           height={0}
                           alt={"Asdf"}
                           sizes={"100vw"}
                           priority
                           className={"absolute top-20 left-0 w-auto h-full"}
                    />
                    <Image src="/images/green-ecllipse-right.png"
                           width={0}
                           height={0}
                           alt={"Asdf"}
                           sizes={"100vw"}
                           priority
                           className={"absolute top-0 right-0 w-auto h-full"}
                    />
                    <Image src="/images/red-ecllipse-right.png"
                           width={0}
                           height={0}
                           alt={"Asdf"}
                           sizes={"100vw"}
                           priority
                           className={"absolute top-20 right-0 w-auto h-full "}
                    />
                </div>
                {/* How Omni Works section */}
                <div className="w-full py-16 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How Omni Works?</h2>

                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {/* Step 1 */}
                            <div className="text-center relative">
                                <div
                                    className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-blue-500 font-bold text-xl">01</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Choose Doctor</h3>
                                <p className="text-gray-600 text-sm">
                                    before you make an appointment you are required to choose disease and doctor
                                </p>
                            </div>

                            {/* Dotted line from step 1 to step 2 */}
                            <div className="hidden md:block absolute left-[22%] top-6 w-[28%]">
                                <svg
                                    width="80%"
                                    height="41"
                                    viewBox="0 0 272 41"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M271.409 7.51497C271.693 6.7369 271.293 5.87558 270.515 5.59117L257.836 0.956413C257.057 0.672001 256.196 1.07219 255.912 1.85027C255.627 2.62835 256.027 3.48966 256.806 3.77407L268.076 7.89386L263.956 19.1645C263.672 19.9426 264.072 20.8039 264.85 21.0883C265.628 21.3727 266.49 20.9725 266.774 20.1944L271.409 7.51497ZM0.190858 8.26305C1.01897 8.79356 1.87909 9.32817 2.77064 9.86588L4.32001 7.29694C3.45076 6.77269 2.61365 6.25234 1.80914 5.73695L0.190858 8.26305ZM8.13613 12.9287C9.85583 13.8598 11.6647 14.7949 13.5602 15.7287L14.8861 13.0376C13.0239 12.1201 11.2492 11.2028 9.56457 10.2906L8.13613 12.9287ZM19.0898 18.3354C20.8959 19.1504 22.7673 19.961 24.7021 20.7637L25.8517 17.9927C23.9447 17.2015 22.1015 16.4031 20.3238 15.6009L19.0898 18.3354ZM30.3833 23.0256C32.2465 23.7374 34.1608 24.44 36.1247 25.1309L37.1202 22.3009C35.1813 21.6188 33.292 20.9253 31.4539 20.2231L30.3833 23.0256ZM41.9208 27.0871C43.8285 27.7043 45.7779 28.3094 47.7679 28.9002L48.6217 26.0243C46.655 25.4404 44.7289 24.8425 42.8444 24.2328L41.9208 27.0871ZM53.6293 30.5656C55.5605 31.0901 57.5263 31.6004 59.526 32.0949L60.2462 29.1827C58.2687 28.6936 56.3248 28.189 54.4155 27.6705L53.6293 30.5656ZM65.4641 33.4932C67.4274 33.9325 69.4204 34.3561 71.4426 34.7624L72.0336 31.8212C70.0329 31.4192 68.0612 31.0002 66.1193 30.5656L65.4641 33.4932ZM77.4604 35.904C79.4339 36.2565 81.433 36.5921 83.4571 36.9097L83.9221 33.946C81.919 33.6317 79.9406 33.2995 77.9878 32.9508L77.4604 35.904ZM89.4882 37.7914C91.488 38.0625 93.5104 38.3156 95.5551 38.5497L95.8963 35.5691C93.8724 35.3374 91.8705 35.0869 89.8912 34.8186L89.4882 37.7914ZM101.628 39.1818C103.63 39.3694 105.651 39.5385 107.692 39.6881L107.912 36.6961C105.891 36.548 103.89 36.3806 101.908 36.1949L101.628 39.1818ZM113.789 40.073C115.806 40.1799 117.841 40.2675 119.893 40.3349L119.992 37.3365C117.96 37.2697 115.945 37.183 113.948 37.0772L113.789 40.073ZM125.975 40.4742C127.997 40.5004 130.034 40.5068 132.087 40.4927L132.066 37.4927C130.033 37.5068 128.016 37.5004 126.014 37.4744L125.975 40.4742ZM138.186 40.3904C140.2 40.3368 142.229 40.2632 144.271 40.1688L144.133 37.172C142.11 37.2655 140.101 37.3384 138.106 37.3915L138.186 40.3904ZM150.385 39.8262C152.393 39.694 154.413 39.5416 156.445 39.3683L156.19 36.3791C154.177 36.5508 152.176 36.7018 150.188 36.8327L150.385 39.8262ZM162.523 38.7908C164.533 38.5802 166.554 38.349 168.587 38.0966L168.217 35.1195C166.204 35.3695 164.201 35.5985 162.21 35.8071L162.523 38.7908ZM174.62 37.289C176.628 37.0007 178.647 36.6916 180.675 36.361L180.193 33.4C178.183 33.7276 176.183 34.0339 174.194 34.3194L174.62 37.289ZM186.657 35.3282C188.651 34.9648 190.654 34.5805 192.665 34.1748L192.072 31.234C190.079 31.636 188.095 32.0168 186.119 32.3768L186.657 35.3282ZM198.615 32.9173C200.59 32.4807 202.574 32.0233 204.565 31.5446L203.864 28.6277C201.891 29.1021 199.925 29.5554 197.968 29.988L198.615 32.9173ZM210.476 30.0665C212.431 29.5586 214.394 29.0299 216.364 28.4801L215.557 25.5906C213.605 26.1355 211.66 26.6595 209.722 27.1628L210.476 30.0665ZM222.225 26.7871C224.159 26.2098 226.099 25.6119 228.045 24.993L227.136 22.134C225.206 22.7475 223.283 23.3402 221.367 23.9125L222.225 26.7871ZM233.847 23.0916C235.758 22.4468 237.674 21.7816 239.596 21.0956L238.588 18.2702C236.682 18.9504 234.782 19.6099 232.888 20.2491L233.847 23.0916ZM245.33 18.9934C247.217 18.2831 249.109 17.5525 251.006 16.8014L249.902 14.0121C248.021 14.757 246.144 15.4814 244.273 16.1858L245.33 18.9934ZM256.663 14.5065C258.526 13.7325 260.393 12.9384 262.265 12.1241L261.068 9.3732C259.211 10.1809 257.359 10.9684 255.512 11.7361L256.663 14.5065ZM267.837 9.64523C268.768 9.22201 269.699 8.79372 270.632 8.36033L269.368 5.63967C268.443 6.06961 267.518 6.49447 266.595 6.9143L267.837 9.64523Z"
                                        fill="#0068F9"
                                    />
                                </svg>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center relative">
                                <div
                                    className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-blue-500 font-bold text-xl">02</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Make Appointment</h3>
                                <p className="text-gray-600 text-sm">
                                    once you are registered you can make an appointment with the doctor via the online
                                    form.
                                </p>
                            </div>

                            {/* Dotted line from step 2 to step 3 - REPLACED WITH PROVIDED SVG */}
                            <div className="hidden md:block absolute left-[55%] top-[-8] w-[28%]">
                                <svg
                                    width="80%"
                                    height="42"
                                    viewBox="0 0 275 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M274.413 34.4957C274.691 35.2759 274.285 36.1342 273.504 36.4127L260.79 40.9513C260.01 41.2299 259.152 40.8232 258.873 40.043C258.595 39.2628 259.001 38.4045 259.782 38.126L271.083 34.0916L267.049 22.7901C266.77 22.0099 267.177 21.1516 267.957 20.8731C268.737 20.5946 269.596 21.0013 269.874 21.7815L274.413 34.4957ZM0.179554 33.7443C0.978681 33.2221 1.8073 32.6962 2.66491 32.1672L4.23974 34.7206C3.40356 35.2364 2.59699 35.7484 1.82045 36.2557L0.179554 33.7443ZM7.83065 29.145C9.49963 28.2169 11.2532 27.2846 13.0889 26.353L14.4466 29.0282C12.6435 29.9433 10.9234 30.8577 9.28871 31.7668L7.83065 29.145ZM18.4238 23.7582C20.1683 22.9447 21.9748 22.1349 23.8415 21.332L25.0268 24.088C23.1873 24.8791 21.4084 25.6765 19.6917 26.4771L18.4238 23.7582ZM29.3298 19.0631C31.1307 18.3476 32.9803 17.6403 34.8774 16.9436L35.9115 19.7598C34.0389 20.4474 32.2138 21.1453 30.4375 21.8511L29.3298 19.0631ZM40.4528 14.9753C42.2881 14.3528 44.1629 13.7413 46.0765 13.1428L46.972 16.006C45.0812 16.5974 43.2291 17.2015 41.4165 17.8163L40.4528 14.9753ZM51.7475 11.4412C53.6199 10.9027 55.5259 10.3774 57.4647 9.86689L58.2287 12.768C56.3117 13.2728 54.4274 13.7921 52.5766 14.3244L51.7475 11.4412ZM63.2272 8.41732C65.1212 7.9629 67.044 7.52307 68.9947 7.09919L69.6318 10.0308C67.7021 10.4501 65.8003 10.8851 63.927 11.3345L63.2272 8.41732ZM74.7821 5.90566C76.7002 5.53108 78.6435 5.17232 80.6112 4.83055L81.1246 7.7863C79.1775 8.12448 77.2548 8.47945 75.357 8.85005L74.7821 5.90566ZM86.4806 3.87366C88.4047 3.58033 90.3505 3.30357 92.3177 3.04441L92.7095 6.01871C90.7626 6.27521 88.8368 6.54911 86.9327 6.83939L86.4806 3.87366ZM98.1943 2.33054C100.146 2.11334 102.118 1.91372 104.109 1.73264L104.381 4.72031C102.41 4.89956 100.458 5.09715 98.526 5.31214L98.1943 2.33054ZM109.988 1.25664C111.941 1.11796 113.911 0.997326 115.898 0.895592L116.051 3.89167C114.084 3.99239 112.134 4.11181 110.201 4.2491L109.988 1.25664ZM121.834 0.650295C123.783 0.588913 125.749 0.545921 127.729 0.522079L127.765 3.52186C125.804 3.54547 123.858 3.58804 121.928 3.64881L121.834 0.650295ZM133.659 0.508362C135.618 0.52285 137.591 0.556248 139.577 0.609268L139.497 3.6082C137.53 3.5557 135.577 3.52262 133.637 3.50828L133.659 0.508362ZM145.484 0.823647C147.45 0.913857 149.429 1.02345 151.42 1.15309L151.225 4.14675C149.253 4.01836 147.294 3.90983 145.347 3.8205L145.484 0.823647ZM157.296 1.59157C159.255 1.75631 161.224 1.94059 163.205 2.14503L162.897 5.12918C160.935 4.92669 158.984 4.74417 157.045 4.58101L157.296 1.59157ZM169.075 2.80659C171.022 3.04447 172.979 3.30196 174.946 3.57963L174.526 6.55017C172.578 6.27512 170.64 6.02006 168.711 5.78444L169.075 2.80659ZM180.802 4.46195C182.735 4.77153 184.678 5.10074 186.629 5.4501L186.1 8.40313C184.167 8.05702 182.243 7.73088 180.328 7.4242L180.802 4.46195ZM192.46 6.54962C194.377 6.92937 196.303 7.32873 198.236 7.74816L197.6 10.68C195.685 10.2644 193.777 9.8687 191.877 9.49245L192.46 6.54962ZM204.032 9.06041C205.932 9.50873 207.839 9.97657 209.754 10.4644L209.013 13.3715C207.116 12.8881 205.226 12.4245 203.343 11.9802L204.032 9.06041ZM215.503 11.984C217.385 12.4992 219.273 13.0339 221.167 13.5883L220.324 16.4675C218.447 15.918 216.576 15.3881 214.711 14.8775L215.503 11.984ZM226.861 15.3092C228.723 15.8896 230.59 16.4893 232.463 17.1086L231.521 19.957C229.664 19.343 227.813 18.7486 225.968 18.1733L226.861 15.3092ZM238.093 19.024C239.934 19.6679 241.78 20.3309 243.631 21.0134L242.594 23.8282C240.758 23.1515 238.928 22.4941 237.103 21.8557L238.093 19.024ZM249.189 23.1155C251.009 23.8213 252.833 24.546 254.662 25.2901L253.532 28.0689C251.718 27.3311 249.909 26.6123 248.104 25.9125L249.189 23.1155ZM260.14 27.5707C261.939 28.3369 263.741 29.1219 265.548 29.926L264.328 32.6668C262.536 31.8692 260.748 31.0906 258.964 30.3307L260.14 27.5707ZM270.939 32.3764C271.839 32.7943 272.74 33.217 273.642 33.6445L272.358 36.3555C271.463 35.9314 270.569 35.5121 269.675 35.0975L270.939 32.3764Z"
                                        fill="#0068F9"
                                    />
                                </svg>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-blue-500 font-bold text-xl">03</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">consulting a doctor</h3>
                                <p className="text-gray-600 text-sm">
                                    after that you can meet with the doctor and consult about your illness to the
                                    doctor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


                {/* Book Appointment Form */}
                <div className="w-full bg-[#CCCCCC7D] py-16 px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Book Appointment Now!</h2>

                        <form onSubmit={handleSubmit}>
                            {/* Row 1: Name, Email, Phone */}
                            <div className="grid md:grid-cols-3 gap-4 mb-4">
                                <Input
                                    type="text"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="bg-white"
                                />
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="bg-white"
                                />
                                <Input
                                    type="tel"
                                    placeholder="Your Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="bg-white"
                                />
                            </div>

                            {/* Row 2: Service, Doctor, Date */}
                            <div className="grid md:grid-cols-3 gap-4 mb-4">
                                <Select value={service} onValueChange={setService}>
                                    <SelectTrigger className="bg-white w-full">
                                        <SelectValue placeholder="Choose Services"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="cardiology">Cardiology</SelectItem>
                                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                                        <SelectItem value="neurology">Neurology</SelectItem>
                                        <SelectItem value="dermatology">Dermatology</SelectItem>
                                        <SelectItem value="dentistry">Dentistry</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Select value={doctor} onValueChange={setDoctor}>
                                    <SelectTrigger className="bg-white w-full">
                                        <SelectValue placeholder="Choose Doctors"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="dr-alam">Dr. Mohammad Shah Alam</SelectItem>
                                        <SelectItem value="dr-khan">Dr. Aisha Khan</SelectItem>
                                        <SelectItem value="dr-patel">Dr. Raj Patel</SelectItem>
                                        <SelectItem value="dr-smith">Dr. Sarah Smith</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Input
                                    type="date"
                                    placeholder="Choose Date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                    className="bg-white w-full"
                                />
                            </div>

                            {/* Row 3: Description */}
                            <div className="mb-6">
                                <Textarea
                                    placeholder="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="min-h-[120px] bg-white"
                                />
                            </div>

                            <div className="flex justify-center">
                                <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2">
                                    Book Appointment
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
)
}

