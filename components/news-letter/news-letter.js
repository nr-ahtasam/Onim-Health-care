import Link from "next/link";
import {ArrowRight, Calendar} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Newsletter() {
    return (
        <div className="w-full py-16 px-4 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">News From Our Center</h2>
                    <Link href="#" className="text-gray-600 flex items-center gap-1 hover:text-gray-900">
                        View all <ArrowRight size={16}/>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* News Card 1 */}
                    <div className="flex flex-col md:flex-row bg-gray-100">
                        {/* Left Column: Image */}
                        <div className="w-full md:w-64 flex-shrink-0">
                            <div className="h-48 md:h-full bg-gray-300"></div>
                        </div>
                        {/* Right Column: Content */}
                        <div className="w-full md:w-2/3 flex flex-col p-4 bg-white">
                            <div className="flex items-center gap-2 mb-2">
                                <Calendar size={16} className="text-blue-500"/>
                                <span className="text-gray-500 text-sm">2024.12.19</span>
                                <span className="text-blue-500 text-sm">#Health information</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Notice of change in format of the result report
                                for the</h3>
                            <p className="text-gray-600 mb-4">Thank you for using our center on a daily basis. We
                                wo...</p>
                            <div className="mt-auto flex justify-end">
                                <Button variant="outline" size="sm">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* News Card 2 */}
                    <div className="flex flex-col md:flex-row bg-gray-100">
                        {/* Left Column: Image */}
                        <div className="w-full md:w-64 flex-shrink-0">
                            <div className="h-48 md:h-full bg-gray-300"></div>
                        </div>
                        {/* Right Column: Content */}
                        <div className="w-full md:w-2/3 flex flex-col p-4 bg-white">
                            <div className="flex items-center gap-2 mb-2">
                                <Calendar size={16} className="text-blue-500"/>
                                <span className="text-gray-500 text-sm">2024.12.19</span>
                                <span className="text-blue-500 text-sm">#Health information</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Notice of change in format of the result report
                                for the</h3>
                            <p className="text-gray-600 mb-4">Thank you for using our center on a daily basis. We
                                wo...</p>
                            <div className="mt-auto flex justify-end">
                                <Button variant="outline" size="sm">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}