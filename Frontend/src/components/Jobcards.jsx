

const Jobcards = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto z-10 top-0 left-0 right-0">
    <div className="px-7 mt-28 my-10">
        <h1 className="font-bold text-4xl">Latest <span className="text-violet-500">Jobs</span> Here..!</h1>
        <p className="mt-5 text-2xl">You can <span className="text-violet-500 font-semibold">latest job updates</span> from these websites and apply to jobs which are femiliar to skills and preferences.</p>
    </div>
      <div className="grid grid-cols-4 mt-7 gap-6 px-7">
      <div className="card bg-red-500 shadow-xl hover:scale-105 duration-200">
        <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">Hiringhustle</h1>
        </div>
        <div className="card-body bg-slate-100">
          <h2 className="card-title text-violet-500 font-bold mb-6">Hiringhustle</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://hiringhustle.com/')}>See Latest Jobs</button>
          </div>
        </div>
      </div>

      <div className="card bg-green-600 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">GeeksforGeeks</h1>
        </div>
        <div className="card-body bg-slate-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">GeeksforGeeks</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://www.geeksforgeeks.org/jobs')}>See Latest Jobs</button>
          </div>
        </div>
      </div>
    
      <div className="card bg-blue-300 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">Naukri</h1>
        </div>
        <div className="card-body bg-base-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">Naukri</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://www.naukri.com/campus/opportunities?src=gnbOpportunities')}>See Latest Jobs</button>
          </div>
        </div>
      </div>

      <div className="card bg-blue-500 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">Indeed</h1>
        </div>
        <div className="card-body bg-slate-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">Indeed</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://in.indeed.com/m/?from=gnav-homepage')}>See Latest Jobs</button>
          </div>
        </div>
      </div>

      <div className="card bg-purple-600 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">foundit</h1>
        </div>
        <div className="card-body bg-slate-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">foundit</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://www.foundit.in/')}>See Latest Jobs</button>
          </div>
        </div>
      </div>

      <div className="card bg-orange-400 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">Shine</h1>
        </div>
        <div className="card-body bg-base-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">Shine</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://www.shine.com/')}>See Latest Jobs</button>
          </div>
        </div>
      </div>
      
      <div className="card bg-sky-400 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className=" font-bold text-4xl">Job Hai</h1>
        </div>
        <div className="card-body bg-slate-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">Job Hai</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://www.jobhai.com/')}>See Latest Jobs</button>
          </div>
        </div>
      </div>

      <div className="card bg-yellow-300 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">Placement Drive</h1>
        </div>
        <div className="card-body bg-slate-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">PlacementDrive</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://placementdriveinsta.in/')}>See Latest Jobs</button>
          </div>
        </div>
      </div>

      <div className="card bg-sky-500 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">Merademy</h1>
        </div>
        <div className="card-body bg-slate-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">Merademy</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://merademyjobs.com/')}>See Latest Jobs</button>
          </div>
        </div>
      </div>

      <div className="card bg-lime-200 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">Freshersworld.com</h1>
        </div>
        <div className="card-body bg-base-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">Freshersworld.com</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://www.freshersworld.com/')}>See Latest Jobs</button>
          </div>
        </div>
      </div>

      <div className="card bg-blue-700 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">JobRinger</h1>
        </div>
        <div className="card-body bg-base-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">JobRinger</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://jobringer.com/')}>See Latest Jobs</button>
          </div>
        </div>
      </div>

      <div className="card bg-pink-500 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">Gofresher</h1>
        </div>
        <div className="card-body bg-base-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">Gofresher</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://gofresher.in/')}>See Latest Jobs</button>
          </div>
        </div>
      </div>

      <div className="card bg-teal-600 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">Glassdoor</h1>
        </div>
        <div className="card-body bg-base-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">Glassdoor</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://www.glassdoor.co.in/Job/index.htm')}>See Latest Jobs</button>
          </div>
        </div>
      </div>
   
      <div className="card bg-rose-400 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">HerKey</h1>
        </div>
        <div className="card-body bg-slate-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">HerKey</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://www.herkey.com/jobs')}>See Latest Jobs</button>
          </div>
        </div>
      </div>   

      <div className="card bg-sky-300 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">TimesJobs</h1>
        </div>
        <div className="card-body bg-slate-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">TimesJobs</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://www.timesjobs.com/')}>See Latest Jobs</button>
          </div>
        </div>
      </div>

      <div className="card bg-emerald-400 shadow-xl hover:scale-105 duration-200">
      <div className="mt-16 mb-16 text-center">
        <h1 className="font-bold text-4xl">PlacementIndia</h1>
        </div>
        <div className="card-body bg-slate-100">
          <h2 className="card-title text-violet-500 font-bold mt-15 mb-6">PlacementIndia</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-violet-200 text-2xl font-bold text-violet-500 hover:bg-violet-300" onClick={() => handleRedirect('https://www.placementindia.com/')}>See Latest Jobs</button>
          </div>
        </div>
      </div>

      </div>
    </div>
    </>
  );
};

export default Jobcards;
