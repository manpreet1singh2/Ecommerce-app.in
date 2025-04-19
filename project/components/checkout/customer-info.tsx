"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CustomerInfoProps {
  onComplete: () => void;
}

export default function CustomerInfo({ onComplete }: CustomerInfoProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("India");
  const [saveInfo, setSaveInfo] = useState(true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, validate and save customer information
    onComplete();
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Information</h3>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shipping Address</h3>
            
            <div>
              <Label htmlFor="country">Country/Region</Label>
              <Select 
                value={country} 
                onValueChange={setCountry}
                required
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="USA">United States</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="address">Street Address</Label>
              <Input
                id="address"
                placeholder="123 Main St"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="New York"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="state">State/Province</Label>
                <Input
                  id="state"
                  placeholder="NY"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="zipCode">Postal Code</Label>
                <Input
                  id="zipCode"
                  placeholder="10001"
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="saveInfo" 
              checked={saveInfo}
              onCheckedChange={(checked) => 
                setSaveInfo(checked as boolean)
              }
            />
            <label
              htmlFor="saveInfo"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Save this information for next time
            </label>
          </div>
          
          <Button type="submit" className="w-full">
            Continue to Shipping <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}