logDebug("start FAB;BUILDING!~!~!~ to check correct fee!");
logDebug("stat the under check");
for (var fiIndex in FeeItemsList) {
    thisFeeItem = FeeItemsList[fiIndex];
    if (thisFeeItem == 'BLD_NRS_10') {
        feeQty = FeeItemsQuantityList[fiIndex];
        logDebug(feeQty);
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
        }
    }
    if (thisFeeItem == 'BLD_NRS_010') {
        feeQty = FeeItemsQuantityList[fiIndex];
        if (parseFloat(feeQty) < 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft under 1000 sq ft. Please use the fee that  is (Under 1000 sq ft)");
        }
    }
}

logDebug("end  FAB;BUILDING!~!~!~ to check correct fee!");

