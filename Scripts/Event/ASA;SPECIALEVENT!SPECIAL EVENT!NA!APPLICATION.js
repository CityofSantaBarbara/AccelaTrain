//ASA;SPECIALEVENT!SPECIAL EVENT!NA!APPLICATION
//ASA:SPECIALEVENT/SPECIAL EVENT/NA/APPLICATION

//START FEES SECTION
removeAllFees(capId);
//ALWAYS ADD
updateFee('SE_001', 'SE_GENERAL', 'FINAL', 1, 'Y');
//END FEES SECTION


//START COA - Add depending Custom Field Question

//*************Nonprofit Organization***************
if (AInfo["501C3"] == "Yes"
    && !appHasCondition("Special Event Requirements", null, "Nonprofit Organization", null)) {
    addStdCondition("Special Event Requirements", "Nonprofit Organization");
}
//*************Event Location - Use of City Park**********************
if (AInfo["Alameda Park East"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Alameda Park East", null)) {
    addStdCondition("Special Event Requirements", "Alameda Park East");
}
if (AInfo["Alameda Park West"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Alameda Park West", null)) {
    addStdCondition("Special Event Requirements", "Alameda Park West");
}
if (AInfo["Chase Palm Park Plaza"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Chase Palm Park Plaza", null)) {
    addStdCondition("Special Event Requirements", "Chase Palm Park Plaza");
}
if (AInfo["Chase Palm Park Great Meadow"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Chase Palm Park Great Meadow", null)) {
    addStdCondition("Special Event Requirements", "Chase Palm Park Great Meadow");
}
if (AInfo["Chase Palm Park Field"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Chase Palm Park Field", null)) {
    addStdCondition("Special Event Requirements", "Chase Palm Park Field");
}
if (AInfo["De La Guerra Plaza"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "De La Guerra Plaza", null)) {
    addStdCondition("Special Event Requirements", "De La Guerra Plaza");
}
if (AInfo["Leadbetter Grassy Area"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Leadbetter Grassy Area", null)) {
    addStdCondition("Special Event Requirements", "Leadbetter Grassy Area");
}
if (AInfo["Leadbetter Picnic Site"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Leadbetter Picnic Area", null)) {
    addStdCondition("Special Event Requirements", "Leadbetter Picnic Area");
}
if (AInfo["Mackenzie Park"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Mackenzie Park", null)) {
    addStdCondition("Special Event Requirements", "Mackenzie Park");
}
if (AInfo["Oak Park Main"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Oak Park Main", null)) {
    addStdCondition("Special Event Requirements", "Oak Park Main");
}
if (AInfo["Oak Park Sycamore"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Oak Park Sycamore", null)) {
    addStdCondition("Special Event Requirements", "Oak Park Sycamore");
}
if (AInfo["Ortega Park"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Ortega Park", null)) {
    addStdCondition("Special Event Requirements", "Ortega Park");
}
if (AInfo["Plaza del Mar"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Plaza del Mar", null)) {
    addStdCondition("Special Event Requirements", "Plaza del Mar");
}
if (AInfo["Storke Placita"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Storke Placita", null)) {
    addStdCondition("Special Event Requirements", "Storke Placita");
}
if (AInfo["Other Park"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Other Park", null)) {
    addStdCondition("Special Event Requirements", "Other Park");
}
if (AInfo["Other Park"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Other Park", null)) {
    addStdCondition("Special Event Requirements", "Other Park");
}
//*************Event Location - Use of City Beach**********************
if (AInfo["East Beach Cabrillo West"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "East Beach Cabrillo West", null)) {
    addStdCondition("Special Event Requirements", "East Beach Cabrillo West");
}
if (AInfo["Leadbetter Beach"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Leadbetter Beach", null)) {
    addStdCondition("Special Event Requirements", "Leadbetter Beach");
}
if (AInfo["West Beach"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "West Beach", null)) {
    addStdCondition("Special Event Requirements", "West Beach");
}
//*************Event Location - Use of City Indoor Venue**********************
if (AInfo["Chase Palm Park Center"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Chase Palm Park Center", null)) {
    addStdCondition("Special Event Requirements", "Chase Palm Park Center");
}
if (AInfo["Casa las Palmas"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Casa las Palmas", null)) {
    addStdCondition("Special Event Requirements", "Casa las Palmas");
}
if (AInfo["Cabrillo Pavilion"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Cabrillo Pavilion Event Center", null)) {
    addStdCondition("Special Event Requirements", "Cabrillo Pavilion Event Center");
}
if (AInfo["Carousel House"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Carousel House", null)) {
    addStdCondition("Special Event Requirements", "Carousel House");
}
if (AInfo["Ortega Welcome House"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Ortega Welcome House", null)) {
    addStdCondition("Special Event Requirements", "Ortega Welcome House");
}
if (AInfo["Mackenzie Center"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Mackenzie Center", null)) {
    addStdCondition("Special Event Requirements", "Mackenzie Center");
}
//*************Event Location - Use or Closure of City Street**********************
if (AInfo["Use or Closure of City Street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Use or Closure of City Street", null)) {
    addStdCondition("Special Event Requirements", "Use or Closure of City Street");
}
if (AInfo["Use or Closure of City Street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "A professionally prepared traffic plan", null)) {
    addStdCondition("Special Event Requirements", "A professionally prepared traffic plan");
}
if (AInfo["Use or Closure of City Street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Permittee shall abide by conditions", null)) {
    addStdCondition("Special Event Requirements", "Permittee shall abide by conditions");
}
if (AInfo["Cycling Event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parade Location", null)) {
    addStdCondition("Special Event Requirements", "Parade Location");
}
if (AInfo["Cycling Event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parade Conditions", null)) {
    addStdCondition("Special Event Requirements", "Parade Conditions");
}
//*************Event Location - Use or Closure of City Street**********************
if (AInfo["Use or Closure of City Sidewalk or Bike Path"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Use or Closure of City Sidewalk", null)) {
    addStdCondition("Special Event Requirements", "Use or Closure of City Sidewalk");
}
if (AInfo["Use or Closure of City Sidewalk or Bike Path"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "A professionally prepared traffic plan", null)) {
    addStdCondition("Special Event Requirements", "A professionally prepared traffic plan");
}
//*************Event Location - Use or Closure of City Waterfront Bike Path**********************
if (AInfo["Use or Closure of City Waterfront Bike Path"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Use or Closure of City Waterfront Bike Path", null)) {
    addStdCondition("Special Event Requirements", "Use or Closure of City Waterfront Bike Path");
}
if (AInfo["Use or Closure of City Waterfront Bike Path"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "A professionally prepared traffic plan", null)) {
    addStdCondition("Special Event Requirements", "A professionally prepared traffic plan");
}
//*************Event Infrastructure - **********************
if (AInfo["Stage is 24 inches high or more"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Stage is 24 inches high or more", null)) {
    addStdCondition("Special Event Requirements", "Stage is 24 inches high or more");
}
if (AInfo["Tent dimensions are 400 square feet or more"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Tent dimensions are 400 square feet or more", null)) {
    addStdCondition("Special Event Requirements", "Tent dimensions are 400 square feet or more");
}
if (AInfo["Canopy dimensions are 700 square feet or more"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Canopy dimensions are 700 square feet or more", null)) {
    addStdCondition("Special Event Requirements", "Canopy dimensions are 700 square feet or more");
}
if (AInfo["Building a structure"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Canopy dimensions are 700 square feet or more", null)) {
    addStdCondition("Special Event Requirements", "Canopy dimensions are 700 square feet or more");
}
if (AInfo["The event is a market trade show exhibit or has a similar vendor set up"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "The event is a market trade show exhibit or has a similar vendor set up with multiple booths in a confined area", null)) {
    addStdCondition("Special Event Requirements", "The event is a market trade show exhibit or has a similar vendor set up with multiple booths in a confined area");
}
if (AInfo["The entire event or a smaller area within the event will be enclosed in fencing"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "The entire event or a smaller area within the event will be enclosed in fencing", null)) {
    addStdCondition("Special Event Requirements", "The entire event or a smaller area within the event will be enclosed in fencing");
}
if (AInfo["Installing temporary electrical wiring for event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Installing temporary electrical wiring for event lighting sound refrigeration or food preparation equipment", null)) {
    addStdCondition("Special Event Requirements", "Installing temporary electrical wiring for event lighting sound refrigeration or food preparation equipment");
}
if (AInfo["Bringing in additional Lighting"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Bringing in additional Lighting", null)) {
    addStdCondition("Special Event Requirements", "Bringing in additional Lighting");
}
if (AInfo["Requesting access to a City water hydrant"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting access to a City water hydrant", null)) {
    addStdCondition("Special Event Requirements", "Requesting access to a City water hydrant");
}
if (AInfo["Large towed generator with a grounding rod"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Large towed generator with a grounding rod", null)) {
    addStdCondition("Special Event Requirements", "Large towed generator with a grounding rod");
}
if (AInfo["Amplified or Live Music Sound"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Amplified or Live Music Sound", null)) {
    addStdCondition("Special Event Requirements", "Amplified or Live Music Sound");
}
if (AInfo["ATM machine"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "ATM machine", null)) {
    addStdCondition("Special Event Requirements", "ATM machine");
}
if (AInfo["Bounce House or equivalent"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Bounce House or equivalent", null)) {
    addStdCondition("Special Event Requirements", "Bounce House or equivalent");
}
if (AInfo["Equipment with an open flame"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Equipment with an open flame", null)) {
    addStdCondition("Special Event Requirements", "Equipment with an open flame");
}
if (AInfo["Carnival Rides or Games"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Carnival Rides or Games", null)) {
    addStdCondition("Special Event Requirements", "Carnival Rides or Games");
}
if (AInfo["Parade Vehicles orFloats"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parade Vehicles", null)) {
    addStdCondition("Special Event Requirements", "Parade Vehicles");
}
if (AInfo["Parade Floats"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parade Floats", null)) {
    addStdCondition("Special Event Requirements", "Parade Floats");
}
if (AInfo["Parade Horses"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parade Horses", null)) {
    addStdCondition("Special Event Requirements", "Parade Horses");
}
if (AInfo["Car Show Vehicles"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Car Show Vehicles", null)) {
    addStdCondition("Special Event Requirements", "Car Show Vehicles");
}
if (AInfo["Road Closure Equipment"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Road Closure Equipment", null)) {
    addStdCondition("Special Event Requirements", "Road Closure Equipment");
}
if (AInfo["Event set-up or equipment will be left at the event site overnight"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event set-up or equipment will be left at the event site overnight", null)) {
    addStdCondition("Special Event Requirements", "Event set-up or equipment will be left at the event site overnight");
}
if (AInfo["Hiring professional security guards to monitor the event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Hiring professional security guards to monitor the event", null)) {
    addStdCondition("Special Event Requirements", "Hiring professional security guards to monitor the event");
}
if (AInfo["Requesting uniformed City police officers"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting uniformed City police officers to be onsite during the event", null)) {
    addStdCondition("Special Event Requirements", "Requesting uniformed City police officers to be onsite during the event");
}
//*************Sporting Elements**********************
if (AInfo["Event includes"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event includes an organized walk, run and/or cycling activity", null)) {
    addStdCondition("Special Event Requirements", "Event includes an organized walk, run and/or cycling activity");
}
if (AInfo["Walk/Run/Cycling route or ocean activities extend outside of City limits"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Walk/Run/Cycling route or ocean activities extend outside of City limits", null)) {
    addStdCondition("Special Event Requirements", "Walk/Run/Cycling route or ocean activities extend outside of City limits");
}
if (AInfo["Signage placed along walk race cycling event routes"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Signage placed along walk race cycling event routes", null)) {
    addStdCondition("Special Event Requirements", "Signage placed along walk race cycling event routes");
}
if (AInfo["Event includes ocean swimming or watersports"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event includes an organized ocean activity", null)) {
    addStdCondition("Special Event Requirements", "Event includes an organized ocean activity");
}
if (AInfo["Event includes ocean swimming or watersports"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "All ocean activities must be supervised by the City of Santa Barbara Beach Lifeguard Service", null)) {
    addStdCondition("Special Event Requirements", "All ocean activities must be supervised by the City of Santa Barbara Beach Lifeguard Service");
}
if (AInfo["Requesting use of City Volleyball Courts"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting use of City Volleyball Courts", null)) {
    addStdCondition("Special Event Requirements", "Requesting use of City Volleyball Courts");
}
//*************Food Beverage Vendors**********************
if (AInfo["Food and beverages will be made available to the public at the event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Food and beverages will be made available to the public at the event", null)) {
    addStdCondition("Special Event Requirements", "Food and beverages will be made available to the public at the event");
}
if (AInfo["Alcohol will be served at the event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Alcohol will be served at the event", null)) {
    addStdCondition("Special Event Requirements", "Alcohol will be served at the event");
}
if (AInfo["Alcohol will be served at the event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "A permit is required from the State of California Alcohol Beverage Control Office", null)) {
    addStdCondition("Special Event Requirements", "A permit is required from the State of California Alcohol Beverage Control Office");
}
if (AInfo["Vendors selling food and beverages in a park or beach"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Vendors selling food and beverages in a park or beach", null)) {
    addStdCondition("Special Event Requirements", "Vendors selling food and beverages in a park or beach");
}
if (AInfo["Vendors selling food and beverages in the Public Right of Way"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Vendors selling food and beverages on a City street, sidewalk or pathway", null)) {
    addStdCondition("Special Event Requirements", "Vendors selling food and beverages on a City street, sidewalk or pathway");
}
if (AInfo["Vendors selling food and beverages in the Public Right of Way"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "A One Day Vendor License issued by the City of Santa Barbara Finance Department", null)) {
    addStdCondition("Special Event Requirements", "A One Day Vendor License issued by the City of Santa Barbara Finance Department");
}
//*************Parking Vehicle Access**********************
if (AInfo["Use of City Waterfront Parking Lot"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting to pre-reserve parking for vehicles in a Waterfront Parking Lot", null)) {
    addStdCondition("Special Event Requirements", "Requesting to pre-reserve parking for vehicles in a Waterfront Parking Lot");
}
if (AInfo["Parking for a food truck or trailer"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting to park a food truck, BBQ trailer, or oversized vehicle in a City Waterfront Parking Lot", null)) {
    addStdCondition("Special Event Requirements", "Requesting to park a food truck, BBQ trailer, or oversized vehicle in a City Waterfront Parking Lot");
}
if (AInfo["Requesting to park an oversized-vehicle on a City street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting to park an oversized-vehicle on a City street", null)) {
    addStdCondition("Special Event Requirements", "Requesting to park an oversized-vehicle on a City street");
}
if (AInfo["Requesting to reserve parking area along a City Street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting to reserve parking along a City street for equipment load in/load out", null)) {
    addStdCondition("Special Event Requirements", "Requesting to reserve parking along a City street for equipment load in/load out");
}
if (AInfo["Providing onsite Bicycle valet"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Providing onsite Bicycle valet", null)) {
    addStdCondition("Special Event Requirements", "Providing onsite Bicycle valet");
}
//*************Trash Recycling Cleaning**********************
if (AInfo["Requesting to place portable toilets or trash and recycling receptacles on a City street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting to place portable toilets or trash and recycling receptacles on a City street", null)) {
    addStdCondition("Special Event Requirements", "Requesting to place portable toilets or trash and recycling receptacles on a City street");
}
if (AInfo["Requesting to place portable toilets or dumpsters in a Waterfront Parking Lot"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting to place portable toilets or dumpsters in a Waterfront Parking Lot", null)) {
    addStdCondition("Special Event Requirements", "Requesting to place portable toilets or dumpsters in a Waterfront Parking Lot");
}
if (AInfo["Hiring a Professional Cleaning Company"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Hiring a Professional Cleaning Company", null)) {
    addStdCondition("Special Event Requirements", "Hiring a Professional Cleaning Company");
}
//*************For all Applications**********************
if (!appHasCondition("Special Event Requirements", null, "Certificate of Insurance", null)) {
    addStdCondition("Special Event Requirements", "Certificate of Insurance");
}
if (!appHasCondition("Special Event Requirements", null, "Site Map", null)) {
    addStdCondition("Special Event Requirements", "Site Map");
}
if (!appHasCondition("Special Event Requirements", null, "Route Map", null)) {
    addStdCondition("Special Event Requirements", "Route Map");
}
if (!appHasCondition("Special Event Requirements", null, "Breakdown/Clean Up", null)) {
    addStdCondition("Special Event Requirements", "Breakdown/Clean Up");
}
if (!appHasCondition("Special Event Requirements", null, "Comply with City Staff", null)) {
    addStdCondition("Special Event Requirements", "Comply with City Staff");
}
if (!appHasCondition("Special Event Requirements", null, "Permit Compliance - All Agencies", null)) {
    addStdCondition("Special Event Requirements", "Permit Compliance - All Agencies");
}
if (!appHasCondition("Special Event Requirements", null, "Onsite Copy", null)) {
    addStdCondition("Special Event Requirements", "Onsite Copy");
}
if (!appHasCondition("Special Event Requirements", null, "Lack of Enforcment Clause", null)) {
    addStdCondition("Special Event Requirements", "Lack of Enforcment Clause");
}
if (!appHasCondition("Special Event Requirements", null, "Complinace with Traffic Laws", null)) {
    addStdCondition("Special Event Requirements", "Complinace with Traffic Laws");
}
if (!appHasCondition("Special Event Requirements", null, "20 ft Emergency Lane", null)) {
    addStdCondition("Special Event Requirements", "20 ft Emergency Lane");
}
if (!appHasCondition("Special Event Requirements", null, "Liability for Damages", null)) {
    addStdCondition("Special Event Requirements", "Liability for Damages");
}
if (!appHasCondition("Special Event Requirements", null, "Municipal Codes", null)) {
    addStdCondition("Special Event Requirements", "Municipal Codes");
}
if (!appHasCondition("Special Event Requirements", null, "Drought", null)) {
    addStdCondition("Special Event Requirements", "Drought");
}
if (!appHasCondition("Special Event Requirements", null, "Non-exclusive Use", null)) {
    addStdCondition("Special Event Requirements", "Non-exclusive Use");
}
if (!appHasCondition("Special Event Requirements", null, "No Staking", null)) {
    addStdCondition("Special Event Requirements", "No Staking");
}
if (!appHasCondition("Special Event Requirements", null, "No Tying etc", null)) {
    addStdCondition("Special Event Requirements", "No Tying etc");
}
if (!appHasCondition("Special Event Requirements", null, "Cover Cords", null)) {
    addStdCondition("Special Event Requirements", "Cover Cords");
}
if (!appHasCondition("Special Event Requirements", null, "Protective Ground Covering", null)) {
    addStdCondition("Special Event Requirements", "Protective Ground Covering");
}
if (!appHasCondition("Special Event Requirements", null, "Post-event Cleanup", null)) {
    addStdCondition("Special Event Requirements", "Post-event Cleanup");
}
//*************Manual Add to Application**********************
//if (!appHasCondition("Special Event Requirements", null, "", null)) {
//    addStdCondition("Special Event Requirements", "");
//}
//END COA
