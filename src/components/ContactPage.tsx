"use client"
import React, { useState, useEffect , useRef } from "react";

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null); 
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseModal();
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <section id="contact" >
      
        <button
          type="button"
          onClick={handleOpenModal}
        className=" rounded-md bg-black/20 px-8 py-4 text-center font-semibold text-white lg:mr-8 border border-slate-300/50"
        >
          Contact Now
        </button>
      

      {isModalOpen && (
        <div
          id="hs-modal-upgrade-to-pro"
         className="fixed left-0 top-0 z-50 w-screen h-screen flex justify-center items-center backdrop-blur-3xl bg-black/50 xs:p-4"
          role="dialog"
          tabIndex={-1}
          aria-labelledby="hs-modal-upgrade-to-pro-label"
          
        >
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-800 backdrop-blur-2xl"  ref={modalRef}>
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h3
                  id="hs-modal-upgrade-to-pro-label"
                  className="block text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200"
                >
                  Advanced features
                </h3>
                <div className="max-w-sm mx-auto">
                  <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    Compare to Price, Bulk Discount Pricing, Inventory
                    Tracking
                    <a
                      className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                      href="#"
                    >
                      Sign up here
                    </a>
                  </p>
                </div>
                <div className="mt-5">
                  <a
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    Upgrade to get these features
                  </a>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 divide-y divide-gray-200 dark:divide-neutral-700">
                <div className="flex gap-x-7 py-5 first:pt-0 last:pb-0">
                  <svg
                    className="shrink-0 mt-1 size-7 text-gray-600 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>

                  <div className="grow">
                    <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                      Compare to price
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Use this feature when you want to put a product on sale or
                      show savings off suggested retail pricing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-7 py-5 first:pt-0 last:pb-0">
                  <svg
                    className="shrink-0 mt-1 size-7 text-gray-600 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="6" cy="6" r="3" />
                    <path d="M8.12 8.12 12 12" />
                    <path d="M20 4 8.12 15.88" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M14.8 14.8 20 20" />
                  </svg>

                  <div className="grow">
                    <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                      Bulk discount pricing
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Encourage higher purchase quantities with volume
                      discounts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-7 py-5 first:pt-0 last:pb-0">
                  <svg
                    className="shrink-0 mt-1 size-7 text-gray-600 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>

                  <div className="grow">
                    <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                      Inventory tracking
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Automatically keep track of product availability and
                      receive notifications when inventory levels get low.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center gap-x-2 p-4 sm:px-7 border-t dark:border-neutral-800">
              <button
                type="button"
                onClick={handleCloseModal}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                Cancel
              </button>
              <a
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Upgrade now
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactPage;
