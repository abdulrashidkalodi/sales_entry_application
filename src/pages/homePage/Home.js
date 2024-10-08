import React, { useState } from "react";
import DetailsSection from "./DetailsSection/DetailsSection";
import HeaderSection from "./HeaderSection/HeaderSection";

function Home() {
  const [subtotal, setSubtotal] = useState(0); // State to store the subtotal
  // State to hold the selected vr_no
  const [selectedVrNo, setSelectedVrNo] = useState(null);

    // Callback function to handle the subtotal passed from DetailsSection
    const handleSubtotalChange = (newSubtotal) => {
      setSubtotal(newSubtotal);
    };


  return (
    <div>
      {/* Pass the setter for vr_no to HeaderSection */}
      <HeaderSection setSelectedVrNo={setSelectedVrNo} subtotal={subtotal} />
      
      {/* Pass the selected vr_no to DetailsSection */}
      <DetailsSection selectedVrNo={selectedVrNo} onSubtotalChange={handleSubtotalChange} />
    </div>
  );
}

export default Home;
