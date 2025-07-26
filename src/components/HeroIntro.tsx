// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function HeroIntro({
//   gifUrl = "https://i.pinimg.com/originals/bd/91/53/bd915316b4bec4f711be1a0ca3a64302.gif",
//   fallbackImage = "https://i.pinimg.com/736x/3a/92/24/3a922471fb75444b6d8bd91837488f63.jpg",
//   duration = 3000,
//   children,
// }: {
//   gifUrl?: string;
//   fallbackImage?: string;
//   duration?: number;
//   children: React.ReactNode;
// }) {
//   const [showContent, setShowContent] = useState(false);
//   const [hasPlayedIntro, setHasPlayedIntro] = useState(true); // default true for safety
//   const [gifEnded, setGifEnded] = useState(false);

//   useEffect(() => {
//     const alreadyPlayed = localStorage.getItem("introPlayed");
//     if (!alreadyPlayed) {
//       setHasPlayedIntro(false); // Show the GIF
//       const timer = setTimeout(() => {
//         handleEnd();
//       }, duration);
//       return () => clearTimeout(timer);
//     } else {
//       setShowContent(true); // Skip to content
//     }
//   }, [duration]);

//   const handleEnd = () => {
//     setGifEnded(true);
//     localStorage.setItem("introPlayed", "true");
//     setTimeout(() => setShowContent(true), 400); // fade-in delay
//   };

//   if (showContent) return <>{children}</>;

//   return (
//     <div
//       onClick={handleEnd}
//       className="flex items-center justify-center min-h-screen bg-black transition-all duration-500 ease-in-out"
//     >
//       <Image
//         src={gifEnded ? fallbackImage : gifUrl}
//         alt="Intro"
//         width={400}
//         height={400}
//         className="rounded-xl object-contain transition-opacity duration-500 ease-in-out"
//         unoptimized
//       />
//     </div>
//   );
// }
