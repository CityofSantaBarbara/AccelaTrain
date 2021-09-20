logDebug("start FAB;BUILDING!~!~!~ to check correct fee!");

logDebug("Start Fee Check");
newList = String(FeeItemsList).replace("[","").replace("]","");  
newList = newList + "";
feeItemArr = newList.split("|");
for (var fIndex in feeItemArr) {
    thisFeeItem = String(feeItemArr[fIndex]);
    logDebug(thisFeeItem);
    if (thisFeeItem == 'BLD_NRS_10') {
        logDebug("First IF Statement");
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) > 1000) {
            logDebug("Second IF Statement");
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
}
logDebug("End Fee Check");

logDebug("end  FAB;BUILDING!~!~!~ to check correct fee!");

