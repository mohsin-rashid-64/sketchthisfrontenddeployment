// import React from 'react';
// import './StepIndicator.scss';

// const StepIndicator = ({ currentStep }) => {
//     return (
//         <div className="step-indicator">
//             <div className={`stepInd ${currentStep >= 1 ? 'selected' : ''} ${currentStep === 0 ? 'next' : ''}`}>1</div>
//             <div className={`stepInd ${currentStep >= 2 ? 'selected' : ''} ${currentStep === 1 ? 'next' : ''}`}>2</div>
//             <div className={`stepInd ${currentStep >= 3 ? 'selected' : ''} ${currentStep === 2 ? 'next' : ''}`}>3</div>
//         </div>
//     );
// };

// export default StepIndicator;











import React from 'react';
import './StepIndicator.scss';

const StepIndicator = ({ currentStep }) => {
    return (
        <div className="step-indicator">
            <div className={`stepInd ${currentStep >= 1 ? 'selected' : ''}`}>
                1
                <div className={`line ${currentStep > 1 ? 'default' : currentStep === 1 ? 'active' : ''}`} />
            </div>
            <div className={`stepInd ${currentStep >= 2 ? 'selected' : ''}`}>
                2
                <div className={`line ${currentStep > 2 ? 'default' : currentStep === 2 ? 'active' : ''}`} />
            </div>
            <div className={`stepInd ${currentStep >= 3 ? 'selected' : ''}`}>
                3
            </div>
        </div>
    );
};

export default StepIndicator;
