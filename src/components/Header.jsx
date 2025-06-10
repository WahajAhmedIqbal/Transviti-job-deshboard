import React, { useState, useCallback, useMemo } from 'react'
import Button from './Button'
import Overlay from './Overlay'

// Constants moved outside component
const NAV_ITEMS = [
  { id: 'find-jobs', label: 'Find Jobs' },
  { id: 'top-companies', label: 'Top Companies' },
  { id: 'job-tracker', label: 'Job Tracker' },
  { id: 'my-calendar', label: 'My Calendar' },
  { id: 'documents', label: 'Documents' },
  { id: 'messages', label: 'Messages' },
  { id: 'notifications', label: 'Notifications' }
]

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  // Memoized callbacks to prevent unnecessary re-renders
  const handleToggleNav = useCallback(() => {
    setToggleNav(prev => !prev)
  }, [])

  const handleNavItemClick = useCallback((index) => {
    setActiveIndex(index)
    setToggleNav(false) // Close mobile nav when item is clicked
  }, [])

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value)
  }, [])

  const handleOverlayClick = useCallback(() => {
    setToggleNav(false)
  }, [])

  // Memoized navigation list to prevent recreation on every render
  const navList = useMemo(() => 
    NAV_ITEMS.map((item, index) => (
      <li
        key={item.id} // Use stable ID instead of index
        onClick={() => handleNavItemClick(index)}
        className={`inline-block hover:text-primary text-sm cursor-pointer transition-colors duration-200 ${
          activeIndex === index ? 'font-semibold text-primary' : 'font-normal'
        }`}
      >
        {item.label}
      </li>
    )), [activeIndex, handleNavItemClick]
  )

  // Memoized mobile nav classes
  const mobileNavClasses = useMemo(() => 
    `transition-all duration-300 ease-in-out xl:relative fixed z-[5] top-0 xl:left-0 xl:p-0 py-5 px-4 min-w-[300px] bg-white h-full flex xl:flex-row flex-col xl:items-center gap-5 lg:gap-7 xl:shadow-none ${
      toggleNav ? 'left-0 shadow-lg' : '-left-[300px] shadow-none'
    }`, [toggleNav]
  )

  // Memoized toggle button classes and content
  const toggleButtonData = useMemo(() => ({
    className: `text-2xl xl:hidden block cursor-pointer text-[#01274E] z-[5] transition-all duration-200 ${
      toggleNav ? 'absolute right-4 top-4' : 'ml-0'
    }`,
    icon: toggleNav 
      ? <i className="fa-solid fa-xmark text-white p-2.5 hover:bg-gray-500 rounded-sm transition-colors duration-200"></i>
      : <i className="fa-solid fa-bars p-2 hover:bg-gray-100 rounded-sm transition-colors duration-200"></i>
  }), [toggleNav])

  return (
    <>
      {toggleNav && (
        <span onClick={handleOverlayClick} className='xl:hidden'>
          <Overlay />
        </span>
      )}
      
      <header className='bg-white py-[18px]'>
        <div className="u-container flex items-center justify-between relative">
          {/* Mobile Logo */}
          <img 
            className='w-10 xl:hidden block md:mx-4 mr-3' 
            src="./logo.svg" 
            alt="Company Logo" 
            loading="lazy"
          />

          {/* Navigation Container */}
          <div className={mobileNavClasses}>
            <img 
              className='xl:w-10 w-12' 
              src="./logo.svg" 
              alt="Company Logo"
              loading="lazy"
            />
            <nav 
              className='list-none flex xl:flex-row flex-col xl:items-center justify-between gap-3 max-w-[728px] w-full text-nav-blue text-base'
              role="navigation"
              aria-label="Main navigation"
            >
              {navList}
            </nav>
          </div>

          {/* Right Side Controls */}
          <div className='flex items-center gap-3 2xl:gap-4 grow xl:grow-0'>
            {/* Search Bar */}
            <div className="flex bg-[#F6F9FF] rounded-lg items-center gap-2.5 md:gap-5 py-2.5 px-3.5 sm:px-5 grow">
              <img 
                className='size-3.5' 
                src="./icon-search.svg" 
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <input 
                type="search" 
                className='outline-0 border-0 w-full text-sm text-nav-blue bg-transparent' 
                placeholder="Search jobs, companies..." 
                aria-label="Search jobs and companies"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {/* Resume Builder Button */}
            <span className='sm:flex hidden'>
              <Button text='Resume Builder' />
            </span>

            {/* User Avatar Dropdown */}
            <div className="cus-dropdown shrink-0" role="button" tabIndex={0}>
              <img 
                className='size-9 rounded-full' 
                src="./avater.png" 
                alt="User avatar"
                loading="lazy"
              />
              <ul role="menu" aria-hidden="true">
                <li role="menuitem"></li>
                <li role="menuitem"></li>
                <li role="menuitem"></li>
              </ul>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={toggleButtonData.className}
              onClick={handleToggleNav}
              aria-label={toggleNav ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={toggleNav}
              type="button"
            >
              {toggleButtonData.icon}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header