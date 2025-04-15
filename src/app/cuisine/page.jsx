"use client"
import HomeContainer from "@/components/home-container/HomeContainer"
import FilterCompo from "@/components/shared/filterCompo/FilterCompo";
import RestaurantCard from "@/components/shared/restaurant-Card/RestaurantCard"
import { restaurantData } from '@/lib/data';
import { cuisines } from "@/lib/data"

const CuisinePage = () => {

    return (
        <div className="">
            {/* border-t-2 border-[#ffffff79] */}
            <HomeContainer>
                <div className="flex flex-col md:flex-row my-10 gap-5">
                    {/* Left sidebar - Filters */}
                    <div className=" w-full md:w-[30%] overflow-y-auto">
                        <h2 className="text-[#333333] text-sm font-medium mb-4">Filter By</h2>

                        {/* Fine Filter Compo Here */}
                        <FilterCompo title="Cuisine" data={cuisines}/>
                    </div>

                    {/* Right content - Restaurant listings */}
                    <div className="w-full overflow-y-auto">
                        <div className="text-[#333333] text-sm mb-4">Showing 58 results</div>

                        {/* Restaurant grid */}
                        <div className="h-[100vh] overflow-auto scrl-hide rounded-xl">
                            {/* Card Component Hare */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                                <RestaurantCard restaurantData={restaurantData} />
                            </div>
                        </div>
                    </div>
                </div>
            </HomeContainer>
        </div>
    )
}

export default CuisinePage