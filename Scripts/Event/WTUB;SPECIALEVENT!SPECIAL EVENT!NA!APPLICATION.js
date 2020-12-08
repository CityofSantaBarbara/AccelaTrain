//Gray Quarter Inc.
//WTUB;SPECIALEVENT!SPECIAL EVENT!NA!APPLICATION


//*******START - $0 Balance*********
if(true){
	if(wfTask == "Permit Issuance" && wfStatus == "Issued" && balanceDue > 0){
		cancel = true;
		showMessage = true;
		comment("Cannot issue permit because there is balance due of $" + balanceDue);
    }
}
//*******END - $0 Balance*********

