/*
 * *Created by Poleung
 * *Email 30930572@qq.com
 * *Create date 2020-07-25
 * *Copyright LockDataV
 * *Desc data visualization project based on echarts4.0.js.
 */

//01-02.词云图;
function getWordData() {
    var dataList1 = [
        {name: '冰墩墩', value: 500},
        {name: '冬奥', value: 403},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '敦厚', value: 39},
        {name: '限量', value: 36},
        {name: '秒光', value: 46},
        {name: '火爆', value: 42},
        {name: '集齐', value: 28},
        {name: '吉祥物', value: 11},
        {name: '冰墩墩', value: 50},
        {name: '冬奥', value: 43},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '敦厚', value: 39},
        {name: '限量', value: 36},
        {name: '秒光', value: 46},
        {name: '火爆', value: 42},
        {name: '集齐', value: 28},
        {name: '吉祥物', value: 11},
        {name: '冰墩墩', value: 500},
        {name: '冬奥', value: 403},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '敦厚', value: 39},
        {name: '限量', value: 36},
        {name: '秒光', value: 46},
        {name: '火爆', value: 42},
        {name: '集齐', value: 28},
        {name: '吉祥物', value: 11},
        {name: '冰墩墩', value: 50},
        {name: '冬奥', value: 43},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '敦厚', value: 39},
        {name: '限量', value: 36},
        {name: '秒光', value: 46},
        {name: '火爆', value: 42},
        {name: '集齐', value: 28},
        {name: '吉祥物', value: 11},
        {name: '吉祥物', value: 11},
        {name: '冰墩墩', value: 500},
        {name: '冬奥', value: 403},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '敦厚', value: 39},
        {name: '限量', value: 36},
        {name: '秒光', value: 46},
        {name: '火爆', value: 42},
        {name: '集齐', value: 28},
        {name: '吉祥物', value: 11},
        {name: '冰墩墩', value: 50},
        {name: '冬奥', value: 43},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '敦厚', value: 39},
        {name: '限量', value: 36},
        {name: '秒光', value: 46},
        {name: '火爆', value: 42},
        {name: '集齐', value: 28},
        {name: '吉祥物', value: 11},
        {name: '售罄', value: 29}
    ];

    var dataList2 = [
        {name: '雪容融', value: 500},
        {name: '冬残奥会', value: 403},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '灯笼', value: 39},
        {name: '限量', value: 36},
        {name: '火爆', value: 42},
        {name: '吉祥物', value: 11},
        {name: '雪容融', value: 50},
        {name: '冬残奥会', value: 43},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '灯笼', value: 39},
        {name: '限量', value: 36},
        {name: '火爆', value: 42},
        {name: '吉祥物', value: 11},
        {name: '雪容融', value: 50},
        {name: '冬残奥会', value: 43},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '灯笼', value: 39},
        {name: '限量', value: 36},
        {name: '火爆', value: 42},
        {name: '吉祥物', value: 11},
        {name: '雪容融', value: 50},
        {name: '冬残奥会', value: 43},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '灯笼', value: 39},
        {name: '限量', value: 36},
        {name: '火爆', value: 42},
        {name: '吉祥物', value: 11},
        {name: '雪容融', value: 50},
        {name: '冬残奥会', value: 43},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '灯笼', value: 39},
        {name: '限量', value: 36},
        {name: '火爆', value: 42},
        {name: '吉祥物', value: 11},
        {name: '雪容融', value: 50},
        {name: '冬残奥会', value: 43},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '灯笼', value: 39},
        {name: '限量', value: 36},
        {name: '火爆', value: 42},
        {name: '吉祥物', value: 11},
        {name: '雪容融', value: 50},
        {name: '冬残奥会', value: 43},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '灯笼', value: 39},
        {name: '限量', value: 36},
        {name: '火爆', value: 42},
        {name: '吉祥物', value: 11},
        {name: '雪容融', value: 50},
        {name: '冬残奥会', value: 43},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '灯笼', value: 39},
        {name: '限量', value: 36},
        {name: '火爆', value: 42},
        {name: '吉祥物', value: 11},
        {name: '雪容融', value: 50},
        {name: '冬残奥会', value: 43},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '灯笼', value: 39},
        {name: '限量', value: 36},
        {name: '火爆', value: 42},
        {name: '吉祥物', value: 11},
        {name: '雪容融', value: 50},
        {name: '冬残奥会', value: 43},
        {name: '北京', value: 23},
        {name: '可爱', value: 32},
        {name: '灯笼', value: 39},
        {name: '限量', value: 36},
        {name: '火爆', value: 42},
        {name: '吉祥物', value: 11},
        {name: '售罄', value: 29}
    ]

    var img1 = '../images/logo1.png';
    var img2 = '..//images/logo2.png';

    //Dom渲染；
    getWord(dataList1, img1, "ec1");
    getWord(dataList2, img2, "ec2");
}

