/**
 * Created by susu on 14-9-15.
 */
function get_promot_in_Itemcount(pro, n) {
    return _.find(pro.barcodes, function (promot_bar) {
        return promot_bar == n.barcode && n.count >= 3
    });
}

function len(allI, input) {
    var bItem = allI;
    bItem.count =
            input.length > 10 ?
        Number(input.substring(11, input.length)) : 1;
    return bItem;
}

function lens(itemC,input) {

        itemC.count = input.length > 10 ?
            (Number(input.substring(11, input.length)) + itemC.count) : (itemC.count + 1);
    return bItem;
}
function item_count_s(Itemcount, input) {
    return _.find(Itemcount, function (itemCount) {
        return itemCount.barcode == input.substring(0, 10)
    });
}