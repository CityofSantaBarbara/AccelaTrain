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
//Reference #1
if ((AInfo["Stage"] == "CHECKED") 
    && (wfTask == "Application Submittal" && wfStatus == "Department Review")
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
//Reference #2, #3
if ((AInfo["Tent dimensions are 400 square feet or more"] == "CHECKED") 
    || (AInfo["Canopy dimensions are 700 square feet or more"] == "CHECKED") 
    && (wfTask == "Application Submittal" && wfStatus == "Department Review")
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