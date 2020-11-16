//WTUA;SPECIALEVENT!SPECIAL EVENT!NA!APPLICATION
if ((AInfo["Stage"] == "CHECKED") 
    && (wfTask == "Application Submittal" && wfStatus == "Department Review")){
        activateTask("Comm Dev Bldg Safety");
        logDebug("County Assessor permit issuance email");
		//Get Report and Report Parameters
              
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var toEmail = "jason@grayquarter.com";
                //var ccEmail = "CDRecords@SantaBarbaraCA.gov"; //blank for now
                //var theURL = "https://landuse.santabarbaraca.gov/CitizenAccess";
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                //addParameter(emailParameters, "$$acaRecordUrl$$", getACARecordURL(theURL));
                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}  