var myCapId = "";
var myUserId = "ADMIN";
var eventName = "";

var useProductInclude = true; //  set to true to use the "productized" include file (events->custom script), false to use scripts from (events->scripts)
var useProductScript = true;  // set to true to use the "productized" master scripts (events->master scripts), false to use scripts from (events->scripts)
var runEvent = true; // set to true to simulate the event and run all std choices/scripts for the record type.
/* master script code don't touch */ aa.env.setValue("EventName",eventName); var vEventName = eventName;  var controlString = eventName;  var tmpID = aa.cap.getCapID(myCapId).getOutput(); if(tmpID != null){aa.env.setValue("PermitId1",tmpID.getID1());  aa.env.setValue("PermitId2",tmpID.getID2());    aa.env.setValue("PermitId3",tmpID.getID3());} aa.env.setValue("CurrentUserID",myUserId); var preExecute = "PreExecuteForAfterEvents";var documentOnly = false;var SCRIPT_VERSION = 3.0;var useSA = false;var SA = null;var SAScript = null;var bzr = aa.bizDomain.getBizDomainByValue("MULTI_SERVICE_SETTINGS","SUPER_AGENCY_FOR_EMSE"); if (bzr.getSuccess() && bzr.getOutput().getAuditStatus() != "I") {     useSA = true;       SA = bzr.getOutput().getDescription();  bzr = aa.bizDomain.getBizDomainByValue("MULTI_SERVICE_SETTINGS","SUPER_AGENCY_INCLUDE_SCRIPT");     if (bzr.getSuccess()) { SAScript = bzr.getOutput().getDescription(); }  }if (SA) {  eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS",SA,useProductScript));   eval(getScriptText("INCLUDES_ACCELA_GLOBALS",SA,useProductScript)); /* force for script test*/ showDebug = true; eval(getScriptText(SAScript,SA,useProductScript)); }else { eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS",null,useProductScript)); eval(getScriptText("INCLUDES_ACCELA_GLOBALS",null,useProductScript));   }   eval(getScriptText("INCLUDES_CUSTOM",null,useProductInclude));if (documentOnly) {   doStandardChoiceActions2(controlString,false,0);    aa.env.setValue("ScriptReturnCode", "0");   aa.env.setValue("ScriptReturnMessage", "Documentation Successful.  No actions executed.");  aa.abortScript();   }var prefix = lookup("EMSE_VARIABLE_BRANCH_PREFIX",vEventName);var controlFlagStdChoice = "EMSE_EXECUTE_OPTIONS";var doStdChoices = true;  var doScripts = false;var bzr = aa.bizDomain.getBizDomain(controlFlagStdChoice ).getOutput().size() > 0;if (bzr) {   var bvr1 = aa.bizDomain.getBizDomainByValue(controlFlagStdChoice ,"STD_CHOICE");    doStdChoices = bvr1.getSuccess() && bvr1.getOutput().getAuditStatus() != "I";   var bvr1 = aa.bizDomain.getBizDomainByValue(controlFlagStdChoice ,"SCRIPT");    doScripts = bvr1.getSuccess() && bvr1.getOutput().getAuditStatus() != "I";  }   function getScriptText(vScriptName, servProvCode, useProductScripts) {  if (!servProvCode)  servProvCode = aa.getServiceProviderCode(); vScriptName = vScriptName.toUpperCase();    var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput();  try {       if (useProductScripts) {            var emseScript = emseBiz.getMasterScript(aa.getServiceProviderCode(), vScriptName);     } else {            var emseScript = emseBiz.getScriptByPK(aa.getServiceProviderCode(), vScriptName, "ADMIN");      }       return emseScript.getScriptText() + ""; } catch (err) {     return "";  }}logGlobals(AInfo); if (runEvent && typeof(doStandardChoiceActions) == "function" && doStdChoices) try {doStandardChoiceActions(controlString,true,0); } catch (err) { logDebug(err.message) } if (runEvent && typeof(doScriptActions) == "function" && doScripts) doScriptActions(); var z = debug.replace(/<BR>/g,"\r");  aa.print(z);

