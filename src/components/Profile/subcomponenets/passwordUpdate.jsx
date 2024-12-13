import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons

const PasswordUpdate = ({ register, errors, onSubmit }) => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const toggleCurrentPasswordVisibility = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };

    return (
        <div className='bg-white shadow-md rounded-md mt-4 p-4'>
            <h1 className='mb-4 font-semibold'>Update Password</h1>
            <form onSubmit={onSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='relative'>
                    <label className="input-label">Current Password</label>
                    <input
                        type={showCurrentPassword ? 'text' : 'password'}
                        className={`input ${errors.currentPassword ? 'input-error' : ''}`}
                        {...register('currentPassword')}
                    />
                    <button
                        type="button"
                        className='absolute right-2 top-1/2 transform -translate-y-1/2 mt-3'
                        onClick={toggleCurrentPasswordVisibility}
                    >
                        {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.currentPassword && (
                        <p className="text-red-500">
                            {errors.currentPassword.message}
                        </p>
                    )}
                </div>
                <div className='relative'>
                    <label className="input-label">New Password</label>
                    <input
                        type={showNewPassword ? 'text' : 'password'}
                        className={`input ${errors.newPassword ? 'input-error' : ''}`}
                        {...register('newPassword')}
                    />
                    <button
                        type="button"
                        className='absolute right-2 top-1/2 transform -translate-y-1/2 mt-3'
                        onClick={toggleNewPasswordVisibility}
                    >
                        {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.newPassword && (
                        <p className="text-red-500">
                            {errors.newPassword.message}
                        </p>
                    )}
                </div>
                <div className='flex justify-end items-center px-4 py-2 mt-4 md:col-span-2'>
                    <button type="submit" className='bg-primary-500  hover:bg-primary-400 text-white px-4 py-2 rounded'>
                        Update Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PasswordUpdate;