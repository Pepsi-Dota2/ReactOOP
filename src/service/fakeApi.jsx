import SWR from "swr";
function TestApi() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = SWR(
    "https://api.thecatapi.com/v1/images/search",
    fetcher
  );
  if (error) return <div>Error</div>;
  if (isLoading) return <div>isLoading</div>;
  return (
    <div className="bg-white">
      <div className="mx-auto  px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((info) => (
            <div key={info.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={info.url}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TestApi;
