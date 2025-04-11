"use client"
import HomeContainer from "@/components/home-container/HomeContainer"
import FindCard from "@/components/find-component/card/FindCard"
import FindFilter from "@/components/find-component/filter/FindFilter"

const FindPage = () => {

  return (
    <div className="">
      {/* border-t-2 border-[#ffffff79] */}
      <HomeContainer>
        <div className="flex flex-col md:flex-row my-10 gap-5">
          {/* Left sidebar - Filters */}
          <div className=" w-full md:w-[30%] overflow-y-auto">
            <h2 className="text-white text-sm font-medium mb-4">Filter By</h2>

            {/* Fine Filter Compo Here */}
            <FindFilter />
          </div>

          {/* Right content - Restaurant listings */}
          <div className="w-full overflow-y-auto">
            <div className="text-white text-sm mb-4">Showing 58 results</div>

            {/* Restaurant grid */}
            <div className="h-[108vh] overflow-auto scrl-hide rounded-xl">
              {/* Card Component Hare */}
              <FindCard />
            </div>
          </div>
        </div>
      </HomeContainer>
    </div>
  )
}

export default FindPage