"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SoldCompsCards from "@/components/Auction/Cards/SoldCompsCards";
import { soldCompsData } from "@/lib/data/cardData";
import LoginFooter from "@/Layout/LoginFooter";

const Comp = () => {
  const [propertyAddress, setPropertyAddress] = useState(
    "123 Main St, Phoenix, AZ 85000"
  );
  const [propertyCondition, setPropertyCondition] = useState("turnkey");
  const [bidAmount, setBidAmount] = useState("");
  const [analysisResults] = useState({
    asIs: 205000,
    rehabEst: 40000,
    arv: 300000,
    resale30_90: 250000,
    offer75: 225000,
    frameId: "Frame 1000009234",
  });

  const handleRunAnalysis = () => {
    // Simulate AI analysis
    console.log("Running AI analysis for:", propertyAddress, propertyCondition);
  };

  const handlePlaceBid = () => {
    // Handle bid placement
    console.log("Placing bid:", bidAmount);
  };

  return (
    <div className="px-16">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 mx-auto p-6 space-y-6 gap-6">
        <div className="col-span-2">
          {/* Header */}
          <div className="mb-8 ">
            <h1 className="text-2xl font-bold text-gray-900">
              COMPS: 2861 62nd Ave, Oakland, CA
            </h1>
          </div>

          {/* Main Action Cards */}
          <div className=" gap-6">
            {/* Live Auction AI Analyzer */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  LIVE AUCTION AI ANALYZER
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Property Address
                  </label>
                  <Input
                    value={propertyAddress}
                    onChange={(e) => setPropertyAddress(e.target.value)}
                    className="w-full"
                    placeholder="Enter property address"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Property Condition
                  </label>
                  <Select
                    value={propertyCondition}
                    onValueChange={setPropertyCondition}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="turnkey">Turnkey</SelectItem>
                      <SelectItem value="light-rehab">Light Rehab</SelectItem>
                      <SelectItem value="heavy-rehab">Heavy Rehab</SelectItem>
                      <SelectItem value="tear-down">Tear Down</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleRunAnalysis}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  Run Live AI Comp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Analysis Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">As-Is:</div>
              <div className="text-lg font-semibold">
                ${analysisResults.asIs.toLocaleString()}
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Rehab Est:</div>
              <div className="text-lg font-semibold">
                ${analysisResults.rehabEst.toLocaleString()}
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">ARV:</div>
              <div className="text-lg font-semibold">
                ${analysisResults.arv.toLocaleString()}
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">
                30-90 Day Resale:
              </div>
              <div className="text-lg font-semibold">
                ${analysisResults.resale30_90.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Highlighted Offer */}
          <div className="flex items-center justify-between  mt-8">
            <div className="text-sm text-blue-600 font-medium">
              {analysisResults.frameId}
            </div>

            <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-blue-800">
                  75% Offer:
                </span>
                <span className="text-xl font-bold text-blue-800">
                  ${analysisResults.offer75.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          {/* all cards:  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5">
            {soldCompsData.map((property, idx) => (
              <SoldCompsCards key={idx} {...property} />
            ))}
          </div>
          <div className="h-[500px] mt-24">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=2861%2062nd%20Ave,%20Oakland,%20CA&t=&z=14&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
        {/* cards section start */}
        <div className="col-span-1 mt-[64px]">
          {/* Place a Bid */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                PLACE A BID
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              <div className="">
                <label className="text-sm font-medium text-gray-700">
                  Bid Amount:
                </label>
                <Input
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="w-full mt-3"
                  placeholder="Enter your bid amount"
                  type="number"
                />
              </div>

              <div className="flex-1"></div>

              <Button
                onClick={handlePlaceBid}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 mt-8"
              >
                Place a Bid
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <LoginFooter />
    </div>
  );
};

export default Comp;
