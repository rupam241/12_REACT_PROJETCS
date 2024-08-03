import React, { useContext, useRef } from 'react';
import UserContext from './context/UserContext';

function Input() {
    const inputName = useRef();
    const inputAge = useRef();
    const inputGender = useRef();

    const { setName, setGender, setAge, setData} = useContext(UserContext);

    const submitData = () => {
        setName(inputName.current.value);
        setGender(inputGender.current.value);
        setAge(inputAge.current.value);
        inputName.current.value="";
        inputAge.current.value="";
        inputGender.current.value=""
        
       
    };

    return (
        <>
            <div className="flex justify-center w-full h-auto py-5">
                <div className="flex flex-col sm:flex-row justify-around w-full sm:w-2/3 lg:w-2/5 h-auto space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-full sm:w-auto">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="border-0 p-3 rounded-xl w-full sm:w-auto"
                            ref={inputName}
                        />
                    </div>
                    <div className="w-full sm:w-auto">
                        <input 
                            type="text" 
                            placeholder="Gender" 
                            className="p-3 rounded-xl w-full sm:w-auto"
                            ref={inputGender}
                        />
                    </div>
                    <div className="w-full sm:w-auto">
                        <input 
                            type="text" 
                            placeholder="Age" 
                            className="p-3 rounded-xl w-full sm:w-auto"
                            ref={inputAge}
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    className='bg-slate-50 w-24 p-2 rounded-xl'
                    onClick={submitData}
                >
                    Submit
                </button>
            </div>
        </>
    );
}

export default Input;
