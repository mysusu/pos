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
        var all_input_equal = _.filter(inputs, function (input) {
            return allI.barcode == input.substring(0, 10);
        });
        if (all_input_equal) {
            if (!Itemcount.length) {
                Itemcount.push(len(allI, input));
            }
            if (Itemcount.length) {
                var item_even = item_count_s(Itemcount, input);
                if (item_even) {
                    item_count_s(Itemcount, input).count = input.length > 10 ? (Number(input.substring(11, input.length)) + item_even.count) : (item_even.count + 1);
                }

                if (!item_even) {
                    Itemcount.push(len(allI, input));
                }
            }
        }

    });


    _.map(Itemcount, function (n) {
        var even = get_promot_in_Itemcount(promot, n);
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

    var text = printText(goodsPrint, freePrint, totalMoney, cutMoney);
    console.log(text);

}