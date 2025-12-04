"use client";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import styles from "./slider.module.css";

export default function Home() {
  const speakers = [

    {
      name: "DR. PHAM THI THU THUY",
      title:
        "Dean - Faculty of Information Technology, Nha Trang University, Vietnam",
      university: "",
      image: "https://canbo.ntu.edu.vn/Staff/PersonelImage/305", // replace with actual image path
    },
    {
      name: "DR. HASIAH MOHAMED",
      title:
        "Senior Lecturer, Faculty of Computer and Mathematical Sciences, UiTM Cawangan Terengganu, Malaysia",
      university: "",
      image:
        "https://terengganu.uitm.edu.my/images/FAKULTI/KPPIM/FOTO/HASIAH_MOHAMED__OMAR_Ts_DR.png", // replace with actual image path
    },
    {
      name: "DR. GOH KHANG WEN",
      title:
        "Pro Vice-Chancellor, Global Engagement, INTI International University, Malaysia",
      university: "",
      image:
        "https://i1.rgstatic.net/ii/profile.image/946594400714753-1602597100353_Q512/Khang-Wen-Goh.jpg",
    },
    {
      name: "DR. NORLINA MOHD SABRI",
      title:
        "Senior Lecturer, Faculty of Computer & Mathematical Sciences, UiTM Cawangan Terengganu, Malaysia",
      university: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztb0XxmAdZDRK8IG3MoLs8XzzasNCdWxupw&s",
    },

   
    {
      name: "DR. TRI BASUKI KURNIAWAN",
      title: "Senior Lecturer, Universiti Kebangsaan Malaysia (UKM)",
      university: "Bangi, Malaysia",
      image:
        "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=pzjCu2kAAAAJ&citpid=8",
    },

    {
      name: "PROF. DR. FADI AL-TURJMAN",
      title: "Dean-AI and Informatics",
      university: "Near East University, Turkey",
      image:
        "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=5G0uavwAAAAJ&citpid=2",
    },
    {
      name: "DR. DESHINTA ARROVA DEWI",
      title: "Professor",
      university:
        "Faculty of Data Sciences and Information Technology, INTI International University, Malaysia",
      image:
        "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=16XPxHUAAAAJ&citpid=22",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {" "}
      {/* LEFT SIDE - Keynote Speakers */}
      <div className="hidden lg:flex flex-col fixed left-1 lg:left-2 xl:left-3 2xl:left-4 top-20 lg:top-24 xl:top-28 z-50 w-[300px] bottom-4">
        <div className="flex flex-col items-center p-3 w-full h-full overflow-hidden relative bg-white rounded-xl shadow-lg">
          <h2 className="text-base lg:text-lg font-black text-secondary mb-5 text-center uppercase">
            Keynote Speakers
          </h2>
          <div className="w-full flex-1 overflow-hidden relative">
            <div className="flex flex-col gap-6 animate-vertical-marquee">
              {speakers.map((speaker, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-500">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 text-xs font-bold uppercase text-gray-900 text-center">
                    {speaker.name}
                  </h3>
                  <p className="text-[10px] mt-1 text-gray-700 text-center">
                    {speaker.title}
                  </p>
                  {speaker.name === "DR. DESHINTA ARROVA DEWI" ? (
                    <div className="text-[10px] text-gray-700 text-center leading-tight">
                      <div>
                        Faculty of Data Sciences and Information Technology
                      </div>
                      <div>INTI International University</div>
                      <div>Malaysia</div>
                    </div>
                  ) : (
                    <p className="text-[10px] text-gray-700 text-center leading-tight">
                      {speaker.university}
                    </p>
                  )}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {speakers.map((speaker, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex flex-col items-center"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-500">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 text-xs font-bold uppercase text-gray-900 text-center">
                    {speaker.name}
                  </h3>
                  <p className="text-[10px] mt-1 text-gray-700 text-center">
                    {speaker.title}
                  </p>
                  {speaker.name === "DR. DESHINTA ARROVA DEWI" ? (
                    <div className="text-[10px] text-gray-700 text-center leading-tight">
                      <div>
                        Faculty of Data Sciences and Information Technology
                      </div>
                      <div>INTI International University</div>
                      <div>Malaysia</div>
                    </div>
                  ) : (
                    <p className="text-[10px] text-gray-700 text-center leading-tight">
                      {speaker.university}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Floating Particles Effect - Smaller */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="animate-float-slow absolute top-4 left-2 w-1 h-1 bg-green-400 rounded-full opacity-40"></div>
            <div className="animate-float-medium absolute top-12 left-4 w-1.5 h-1.5 bg-green-300 rounded-full opacity-30"></div>
            <div className="animate-float-fast absolute top-20 left-1 w-1 h-1 bg-green-500 rounded-full opacity-35"></div>
          </div>
        </div>
      </div>
      {/* MAIN CONTENT - Center */}
      <div className="w-full lg:pl-[320px] lg:pr-[380px] -pt-72 pb-8">
        <div className="flex flex-col justify-center">
          {/* Title Section */}
          <div className=" px-2  sm:px-3 md:py-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10 3xl:px-12 4xl:px-14 5xl:px-16">
            <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl text-blue-300 font-bold pb-1  leading-tight">
              ICERCS-2025
            </h1>
            <h1 className="text-center text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[22px] font-medium leading-normal text-white">
              3<sup className="text-[6px]">rd</sup> INTERNATIONAL CONFERENCE ON
              EMERGING RESEARCH IN COMPUTATIONAL SCIENCE - 2025
            </h1>
            {/* <div className="flex items-center justify-center py-1">
              <span className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-base 3xl:text-base text-yellow-400 font-bold leading-tight line-through">
                11<sup className="text-[6px]">th</sup>, 12
                <sup className="text-[6px]">th</sup>, 13
                <sup className="text-[6px]">th</sup> December 2025
              </span>
            </div> */}

            {/* Image Slider */}
            <div className="mt-2 ml-5 w-full ">
              <div className="mx-2 sm:-mx-3 md:-mx-4 ml-36 lg:-mx-6 xl:-mx-8 2xl:-mx-10 3xl:-mx-12 4xl:-mx-14 5xl:-mx-16">
                <div className="relative overflow-hidden rounded-2xl w-full shadow-2xl h-60 sm:h-72 md:h-80 lg:h-[25rem] xl:h-[30rem] 2xl:h-[32rem] max-h-[67vh] border-4 border-gray-300">
                  {/* Dynamic slides from 2023 and 2024 folders */}
                  {[
                    // 2023 images (1.jpg to 16.jpg)
                    ...Array.from({ length: 16 }, (_, i) => ({
                      src: `/2023/${i + 2}.jpg`,
                      alt: `2023 Image ${i + 2}`,
                    })),
                    // 2024 images (1.jpeg to 55.jpeg)
                    ...Array.from({ length: 55 }, (_, i) => ({
                      src: `/2024/${i + 2}.jpeg`,
                      alt: `2024 Image ${i + 2}`,
                    })),
                  ].map((img, index) => (
                    <div
                      key={img.src}
                      className={styles.slide}
                      style={{
                        animationDelay: `${index * 5}s`,
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={1920}
                        height={1080}
                        unoptimized
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  ))}

                  {/* overlay marquee */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="overflow-hidden bg-black/40 border-t border-white/30">
                      <div className="whitespace-nowrap animate-marquee text-sm font-semibold text-white py-1 px-4 opacity-80">
                        Final Paper Submission — Deadline: 9<sup>th</sup>{" "}
                        December 2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Organised by Section */}
            <p className="text-center text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-base 3xl:text-lg pt-1 sm:pt-1 md:pt-1 text-white">
              Organised by
            </p>
            <div className="  mx-auto flex flex-row items-center justify-center  py-1">
              <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm font-bold text-yellow-500 leading-tight whitespace-nowrap text-center">
                Department of Computer Science and Engineering,Artificial
                Intelligence and Data Science,Computer Science and Engineering
                (Cyber Security)
              </span>
            </div>

            {/* Karpagam Academy Information */}
            <div className="flex flex-col items-center justify-center py-1">
              <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm font-semibold text-white text-center whitespace-nowrap">
                KARPAGAM ACADEMY OF HIGHER EDUCATION (Deemed to be University),
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm font-semibold text-white text-center whitespace-nowrap">
                (Accredited by NAAC with A+ Grade in the second cycle), Pollachi
                Main Road, Eachanari, Coimbatore - 641021
              </span>
            </div>

            <div className="fixed -left-full -bottom-full w-0 h-0 overflow-hidden invisible">
              <div className="bg-yellow-900/10 rounded px-3 py-1 border border-yellow-500/30 shadow text-[10px] sm:text-xs font-thin text-yellow-300 text-center">
                Acknowledgement: We gratefully acknowledge the support of{" "}
                <span className="font-semibold text-yellow-400">Microsoft</span>{" "}
                for providing the{" "}
                <span className="font-semibold text-yellow-400">
                  Conference Management Toolkit (CMT)
                </span>{" "}
                service to manage the peer-reviewing process of this conference.
                This service was provided at no cost, including Azure cloud
                services, software development, and technical support, enabling
                a smooth and efficient review process for ICERCS-2025.
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT LOGOS - Single box with vertical marquee */}
        <div className="hidden z-0 lg:flex flex-col fixed right-2 lg:right-4 xl:right-6 2xl:right-8 top-20 lg:top-24 xl:top-28 z-50 w-[300px] bottom-4">
          <div className="flex flex-col items-center p-4 w-full h-full overflow-hidden relative bg-white rounded-xl shadow-lg">
            <h3 className="text-base lg:text-lg xl:text-xl font-bold text-yellow-500 mb-4 text-center">
              Host & Sponsors
            </h3>
            <div className="w-full flex-1 overflow-hidden relative">
              <div className="flex flex-col gap-3 animate-vertical-marquee">
                <div>
                  <div className="text-xs lg:text-sm font-semibold text-green-700 text-center">
                    Co-Host
                  </div>
                  <div className="flex justify-center w-full">
                    <Image
                      src="/images/iic.png"
                      alt="IIC"
                      width={240}
                      height={160}
                      className="rounded transition-all duration-300 hover:scale-105"
                      style={{
                        width: "240px",
                        height: "160px",
                        objectFit: "contain",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                  <div className="flex justify-center w-full">
                    <Image
                      src="/images/kiic.png"
                      alt="KIIC"
                      width={240}
                      height={160}
                      className="rounded transition-all duration-300 hover:scale-105"
                      style={{
                        width: "240px",
                        height: "160px",
                        objectFit: "contain",
                        maxWidth: "100%",
                      }}
                    />
                  </div>

                  {/* Group: Co-Sponsors */}
                  <div className="mt-2 text-xs lg:text-sm font-semibold text-green-700 text-center">
                    Co-Sponsors
                  </div>
                  <div className="flex justify-center w-full">
                    <Image
                      src="https://newinti.edu.my/wp-content/uploads/2020/01/INTI-YourFutureBuiltToday-LOGO_2020.png"
                      alt="INTI"
                      width={220}
                      height={150}
                      unoptimized
                      className="rounded transition-all duration-300 hover:scale-105"
                      style={{
                        width: "220px",
                        height: "150px",
                        objectFit: "contain",
                        maxWidth: "100%",
                      }}
                    />
                  </div>

                  <div className="flex justify-center w-full">
                    <Image
                      src="https://logos-world.net/wp-content/uploads/2023/05/UiTM-Logo.png"
                      alt="UiTM"
                      width={220}
                      height={150}
                      unoptimized
                      className="rounded transition-all duration-300 hover:scale-105"
                      style={{
                        width: "220px",
                        height: "150px",
                        objectFit: "contain",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="text-xs lg:text-sm font-semibold text-green-700 text-center">
                    Co-Host
                  </div>
                  <div className="flex justify-center w-full">
                    <Image
                      src="/images/iic.png"
                      alt="IIC"
                      width={240}
                      height={160}
                      className="rounded transition-all duration-300 hover:scale-105"
                      style={{
                        width: "240px",
                        height: "160px",
                        objectFit: "contain",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                  <div className="flex justify-center w-full">
                    <Image
                      src="/images/kiic.png"
                      alt="KIIC"
                      width={240}
                      height={160}
                      className="rounded transition-all duration-300 hover:scale-105"
                      style={{
                        width: "240px",
                        height: "160px",
                        objectFit: "contain",
                        maxWidth: "100%",
                      }}
                    />
                  </div>

                  {/* Group: Co-Sponsors */}
                  <div className="mt-2 text-xs lg:text-sm font-semibold text-green-700 text-center">
                    Co-Sponsors
                  </div>
                  <div className="flex justify-center w-full">
                    <Image
                      src="https://newinti.edu.my/wp-content/uploads/2020/01/INTI-YourFutureBuiltToday-LOGO_2020.png"
                      alt="INTI"
                      width={220}
                      height={150}
                      unoptimized
                      className="rounded transition-all duration-300 hover:scale-105"
                      style={{
                        width: "220px",
                        height: "150px",
                        objectFit: "contain",
                        maxWidth: "100%",
                      }}
                    />
                  </div>

                  <div className="flex justify-center w-full">
                    <Image
                      src="https://logos-world.net/wp-content/uploads/2023/05/UiTM-Logo.png"
                      alt="UiTM"
                      width={220}
                      height={150}
                      unoptimized
                      className="rounded transition-all duration-300 hover:scale-105"
                      style={{
                        width: "220px",
                        height: "150px",
                        objectFit: "contain",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Particles Effect - Smaller */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="animate-float-slow absolute top-4 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-40"></div>
              <div className="animate-float-medium absolute top-12 right-4 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-30"></div>
              <div className="animate-float-fast absolute top-20 right-1 w-1 h-1 bg-yellow-500 rounded-full opacity-35"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Close main container div */}
      <style jsx global>{`
        @keyframes vertical-marquee {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-vertical-marquee {
          animation: vertical-marquee 35s linear infinite;
        }
        /* Use a 5-step cycle so each of 5 slides shows sequentially */
        @keyframes image-fade-1 {
          0%,
          20% {
            opacity: 1;
          }
          20.01%,
          100% {
            opacity: 0;
          }
        }
        @keyframes image-fade-2 {
          0%,
          20% {
            opacity: 0;
          }
          20.01%,
          40% {
            opacity: 1;
          }
          40.01%,
          100% {
            opacity: 0;
          }
        }
        @keyframes image-fade-3 {
          0%,
          40% {
            opacity: 0;
          }
          40.01%,
          60% {
            opacity: 1;
          }
          60.01%,
          100% {
            opacity: 0;
          }
        }
        @keyframes image-fade-4 {
          0%,
          60% {
            opacity: 0;
          }
          60.01%,
          80% {
            opacity: 1;
          }
          80.01%,
          100% {
            opacity: 0;
          }
        }
        @keyframes image-fade-5 {
          0%,
          80% {
            opacity: 0;
          }
          80.01%,
          100% {
            opacity: 1;
          }
        }
        .animate-image-fade-1 {
          animation: image-fade-1 12s linear infinite;
        }
        .animate-image-fade-2 {
          animation: image-fade-2 12s linear infinite;
        }
        .animate-image-fade-3 {
          animation: image-fade-3 12s linear infinite;
        }
        .animate-image-fade-4 {
          animation: image-fade-4 12s linear infinite;
        }
        .animate-image-fade-5 {
          animation: image-fade-5 12s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
      </div>
          }
        }
        .animate-vertical-marquee {
          animation: vertical-marquee 10s linear infinite;
        }

        /* Image slider animations */
        @keyframes image-fade-1 {
          0%,
          20% {
            opacity: 1;
          }
          20.01%,
          100% {
            opacity: 0;
          }
        }
        @keyframes image-fade-2 {
          0%,
          20% {
            opacity: 0;
          }
          20.01%,
          40% {
            opacity: 1;
          }
          40.01%,
          100% {
            opacity: 0;
          }
        }
        @keyframes image-fade-3 {
          0%,
          40% {
            opacity: 0;
          }
          40.01%,
          60% {
            opacity: 1;
          }
          60.01%,
          100% {
            opacity: 0;
          }
        }
        @keyframes image-fade-4 {
          0%,
          60% {
            opacity: 0;
          }
          60.01%,
          80% {
            opacity: 1;
          }
          80.01%,
          100% {
            opacity: 0;
          }
        }
        @keyframes image-fade-5 {
          0%,
          80% {
            opacity: 0;
          }
          80.01%,
          100% {
            opacity: 1;
          }
        }
        .animate-image-fade-1 {
          animation: image-fade-1 12s linear infinite;
        }
        .animate-image-fade-2 {
          animation: image-fade-2 12s linear infinite;
        }
        .animate-image-fade-3 {
          animation: image-fade-3 12s linear infinite;
        }
        .animate-image-fade-4 {
          animation: image-fade-4 12s linear infinite;
        }
        .animate-image-fade-5 {
          animation: image-fade-5 12s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
