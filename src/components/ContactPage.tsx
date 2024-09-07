"use client"
import React, { useState, useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly";

interface ContactPageProps {
  className?: string;
  buttonText?: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ className, buttonText = "Contact Now" }) => {
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

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <section id="contact">
      <button
        type="button"
        onClick={handleOpenModal}
        className={`${className}   text-center font-semibold text-white`}
      >
        {buttonText}
      </button>

      {isModalOpen && (
        <div
                  id="hs-modal-upgrade-to-pro"
                 className="fixed left-0 top-0 z-[100] w-screen h-screen flex justify-center items-center backdrop-blur-3xl bg-black/50 xs:p-4"
                  role="dialog"
                  tabIndex={-1}
                  aria-labelledby="hs-modal-upgrade-to-pro-label"
                  
                >
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-800 backdrop-blur-2xl xs:w-full md:w-2/3 overflow-hidden"  ref={modalRef}>
                  <InlineWidget url="https://calendly.com/shah-y3y/get-in-touch" />
        
                    <div className="flex justify-end items-center gap-x-2 p-4 sm:px-7 border-t dark:border-neutral-800">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      >
                        Cancel
                      </button>
                     
                    </div>
                  </div>
                </div>
      )}
    </section>
  );
};

export default ContactPage;

