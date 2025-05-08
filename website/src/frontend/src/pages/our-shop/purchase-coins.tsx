import { Button } from "./shop-components/ui/button";

export default function CryptoHero() {
  return (
    <div className="w-[900px] max-w-[150vw] mx-auto bg-purpleFigma rounded-[64px] overflow-hidden flex flex-col md:flex-row items-center justify-between py-8 px-4 md:py-12 md:px-12 mb-8">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-8">Buy and Sell Your <br /> Favorite Coins</h1>
        <div className="flex gap-6 mb-2">
          <Button
            className="bg-magenta text-black font-extrabold rounded-xl px-8 py-4 text-xl shadow-none border-none hover:bg-[#e47be6] hover:text-black transition-colors"
            size="lg"
            onClick={() => {
              window.open("https://www.binance.com/en/crypto/buy", '_blank');
            }}
          >
            Buy ICP
          </Button>
          <Button
            className="bg-magenta text-black font-extrabold rounded-xl px-8 py-4 text-xl shadow-none border-none hover:bg-[#e47be6] hover:text-black transition-colors"
            size="lg"
            onClick={() => {
              window.open("https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=ezu5v-7qaaa-aaaam-acpbq-cai", '_blank');
            }}
          >
            Buy Friescoin
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 md:mt-0">
        <img
          src="/images/crypto-icp.png"
          alt="Crypto trading platform logo"
          className="h-40 w-40 sm:h-56 sm:w-56 object-contain"
        />
      </div>
    </div>
  );
}