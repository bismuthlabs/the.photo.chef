'use client';

import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Sarah M",
      quote:
        "His ability to put you at ease makes the experience enjoyable.",
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela Stian",
      quote:
        "He has an essence of simplicity, yet are calm and real.",
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim Ahmed",
      quote:
        "He was professional from start to finish. I’m usually reluctant to get in front of the camera, but he did an amazing job at putting me at ease.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => {
        // Calculate the index of the next testimonial
        const nextTestimonial =
          (prevTestimonial + 1) % testimonials.length;
        return nextTestimonial;
      });
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [testimonials.length]);

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ul>
            {testimonials.map((item, idx) => (
              currentTestimonial === idx && (
                <li key={idx} 
                className={`${
                    currentTestimonial === idx ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500`}
                >
                  <figure>
                    <div className="flex gap-2 items-center">
                        <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOU2X9fnh7ghFVkRQ_4_F4jYXhMu9AmBzMmxPSpxF9q03BmATHNf3LuTfUCRRGBeUvsiE&usqp=CAU" 
                        alt="" 
                        />
                        <blockquote>
                        <p className="text-sm font-bold sm:text-sm">
                            “{item.quote}“
                        </p>
                        <p className="text-gray-600">@{item.name}</p>
                        </blockquote>
                    </div>
                  </figure>
                </li>
              )
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={item.id}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-black focus:ring ${
                    currentTestimonial === idx ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
