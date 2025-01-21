import Image from "next/image"
import { Button } from "../../components/shop-components/ui/button"
// import { Button } from "@/components/ui/button"

export default function CryptoHero() {
  return (
    <div className="mx-4 relative h-[500px] sm:h-[400px] mb-4 rounded-3xl w-[90%] sm:w-[800px] sm:mx-auto bg-gradient-to-r from-[#6a1d1b] to-[#340a0a] px-6 py-8 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl flex items-center justify-center h-full">
        <div className="grid items-center gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="sm:ml-10 justify-center space-y-4 sm:space-y-6 text-center md:text-left px-4 sm:px-0">
            <h1 className="text-5xl sm:text-4xl sm:text-start text-center lg:text-5xl font-bold mb-6 sm:mb-7 tracking-[-0.08em] text-white">
              Buy and Sell Your Favorite Coins
            </h1>
            <div className="flex justify-center sm:justify-end md:justify-start">
              <Button 
                className="bg-gradient-to-r from-[#F0BC39] to-[#DA9443] px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold text-black hover:bg-[#d4a84e]" 
                size="lg"
                onClick={() => {
                  const message = encodeURIComponent(
                    `Hello, I would like to inquire about buying and selling coins on ICP Hub Kenya`
                  );
                  window.open(`https://wa.me/254707197333?text=${message}`, '_blank');
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center sm:justify-end mt-6 sm:mt-0">
            <div className="sm:pr-10 relative h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64">
              <Image
                src="images/crypto-icp.png"
                alt="Crypto trading platform logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

