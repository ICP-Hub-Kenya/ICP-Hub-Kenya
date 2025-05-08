import { Button } from "./shop-components/ui/button";
// import { Button } from "@/components/ui/button"

export default function CryptoHero() {
  return (
    <div className="mx-4 relative h-[500px] sm:h-[400px] mb-4 rounded-3xl w-[90%] sm:w-[800px] sm:mx-auto bg-gradient-to-r from-gradientFrom to-gradientTo px-6 py-8 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl flex items-center justify-center h-full">
        <div className="grid items-center gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="sm:ml-10 justify-center space-y-4 sm:space-y-6 text-center md:text-left px-4 sm:px-0">
            <h1 className="text-5xl sm:text-4xl sm:text-start text-center lg:text-5xl font-bold mb-6 sm:mb-7 tracking-[-0.08em] text-white">
              Buy and Sell Your Favorite Coins
            </h1>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-end md:justify-start gap-4">
              <Button 
                className="bg-pinkBadge text-black px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold hover:bg-[#e47be6]" 
                size="lg"
                onClick={() => {
                  window.open("https://www.binance.com/en/crypto/buy", '_blank');
                }}
              >
                Buy ICP
              </Button>
              <Button 
                className="bg-pinkBadge text-black px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold hover:bg-[#e47be6]" 
                size="lg"
                onClick={() => {
                  window.open("https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=ezu5v-7qaaa-aaaam-acpbq-cai", '_blank');
                }}
              >
                Buy Friescoin
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center sm:justify-end mt-6 sm:mt-0">
            <div className="sm:pr-10 relative h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64">
              <img
                src="/images/crypto-icp.png"
                alt="Crypto trading platform logo"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}