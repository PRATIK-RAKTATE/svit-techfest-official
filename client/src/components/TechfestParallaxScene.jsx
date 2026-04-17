import buildings from "../assets/buildings.jpg";
import longBuildings from "../assets/longbuildings.png";
import moreBuildings from "../assets/morebuildings.png";
import ufo from "../assets/ufo.png";
import car from "../assets/car.png";

const loopingStrip = (src, alt) => (
  <>
    <img
      src={src}
      alt={alt}
      className="h-full w-1/2 min-w-[50%] flex-none object-fill select-none"
      draggable="false"
    />
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="h-full w-1/2 min-w-[50%] flex-none object-fill select-none"
      draggable="false"
    />
  </>
);

export default function TechfestParallaxScene() {
  return (
    <section className="relative w-screen min-h-screen overflow-hidden bg-[#050816] text-white">
      <style>{`
        @keyframes skyline-slow {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes skyline-fast {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes car-rock {
          0%, 100% { transform: translateX(-50%) translateY(0px) rotate(0deg); }
          25% { transform: translateX(calc(-50% + 8px)) translateY(-4px) rotate(0.6deg); }
          50% { transform: translateX(-50%) translateY(0px) rotate(0deg); }
          75% { transform: translateX(calc(-50% - 8px)) translateY(-4px) rotate(-0.6deg); }
        }

        .animate-car-rock {
          animation: car-rock 3s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes ufo-drift {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-3deg); }
          25% { transform: translate3d(12px, -10px, 0) rotate(1deg); }
          50% { transform: translate3d(24px, 6px, 0) rotate(3deg); }
          75% { transform: translate3d(8px, -6px, 0) rotate(-1deg); }
        }

        .animate-skyline-slow {
          animation: skyline-slow 34s linear infinite;
          will-change: transform;
        }

        .animate-skyline-fast {
          animation: skyline-fast 8s linear infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .animate-skyline-slow {
            animation-duration: 17s;
          }
          .animate-skyline-fast {
            animation-duration: 3s;
          }
        }

        .animate-ufo-drift {
          animation: ufo-drift 5s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      {/* image1 */}
      <div className="absolute inset-0">
        <img
          src={buildings}
          alt="Cyberpunk city background"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
          draggable="false"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030308] to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[10%] z-10 mx-auto flex w-[min(92vw,1100px)] justify-center px-6">
        <div className="rounded-[30px] px-6 py-3 text-center backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.55em] text-cyan-200/80 sm:text-sm">
            2025-26
          </p>
          <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.18em] text-cyan-100 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] sm:text-6xl lg:text-7xl">
            SVIT COMP
            <span className="block text-fuchsia-300">tECHFEST</span>
          </h1>
        </div>
      </div>

      <img
        src={ufo}
        alt="UFO"
        className="animate-ufo-drift pointer-events-none absolute left-[12%] bottom-[36%] z-25 w-16 drop-shadow-[0_0_30px_rgba(125,211,252,0.8)] sm:left-[20%] sm:w-24 lg:left-[26%] lg:w-28"
        draggable="false"
      />

      {/* image2 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[18%] z-20 h-[22vw] min-h-[110px] max-h-[250px] overflow-hidden opacity-90 translate-y-[50px] sm:translate-y-0">
        <div className="animate-skyline-slow flex h-full w-[200%] brightness-110 saturate-150">
          {loopingStrip(longBuildings, "Far city buildings")}
        </div>
      </div>

      {/* image3 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[15%] sm:bottom-[9%] z-30 h-[24vw] min-h-[120px] max-h-[280px] overflow-hidden translate-y-[100px] sm:translate-y-0">
        <div className="animate-skyline-fast flex h-full w-[200%] brightness-125 saturate-150">
          {loopingStrip(moreBuildings, "Near city buildings")}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-40 h-32 bg-[linear-gradient(180deg,transparent_0%,rgba(18,10,28,0.9)_30%,#020204_100%)]">
        <div className="absolute inset-x-0 top-7 h-px bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent" />
        <div className="absolute inset-x-0 top-12 h-3 bg-[linear-gradient(90deg,transparent_0%,rgba(56,189,248,0.12)_20%,rgba(236,72,153,0.2)_50%,rgba(56,189,248,0.12)_80%,transparent_100%)] blur-sm" />
      </div>

      <img
        src={car}
        alt="Sports car"
        className="animate-car-rock pointer-events-none absolute bottom-2 left-1/2 z-50 w-[240px] drop-shadow-[0_18px_38px_rgba(20,6,36,0.95)] sm:bottom-4 sm:left-[18%] sm:w-[320px] lg:w-[380px]"
        draggable="false"
      />
    </section>
  );
}
