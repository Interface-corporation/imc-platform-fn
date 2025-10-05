"use client";
import React, {  useState, useEffect } from "react";

type ServiceOption = string | { label: string; value: string };

export interface ApplicationFormValues {
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
}

export interface ApplicationFormProps {
    title?: string;
    subtitle?: string;
    services: ServiceOption[];
    onSubmit: (data: ApplicationFormValues) => Promise<boolean>;
    className?: string;

    // UI copy overrides
    submitText?: string;
    successMessage?: string;
    errorMessage?: string;

    // Field placeholders/labels overrides
    labels?: Partial<Record<keyof ApplicationFormValues, string>>;
    placeholders?: Partial<Record<keyof ApplicationFormValues, string>>;

    // Validation overrides
    validateEmail?: (email: string) => boolean;
    validatePhone?: (phone: string) => boolean;

    // Behavior
    resetOnSuccess?: boolean;
    defaultValues?: Partial<ApplicationFormValues>;
    showProgressBar?: boolean;
    accentColor?: 'blue' | 'purple' | 'green' | 'indigo' | 'pink';
}

const defaultEmailCheck = (email: string) => /\S+@\S+\.\S+/.test(email);
const defaultPhoneCheck = (phone: string) => /^\+?\d{7,15}$/.test(phone);

const normalizeService = (s: ServiceOption) =>
    typeof s === "string" ? { label: s, value: s } : s;

const initialState = (defaults?: Partial<ApplicationFormValues>): ApplicationFormValues => ({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    ...defaults,
});

