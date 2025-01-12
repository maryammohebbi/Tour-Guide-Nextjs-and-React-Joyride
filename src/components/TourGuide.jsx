"use client";

import React, { useState, useEffect } from "react";
import Joyride from "react-joyride";

const TourGuide = ({ items }) => {
  const [run, setRun] = useState(false);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour");
    if (!hasSeenTour) {
      setRun(true);
      localStorage.setItem("hasSeenTour", "true");
    }
  }, []);

  const itemDescriptions = {
    1: "این بخش مربوط به آیتم قرمز است. در اینجا می‌توانید اطلاعات بیشتری را پیدا کنید.",
    2: "این بخش برای آیتم زرد است. ویژگی‌های خاص این آیتم را بررسی کنید.",
    3: "آیتم سبز ویژگی‌های منحصر به فرد خود را دارد. حتماً بررسی کنید!",
  };

  const steps = [
    {
      target: ".header",
      content: "این بخش، هدر سایت است.",
      placement: "bottom",
    },
    ...items.map((item) => ({
      target: `.item-${item.id}`,
      content: itemDescriptions[item.id] || "توضیحات مربوط به این آیتم موجود نیست",
      placement: "left",
    })),
    {
      target: ".footer",
      content: "این بخش، فوتر سایت است.",
      placement: "top",
    },
  ];

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      showProgress
      // styles={{
      //   options: {
      //     zIndex: 1000,
      //     arrowColor: "#fff",
      //     backgroundColor: "#fff",
      //     textColor: "#000",
      //   },
      //   tooltip: {
      //     padding: "15px",
      //     borderRadius: "10px",
      //     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      //     backgroundColor: "#fff",
      //   },
      //   buttonNext: {
      //     backgroundColor: "green",
      //     color: "#fff",
      //     borderRadius: "5px",
      //     padding: "5px 10px",
      //   },
      //   buttonBack: {
      //     color: "#000",
      //   },
      //   buttonClose: {
      //     position: "absolute",
      //     top: "10px",
      //     right: "10px",
      //     backgroundColor: "transparent",
      //     border: "none",
      //     fontSize: "20px",
      //     color: "#000",
      //     cursor: "pointer",
      //   },
      // }}
      locale={{
        next: "بعدی",
        back: "قبلی",
        skip: "بستن",
        last: "پایان",
        // progress: (current, total) => `${current}/${total}`, // Show current and total steps
      }}
      tooltipComponent={({ step, index, primaryProps, skipProps, backProps, closeProps }) => {
        const totalSteps = steps.length; // Get total steps

        return (
          <div className="p-4 rounded-md bg-white relative shadow-md z-[1000]">

            {/* Top-right close button */}
            <button {...closeProps} className="absolute top-4 left-4">
              ✕
            </button>

            {/* guide contect */}
            <p className="p-4 mt-4">{step.content}</p>

            <div className="flex justify-between mt-5 p-2">

              {/* Progress Indicator */}
              <div>{index + 1}/{totalSteps}</div>

              {/* buttons */}
              <div className="flex gap-x-1">
                {/* Back button (shown only if it's not the first step) */}
                {index > 0 && (
                  <button
                    {...backProps}
                    style={{
                      color: "#000",
                      border: "1px solid #000",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    قبلی
                  </button>
                )}
                {/* Next button */}
                <button
                  {...primaryProps}
                  className="bg-green-700 text-white px-2 py-1 rounded-md"
                >
                  {index === totalSteps - 1 ? "پایان" : "بعدی"}
                </button>
              </div>
            </div>
          </div>
        );
      }}
      callback={(data) => {
        if (data.status === "finished" || data.status === "skipped") {
          setRun(false);
        }
      }}
    />
  );
};

export default TourGuide;
