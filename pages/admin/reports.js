"use client";
import React from "react";
import Image from "next/image";
import ReportsCharts from "@/components/charts/ReportsCharts";
import AdminLayout from "@/components/layout/AdminLayout";
const ReportsAndAnalytics = () => {
  const cards = [
    {
      title: "Total Registered Users",
      count: "40,689",
      bg: "#FDEBD5",
      icon: "/assets/blueiconreport.svg",
    },
    {
      title: "Active User",
      count: "40,689",
      bg: "#FCE5F9",
      icon: "/assets/blueiconreport.svg",
    },
    {
      title: "New Signups",
      count: "40,689",
      bg: "#D1F6FE",
      icon: "/assets/blueiconreport.svg",
    },
    {
      title: "Total Reported User",
      count: "40,689",
      bg: "#E6FCE5",
      icon: "/assets/blueiconreport.svg",
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold text-black mb-6">
        Reports & Analytics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex items-center rounded-xl p-4 gap-4"
            style={{ backgroundColor: card.bg }}
          >
            <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-full h-14 w-14 p-2">
              <Image
                src={card.icon}
                alt="icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-sm font-medium text-black/70">
                {card.title}
              </h4>
              <p className="text-2xl font-bold">{card.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="w-full bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm">
        <ReportsCharts />
      </div>
    </>
  );
};
ReportsAndAnalytics.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default ReportsAndAnalytics;
