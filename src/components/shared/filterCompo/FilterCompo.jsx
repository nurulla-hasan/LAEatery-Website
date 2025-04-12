
const FilterCompo = ({title, data}) => {

    return (
        <>
            <div className="bg-[#242424] overflow-auto scrl-hide rounded-xl p-5">
                <div className="">
                    <button
                        className="flex items-center justify-between w-full text-white text-md font-medium mb-">
                        {title}
                    </button>


                    <div className="space-y-4 mt-5">
                        {data.map((item) => (
                            <div key={item.id} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={`vibe-${item.id}`}
                                    defaultChecked={item.checked}
                                    className="h-4 w-4 rounded border-gray-600 text-white focus:ring-0 cursor-pointer"
                                />
                                <label htmlFor={`vibe-${item.id}`} className="ml-2 text-sm text-gray-300">
                                    {item.label}
                                </label>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default FilterCompo;