"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do the investment portfolios work?",
    answer: "We offer tailored monthly and annual investment tiers. You fund your account, select a portfolio that fits your financial goals, and earn consistent yields based on your chosen structure.",
  },
  {
    question: "How are my assets secured?",
    answer: "Security is our top priority. We utilize institutional-grade infrastructure, strict risk management protocols, and enterprise encryption to protect your capital at all times.",
  },
  {
    question: "When can I withdraw my yields?",
    answer: "Yields are credited to your dashboard according to your portfolio schedule (monthly or annually). Once credited, disbursements can be processed securely to your designated accounts.",
  },
  {
    question: "Are there any hidden management fees?",
    answer: "No. We believe in complete transparency. All expected returns displayed on our portfolio tiers are net of any operational or management costs.",
  },
  {
    question: "Can I upgrade my portfolio later?",
    answer: "Yes, you can reinvest your yields or allocate additional capital to upgrade to a higher-tier portfolio directly from your client dashboard.",
  },
  {
    question: "Do you offer a referral program?",
    answer: "Yes, we offer an affiliate program allowing you to earn a commission on the initial capital allocated by new clients referred through your network.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-32">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left Column: Heading and Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full lg:w-[55%]"
        >
          <h2 className="font-mazzard text-[36px] sm:text-[44px] lg:text-[48px] text-[#111827] leading-[1.1] tracking-tight mb-10 sm:mb-12">
            Got Questions? <br />
            <span className="text-[#059669]">{"We've Got Answers"}</span>
          </h2>

          <div className="w-full aspect-[4/4.5] bg-[#f4f7fb] rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden relative">
            {/* Original Path Maintained */}
            <Image
              src="/images/home-faq-img.png" 
              alt="Investment FAQ Illustration"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Column: FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="w-full lg:w-[45%] flex flex-col lg:pl-12 pt-10 lg:pt-[100px]"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-slate-200 last:border-0 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span
                    className={`text-[15px] font-medium transition-colors duration-200 ${
                      isOpen ? "text-[#059669]" : "text-[#111827] hover:text-[#059669]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`text-2xl font-light leading-none transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "text-[#059669]" : "text-[#111827]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-8">
                        <p className="text-[13px] text-slate-500 leading-[1.7] font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}