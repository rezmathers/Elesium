"use client";

import { Space } from "lucide-react";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Faq = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      title: "What services does Elesium Online offer?",
      content:
        "Elesium Online provides social media marketing services, including content creation, ad management, strategy development, social media account optimization, and audience engagement solutions.",
    },
    {
      title: " How can social media marketing benefit my business?",
      content:
        "Social media marketing can increase brand awareness, drive traffic to your website, improve customer engagement, and generate leads, helping to grow your business effectively.",
    },
    {
      title: "What platforms do you specialize in?",
      content:
        "We specialize in Facebook, Instagram, LinkedIn, and Google Ads, as well as other platforms depending on your specific audience and industry needs.",
    },
    {
      title: "How do you measure success?",
      content:
        "We track metrics such as engagement, reach, website traffic, conversions, and ROI to evaluate campaign performance and ensure your business objectives are met.",
    },
    {
      title: " Do you offer customized solutions for each business?",
      content:
        " Yes, every strategy we design is tailored to the unique goals and target audience of each client to ensure maximum impact.",
    },
    {
      title: "What is your pricing model?",
      content:
        "Our pricing is customized based on the specific needs and goals of your business. Contact us for a free consultation and detailed quote.",
    },
  ];

  return (
    <section className="text-white">
      <div className="mx-auto w-full max-w-7xl xs:px-4">
        <div className="flex flex-col items-start lg:flex-row lg:space-x-20">
          <div className="lg:flex-[1_1_500px] w-full flex-none">
            <div className="max-w-3xl mb-8 md:mb-12 lg:mb-16">
              <h2 className="font-bold text-3xl md:text-5xl">General FAQs</h2>
              <div className="mt-4 max-w-lg">
                <p className="text-gray-500 text-sm sm:text-base">
                  It&apos;s key to address common queries potential clients
                  might have about our social media marketing services.
                  Here&apos;s a list of frequently asked questions (and
                  suggested answers):
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
                      Can&apos;t find the answer you&apos;re looking for? Please chat to
                      our support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6 mt-8 h-[0.5px] w-full bg-slate-300/30"></div>
              <div className="items-center rounded-md bg-black/20 px-6 py-3 text-center font-semibold text-white border border-slate-200/20 flex md:flex-row xs:flex-col xs:gap-4 justify-between">
                Get In Touch
                <div className="flex md:gap-3 xs:justify-between xs:w-full md:w-fit">
                  {/* Mail Icon */}
                  <a href="https://ig.me/m/elesium__" target="_blank">
                    <img src="./instagram.svg" alt="Elesuim" className="h-8" />
                  </a>
                  {/* Facebook Icon */}
                  <a href="https://facebook.com" target="_blank">
                    <img src="./fb.svg" alt="Elesuim" className="h-8" />
                  </a>
                  {/* LinkedIn Icon */}
                  <a href="https://linkedin.com" target="_blank">
                    <img src="./linkdin.svg" alt="Elesuim" className="h-8" />
                  </a>
                  {/* Instagram Icon */}
                  <a href="mailto:shah@elesium.com" target="_blank">
                    <img src="./gmail.svg" alt="Elesuim" className="h-8" />
                  </a>
                </div>
              </div>
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
                <CSSTransition
                  in={openFAQ === index}
                  timeout={300}
                  classNames="faq-content"
                  unmountOnExit
                >
                  <div className="faq-content w-full overflow-hidden mb-4 max-w-2xl lg:max-w-4xl border-t border-white pt-4 mt-4">
                    <p className="text-sm sm:text-base">{faq.content}</p>
                  </div>
                </CSSTransition>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Adding CSS for transitions */}
      <style jsx>{`
        .faq-content-enter {
          max-height: 0;
          opacity: 0;
        }
        .faq-content-enter-active {
          max-height: 300px; /* or any maximum height that accommodates the content */
          opacity: 1;
          transition: max-height 300ms ease-in, opacity 300ms ease-in;
        }
        .faq-content-exit {
          max-height: 300px;
          opacity: 1;
        }
        .faq-content-exit-active {
          max-height: 0;
          opacity: 0;
          transition: max-height 300ms ease-out, opacity 300ms ease-out;
        }
      `}</style>
    </section>
  );
};

export default Faq;
