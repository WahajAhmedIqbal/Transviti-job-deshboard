import Divider from "./Divider"

const Sidebar = ({toggleDropdown, openDropdown}) => {
    return (
        <div className="side-container lg:max-w-[346px] w-full shrink-0">
            <div className="profile-card bg-white rounded-[10px] overflow-hidden text-dark-text text-center pb-5 w-full">
                <img className='max-h-24 h-full w-full object-cover' src="./cover.png" alt="cover Image" />
                <div>
                    <span className='flex justify-center items-center w-20 h-w-20 overflow-hidden rounded-full border-2 border-white mx-auto mt-[-50px]'>
                        <img src="./Oval.png" alt="avater" />
                    </span>
                    <h6 className='mt-2 text-lg font-semibold'>Albert Flores</h6>
                    <p className='max-w-[236px] w-full mx-auto font-normal text-sm mt-2'>Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...</p>
                    <span className='mt-2 text-xs'>Clinton, Maryland</span>
                </div>
            </div>

            <div className="bg-white lg:block hidden w-full rounded-[10px] mt-6 p-5">
                <div className="flex gap-2 justify-between items-center">
                    <p className='text-dark-text text-sm'>Profile Visitors</p>
                    <p className='text-primary'>140</p>
                </div>
                <Divider styles="!my-2" />
                <div className="flex gap-2 justify-between items-center">
                    <p className='text-dark-text text-sm'>Resume Viewers</p>
                    <p className='text-primary'>20</p>
                </div>
                <Divider styles="!my-2" />
                <div className="flex gap-2 justify-between items-center">
                    <p className='text-dark-text text-sm'>My Jobs</p>
                    <p className='text-primary'>40</p>
                </div>
            </div>

            <div className="relative bg-white p-2.5 rounded-[10px] mt-6 w-full">
                <button onClick={(e) => toggleDropdown('dropdown3', e)} className='cursor-pointer flex justify-between w-full items-center'>
                    <div className='text-left'>
                        <h5 className='text-dark-text font-bold text-base'>My calendar</h5>
                        <p className='text-nav-blue text-sm font-light'>Upcoming Interviews</p>
                    </div>
                    <i className="fa-solid fa-chevron-down text-xs text-nav-blue"></i>
                </button>
                {openDropdown === 'dropdown3' && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <div className="p-2">
                            <div className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                                Upcoming Interviews
                            </div>
                            <div className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                                Past Interviews
                            </div>
                            <div className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                                Scheduled Meetings
                            </div>
                            <div className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                                All Events
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar