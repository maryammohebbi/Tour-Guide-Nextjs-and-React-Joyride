"use client"

import React, { useState, useEffect } from "react"
import Joyride from "react-joyride"

const TourGuide = () => {
  const [run, setRun] = useState(false)

  useEffect(() => {
    // Check if this is the first visit
    const hasSeenTour = localStorage.getItem("hasSeenTour")
    if (!hasSeenTour) {
      setRun(true) // Automatically start the tour
      localStorage.setItem("hasSeenTour", "true") // Mark the tour as shown
    }
  }, []) // Empty dependency array to run only once when the component mounts

  const steps = [
    {
      target: ".header",
      content: "این بخش، هدر سایت است.",
      placement: "bottom", // Tooltip arrow on top
    },
    {
      target: ".red",
      content: "این بخش قرمز است.",
      placement: "left", // Tooltip arrow on the right
    },
    {
      target: ".yellow",
      content: "این بخش زرد است.",
      placement: "left", // Tooltip arrow on the right
    },
    {
      target: ".green",
      content: "این بخش سبز است.",
      placement: "left", // Tooltip arrow on the right
    },
    {
      target: ".footer",
      content: "این بخش، فوتر سایت است.",
      placement: "top", // Tooltip arrow on the bottom
    },
  ];

  return (
    <Joyride
      steps={steps}
      run={run} // Automatically starts when `run` is true
      continuous
      showSkipButton
      showProgress={false}
      styles={{
        options: {
          zIndex: 1000,
          arrowColor: "#fff",
          backgroundColor: "#fff",
          textColor: "#000",
        },
        tooltip: {
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        },
        buttonNext: {
          backgroundColor: "green",
          color: "#000",
          borderRadius: "5px",
          padding: "8px 12px",
        },
        buttonSkip: {
          color: "red",
          fontWeight: "bold",
          border: "1px solid red",
        },
        buttonBack: {
          color: "#000"
        },
        buttonClose: {
          right: "88%",
          top: "5px",
        }
      }}
      locale={{
        next: "بعدی",
        back: "قبلی",
        skip: "بستن",
        last: "پایان",
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
