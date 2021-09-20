logDebug("start FAB;BUILDING!~!~!~ to check correct fee!");

logDebug("Start Fee Check");
logDebug(String(FeeItemsList));

for (var fIndex in FeeItemsList) {
    thisFeeItem = String(FeeItemsList[fIndex]);
    logDebug(thisFeeItem);
    if (thisFeeItem == 'BLD_NRS_10') {
        logDebug("First IF Statement");
        feeQty = FeeItemsQuantityList[fiIndex];
        if (parseFloat(feeQty) >= 1000) {
            logDebug("Second IF Statement");
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
        }
    }
}

logDebug("end  FAB;BUILDING!~!~!~ to check correct fee!");

