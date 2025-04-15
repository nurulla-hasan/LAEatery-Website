import Link from "next/link"
import HomeContainer from "../HomeContainer"

const VibeSection = () => {
  return (
    <section className="py-16">
      <HomeContainer>
        <div className="flex flex-col md:flex-row">
          {/* Left Image Section */}
          <div className=" overflow-hidden">
            <img src="/image/vibe.png" alt="Rooftop restaurant with city view" className="w-full h-full object-cover" />
          </div>

          {/* Right Content Section with Background Image */}
          <div className="relative  overflow-hidden flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img src="/image/vibe (1).png" alt="Restaurant atmosphere" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-white/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-5 md:p-10">
              <h2 className="text-3xl md:text-4xl font-poltawski font-extrabold text-[#0A0A0A] mb-4">
                Feel the Flavor, Live the Vibe
              </h2>
              <p className="text-[#333333] mb-8">
                Curated experiences for every moment — chill brunches, loud nights, and everything in between.
              </p>
              <Link
                href="/vibe"
                className="inline-block px-7 py-3 border border-[#B3B3B3] text-xs rounded-sm hover:text-[#0A0A0A] hover:bg-inherit bg-black text-white transition-colors duration-300"
              >
                Explore by Vibe
              </Link>
            </div>
          </div>
        </div>
      </HomeContainer>
    </section>
  )
}

export default VibeSection
