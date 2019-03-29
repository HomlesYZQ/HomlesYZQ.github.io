//顶部导航条
var arr1=[
	["首页","华为官网","荣耀官网","花粉俱乐部","v码(优购码)","企业购","Select Region"],
	["请登录  注册","我的订单","客户服务","网站导航","手机版","购物车(0)"]		
];
var temp=document.getElementById("temp").innerHTML;
var html1=_.template(temp);

var a1=html1({data1:arr1});
document.getElementById("hid-t").innerHTML=a1

//搜索框
var arr2=[
	["imgs/11.png","imgs/12.png"],
	["荣耀手机","笔记本&平板","潮流穿戴","智能家居","炫彩配件"],
	["荣耀v20","荣耀Magic2"]
]
var honor=document.getElementById("honor").innerHTML;
var html2=_.template(honor);
var a2=html2({data2:arr2});
document.getElementById("hid-m").innerHTML=a2

//轮播图
var arr3=["imgs/01.jpg","imgs/02.jpg","imgs/03.jpg","imgs/04.jpg","imgs/05.jpg","imgs/06.jpg","imgs/07.jpg","imgs/08.jpg","imgs/09.jpg","imgs/10.jpg"]
var lunbo=document.getElementById("lunbo").innerHTML;
var html3=_.template(lunbo);
var a3=html3({data3:arr3});
document.getElementById("hid-b").innerHTML=a3

//热销爆款
var arr4=["热销爆款","imgs/12.jpg","imgs/13.jpg"]
var hotmai=document.getElementById("hotmai").innerHTML;
var html4=_.template(hotmai);
var a4=html4({data4:arr4});
document.getElementById("cont-t").innerHTML=a4

//荣耀手机
var arr5=[
	"荣耀手机",
	["旗舰系列","畅玩系列"],
	"更多"
]
var mobile1=document.getElementById("mobile1").innerHTML;
var html5=_.template(mobile1);
var a5=html5({data5:arr5});
document.getElementById("cont-m-t").innerHTML=a5;
var arr6=[
	["荣耀V20","麒麟980处理器","￥3188"],
	["荣耀magic2","魔法全视屏 麒麟980芯片","￥3799"],
	["荣耀畅玩8C","两天一充 莱茵护眼","￥999"],
	["荣耀Note10","GT游戏加速 双卡双待 长续航","￥2699"],
	["荣耀畅玩8A","6.09英寸珍珠全面屏","￥799"],
	["荣耀9i","千元潮美旗舰","￥1199"]
]
var mobile2=document.getElementById("mobile2").innerHTML;
var html6=_.template(mobile2);
var a6=html6({data6:arr6});
document.getElementById("cont-m-b").innerHTML=a6;

//笔记本电脑&平板
var arr7=[
	"笔记本电脑&平板",
	["笔记本电脑","平板","笔记本配件"],
	"更多"
]
var mobile1=document.getElementById("mobile1").innerHTML;
var html7=_.template(mobile1);
var a7=html7({data5:arr7});
document.getElementById("cont-b-t").innerHTML=a7;
var arr8=[
	["荣耀MagicBook","12小时长续航 独显轻薄","￥4899"],
	["荣耀平板5","10.1英寸全高清屏","￥1499"],
	["荣耀Waterplay 10.1英寸","","￥1699"],
	["荣耀Waterplay 8英寸","","￥1499"],
	["荣耀畅玩平板2 9.6英寸","","￥1049"],
	["荣耀畅玩平板2 8英寸","","￥988"]
]
var mobile2=document.getElementById("mobile2").innerHTML;
var html8=_.template(mobile2);
var a8=html8({data6:arr8});
document.getElementById("cont-b-b").innerHTML=a8;

//潮流穿戴
var arr9=[
	"潮流穿戴",
	["手表/手环"],
	"更多"
]
var mobile1=document.getElementById("mobile1").innerHTML;
var html9=_.template(mobile1);
var a9=html9({data5:arr9});
document.getElementById("cont-n-t").innerHTML=a9;
var arr10=[
	["荣耀手表魔法系列","爆款现货速发","￥849"],
	["荣耀手表梦幻系列","专为女性定制运动智能潮表","￥849"],
	["荣耀手环4","触控大彩屏 实时心率检测","￥195"],
	["荣耀手环4 Running版","专业跑步检测","￥99"],
	["荣耀小K 2 儿童手表","七重定位精准守护","￥279"],
	["荣耀畅玩手环 A2","连续心率监测","￥129"]
]
var mobile2=document.getElementById("mobile2").innerHTML;
var html10=_.template(mobile2);
var a10=html10({data6:arr10});
document.getElementById("cont-n-b").innerHTML=a10;

