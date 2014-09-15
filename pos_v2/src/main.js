
//function get_promot_in_Itemcount(promot,n){
//    return _.find(promot.barcodes, function (promot_bar) {
//        return promot_bar == n.barcode && n.count >= 3
//    });
//}
//TODO: Please write code in this file.
function printInventory(inputs) {
    var allItem = loadAllItems();
    var promot = loadPromotions()[0];
    var Itemcount = [];
    var promotCount = [];
    var goodsPrint = [];
    var freePrint = [];
    var totalMoney = 0;
    var cutMoney = 0;


    _.map(allItem, function (allI) {
        _.map(inputs,function(input){
            if (allI.barcode == input.substring(0, 10)) {
                if (!Itemcount.length) {
                    var aItem = allI;
                    aItem.count = input.length > 10 ? Number(input.substring(11, input.length)) : 1;
                    Itemcount.push(aItem);
                } else {

                    for (var c = 0, length = Itemcount.length; c < length; c++) {
                        if (Itemcount[c].barcode == input.substring(0, 10)) {
                            Itemcount[c].count = input.length > 10 ?
                                (Number(input.substring(11, input.length)) + Itemcount[c].count) : (Itemcount[c].count + 1);
                            break;
                        }
                        if (Itemcount[c].barcode != input.substring(0, 10) && c == Itemcount.length - 1) {
                            var bItem = allI;
                            bItem.count = input.length > 10 ?
                                Number(input.substring(11, input.length)) : 1;
                            Itemcount.push(bItem);
                        }
                    }
                }
            }
        });
    });
    _.map(Itemcount, function (n) {
        var even = get_promot_in_Itemcount(promot,n);
        if (even) {
            n.subTotalm = (n.count - parseInt(n.count / 3)) * n.price;
            var promotCounts = {name: n.name, price: n.price, unit: n.unit, count: 1};
            promotCount.push(promotCounts);
        }
        else {
            n.subTotalm = n.count * n.price;
        }
    });
    _.map(Itemcount, function (itemCount) {
        goodsPrint.push("名称：" + itemCount.name + "，数量：" + itemCount.count + itemCount.unit + "，单价："
            + itemCount.price.toFixed(2) + "(元)，小计：" + itemCount.subTotalm.toFixed(2)
            + "(元)\n");
        totalMoney += itemCount.subTotalm;
    });
    _.map(promotCount, function (proC) {
        freePrint.push("名称：" + proC.name + "，数量：" + proC.count + proC.unit + "\n");
        cutMoney += proC.price;
    });

    var text =  printText(goodsPrint,freePrint,totalMoney,cutMoney);
    console.log(text);

}