// aa.env.setValue("Param1", "Value");//test params

// var param = String(aa.env.getValue("Param1"))//always come back as an object so use conversion

try {
    showDebug = true;
	
	//aa.sendMail("tnabc@no-reply.com", "sal@grayquarter.com","","title","content");

	var count = 0;
	var start = new Date();
	
    //Code
    mainProccess();

	var end = new Date();
	var seconds = (end.getTime() - start.getTime())/1000;
	logDebug("Script time = " + seconds + " seconds");
	
    
} catch (err) {
    logDebug("A JavaScript Error occured: " + err.message + " at line " + err.lineNumber + " stack: "+ err.stack);
	aa.print("A JavaScript Error occured: " + err.message + " at line " + err.lineNumber + " stack: "+ err.stack);
}
// end user code
if(showDebug) {
	aa.env.setValue("ScriptReturnCode", "0");   
	aa.env.setValue("ScriptReturnMessage", debug);
}

function mainProccess() {

    var checkDate = "04/18/2022";    

    
    //4 level structure    
    var constructLatConRecords = aa.cap.getByAppType("PublicWorks", "Water Sewer Service Connection", "Sewer Service Work Order", "Construct Lateral Connection").getOutput();
    var removeLatConRecords = aa.cap.getByAppType("PublicWorks", "Water Sewer Service Connection", "Sewer Service Work Order", "Remove Lateral Connection").getOutput();

    capList = constructLatConRecords.concat(removeLatConRecords);
	logDebug("Records processing: " + capList.length);    
    logDebug("Closing by " + checkDate);

    checkDate = new Date(checkDate);
    for(var x in capList) {
        var cap = capList[x];
	    var capId = cap.getCapID();
        var capStatus = cap.getCapStatus();
        //logDebug(capStatus);
        if(!cap.isCompleteCap() || !"Closed".equals(capStatus)) {
            continue;
        }
        var altId = capId.getCustomID();
        logDebug(altId);
        //only issued and complete caps
        var fileDate = cap.getFileDate();
        if(fileDate && fileDate.epochMilliseconds) {
            var fileDateJS = new Date(fileDate.epochMilliseconds);
            var standardDate = (fileDateJS.getMonth() + 1) + "/" + fileDateJS.getDate() + "/" + fileDateJS.getFullYear();
            logDebug("File Date: " + standardDate);
            var recDate = new Date(standardDate);
            if((recDate.getTime() <= checkDate.getTime())) {
                var taskActive = isTaskActiveLocalBatch("GIS update: Distance from downstream manhole to tap", capId); 
                //GIS update: Distance from downstream manhole to tap
                logDebug("Task Active "+ taskActive);                
                if(taskActive) {
                    closeTaskWithCapId("GIS update: Distance from downstream manhole to tap", "Closed", "-Closed via batch", "", capId);
                   // updateAppStatus("Closed", "-Closed via batch", capId);
                    break;
                }
            }
        } else {
            logDebug("No file date for " + altId);
        }
        //break;
    }
}

function explore(objExplore) {
	logDebug("Methods:")
	for (x in objExplore) {
		if (typeof(objExplore[x]) == "function") {
			logDebug("<font color=blue><u><b>" + x + "</b></u></font> ");
			logDebug("   " + objExplore[x] + "<br>");
		}
	}
	logDebug("");
	logDebug("Properties:")
	for (x in objExplore) {
		if (typeof(objExplore[x]) != "function") logDebug("  <b> " + x + ": </b> " + objExplore[x]);
	}
}

function props(objExplore) {
    logDebug("Properties:")
	aa.print("Properties:")
	for (x in objExplore) {
		if (typeof(objExplore[x]) != "function") {
			logDebug("  <b> " + x + ": </b> " + objExplore[x]);
			aa.print( x + " : " + objExplore[x]);
		}	
	}
}

