//********************************************************************************************************
//Script 		FAB;BUILDING!~!~!~
//Event: 		Fee Assess Before
//Created By: Gray Quarter
//********************************************************************************************************
// Change Log
//         		Date		Name			        Modification
//				09-20-2021	Gray Quarter			Initial Draft
//********************************************************************************************************
logDebug("start FAB;BUILDING!~!~!~ to check correct fee!");
//START - ZenDesk Ticket #1969 NRS Over/Under Fee Update
newList = String(FeeItemsList).replace("[","").replace("]","");  
newList = newList + "";
feeItemArr = newList.split("|");
for (var fIndex in feeItemArr) {
    thisFeeItem = String(feeItemArr[fIndex]);
    logDebug(thisFeeItem);
    var underSqFt = ("BLD_NRS_10","BLD_NRS_11");
    if (thisFeeItem == underSqFt) {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
        var OverSqFt = ("BLD_NRS_010","BLD_NRS_011");
    if (thisFeeItem == OverSqFt) {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) < 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
}
//END - ZenDesk Ticket #1969 NRS Over/Under Fee Update
logDebug("end  FAB;BUILDING!~!~!~ to check correct fee!");

