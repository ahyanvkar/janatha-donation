import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QRCode from "qrcode.react";

const JanathaPalliativeDonation = () => {
  const [accountDetails, setAccountDetails] = useState({ upiId: "" });
  const [editable, setEditable] = useState(false);
  const [formValues, setFormValues] = useState(accountDetails);

  const handleEdit = () => setEditable(true);
  const handleSave = () => {
    setAccountDetails(formValues);
    setEditable(false);
  };
  const handleChange = (e) => setFormValues({ ...formValues, [e.target.name]: e.target.value });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl">
        <CardContent>
          <h1 className="text-2xl font-bold text-center mb-4">Janatha Palliative Donation</h1>
          <p className="text-center text-gray-600 mb-6">Support those in need by making a donation.</p>
          <div className="mb-4">
            <label className="font-semibold">UPI ID:</label>
            {editable ? (
              <Input name="upiId" value={formValues.upiId} onChange={handleChange} placeholder="Enter UPI ID" />
            ) : (
              <p>{accountDetails.upiId || "Not Set"}</p>
            )}
          </div>
          {accountDetails.upiId && (
            <div className="flex flex-col items-center my-4">
              <p className="font-semibold">Scan to Donate:</p>
              <QRCode value={`upi://pay?pa=${accountDetails.upiId}`} size={150} className="mt-2" />
            </div>
          )}
          {editable ? (
            <Button className="w-full mt-4" onClick={handleSave}>Save</Button>
          ) : (
            <Button className="w-full mt-4" onClick={handleEdit}>Edit UPI Details</Button>
          )}
          <Button className="w-full mt-4 bg-green-600 text-white hover:bg-green-700">Donate Now</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JanathaPalliativeDonation;
