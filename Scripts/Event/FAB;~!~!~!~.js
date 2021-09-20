//********************************************************************************************************
//Script 		Script tracker 3 - Technology Fee
//Record Types:	ALL
//
//Event: 		Fee Assess Before
//
//Desc:		Whenever a fees are assessed, add an 8% technology fee before invoicing
//
//Created By: Silver Lining Solutions
//********************************************************************************************************
// Change Log
//         		Date		Name			Modification
//				08-09-2018	Chad			Initial Draft
//********************************************************************************************************

logDebug("start FAB:~/~/~/~ to add technology fee!");


logDebug("end  FAB:~/~/~/~ to add technology fee!");

for (var fiIndex in FeeItemsList) {
    thisFeeItem = FeeItemsList[fiIndex];
    if (thisFeeItem == 'BLD_NRS_10') {
        feeQty = FeeItemsQuantityList[fiIndex];
        if (parseFloat(feeQty) > 1000) {
            cancel = true;
            showMessage= true;
            Comment("Not valid");
        }
    }
}
