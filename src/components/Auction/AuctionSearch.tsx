"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  ChevronDown,
  SlidersHorizontal,
  X,
  Filter,
} from "lucide-react";
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
import { Drawer, DrawerContent } from "@/components/ui/drawer";

export default function AuctionSearch() {
  const [searchQuery, setSearchQuery] = useState("Ranch Home in Denver");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

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
    <div className="bg-[#F0F4FFE5] w-full h-auto lg:h-[100px] mx-auto p-2 sm:p-4">
      {/* Desktop and Tablet Version */}
      <div className="hidden md:flex bg-white rounded-full max-w-7xl mx-auto shadow-lg border border-gray-200 p-2 items-center gap-1 lg:gap-2 overflow-hidden">
        {/* Search Input */}
        <div className="flex-1 flex items-center gap-1 lg:gap-2 px-2 lg:px-4 min-w-0">
          <Search className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 flex-shrink-0" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-xs lg:text-sm placeholder:text-gray-500 min-w-0"
            placeholder="Search properties..."
          />
        </div>

        <div className="h-6 lg:h-8 w-px bg-gray-200 flex-shrink-0" />

        {/* Auction Select */}
        <div className="flex-shrink-0">
          <Select defaultValue="auction">
            <SelectTrigger className="border-0 focus:ring-0 focus:ring-offset-0 text-xs lg:text-sm font-medium w-20 lg:w-auto px-1 lg:px-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="auction">Auction</SelectItem>
              <SelectItem value="buy-now">Buy Now</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
              <SelectItem value="lease">Lease</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location Select */}
        <div className="flex-shrink-0">
          <Select defaultValue="new-york">
            <SelectTrigger className="border-0 focus:ring-0 focus:ring-offset-0 text-xs lg:text-sm font-medium w-24 lg:w-auto px-1 lg:px-2">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-white">
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

        {/* Price Range Select */}
        <div className="flex-shrink-0">
          <Select defaultValue="all-range">
            <SelectTrigger className="border-0 focus:ring-0 focus:ring-offset-0 text-xs lg:text-sm font-medium w-24 lg:w-auto px-1 lg:px-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
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
        <div className="h-6 lg:h-8 w-px bg-gray-200 flex-shrink-0" />

        {/* Amenities Popover */}
        <div className="flex-shrink-0">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="border-0 focus:ring-0 focus:ring-offset-0 text-xs lg:text-sm font-medium p-1 lg:p-2 h-auto"
              >
                <div className="flex items-center gap-1">
                  <SlidersHorizontal className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" />
                  <span className="hidden lg:inline">Amenities</span>
                  <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" />
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-4 bg-white" align="end">
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
        <div className="flex-shrink-0">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3 lg:px-6 py-2 rounded-full text-xs lg:text-sm">
            Search
          </Button>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden space-y-3">
        {/* Search Bar */}
        <div className="bg-white rounded-full shadow-lg border border-gray-200 p-2 flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 px-2 sm:px-4">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm placeholder:text-gray-500"
              placeholder="Search properties..."
            />
          </div>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Filters Drawer */}
        <Drawer open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
          <DrawerContent className="p-4 bg-white max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-4 pb-4">
              {/* Auction Type */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Auction Type
                </label>
                <Select defaultValue="auction">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="auction">Auction</SelectItem>
                    <SelectItem value="buy-now">Buy Now</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                    <SelectItem value="lease">Lease</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Location
                </label>
                <Select defaultValue="new-york">
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white">
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

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Price Range
                </label>
                <Select defaultValue="all-range">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
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

              {/* Amenities */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Amenities
                </label>
                <div className="space-y-3 max-h-60 overflow-y-auto p-3 border rounded-lg bg-gray-50">
                  {amenitiesList.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox
                        id={`mobile-${amenity}`}
                        checked={selectedAmenities.includes(amenity)}
                        onCheckedChange={(checked) =>
                          handleAmenityChange(amenity, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={`mobile-${amenity}`}
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
                {selectedAmenities.length > 0 && (
                  <p className="text-xs text-gray-500 mt-2">
                    {selectedAmenities.length} amenities selected
                  </p>
                )}
              </div>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6 py-3"
                onClick={() => setMobileFiltersOpen(false)}
              >
                Apply Filters
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
