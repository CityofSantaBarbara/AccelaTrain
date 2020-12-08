//Gray Quarter Inc.
//WTUB;SPECIALEVENT!SPECIAL EVENT!NA!APPLICATION


//*******START - $0 Balance*********
logDebug("balanceDue " + balanceDue);
if(true){
	if((wfTask == "Permit Issuance" && wfStatus == "Issued") 
		&& (parseInt(balanceDue) > 0)
		){
		cancel = true;
		showMessage = true;
		comment("Can not " + wfStatus + " with a balance due of " + balanceDue + ".");
    }
}
//*******END - $0 Balance*********
/*
logDebug("balanceDue " + balanceDue);
    if(parseInt(balanceDue) > 0)
    {
        cancel = true;
        showMessage = true;
        comment("Can not " + wfStatus + " with a balance due of " + balanceDue + ".");
	}
*/