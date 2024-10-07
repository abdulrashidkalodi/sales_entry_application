import React, { useState } from "react";
import DetailsSection from "./DetailsSection/DetailsSection";
import HeaderSection from "./HeaderSection/HeaderSection";

function Home() {
  // State to hold the selected vr_no
  const [selectedVrNo, setSelectedVrNo] = useState(null);

  return (
    <div>
      {/* Pass the setter for vr_no to HeaderSection */}
      <HeaderSection setSelectedVrNo={setSelectedVrNo} />
      
      {/* Pass the selected vr_no to DetailsSection */}
      <DetailsSection selectedVrNo={selectedVrNo} />
    </div>
  );
}

export default Home;
