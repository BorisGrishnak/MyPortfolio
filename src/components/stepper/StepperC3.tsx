import React from 'react';

interface StepperProps {
    currentStep: number;
    totalSteps: number;
}

const StepperC3: React.FC<StepperProps> = ({ currentStep, totalSteps }) => {
    return (
        <div className="flex justify-center">
            {Array.from({ length: totalSteps }, (_, index) => (
                <div key={index} className="relative flex items-center">
                 {/* <div className={`h-1 w-full bg-gray-300 ${index < currentStep ? 'bg-amber-500' : ''}`}></div> */}
                 <div className={`w-6 h-6 mx-2 rounded-full border-4 border-white ${index === currentStep ? 'bg-amber-500' : 'bg-amber-100'}`}></div>
                </div>
            ))}
        </div>
    );
};

export default StepperC3;