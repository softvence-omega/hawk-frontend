"use client";

import { useState } from "react";
import { Search, MapPin, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function AuctionSearch() {
  const [searchQuery, setSearchQuery] = useState("Ranch Home in Denver");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const amenitiesList = [
    "Swimming Pool",
    "Gym/Fitness Center",
    "Parking Garage",
    "Balcony/Patio",
    "In-unit Laundry",
    "Air Conditioning",
    "Dishwasher",
    "Pet Friendly",
    "Elevator",
    "Concierge",
  ];

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setSelectedAmenities([...selectedAmenities, amenity]);
    } else {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    }
  };

  return (
    <div className="bg-[#F0F4FFE5] w-full  h-[100px] mx-auto p-4">
      <div className="bg-white rounded-full max-w-6xl mx-auto shadow-lg border border-gray-200 p-2 flex items-center gap-2">
        {/* Search Input */}
        <div className="flex-1 flex items-center gap-2 px-4">
          <Search className="w-5 h-5 text-gray-400" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm placeholder:text-gray-500"
            placeholder="Search properties..."
          />
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-200" />

        {/* Auction Select */}
        <div className="px-2">
          <Select defaultValue="auction">
            <SelectTrigger className="border-0 focus:ring-0 focus:ring-offset-0 text-sm font-medium">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auction">Auction</SelectItem>
              <SelectItem value="buy-now">Buy Now</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
              <SelectItem value="lease">Lease</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-200" />

        {/* Location Select */}
        <div className="px-2">
          <Select defaultValue="new-york">
            <SelectTrigger className="border-0 focus:ring-0 focus:ring-offset-0 text-sm font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
              <SelectItem value="houston">Houston</SelectItem>
              <SelectItem value="phoenix">Phoenix</SelectItem>
              <SelectItem value="philadelphia">Philadelphia</SelectItem>
              <SelectItem value="san-antonio">San Antonio</SelectItem>
              <SelectItem value="san-diego">San Diego</SelectItem>
              <SelectItem value="dallas">Dallas</SelectItem>
              <SelectItem value="denver">Denver</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-200" />

        {/* Price Range Select */}
        <div className="px-2">
          <Select defaultValue="all-range">
            <SelectTrigger className="border-0 focus:ring-0 focus:ring-offset-0 text-sm font-medium">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-range">All Range</SelectItem>
              <SelectItem value="under-100k">Under $100K</SelectItem>
              <SelectItem value="100k-250k">$100K - $250K</SelectItem>
              <SelectItem value="250k-500k">$250K - $500K</SelectItem>
              <SelectItem value="500k-750k">$500K - $750K</SelectItem>
              <SelectItem value="750k-1m">$750K - $1M</SelectItem>
              <SelectItem value="1m-2m">$1M - $2M</SelectItem>
              <SelectItem value="over-2m">Over $2M</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-200" />

        {/* Amenities Popover */}
        <div className="px-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="border-0 focus:ring-0 focus:ring-offset-0 text-sm font-medium p-0 h-auto"
              >
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                  <span>Amenities</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-4" align="end">
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Select Amenities</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {amenitiesList.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox
                        id={amenity}
                        checked={selectedAmenities.includes(amenity)}
                        onCheckedChange={(checked) =>
                          handleAmenityChange(amenity, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={amenity}
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
                {selectedAmenities.length > 0 && (
                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-500">
                      {selectedAmenities.length} amenities selected
                    </p>
                  </div>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Search Button */}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full">
          Search
        </Button>
      </div>
    </div>
  );
}