//炫彩配件
var arr11=[
	"炫彩配件",
	["贴膜","保护壳","保护套","耳机","音箱","电源/充电器/线材","自拍杆/支架","智能硬件","摄像机/镜头"],
	"更多"
]
var mobile1=document.getElementById("mobile1").innerHTML;
var html11=_.template(mobile1);
var a11=html11({data5:arr11});
document.getElementById("cont-l-t").innerHTML=a11;
var arr12=[
	["荣耀FlyPods无线耳机","享分期免息/购机赢好礼","￥749"],
	["荣耀智能体脂秤","科学指导减脂","￥99"],
	["荣耀xSport 运动蓝牙耳机","10天待机，11小时续航","￥199"],
	["荣耀移动电源10000mAh","双向快充/多重保护","￥139"],
	["荣耀引擎耳机2代","可调音耳机","￥79"],
	["荣耀车载充电器  快充版","含Type C数据线","￥79"],
	["荣耀心晴耳机","心率智能耳机","￥99"]
]
var mobile2=document.getElementById("mobile2").innerHTML;
var html12=_.template(mobile2);
var a12=html12({data6:arr12});
document.getElementById("cont-l-b").innerHTML=a12;

//智能家居
var arr13=[
	"智能家居",
	["路由器","电视盒子","电力猫"],
	"更多"
]
var mobile1=document.getElementById("mobile1").innerHTML;
var html13=_.template(mobile1);
var a13=html13({data5:arr13});
document.getElementById("cont-r-t").innerHTML=a13;
var arr14=[
	["荣耀路由Pro 2","四核全千兆","￥329"],
	["荣耀路由2S","4颗信号放大器 信号更穿墙","￥179"],
	["荣耀路由 X2","双核双千兆","￥147"],
	["荣耀YOYO智能音箱","智能通话，能听会说","￥189"],
	["荣耀路由Pro","双千兆网速 大户型覆盖","￥288"],
	["荣耀盒子Pro","智能语音蓝牙操控","￥399"],
	["荣耀存储","即插即备份 1TB大存储空间","￥679"]
]
var mobile2=document.getElementById("mobile2").innerHTML;
var html14=_.template(mobile2);
var a14=html14({data6:arr14});
document.getElementById("cont-r-b").innerHTML=a14;

//底部售后
var ass1=["百强企业 品质保证","7天退货 15天换货","48元起免运费","1000家维修网点 全国联保"];
var end1=document.getElementById("end1").innerHTML;
var txt1=_.template(end1);
var b1=txt1({data7:ass1});
document.getElementById("btm-t").innerHTML=b1;

var ass2=[
	["购物相关","购物指南","配送方式","支付方式","常见问题"],
	["保修与退换货","保修政策","退换货政策","退换货流程","保修状态查询","配件防伪查询"],
	["维修与技术支持","售后网点","预约维修","手机寄修","配件价格查询","上门服务"],
	["特色服务","防伪查询","补购保障","以旧换新","礼品包装"],
	["关于我们","公司介绍","华为商城简介","华为线下门店","荣耀线下门店","诚征英才","意见反馈"],
	["友情链接","华为集团","华为CBG官网","荣耀官网","花粉俱乐部","网站地图"]
]
var end2=document.getElementById("end2").innerHTML;
var txt2=_.template(end2);
var b2=txt2({data8:ass2});
document.getElementById("btm-m").innerHTML=b2;

var ass3=["400-088-6888","7x24小时客服热线（仅收市话费）","在线客服","关注Vmall："]
var end3=document.getElementById("end3").innerHTML;
var txt3=_.template(end3);
var b3=txt3({data9:ass3});
document.getElementById("btm-r").innerHTML=b3;

var ass4=[
	"imgs/14.png",
	[
		"华为集团|华为CBG官网|荣耀官网|花粉俱乐部|华为应用市场|EMUI|华为终端云空间|开发者联盟|华为商城手机版|网站地图",
		"隐私声明 服务协议 COOKIES Copyright © 2012-2019 华为软件技术有限公司 版权所有 保留一切权利",
		"公安备案 苏公网安备32011402010009号 | 苏ICP备17040376号-6",
		"增值电信业务经营许可证：苏B2-20130048号| 网络文化经营许可证：苏网文[2015] 1599-026号"
	],
	"imgs/11.jpg",
	"imgs/13.png"
]
var end4=document.getElementById("end4").innerHTML;
var txt4=_.template(end4);
var b4=txt4({data10:ass4});
document.getElementById("btm-b").innerHTML=b4;