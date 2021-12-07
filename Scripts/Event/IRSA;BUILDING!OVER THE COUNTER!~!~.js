//********************************************************************************************************
//Inspection Result Submit After for OnDemand Records.
//Created By: Gray Quarter Inc. 6/8/21
//********************************************************************************************************

//GQ - Zen Desk Ticket #1728
logDebug("start of IRSA;BUILDING!OVER THE COUNTER!~!~");

if ((inspType == "Building Final - Not Occupied" 
	|| inspType == "Final Electrical"
	|| inspType == "Final Mechanical"
	|| inspType == "Final Plumbing")
	&& inspResult == "Passed") {
	closeTask("Inspection","Final Inspection Complete","Auto Closed by Script","Auto Closed by Script");
	//closeTask("Close","Closed","Auto Closed by Script","Auto Closed by Script");
	updateAppStatus("Complete","Auto Closed by Script");
	//runAsyncEvent("ASYNC_INSP_SUMMARY_REPORT_SEND_EMAIL",capIDString,currentUserID);


	logDebug("County Assessor email");
	//Get Report and Report Parameters
	  
	var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
	var toEmail = "jason@grayquarter.com";
	var ccEmail = "jason@grayquarter.com"; //blank for now
	  //var toEmail = "citypermits@co.santa-barbara.ca.us";
	  //var ccEmail = "CDRecords@SantaBarbaraCA.gov"; //blank for now
		var theURL = "https://landuse.santabarbaraca.gov/CitizenAccess";
		var emailParameters = aa.util.newHashtable();
	addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
		addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
		addParameter(emailParameters, "$$acaRecordUrl$$", getACARecordURL(theURL));
	
		var emailTemplate = "BLD_PERMIT_FINAL_INSPECTION_APP_ASSESSOR";
		var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
		var fileNames = [];
	   
		aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
		logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");

}
	logDebug("Criteria met at inspection type of " + inspType);
logDebug("end of IRSA;BUILDING!OVER THE COUNTER!~!~");
