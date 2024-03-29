
function handleFeeInvoiceNotificationEmail()
{
	var toEmail = "";
	var fromEmail = scriptAgencyEmailFrom;
	var ccEmail = "";
	var notificationTemplate = "INVOICED FEES";
	var reportFile = [];  // empty set for the file list
	var capID4Email = aa.cap.createCapIDScriptModel(capId.getID1(),capId.getID2(),capId.getID3());
	var emailParameters = aa.util.newHashtable();
	var staff = null;
	
	// prepare Notification parameters
	addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
	addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
	var acaSite = lookup("ACA_CONFIGS", "OFFICIAL_WEBSITE_URL");
	addParameter(emailParameters,"$$acaUrl$$",acaSite);
	var acaPayFeeUrl = acaSite + getPayFeesACAUrl();
	addParameter(emailParameters,"$$acaPayFeeUrl$$",acaPayFeeUrl);

	// fee invoice specific information: use these objects if you want to include fee info in email
	//	printObjProperties(FeeObjs); 
	//	printObjProperties(FeeObjs[0]);

	
	// ensure that we have an assigned staff that will be notified
/*	staff = getRecordAssignedStaffEmail();
	if (staff){ccEmail += "; " + staff; logDebug("ccEmail: " + ccEmail);}

	if (staff == "")
	{
		logDebug("No Staff identified for notification");
//		return null;
	}
*/
	// new requirement 05/27/2020
	// check to see if the fee has actually been voided.  If so, do not send a notice!


	var sendMsg = false;

	for (inv in InvoiceNbrArray) {
		thisInv = InvoiceNbrArray[inv];
		var myInvDataGet = aa.invoice.getFeeItemInvoiceByInvoiceNbr(thisInv);
		if (myInvDataGet.getSuccess() && myInvDataGet.getOutput()) {
			var myInvDataArr = myInvDataGet.getOutput();
			for (invFee in myInvDataArr) {
				var thisFeeStatus = myInvDataArr[invFee].getFeeitemStatus();
				var thisFeeSchedule = myInvDataArr[invFee].getFeeSchedule();
				if ( thisFeeStatus == 'INVOICED' && thisFeeSchedule != 'POS_GENERAL') {
					sendMsg = true;
				}
			}
		}
	}

	if (sendMsg) {
		// get the Applicant email
		var applicant = null;
		var contactType = "Applicant"
		var capContactResult = aa.people.getCapContactByCapID(capId);
		if (capContactResult.getSuccess())
		{
			var Contacts = capContactResult.getOutput();
			for (yy in Contacts)
			{
				if (contactType.equals(Contacts[yy].getCapContactModel().getPeople().getContactType()))
				{
					if (Contacts[yy].getEmail() != null)
					{
						toEmail = "" + Contacts[yy].getEmail();
						var conName = Contacts[yy].getCapContactModel().getPeople().getFullName();
						if (!conName) conName = "";
						addParameter(emailParameters, "$$ApplicantName$$", conName);
						// send Notification
						var sendResult = sendNotification(fromEmail,toEmail,ccEmail,notificationTemplate,emailParameters,reportFile,capID4Email);
						if (!sendResult) { logDebug("handleFeeInvoiceNotificationEmail:UNABLE TO SEND NOTICE!  ERROR: "+ sendResult); }
						else { logDebug("handleFeeInvoiceNotificationEmail:Sent Notification"); }  
					}
				}
			}
		}
	}
	else { logDebug("handleFeeInvoiceNotificationEmail: No Message send because no new Invoices where invoiced!"); }
}