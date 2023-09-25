const Banner = () => {
  return (


    <div className="hero h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/GMCwXHS/Overlay-bg.jpg)' }}>
      <div className="hero-overlay bg-[#FFFFFFF2] bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl">
          <h1 className="mb-10 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>

          <form>
            <label for="default-search" className="mb-2 text-md font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

              </div>
              <input type="search" id="default-search" className="w-[500px] block mx-auto p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here...." required />
              <button type="submit" className="text-white absolute right-[135px] top-[1px] bg-[#FF444A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>

        </div>
      </div >
    </div >


  );
};

export default Banner;