const ApplicationForm: React.FC<ApplicationFormProps> = ({
    title = "Get In Touch",
    subtitle = "Ready to transform your vision into reality? Let's start the conversation.",
    services = ["General Inquiry", "Support", "Sales", "Partnership"],
    onSubmit,
    className = "",

    submitText = "Send Message",
    successMessage = "✨ Thank you! Your message has been sent successfully. We'll get back to you soon.",
    errorMessage = "⚠️ Something went wrong. Please check your information and try again.",

    labels,
    placeholders,
    validateEmail = defaultEmailCheck,
    validatePhone = defaultPhoneCheck,

    resetOnSuccess = true,
    defaultValues,
    showProgressBar = true,
    
}) => {
    const [values, setValues] = useState<ApplicationFormValues>(initialState(defaultValues));
    const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormValues, string>>>({});
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
    const [formProgress, setFormProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    

    // Animate form entrance
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Calculate form completion progress
    useEffect(() => {
        const fields = Object.entries(values);
        
        const completedFields = fields.filter(([_, value]) => value.trim() !== '').length;

        const progress = (completedFields / fields.length) * 100;
        setFormProgress(progress);
    }, [values]);

    const l = {
        name: labels?.name ?? "Full Name",
        phone: labels?.phone ?? "Phone Number",
        email: labels?.email ?? "Email Address",
        service: labels?.service ?? "Service Type",
        message: labels?.message ?? "Message",
    };

    const ph = {
        name: placeholders?.name ?? "Enter your full name",
        phone: placeholders?.phone ?? "Enter your phone number",
        email: placeholders?.email ?? "Enter your email address",
        service: placeholders?.service ?? "Select a service",
        message: placeholders?.message ?? "Tell us how we can help you...",
    };

    const serviceOptions = services.map(normalizeService);

    const setField = (field: keyof ApplicationFormValues, value: string) => {
        setValues((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
        setTouchedFields(prev => new Set([...prev, field]));
    };

    const validateField = (field: keyof ApplicationFormValues, value: string): string | undefined => {
        switch (field) {
            case 'name':
                return !value.trim() ? 'Name is required' : undefined;
            case 'phone':
                return !value.trim() ? 'Phone number is required'
                    : !validatePhone(value) ? 'Please enter a valid phone number'
                        : undefined;
            case 'email':
                return !value.trim() ? 'Email address is required'
                    : !validateEmail(value) ? 'Please enter a valid email address'
                        : undefined;
            case 'service':
                return !value.trim() ? 'Please select a service' : undefined;
            case 'message':
                return !value.trim() ? 'Message is required'
                    : value.trim().length < 10 ? 'Please provide a more detailed message (at least 10 characters)'
                        : undefined;
            default:
                return undefined;
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof ApplicationFormValues, string>> = {};

        (Object.keys(values) as Array<keyof ApplicationFormValues>).forEach(field => {
            const error = validateField(field, values[field]);
            if (error) newErrors[field] = error;
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleBlur = (field: keyof ApplicationFormValues) => {
        setFocusedField(null);
        if (touchedFields.has(field)) {
            const error = validateField(field, values[field]);
            setErrors(prev => ({ ...prev, [field]: error }));
        }
    };

    const handleSubmit = async () => {
        setTouchedFields(new Set(Object.keys(values) as Array<keyof ApplicationFormValues>));

        if (!validateForm()) return;

        try {
            setStatus("loading");
            const success = await onSubmit(values);

            if (success) {
                setStatus("success");
                if (resetOnSuccess) {
                    setTimeout(() => {
                        setValues(initialState(defaultValues));
                        setErrors({});
                        setTouchedFields(new Set());
                        setStatus("idle");
                        setFormProgress(0);
                    }, 3000);
                }
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            console.log("Form submission error:", error);
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const getInputClassName = (field: keyof ApplicationFormValues) => {
        const hasError = errors[field] && touchedFields.has(field);
        const isFocused = focusedField === field;

        return `
            w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 ease-in-out
            bg-white/60 backdrop-blur-sm placeholder-gray-500 text-gray-800 font-medium
            ${isFocused
                ? 'border-blue-500 shadow-lg shadow-blue-500/25 scale-[1.02]'
                : hasError
                    ? 'border-red-400 shadow-lg shadow-red-400/25 animate-shake'
                    : 'border-gray-200/60 hover:border-blue-300 hover:shadow-md'
            }
            focus:outline-none transform
        `.trim();
    };

    return (
        <section className={`relative bg-gradient-to-br from-logoBlue-foreground to-indigo-50 py-16 px-4 overflow-hidden ${className}`}>
            {/* Animated Background Elements - matching AboutUs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* <div className="absolute animate-blob-soft top-10 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                <div className="absolute animate-blob-soft bottom-10 left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animation-delay-2000"></div>
                <div className="absolute animate-blob-soft top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animation-delay-4000"></div> */}
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 20}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    >
                        <div className={`w-2 h-2 rounded-full ${['bg-blue-400', 'bg-purple-400', 'bg-indigo-400'][Math.floor(Math.random() * 3)]
                            }`}></div>
                    </div>
                ))}
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 px-4">
                    <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-6 tracking-tight transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        {title.split(' ').map((word, index) => (
                            <span key={index}>
                                {index === 1 ? <span className="text-blue-600">{word}</span> : word}
                                {index < title.split(' ').length - 1 ? ' ' : ''}
                            </span>
                        ))}
                    </h2>
                    <p className={`max-w-2xl mx-auto text-xl text-gray-700 font-medium transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        {subtitle}
                    </p>
                </div>

                {/* Main Form Container */}
                <div className={`relative transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Glass Container with floating card style */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 md:p-10 relative overflow-hidden floating-card">
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-blue-50/30 pointer-events-none rounded-2xl"></div>

                        <div className="relative z-10">
                            {/* Progress Bar */}
                            {showProgressBar && (
                                <div className="mb-8">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm font-semibold text-gray-700">
                                            Form Progress
                                        </span>
                                        <span className="text-sm font-bold text-blue-600">
                                            {Math.round(formProgress)}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200/60 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-700 ease-out rounded-full"
                                            style={{ width: `${formProgress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )}

                            {/* Status Messages */}
                            {status === "success" && (
                                <div className="mb-8 p-5 rounded-xl bg-green-50/80 backdrop-blur-sm text-green-700 border-2 border-green-200/60 animate-fade-in-up shadow-md">
                                    <p className="text-center font-semibold">{successMessage}</p>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="mb-8 p-5 rounded-xl bg-red-50/80 backdrop-blur-sm text-red-700 border-2 border-red-200/60 animate-shake shadow-md">
                                    <p className="text-center font-semibold">{errorMessage}</p>
                                </div>
                            )}

                            {/* Form Fields */}
                            <div className="space-y-7">
                                {/* Name Field */}
                                <div className="space-y-2 floating-input">
                                    <label className="block text-sm font-semibold text-gray-700 ml-1">
                                        {l.name} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={values.name}
                                        onChange={(e) => setField("name", e.target.value)}
                                        onFocus={() => setFocusedField("name")}
                                        onBlur={() => handleBlur("name")}
                                        placeholder={ph.name}
                                        className={getInputClassName("name")}
                                    />
                                    {errors.name && touchedFields.has("name") && (
                                        <p className="text-red-600 text-sm ml-1 animate-fade-in font-medium">{errors.name}</p>
                                    )}
                                </div>

                                {/* Phone and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                    <div className="space-y-2 floating-input">
                                        <label className="block text-sm font-semibold text-gray-700 ml-1">
                                            {l.phone} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            value={values.phone}
                                            onChange={(e) => setField("phone", e.target.value)}
                                            onFocus={() => setFocusedField("phone")}
                                            onBlur={() => handleBlur("phone")}
                                            placeholder={ph.phone}
                                            className={getInputClassName("phone")}
                                        />
                                        {errors.phone && touchedFields.has("phone") && (
                                            <p className="text-red-600 text-sm ml-1 animate-fade-in font-medium">{errors.phone}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2 floating-input">
                                        <label className="block text-sm font-semibold text-gray-700 ml-1">
                                            {l.email} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={values.email}
                                            onChange={(e) => setField("email", e.target.value)}
                                            onFocus={() => setFocusedField("email")}
                                            onBlur={() => handleBlur("email")}
                                            placeholder={ph.email}
                                            className={getInputClassName("email")}
                                        />
                                        {errors.email && touchedFields.has("email") && (
                                            <p className="text-red-600 text-sm ml-1 animate-fade-in font-medium">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Service Selection */}
                                <div className="space-y-2 floating-input">
                                    <label className="block text-sm font-semibold text-gray-700 ml-1">
                                        {l.service} <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={values.service}
                                        onChange={(e) => setField("service", e.target.value)}
                                        onFocus={() => setFocusedField("service")}
                                        onBlur={() => handleBlur("service")}
                                        className={getInputClassName("service")}
                                    >
                                        <option value="">{ph.service}</option>
                                        {serviceOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.service && touchedFields.has("service") && (
                                        <p className="text-red-600 text-sm ml-1 animate-fade-in font-medium">{errors.service}</p>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div className="space-y-2 floating-input">
                                    <label className="block text-sm font-semibold text-gray-700 ml-1">
                                        {l.message} <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        rows={5}
                                        value={values.message}
                                        onChange={(e) => setField("message", e.target.value)}
                                        onFocus={() => setFocusedField("message")}
                                        onBlur={() => handleBlur("message")}
                                        placeholder={ph.message}
                                        className={`${getInputClassName("message")} resize-none`}
                                    />
                                    <div className="flex justify-between items-center">
                                        <div>
                                            {errors.message && touchedFields.has("message") && (
                                                <p className="text-red-600 text-sm animate-fade-in font-medium">{errors.message}</p>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-500 font-medium">
                                            {values.message.length} characters
                                        </p>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-6">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={status === "loading" || status === "success"}
                                        className="w-full px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-4 focus:ring-blue-500/50 relative overflow-hidden group"
                                    >
                                        {/* Button shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                        <span className="relative z-10 flex items-center justify-center">
                                            {status === "loading" ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                                                    Sending Message...
                                                </>
                                            ) : status === "success" ? (
                                                <>
                                                    <span className="mr-2">✅</span>
                                                    Message Sent Successfully!
                                                </>
                                            ) : (
                                                submitText
                                            )}
                                        </span>
                                    </button>
                                </div>

                                {/* Footer Note */}
                                <div className="text-center pt-4">
                                    <p className="text-sm text-gray-600 font-medium">
                                        <span className="text-red-500">*</span> Required fields • We'll respond within 24 hours
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations matching AboutUs style */}
            <style jsx>{`
                @keyframes blob-soft {
                    0%, 100% {
                        transform: translateX(0px) translateY(0px) scale(1);
                    }
                    33% {
                        transform: translateX(30px) translateY(-50px) scale(1.1);
                    }
                    66% {
                        transform: translateX(-20px) translateY(20px) scale(0.9);
                    }
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-200px) rotated(360deg);
                    }
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-3px); }
                    75% { transform: translateX(3px); }
                }
                
                .animate-blob-soft {
                    animation: blob-soft 20s infinite;
                }
                
                .animate-float {
                    animation: float 15s ease-in-out infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out;
                }
                
                .animate-fade-in {
                    animation: fade-in 0.4s ease-out;
                }
                
                .animate-shake {
                    animation: shake 0.5s ease-in-out;
                }
                
                .floating-card {
                    animation: float 6s ease-in-out infinite;
                }
                
                .floating-input:hover {
                    transform: translateY(-2px);
                    transition: transform 0.3s ease;
                }
            `}</style>
        </section>
    );
};

export default ApplicationForm;