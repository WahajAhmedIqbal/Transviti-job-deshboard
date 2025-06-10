import Cards from './Cards'

const JobsBlock = ({ title, jobData }) => {
    return (
        <>
            <h3 className='text-lg mr-4'> {title} <span className='text-sm text-[#0154AA] underline underline-offset-4 cursor-pointer'>See {title}</span> </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                {jobData.jobCards.map((job) => (
                    <Cards
                        key={job.id}
                        promoted={job.promoted}
                        jobTitle={job.jobTitle}
                        company={job.company}
                        jobType={job.jobType}
                        postedDay={job.postedDay}
                    />
                ))}
            </div>
        </>

    )
}

export default JobsBlock