function aaExplore(objExplore) {
	aa.print("Methods:")
	for (x in objExplore) {
		if (typeof(objExplore[x]) == "function") {
			aa.print(x);
			aa.print(objExplore[x]);
		}
	}
	aa.print("");
	aa.print("Properties:")
	for (x in objExplore) {
		if (typeof(objExplore[x]) != "function") {
			aa.print(x + " : " + objExplore[x]);
		} 
	}
}

function slack(msg) {
	
	var headers=aa.util.newHashMap();

    headers.put("Content-Type","application/json");
	
    var body = {};	
	body.text = aa.getServiceProviderCode() + ":" + "TEST" + ": " + msg;

	//GQ Slack
	/*var SLACKURL = "https://hooks.slack.com/services/";
	SLACKURL = SLACKURL + "T5BS1375F/";
	SLACKURL = SLACKURL + "BG09GQ3RS/NUs694ouyawHoAFK4jJXwn1p";*/

	//Your slack
	var SLACKURL = "https://hooks.slack.com/services/";
	SLACKURL = SLACKURL + "T02GGPNQ6DN/";
	SLACKURL = SLACKURL + "B02G5QX2649/jcb5fbduFzmtCvjLg1cfKEaQ";

    var apiURL = SLACKURL;  // from globals
    var result = aa.httpClient.post(apiURL, headers, JSON.stringify(body));
	
    if (!result.getSuccess()) {
        logDebug("Slack get anonymous token error: " + result.getErrorMessage());
	} else {	
		aa.print("Slack Results: " + result.getOutput());
    }
}

function slackExplore(objExplore) {
	slack("Methods:")
	for (x in objExplore) {
		if (typeof(objExplore[x]) == "function") {
			slack("" + x + "");
			slack("   " + objExplore[x] + "\n");
		}
	}
	slack("");
	slack("Properties:")
	for (x in objExplore) {
		if (typeof(objExplore[x]) != "function") slack( x + ": " + objExplore[x] + "\n");
	}
}

function isTaskActiveLocalBatch(wfstr, itemCap) // optional process name
{
    logDebug("Grabbing wf for " + itemCap.getCustomID());
    var useProcess = false;
    var processName = "";
    var workflowResult = aa.workflow.getTasks(itemCap);
    if (workflowResult.getSuccess())
        wfObj = workflowResult.getOutput();
    else {
        logMessage("**ERROR: Failed to get workflow object: " + workflowResult.getErrorMessage());
        return false;
    }
    //logDebug("wf: " + wfObj.length);
    for (wfIndex in wfObj) {
        //logDebug(wfIndex)
        fTask = wfObj[wfIndex];
        taskName = fTask.getTaskDescription();
        //logDebug(taskName)
        if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase()) && (!useProcess || fTask.getProcessCode().equals(processName)))
            if (fTask.getActiveFlag().equals("Y"))
                return true;
            else
                return false;
    }
    return false;
}

function closeTaskWithCapId(wfstr,wfstat,wfcomment,wfnote, itemCap) { // optional process name
    var useProcess = false;
    var processName = "";
    var workflowResult = aa.workflow.getTasks(itemCap);
    if (workflowResult.getSuccess()) {
        var wfObj = workflowResult.getOutput();
    }else { 
        logMessage("**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage()); 
        return false; 
    }
    
    for (wfIndex2 in wfObj) {
        var fTask = wfObj[wfIndex2];
        if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  && (!useProcess || fTask.getProcessCode().equals(processName))) {
            var dispositionDate = aa.date.getCurrentDate();
            var stepnumber = fTask.getStepNumber();
            var processID = fTask.getProcessID();
            if (useProcess) {
                aa.workflow.handleDisposition(itemCap,stepnumber,processID,wfstat,dispositionDate, wfnote,wfcomment,systemUserObj ,"Y");
            } else {
                aa.workflow.handleDisposition(itemCap,stepnumber,wfstat,dispositionDate, wfnote,wfcomment,systemUserObj ,"Y");
            }
            logMessage("Closing Workflow Task: " + wfstr + " with status " + wfstat);
            logDebug("Closing Workflow Task: " + wfstr + " with status " + wfstat);
        }           
    }
}