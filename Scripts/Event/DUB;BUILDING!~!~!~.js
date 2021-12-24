//DUB;BUILDING!~!~!~.js
//DUB:BUILDING/*/*/*
//Added by Gray Quarter
//This script is to make sure there is a Document Group, Document Category, & Description
logDebug("Starting DUB ");
var docArray = recordDocArray;
var errors = [];
if(docArray && docArray.length > 0) {
    for(var z in docArray) {
        var docModel = docArray[z];
        var docName = docModel.fileName;
        var category = docModel.docCategory;
        var description = docModel.docDescription;
        if(!category || !description) {
            errors.push(docName + " is missing a category and/or description.");
        }
    }
}

if(errors.length > 0) {
    showMessage = true;
    comment(errors.join("<br>"));
    comment("Please fill out before you continue your upload.");
    cancel = true;
}