//********************************************************************************************************
//Inspection Result Submit After for OnDemand Records.
//Created By: Gray Quarter Inc. 6/8/21
//********************************************************************************************************

//GQ - Zen Desk Ticket #1728
logDebug("start of IRSA;BUILDING!OVER THE COUNTER!~!~");
var inspection = ('Building Final - Not Occupied','Final Electrical','Final Mechanical','Final Plumbing');
if (inspType == inspection && inspResult == "Passed") {
	logDebug("Criteria met at inspection type of " + inspType);
	updateTask("Inspection","Final Inspection Complete","Auto Closed by Script","Auto Closed by Script");
	//closeTask("Close","Closed","Auto Closed by Script","Auto Closed by Script");
	updateAppStatus("Closed","Auto Closed by Script");
	}

logDebug("end of IRSA;BUILDING!OVER THE COUNTER!~!~");
