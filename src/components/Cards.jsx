import React from 'react'
import Button from './Button'

const Cards = ({promoted, jobTitle, company, jobType, postedDay}) => {
    return (
        <div className="flex flex-col justify-between bg-white border w-full border-[#E1E1E1] rounded-[10px] py-2.5 px-5">
            <h6 className='text-dark-text text-[10px] font-semibold mb-1.5'>{promoted}</h6>
            <div className="flex gap-2.5">
                <div className='flex justify-center items-center shrink-0 w-10 h-10 rounded-[9.11px] bg-[#FAFAFA]'>
                    <img className='size-4' src="./card-img.png" alt="Company Logo" />
                </div>
                <div className="flex flex-col mb-[5px]">
                    <h5 className='text-dark-text text-sm font-medium'>{jobTitle}</h5>
                    <h6 className='text-dark-text text-xs font-medium'>{company}</h6>
                </div>
            </div>
            <div className="flex items-center gap-2.5 text-dark-gray text-xs font-medium my-[5px]">
                <img className='w-3' src="./location.png" alt="Location" />
                <p>{jobType}</p>
            </div>
            <div className="flex items-center gap-2.5 text-dark-gray text-xs font-medium my-[5px]">
                <img className='w-3' src="./clock.png" alt="clock" />
                <p>{postedDay}  |  <span className='text-primary'> 22 applicants </span> </p>
            </div>
            <div className="flex items-center mt-2.5 gap-5">
                <Button text='Apply Now' buttonStyles='text-xs font-normal py-2.5 w-full' />
                <i className="fa-regular fa-bookmark text-[#AAAAAA] text-xl cursor-pointer "></i>
            </div>
        </div>
    )
}

export default Cards