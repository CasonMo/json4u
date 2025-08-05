// import FAQ from "@/containers/landing/FAQ";
// import Features from "@/containers/landing/Features";
// import HeroTitle from "@/containers/landing/HeroTitle";
// import { Pricing } from "@/containers/pricing";
//
// export default function Index() {
//   return (
//     <div className="relative flex flex-col items-center w-full h-full md:mx-32 mx-4 mb-48 space-y-24 text-center">
//       <HeroTitle />
//       <Features />
//       <Pricing />
//       <FAQ />
//     </div>
//   );
// }

import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainPanel from "@/containers/editor/MainPanel";
import SideNav from "@/containers/editor/sidenav";
import { PricingOverlay } from "@/containers/pricing";

export default async function Page() {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex h-full w-full">
        <SideNav />
        <Separator orientation="vertical" />
        <MainPanel />
        <PricingOverlay />
      </div>
    </TooltipProvider>
  );
}
