"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Truck, MapPin, Calendar, UploadCloud, CheckCircle } from 'lucide-react';

export default function BookingPage() {
    const [step, setStep] = useState(1);
    const totalSteps = 4;
    const [isSuccess, setIsSuccess] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        vehicleType: '',
        clientPhone: '',
        pickupAddress: '',
        dropoffAddress: '',
        pickupDate: new Date().toISOString().split('T')[0],
        pickupTime: ''
    });

    const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps + 1));
    const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Convert files to base64
            const processedFiles = await Promise.all(
                files.map(async (file) => {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve({
                            name: file.name,
                            contentType: file.type,
                            data: (reader.result as string).split(',')[1] // Get base64 part
                        });
                        reader.onerror = error => reject(error);
                    });
                })
            );

            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, files: processedFiles }),
            });
            if (response.ok) {
                setIsSuccess(true);
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}\nDetail: ${errorData.error || 'No further details'}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to submit booking. Check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />

            <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">

                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-extrabold text-steel">Book a Transport</h1>
                        <p className="mt-2 text-steel-light">Complete the details below to schedule your logistics requirement.</p>
                    </div>

                    {/* Stepper */}
                    {!isSuccess && (
                        <div className="mb-8">
                            <div className="flex items-center justify-between relative">
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full"></div>
                                <div
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-royal rounded-full transition-all duration-300"
                                    style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                                ></div>

                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 ${step >= i ? 'bg-royal border-royal text-white' : 'bg-white border-gray-300 text-gray-400'} transition-colors duration-300 z-10 font-bold`}>
                                        {i}
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-2 text-xs font-medium text-gray-500 px-1">
                                <span className="w-10 text-center">Vehicle</span>
                                <span className="w-10 text-center">Location</span>
                                <span className="w-10 text-center">Date & Time</span>
                                <span className="w-10 text-center">Docs</span>
                            </div>
                        </div>
                    )}

                    {/* Form Content */}
                    <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 border border-gray-100">
                        {isSuccess ? (
                            <div className="text-center py-10">
                                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
                                    <CheckCircle className="h-10 w-10 text-green-600" />
                                </div>
                                <h2 className="mt-6 text-2xl font-bold text-steel">Booking Confirmed!</h2>
                                <p className="mt-2 text-steel-light">Your booking request has been received. Our team will contact you shortly.</p>
                                <button
                                    onClick={() => { setIsSuccess(false); setStep(1); }}
                                    className="mt-8 px-6 py-3 bg-royal text-white font-medium rounded-md hover:bg-royal-light transition-colors"
                                >
                                    Book Another Transport
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                if (step === totalSteps) {
                                    handleSubmit(e);
                                } else {
                                    handleNext();
                                }
                            }}>

                                {/* Step 1: Vehicle Type */}
                                {step === 1 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                        <h3 className="text-xl font-bold text-steel flex items-center">
                                            <Truck className="mr-3 text-royal" /> Select Vehicle Type
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {['3 Ton Truck', '5 Ton Truck', '7 Ton Truck', 'Heavy Duty Trailer', 'Boom Truck', 'Chemical Transport (Special Pass)'].map((type) => (
                                                <label key={type} className={`relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none transition-colors ${formData.vehicleType === type ? 'border-royal bg-blue-50' : 'border-gray-300 hover:border-royal'}`}>
                                                    <input
                                                        type="radio"
                                                        name="vehicleType"
                                                        value={type}
                                                        checked={formData.vehicleType === type}
                                                        onChange={handleChange}
                                                        className="sr-only"
                                                        required
                                                    />
                                                    <span className="flex flex-1">
                                                        <span className="flex flex-col">
                                                            <span className="block text-sm font-medium text-gray-900">{type}</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Location */}
                                {step === 2 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                        <h3 className="text-xl font-bold text-steel flex items-center">
                                            <MapPin className="mr-3 text-royal" /> Contact & Location
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-steel">Your Contact Number</label>
                                                <input
                                                    type="tel"
                                                    name="clientPhone"
                                                    value={formData.clientPhone}
                                                    onChange={handleChange}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-royal focus:ring-royal sm:text-sm border p-3"
                                                    placeholder="+974 XXXX XXXX"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-steel">Pickup Address</label>
                                                <textarea
                                                    name="pickupAddress"
                                                    value={formData.pickupAddress}
                                                    onChange={handleChange}
                                                    rows={3}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-royal focus:ring-royal sm:text-sm border p-3"
                                                    placeholder="Enter full pickup address in Qatar..."
                                                    required
                                                ></textarea>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-steel">Drop-off Address</label>
                                                <textarea
                                                    name="dropoffAddress"
                                                    value={formData.dropoffAddress}
                                                    onChange={handleChange}
                                                    rows={3}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-royal focus:ring-royal sm:text-sm border p-3"
                                                    placeholder="Enter full destination address..."
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Date & Time */}
                                {step === 3 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                        <h3 className="text-xl font-bold text-steel flex items-center">
                                            <Calendar className="mr-3 text-royal" /> Date & Time Picker
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-steel">Pickup Date</label>
                                                <input
                                                    type="date"
                                                    name="pickupDate"
                                                    value={formData.pickupDate}
                                                    min={new Date().toISOString().split('T')[0]}
                                                    onChange={handleChange}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-royal focus:ring-royal sm:text-sm border p-3"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-steel">Pickup Time</label>
                                                <input
                                                    type="time"
                                                    name="pickupTime"
                                                    value={formData.pickupTime}
                                                    onChange={handleChange}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-royal focus:ring-royal sm:text-sm border p-3"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Document Upload */}
                                {step === 4 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                        <h3 className="text-xl font-bold text-steel flex items-center">
                                            <UploadCloud className="mr-3 text-royal" /> Upload Permits / IDs
                                        </h3>
                                        <div
                                            className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-royal transition-colors bg-gray-50"
                                            onDragOver={(e) => e.preventDefault()}
                                            onDrop={(e) => {
                                                e.preventDefault();
                                                if (e.dataTransfer.files) {
                                                    setFiles(Array.from(e.dataTransfer.files));
                                                }
                                            }}
                                        >
                                            <div className="space-y-1 text-center">
                                                <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                                                <div className="flex text-sm text-gray-600 justify-center">
                                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-royal hover:text-royal-light focus-within:outline-none">
                                                        <span>Upload a file</span>
                                                        <input
                                                            id="file-upload"
                                                            name="file-upload"
                                                            type="file"
                                                            className="sr-only"
                                                            multiple
                                                            onChange={(e) => {
                                                                if (e.target.files) {
                                                                    setFiles(Array.from(e.target.files));
                                                                }
                                                            }}
                                                        />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                                            </div>
                                        </div>

                                        {files.length > 0 && (
                                            <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                                <h4 className="text-sm font-semibold text-steel mb-2 flex items-center">
                                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                                    Selected Files ({files.length}):
                                                </h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    {files.map((file, index) => (
                                                        <li key={index} className="flex flex-col">
                                                            <span className="font-medium truncate">{file.name}</span>
                                                            <span className="text-xs text-gray-400">{(file.size / 1024).toFixed(1)} KB</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        <div className="text-sm text-steel-light bg-blue-50 p-4 rounded-md border border-blue-100">
                                            * For chemical transport, please upload your special pass and material safety data sheet (MSDS).
                                        </div>
                                    </div>
                                )}

                                <div className="mt-10 flex justify-between pt-6 border-t border-gray-200">
                                    {step > 1 ? (
                                        <button
                                            type="button"
                                            onClick={handlePrev}
                                            className="px-6 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-steel bg-white hover:bg-gray-50 focus:outline-none transition-colors"
                                        >
                                            Back
                                        </button>
                                    ) : <div></div>}

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="px-8 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-royal hover:bg-royal-light focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                    >
                                        {isLoading ? 'Processing...' : (step === totalSteps ? 'Confirm Booking' : 'Continue')}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
