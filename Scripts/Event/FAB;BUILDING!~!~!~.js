logDebug("start FAB;BUILDING!~!~!~ to check correct fee!");

for (var fiIndex in FeeItemsList) {
    thisFeeItem = FeeItemsList[fiIndex];
    if (thisFeeItem == 'BLD_NRS_10') {
        feeQty = FeeItemsQuantityList[fiIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use fee New R3 Residence Plan Check Fee (Over 1000 sq ft)");
        }
    }
    if (thisFeeItem == 'BLD_NRS_010') {
        feeQty = FeeItemsQuantityList[fiIndex];
        if (parseFloat(feeQty) < 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft under 1000 sq ft. Please use fee New R3 Residence Plan Check Fee (Under 1000 sq ft)");
        }
    }
}

logDebug("end  FAB;BUILDING!~!~!~ to check correct fee!");

