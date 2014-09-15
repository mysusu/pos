/**
 * Created by susu on 14-9-15.
 */
function get_promot_in_Itemcount(pro,n){
    return _.find(pro.barcodes, function (promot_bar) {
        return promot_bar == n.barcode && n.count >= 3
    });
}