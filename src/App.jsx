import './App.css'
import Button from './components/Button'
import Divider from './components/Divider'
import Header from './components/Header'
import JobsBlock from './components/JobsBlock'
import Sidebar from './components/Sidebar'
import jobData from './data/jobs.json'
import { useState, useCallback, useMemo } from 'react'


const SIMILAR_JOBS = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'designer', label: 'Graphic Designer' }
]

const DROPDOWN_OPTIONS = {
  location: ['Remote', 'Onsite', 'Hybrid'],
  jobType: ['Full-time', 'Part-time', 'Contract', 'Freelance']
}

const JOB_SECTIONS = [
  { id: 'featured', title: 'Featured Jobs' },
  { id: 'recommended', title: 'Recommended Jobs' },
  { id: 'latest', title: 'Latest Jobs' }
]

function App() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('Select Location')
  const [selectedJobType, setSelectedJobType] = useState('Job Type')

  const toggleDropdown = useCallback((dropdownId, e) => {
    e.stopPropagation()
    setOpenDropdown(prev => prev === dropdownId ? null : dropdownId)
  }, [])

  const closeDropdown = useCallback(() => {
    setOpenDropdown(null)
  }, [])

  const handleDropdownSelect = useCallback((type, value) => {
    if (type === 'location') {
      setSelectedLocation(value)
    } else if (type === 'jobType') {
      setSelectedJobType(value)
    }
    setOpenDropdown(null)
  }, [])

  const handleSearch = useCallback(() => {
    console.log('Searching:', { searchTerm, selectedLocation, selectedJobType })
  }, [searchTerm, selectedLocation, selectedJobType])

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value)
  }, [])

  const DropdownComponent = useMemo(() => ({ 
    id, 
    label, 
    options, 
    selectedValue, 
    type,
    hasLeftBorder = false 
  }) => (
    <div className='u-dropdown md:block hidden relative min-w-[116px] shrink-0'>
      <button 
        onClick={(e) => toggleDropdown(id, e)} 
        className={`text-nav-blue text-sm cursor-pointer font-normal shrink-0 flex items-center gap-2.5 w-full justify-between py-2.5 px-3.5 ${hasLeftBorder ? 'border-x border-[#E9ECEF]' : ''}`}
      >
        <span className='text-xs'>{selectedValue}</span>
        <i className="fa-solid fa-chevron-down text-xs"></i>
      </button>
      {openDropdown === id && (
        <ul className='absolute top-full left-0 w-full text-sm bg-white border border-[#E1E1E1] rounded-lg shadow-lg mt-1 z-[2]'>
          {options.map((option) => (
            <li 
              key={option}
              className='py-2 px-3 hover:bg-gray-100 cursor-pointer'
              onClick={() => handleDropdownSelect(type, option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  ), [openDropdown, toggleDropdown, handleDropdownSelect])

  return (
    <div 
      className="App bg-light-gray transition-all duration-400 ease-in-out font-inter pb-[70px]"
      onClick={closeDropdown}
    >
      <Header />

      <div className="flex lg:flex-row flex-col gap-6 u-container mt-6">
        <Sidebar toggleDropdown={toggleDropdown} openDropdown={openDropdown} />

        <div className='grow'>
          <h1 className='text-dark-text text-[22px] font-inter font-bold mt-2.5'>
            Find your Dream Job, <span className='text-primary'>Albert!</span>
          </h1>
          <p className='text-dark-gray text-sm'>
            Explore the latest job openings and apply for the best opportunities available today!
          </p>
          
          <div className="bg-white p-5 flex items-center rounded-lg mt-5">
            <input 
              type="search" 
              className='outline-0 border-0 w-full text-sm text-nav-blue' 
              placeholder="Job Title, Company, or Keywords" 
              aria-label="Search jobs and companies"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            
            <DropdownComponent
              id="dropdown1"
              label="Select Location"
              options={DROPDOWN_OPTIONS.location}
              selectedValue={selectedLocation}
              type="location"
              hasLeftBorder={true}
            />
            
            <DropdownComponent
              id="dropdown2"
              label="Job Type"
              options={DROPDOWN_OPTIONS.jobType}
              selectedValue={selectedJobType}
              type="jobType"
            />
            
            <Button 
              text='Search' 
              icon="./white-search.svg" 
              buttonStyles='text-sm font-normal gap-2 py-2.5 px-8 ml-3.5 fill-white'
              onClick={handleSearch}
            />
          </div>

          <div className="flex items-center mt-5">
            <p className='text-nav-blue text-sm mr-3.5 h-full'>Similar:</p>
            <div className="flex flex-wrap gap-3.5">
              {SIMILAR_JOBS.map((job) => (
                <button 
                  key={job.id}
                  className='text-nav-blue text-xs hover:bg-gray-200 cursor-pointer border border-nav-blue py-2 px-4 rounded-[5px]'
                  onClick={() => setSearchTerm(job.label)}
                >
                  {job.label}
                </button>
              ))}
            </div>
          </div>

          <Divider />
          
          {JOB_SECTIONS.map((section, index) => (
            <div key={section.id}>
              <JobsBlock title={section.title} jobData={jobData} />
              {index < JOB_SECTIONS.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>

      <a 
        className='fixed bottom-8 right-4 text-xl text-nav-blue' 
        href="https://www.linkedin.com/in/wahaj-ahmed-iqbal-4ba3b4170/" 
        target='_blank'
        rel="noopener noreferrer"
      >
        <i className="fa-regular fa-heart"></i>
      </a>
    </div>
  )
}

export default App