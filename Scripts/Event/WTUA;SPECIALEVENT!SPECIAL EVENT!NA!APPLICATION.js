//Gray Quarter Inc.
//WTUA;SPECIALEVENT!SPECIAL EVENT!NA!APPLICATION
/*
if (wfTask == "Application Submittal" && wfStatus == "Department Review"){
    deactivateTask("PBW Transportation");
    deactivateTask("Comm Dev Bldg Safety");
    deactivateTask("SBPD");
    deactivateTask("Comm Dev Planning");
    deactivateTask("SBFD");
    deactivateTask("Risk Mgmt");
    deactivateTask("Creeks");
    deactivateTask("Environmental Services");
    deactivateTask("WF Parking");
    deactivateTask("City Admin Office");
    deactivateTask("Parks and Rec");
    deactivateTask("Public Works Streets");
}
*/

//*******START - Send Issued Permit*********
if (wfTask == "Permit Issuance" && wfStatus == "Issued") {
    runAsyncEvent("ASYNC_ONDEMAND_SPECIALEVENT_PERMIT_SEND_EMAIL",capIDString,currentUserID);
  }
//*******END - Send Issued Permit*********

//*******START - Email to Building & Safety*********
if ( 
    (AInfo["Stage"] == "CHECKED"
        || AInfo["Building a structure"] == "CHECKED"
        || AInfo["Installing temporary electrical wiring for event"] == "CHECKED"
        || AInfo["Large towed generator with a grounding rod"] == "CHECKED")
    && wfTask == "Application Submittal" && wfStatus == "Department Review"
    //&& (wfTask == "Comm Dev Bldg Safety" && wfStatus == "Pending")
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "CDBuildingCode@SantaBarbaraCa.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}
//*******END - Email to Building & Safety*********

//*******START - Email to Fire Prevention 2*********
if (
    (AInfo["Tent dimensions are 400 square feet or more"] == "CHECKED" 
        || AInfo["Canopy dimensions are 700 square feet or more"] == "CHECKED" 
        || AInfo["The event is a market trade show exhibit or has a similar vendor set up"] == "CHECKED"
        || AInfo["The entire event or a smaller area within the event will be enclosed in fencing"] == "CHECKED"
        || AInfo["Equipment with an open flame"] == "CHECKED"
        || AInfo["Carnival Rides or Games"] == "CHECKED"
        || AInfo["A BBQ grill or open flame burner will be used to prepare food onsite"] == "CHECKED"
        || AInfo["Alcohol will be served at the event"] == "CHECKED")
    && wfTask == "Application Submittal" && wfStatus == "Department Review"
   // && (wfTask == "SBFD" && wfStatus == "Pending")
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "FirePrevention2@SantaBarbaraCA.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}
//*******END - Email to Fire Prevention 2*********

//*******START - Email to SBPD*********
if (
    (AInfo["Parade Vehicles orFloats"] == "CHECKED" 
        || AInfo["Parade Floats"] == "CHECKED" 
        || AInfo["Parade Horses"] == "CHECKED"
        || AInfo["Car Show Vehicles"] == "CHECKED"
        || AInfo["Requesting uniformed City police officers"] == "CHECKED"
        || AInfo["Event includes"] == "CHECKED"
        ||AInfo["Water stations placed along walk race cycling event routes"] == "CHECKED"
        ||AInfo["Alcohol will be served at the event"] == "CHECKED")
    && wfTask == "Application Submittal" && wfStatus == "Department Review"
   // && (wfTask == "SBFD" && wfStatus == "Pending")
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "OHoodes@sbpd.com";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}

//*******END - Email to SBPD*********

//*******START - Email to Public Works Streets*********
if (
    (AInfo["Event includes"] == "CHECKED"
        ||AInfo["Signage placed along walk race cycling event routes"] == "CHECKED"
        ||AInfo["Water stations placed along walk race cycling event routes"] == "CHECKED"
        ||AInfo["Vendors selling food and beverages in the Public Right of Way"] == "CHECKED"
        ||AInfo["Requesting to park an oversized-vehicle on a City street"] == "CHECKED"
        ||AInfo["Requesting to reserve parking area along a City Street"] == "CHECKED"
        ||AInfo["Requesting to place portable toilets or trash and recycling receptacles on a City street"] == "CHECKED")
    && wfTask == "Application Submittal" && wfStatus == "Department Review"
   // && (wfTask == "SBFD" && wfStatus == "Pending")
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "PWCounter@SantaBarbaraCA.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}

//*******END - Email to Public Works Streets*********

//*******START - Email to PW Transportation*********
if (AInfo["Event includes"] == "CHECKED"
    && wfTask == "Application Submittal" && wfStatus == "Department Review"
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "dbailey@SantaBarbaraCA.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}

//*******END - Email to PW Transportation*********

//*******START - Email to Parks & Rec*********
if (
    (AInfo["Event includes ocean swimming or watersports"] == "CHECKED"
        ||AInfo["Requesting use of City Volleyball Courts"] == "CHECKED")
    && wfTask == "Application Submittal" && wfStatus == "Department Review"
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "specialevents@santabarbaraca.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}

//*******END - Email to Parks & Rec*********

//*******START - Email to City of Santa Barbara Finance Dept*********
if (
    (AInfo["Vendors selling food and beverages in a park or beach"] == "CHECKED"
        ||AInfo["Vendors selling food and beverages in the Public Right of Way"] == "CHECKED"
        ||AInfo["Organizations will be onsite collecting donations"] == "CHECKED")
    && wfTask == "Application Submittal" && wfStatus == "Department Review"
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "businesslicense@santabarbaraca.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}

//*******END - Email to City of Santa Barbara Finance Dept*********

//*******START - Email to Water Front Parking*********
if (
    (AInfo["Use of City Waterfront Parking Lot"] == "CHECKED"
        ||AInfo["Requesting to place portable toilets or dumpsters in a Waterfront Parking Lot"] == "CHECKED")
    && wfTask == "Application Submittal" && wfStatus == "Department Review"
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "cbarrios@santabarbaraca.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}

//*******END - Email to Water Front Parking*********

//*******START - Email to Environmental Services*********
if (
    (AInfo["Requesting to place portable toilets or trash and recycling receptacles on a City street"] == "CHECKED"
        ||AInfo["Event contains elements that require specialized cleaning"] == "CHECKED"
        ||AInfo["Interested in hosting a Zero Waste event"] == "CHECKED")
    && wfTask == "Application Submittal" && wfStatus == "Department Review"
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "HAllen@SantaBarbaraCA.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}

//*******END - Email to Environmental Services*********

//*******START - Email to Creeks (parks & rec)*********
if (AInfo["Event contains elements that require specialized cleaning"] == "CHECKED"
    && wfTask == "Application Submittal" && wfStatus == "Department Review"
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "chclark@santabarbaraca.gov";
                //var ccEmail = "GJohnson@SantaBarbaraCA.gov"; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}

//*******END - Email to Creeks (parks & rec)*********