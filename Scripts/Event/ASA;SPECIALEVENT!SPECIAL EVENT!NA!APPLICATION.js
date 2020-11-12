//ASA;SPECIALEVENT!SPECIAL EVENT!NA!APPLICATION
//ASA:SPECIALEVENT/SPECIAL EVENT/NA/APPLICATION

//START FEES SECTION
removeAllFees(capId);
//ALWAYS ADD
updateFee('SE_001', 'SE_GENERAL', 'FINAL', 1, 'Y');
//END FEES SECTION


//START COA - Add depending Custom Field Question
if (AInfo["Use of City Park"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Use of City Park", null)) {
    addStdCondition("Special Event Requirements", "Use of City Park");
}
if (AInfo["Use of City Beach"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Use of City Beach", null)) {
    addStdCondition("Special Event Requirements", "Use of City Beach");
}
if (AInfo["Use of City Indoor Venue"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Use of City Indoor Venue", null)) {
    addStdCondition("Special Event Requirements", "Use of City Indoor Venue");
}
if (AInfo["Use or Closure of City Street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Use or Closure of City Street", null)) {
    addStdCondition("Special Event Requirements", "Use or Closure of City Street");
}
if (AInfo["Use or Closure of City Sidewalk or Bike Path"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Use or Closure of City Sidewalk or Bike Path", null)) {
    addStdCondition("Special Event Requirements", "Use or Closure of City Sidewalk or Bike Path");
}
if (AInfo["Admission registration fees"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Admission registration fees", null)) {
    addStdCondition("Special Event Requirements", "Admission registration fees");
}
if (AInfo["Admission or a registration fee is charged onsite"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Admission or a registration fee is charged onsite", null)) {
    addStdCondition("Special Event Requirements", "Admission or a registration fee is charged onsite");
}
if (AInfo["Requesting Use of onsite utilities"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting Use of onsite utilities", null)) {
    addStdCondition("Special Event Requirements", "Requesting Use of onsite utilities");
}
if (AInfo["Generator"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Generator", null)) {
    addStdCondition("Special Event Requirements", "Generator");
}
if (AInfo["Amplified or Live Music Sound"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Amplified or Live Music Sound", null)) {
    addStdCondition("Special Event Requirements", "Amplified or Live Music Sound");
}
if (AInfo["Building a structure"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Building a structure", null)) {
    addStdCondition("Special Event Requirements", "Building a structure");
}
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
if (AInfo["Equipment with an open flame"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Equipment with an open flame", null)) {
    addStdCondition("Special Event Requirements", "Equipment with an open flame");
}
if (AInfo["The entire event or a smaller area within the event will be enclosed in fencing"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "The entire event or a smaller area within the event will be enclosed in fencing", null)) {
    addStdCondition("Special Event Requirements", "The entire event or a smaller area within the event will be enclosed in fencing");
}
if (AInfo["ATM machine"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "ATM machine", null)) {
    addStdCondition("Special Event Requirements", "ATM machine");
}
if (AInfo["Signs or banners or inflatables at event location"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Signs or banners or inflatables at event location", null)) {
    addStdCondition("Special Event Requirements", "Signs or banners or inflatables at event location");
}
if (AInfo["The event will take place in the California Coastal Development Zone"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "The event will take place in the California Coastal Development Zone", null)) {
    addStdCondition("Special Event Requirements", "The event will take place in the California Coastal Development Zone");
}
if (AInfo["Event set-up or equipment will be left at the event site overnight"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event set-up or equipment will be left at the event site overnight", null)) {
    addStdCondition("Special Event Requirements", "Event set-up or equipment will be left at the event site overnight");
}
if (AInfo["Hiring professional security guards to monitor the event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Hiring professional security guards to monitor the event", null)) {
    addStdCondition("Special Event Requirements", "Hiring professional security guards to monitor the event");
}
if (AInfo["Bounce House or equivalent"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Bounce House or equivalent", null)) {
    addStdCondition("Special Event Requirements", "Bounce House or equivalent");
}
if (AInfo["Carnival Rides or Games"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Carnival Rides or Games", null)) {
    addStdCondition("Special Event Requirements", "Carnival Rides or Games");
}
if (AInfo["Parade Vehicles orFloats"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parade Vehicles orFloats", null)) {
    addStdCondition("Special Event Requirements", "Parade Vehicles orFloats");
}
if (AInfo["Parade Horses"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parade Horses", null)) {
    addStdCondition("Special Event Requirements", "Parade Horses");
}
if (AInfo["Car Show Vehicles"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Car Show Vehicles", null)) {
    addStdCondition("Special Event Requirements", "Car Show Vehicles");
}
if (AInfo["Signage placed along walk race cycling event routes"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Signage placed along walk race cycling event routes", null)) {
    addStdCondition("Special Event Requirements", "Signage placed along walk race cycling event routes");
}
if (AInfo["Water stations placed along walk race cycling event routes"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Water stations placed along walk race cycling event routes", null)) {
    addStdCondition("Special Event Requirements", "Water stations placed along walk race cycling event routes");
}
if (AInfo["Requesting use of City Volleyball Courts"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting use of City Volleyball Courts", null)) {
    addStdCondition("Special Event Requirements", "Requesting use of City Volleyball Courts");
}
if (AInfo["Event includes ocean swimming or watersports"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event includes ocean swimming or watersports", null)) {
    addStdCondition("Special Event Requirements", "Event includes ocean swimming or watersports");
}
if (AInfo["Food and beverages will be made available to the public at the event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Food and beverages will be made available to the public at the event", null)) {
    addStdCondition("Special Event Requirements", "Food and beverages will be made available to the public at the event");
}
if (AInfo["A BBQ grill or open flame burner will be used to prepare food onsite"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "A BBQ grill or open flame burner will be used to prepare food onsite", null)) {
    addStdCondition("Special Event Requirements", "A BBQ grill or open flame burner will be used to prepare food onsite");
}
if (AInfo["Alcohol will be served at the event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Alcohol will be served at the event", null)) {
    addStdCondition("Special Event Requirements", "Alcohol will be served at the event");
}
if (AInfo["Vendors selling food and beverages in a park or beach"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Vendors selling food and beverages in a park or beach", null)) {
    addStdCondition("Special Event Requirements", "Vendors selling food and beverages in a park or beach");
}
if (AInfo["Vendors selling food and beverages in the Public Right of Way"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Vendors selling food and beverages in the Public Right of Way", null)) {
    addStdCondition("Special Event Requirements", "Vendors selling food and beverages in the Public Right of Way");
}
if (AInfo["The event is a market or trade show or exhibit or has a similar vendor set-up with multiple booths"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "The event is a market or trade show or exhibit or has a similar vendor set-up with multiple booths", null)) {
    addStdCondition("Special Event Requirements", "The event is a market or trade show or exhibit or has a similar vendor set-up with multiple booths");
}
if (AInfo["Use of City Waterfront Parking Lot"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Use of City Waterfront Parking Lot", null)) {
    addStdCondition("Special Event Requirements", "Use of City Waterfront Parking Lot");
}
if (AInfo["Requesting to reserve parking area along a City Street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting to reserve parking area along a City Street", null)) {
    addStdCondition("Special Event Requirements", "Requesting to reserve parking area along a City Street");
}
if (AInfo["Requesting to park an oversized-vehicle on a City street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting to park an oversized-vehicle on a City street", null)) {
    addStdCondition("Special Event Requirements", "Requesting to park an oversized-vehicle on a City street");
}
if (AInfo["Use of City Downtown Parking Lot"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Use of City Downtown Parking Lot", null)) {
    addStdCondition("Special Event Requirements", "Use of City Downtown Parking Lot");
}
if (AInfo["Requesting to drive or park a vehicle on grass or turf or sand"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting to drive or park a vehicle on grass or turf or sand", null)) {
    addStdCondition("Special Event Requirements", "Requesting to drive or park a vehicle on grass or turf or sand");
}
if (AInfo["Requesting to place portable toilets or dumpsters in a Waterfront Parking Lot"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting to place portable toilets or dumpsters in a Waterfront Parking Lot", null)) {
    addStdCondition("Special Event Requirements", "Requesting to place portable toilets or dumpsters in a Waterfront Parking Lot");
}
if (AInfo["Requesting to place portable toilets or dumpsters in a Downtown Parking Lot"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting to place portable toilets or dumpsters in a Downtown Parking Lot", null)) {
    addStdCondition("Special Event Requirements", "Requesting to place portable toilets or dumpsters in a Downtown Parking Lot");
}
if (AInfo["Requesting to place portable toilets or trash and recycling receptacles on a City street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Requesting to place portable toilets or trash and recycling receptacles on a City street", null)) {
    addStdCondition("Special Event Requirements", "Requesting to place portable toilets or trash and recycling receptacles on a City street");
}
if (AInfo["Event contains elements that require specialized cleaning"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event contains elements that require specialized cleaning", null)) {
    addStdCondition("Special Event Requirements", "Event contains elements that require specialized cleaning");
}
if (AInfo["Interested in hosting a Zero Waste event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Interested in hosting a Zero Waste event", null)) {
    addStdCondition("Special Event Requirements", "Interested in hosting a Zero Waste event");
}
//END COA - Add depending Custom Field Question

