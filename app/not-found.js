export default function NotFound() {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      <section className="max-w-screen-xl mx-auto p-4 lg:p-6 dark:bg-black">
        <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-gray-300">
              Something is missing!
            </p>
            <p className="mb-4 text-lg font-light text-gray-400">
              Apologies. The page you're searching for seems to have gone off
              the grid. No worries, let's navigate back to the Home page
              together. Click the button below for a smooth return journey!
            </p>
            <a
              href="/"
              className="inline-flex text-black bg-white focus:outline-none hover:bg-gray-300 border-2 hover:text-white hover:border-white font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
