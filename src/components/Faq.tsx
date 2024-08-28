"use client"

import React, { useState } from "react";

const Faq = () => {
  // State to manage open/close of each FAQ item
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Function to toggle the visibility of FAQ details
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Dummy data for FAQs
  const faqs = [
    {
      title: "What is your policy on distribution?",
      content:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl.",
    },
    {
      title: "How can I contribute to Flowspark?",
      content:
        "Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa.",
    },
    {
      title: "What other themes do you have?",
      content:
        "Pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl.",
    },
    {
      title: "What is your policy on distribution?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis est, at convallis magna.",
    },
  ];

  return (
    <section className="text-white ">
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl xs:px-4">
        <div className="flex flex-col items-start lg:flex-row lg:space-x-20">
          <div className="lg:flex-[1_1_500px] w-full flex-none">
            <div className="max-w-3xl mb-8 md:mb-12 lg:mb-16">
              <h2 className="font-bold text-3xl md:text-5xl">General FAQs</h2>
              <div className="mt-4 max-w-lg">
                <p className="text-gray-500 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna
                </p>
              </div>
            </div>
            <div className="mb-6 h-full w-full overflow-auto bg-gray-100/20 p-8 rounded-md border border-slate-300/35">
              <div className="flex flex-row gap-4">
                <img
                  src="./logo.svg"
                  alt="Placeholder"
                  className="inline-block h-12 w-12 object-cover rounded-full p-1"
                />
                <div className="flex flex-col gap-1.5">
                  <h5 className="text-xl font-bold">Still have questions?</h5>
                  <div className="max-w-sm">
                    <p className="text-white text-sm sm:text-base">
                      Can’t find the answer you’re looking for? Please chat to
                      our support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6 mt-8 h-[0.5px] w-full bg-slate-300/30"></div>
              <a
                href="#"
                className="inline-block items-center rounded-md bg-white/20 px-6 py-3 text-center font-semibold text-white border border-slate-200/20"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="lg:flex-[1_1_500px] w-full flex-none">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-6 w-full overflow-hidden bg-slate-100/15 border border-slate-300/25 p-8 rounded-md"
              >
                <div
                  className="flex cursor-pointer items-start justify-between"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="text-xl font-bold">{faq.title}</p>
                  <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                    <div
                      className={`absolute h-5 w-0.5 bg-white transition-transform duration-300 ${
                        openFAQ === index ? "rotate-90" : ""
                      }`}
                    ></div>

                    <div className="h-0.5 w-5 bg-white"></div>
                  </div>
                </div>
                {openFAQ === index && (
                  <div className="w-full overflow-hidden mb-4 max-w-2xl lg:max-w-4xl">
                    <p className="text-sm sm:text-base">{faq.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