//03.词云图;
function getRingsData() {
    var dataList = [
        {name: '国际奥委会分配', value: 3.38},
        {name: '品牌授权', value: 0.8},
        {name: '顶级赞助商', value: 1.57},
        {name: '国内赞助商', value: 6.6},
        {name: '门票收入', value: 1.18},
        {name: '政府补贴', value: 0.94}
    ];

    //Dom渲染；
    getRings(dataList, "ec3");
}

//04.散点图;
function getScatterData() {
    var plantCap = [
        {name: '建筑业', value: 972.37},
        {name: '科学研究和技术服务业', value: 69.26},
        {name: '文化、体育和娱乐业', value: 60.06},
        {name: '信息传输、软件和信息技术服务业', value: 20.05},
        {name: '租赁和商务服务业', value: 19.88},
        {name: '公共管理、社会保障和社会组织', value: 10.62},
        {name: '交通运输、仓储和邮政', value: 6.42},
        {name: '住宿和餐饮', value: 2.21},
        {name: '卫生和社会工作', value: 1.96},
        {name: '房地产业', value: 0.45}
    ]

    getScatter(plantCap, "ec4");
}

//05.词云图;
function getBarData() {
    var dataName = ['1980年萨拉热窝', '1988年卡尔加里', '1992年阿尔贝维尔', '1994年利勒哈默尔', '1998年长野', '2002年盐湖城', '2006年都灵', '2010年温哥华', '2014年索契', '2018年平昌', '2022年北京'];
    var dataList = [4.79, 14, 36, 17, 186, 19, 27, 64, 510, 129, 15.6];
    getBar(dataName, dataList, "ec5");
}

//06.桑基图;
function getSankeyData() {
    getSankey("ec6");
}

//07.分类饼图;
function getCatPiesData() {
    getCatPies("ec7");
}

//08.饼图;
function getPiesData() {
    var dataList = [
        {name: '公共资金', value: 32.81},
        {name: '私人资金', value: 60.06}
    ]

    getPies(dataList, "ec8");
}

//09.双柱状图;
function getDoubleBarsData() {
    getDoubleBars("ec9");
}

//10.3/4环图;
function getHalfRingsData() {
    var dataList = [
        {name: '制造业', value: 1.38},
        {name: '批发和零售业', value: 0.12},
        {name: '金融业', value: 0.11},
        {name: '农、林、牧、渔业', value: 0.11},
        {name: '采矿业', value: 0.09}
    ];

    var dataTotal = [];
    for (var i = 0; i < dataList.length; i++) {
        dataTotal.push(dataList[i].value);
    }
    var total = parseFloat(sum(dataTotal)).toFixed(2);
    getHalfRings(dataList, total, "ec10");
}

//10.柱图;
function getHalfRingsData() {
    var dataList = [
        {name: '制造业', value: 1.38},
        {name: '批发和零售业', value: 0.12},
        {name: '金融业', value: 0.11},
        {name: '农、林、牧、渔业', value: 0.11},
        {name: '采矿业', value: 0.09}
    ];

    var dataTotal = [];
    for (var i = 0; i < dataList.length; i++) {
        dataTotal.push(dataList[i].value);
    }
    var total = parseFloat(sum(dataTotal)).toFixed(2);
    getHalfRings(dataList, total, "ec10");
}

//11.混合图;
function getMixLineData() {
    getMixLine("ec11");
}

//12.混合图;
function getMixData() {
    getMix("ec12");
}

//13.面积图;
function getAreaData() {
    getArea("ec13");
}

//15.状图;
function getBarPerData() {
    getBarPer("ec15");
}

//16.状图;
function getBarLinesData() {
    getBarLines("ec16");
}

//17.状图;
function getBarSnowData() {
    getBarSnow("ec17");
}
/*****************************************************************/

/*合计对象数组求和*/
function sum(arr) {
    return eval(arr.join("+"));
};