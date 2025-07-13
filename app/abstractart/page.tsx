// // app/abstract-art/page.tsx

// "use client";

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Head from "next/head";

// export default function AbstractArtPage() {
//   const audioRef = useRef<HTMLAudioElement>(null);

//   // Auto-play ambient sound on first click
//   useEffect(() => {
//     const handlePlay = () => {
//       if (audioRef.current) {
//         audioRef.current.volume = 0.3;
//         audioRef.current.play().catch(() => {});
//       }
//     };
//     window.addEventListener("click", handlePlay, { once: true });
//     return () => window.removeEventListener("click", handlePlay);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Abstract Art | The Living Gallery</title>
//         <meta
//           name="description"
//           content="Explore expressive, vintage-inspired abstract art at The Living Gallery."
//         />
//       </Head>

//       {/* Background ambient sound */}
//       <audio ref={audioRef} loop>
//         <source src="/audio/spiritual-wind.mp3" type="audio/mp3" />
//       </audio>

//       <main className="min-h-screen bg-[#f4f2ee] px-6 py-12 text-[#2f2f2f] font-serif relative overflow-hidden">
//         {/* Vintage color filter overlay */}
//         <div className="absolute inset-0 bg-[#e4dcd0] opacity-10 mix-blend-multiply pointer-events-none" />

//         <section className="max-w-6xl mx-auto text-center relative z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             className="text-5xl md:text-6xl font-bold tracking-wide mb-6"
//           >
//             Abstract Art
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.1, delay: 0.3 }}
//             className="text-lg md:text-xl text-gray-700 mb-10"
//           >
//             Where emotion, soul, and spirit meet color and form.
//           </motion.p>

//           <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
//             {abstractArtworks.map((art, index) => (
//               <motion.div
//                 key={art.title}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300"
//               >
//                 <img
//                   src={art.image}
//                   alt={art.title}
//                   className="w-full h-64 object-cover mix-blend-soft-light"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-2xl font-semibold">{art.title}</h2>
//                   <p className="text-sm text-gray-600 mt-1">
//                     {art.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

// const abstractArtworks = [
//   {
//     title: "Whispers of the Soul",
//     image: "/abstract/whispers.jpg",
//     description: "Muted textures that express spiritual introspection.",
//   },
//   {
//     title: "Mystic Horizon",
//     image: "/abstract/horizon.jpg",
//     description: "Dreamy landscapes evoking divine energy.",
//   },
//   {
//     title: "The Flow Within",
//     image: "/abstract/flow.jpg",
//     description: "A deep dive into emotion and thought.",
//   },
//   {
//     title: "Silent Bloom",
//     image: "/abstract/bloom.jpg",
//     description: "A flower blooming beyond time.",
//   },
//   {
//     title: "Ether Realms",
//     image: "/abstract/ether.jpg",
//     description: "Swirling strokes that echo otherworldly realms.",
//   },
//   {
//     title: "Meditative Chaos",
//     image: "/abstract/chaos.jpg",
//     description: "Tension and peace living in one canvas.",
//   },
// ];
