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
    //New A Occupancy Plan Check Fee
    var underSqFt = 
    String("BLD_NRS_10","BLD_NRS_11","BLD_NRS_20","BLD_NRS_21","BLD_NRS_30","BLD_NRS_31","BLD_NRS_40","BLD_NRS_41","BLD_NRS_50","BLD_NRS_51","BLD_NRS_60","BLD_NRS_61","BLD_NRS_70","BLD_NRS_71","BLD_NRS_80","BLD_NRS_81","BLD_NRS_90","BLD_NRS_91"
    ,"BLD_NRS_102","BLD_NRS_103","BLD_NRS_109","BLD_NRS_112","BLD_NRS_119","BLD_NRS_122","BLD_NRS_129","BLD_NRS_132","BLD_NRS_139","BLD_NRS_142","BLD_NRS_149","BLD_NRS_152","BLD_NRS_159","BLD_NRS_162","BLD_NRS_169","BLD_NRS_172","BLD_NRS_179"
    ,"BLD_NRS_182","BLD_NRS_189","BLD_NRS_192","BLD_NRS_199","BLD_NRS_202","BLD_NRS_209","BLD_NRS_212","BLD_NRS_219","BLD_NRS_222","BLD_NRS_229","BLD_NRS_232");
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
    var overSqFt = 
    String("BLD_NRS_010","BLD_NRS_011","BLD_NRS_020","BLD_NRS_021","BLD_NRS_030","BLD_NRS_031","BLD_NRS_040","BLD_NRS_041","BLD_NRS_050","BLD_NRS_051","BLD_NRS_060","BLD_NRS_061","BLD_NRS_070","BLD_NRS_071","BLD_NRS_080","BLD_NRS_081","BLD_NRS_090","BLD_NRS_091"
    ,"BLD_NRS_100","BLD_NRS_101","BLD_NRS_110","BLD_NRS_111","BLD_NRS_120","BLD_NRS_121","BLD_NRS_130","BLD_NRS_131","BLD_NRS_140","BLD_NRS_141","BLD_NRS_150","BLD_NRS_151","BLD_NRS_160","BLD_NRS_161","BLD_NRS_170","BLD_NRS_171","BLD_NRS_180"
    ,"BLD_NRS_181","BLD_NRS_190","BLD_NRS_191","BLD_NRS_200","BLD_NRS_201","BLD_NRS_210","BLD_NRS_211","BLD_NRS_220","BLD_NRS_221","BLD_NRS_230","BLD_NRS_231");
    if (thisFeeItem == overSqFt) {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
}
//END - ZenDesk Ticket #1969 NRS Over/Under Fee Update
logDebug("end  FAB;BUILDING!~!~!~ to check correct fee!");

