const App = () => {
  return (
    <>
      <nav class="bg-indigo-700 border-b border-indigo-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <a class="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >My Portfolio</span
              >
            </a>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <a
                  href="/index.html"
                  class="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Work</a
                >
                <a
                  href="/jobs.html"
                  class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Resume</a
                >
                <a
                  href="/add-job.html"
                  class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >About</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/* <!-- Hero --> */}
    <section class="bg-indigo-700 py-20 mb-4">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div class="text-center">
          <h1
            class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            Hi, I'm Lina Kang :)
          </h1>
          <p class="my-4 text-xl text-white">
            I'm a UI/UX and Product Designer!
          </p>
        </div>
      </div>
    </section>

    {/* <!-- Developers and Employers --> */}
    <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold">Work Experience</h2>
            <p class="mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <a
              href="/jobs.html"
              class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              View More
            </a>
          </div>
          <div class="bg-indigo-100 p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold">My Resume</h2>
            <p class="mt-2 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <a
              href="/add-job.html"
              class="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Browse Jobs --> */}
    <section class="bg-blue-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
          My Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Job Listing 1 --> */}
          <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">UI/UX</div>
                <h3 class="text-xl font-bold">Project 1</h3>
              </div>

              <div class="mb-5">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque hic animi sunt numquam, corrupti quisquam necessitatibus nulla aut quidem laborum nisi eum harum! Pariatur vero optio culpa sit vel quisquam.
              </div>

              <h3 class="text-indigo-500 mb-2">Skill 1, 2, 3</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <i class="fa-solid fa-location-dot text-lg"></i>
                  Timeline
                </div>
                <a
                  href="job.html"
                  class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 2 --> */}
          <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">UX Research</div>
                <h3 class="text-xl font-bold">Project 2</h3>
              </div>

              <div class="mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque hic animi sunt numquam, corrupti quisquam necessitatibus nulla aut quidem laborum nisi eum harum! Pariatur vero optio culpa sit vel quisquam.
              </div>

              <h3 class="text-indigo-500 mb-2">Skill 1, 2, 3</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <i class="fa-solid fa-location-dot text-lg"></i>
                  Timeline
                </div>
                <a
                  href="job.html"
                  class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 3 --> */}
          <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">UI/UX</div>
                <h3 class="text-xl font-bold">Project 3</h3>
              </div>

              <div class="mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque hic animi sunt numquam, corrupti quisquam necessitatibus nulla aut quidem laborum nisi eum harum! Pariatur vero optio culpa sit vel quisquam.
              </div>

              <h3 class="text-indigo-500 mb-2">Skill 1, 2, 3</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <i class="fa-solid fa-location-dot text-lg"></i>
                  Timeline
                </div>
                <a
                  href="job.html"
                  class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >Get In Touch!</a
      >
    </section>
    </>
  );
};

export default App;