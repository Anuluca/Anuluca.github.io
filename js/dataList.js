// 属性柱状图数据
const typeList = [
  {
    value: 200,
    itemStyle: {
      color: "#9FA19F",
    },
  },
  {
    value: 100,
    itemStyle: {
      color: "#D33D35",
    },
  },
  {
    value: 100,
    itemStyle: {
      color: "#437EE7",
    },
  },
  {
    value: 300,
    itemStyle: {
      color: "#F1C242",
    },
  },
  {
    value: 500,
    itemStyle: {
      color: "#5B9F3D",
    },
  },
  {
    value: 130,
    itemStyle: {
      color: "#70D5FB",
    },
  },
  {
    value: 200,
    itemStyle: {
      color: "#EF8733",
    },
  },
  {
    value: 200,
    itemStyle: {
      color: "#8746C4",
    },
  },
  {
    value: 200,
    itemStyle: {
      color: "#88542B",
    },
  },
  {
    value: 200,
    itemStyle: {
      color: "#8DB7EA",
    },
  },
  {
    value: 200,
    itemStyle: {
      color: "#DC5079",
    },
  },
  {
    value: 200,
    itemStyle: {
      color: "#94A138",
    },
  },
  {
    value: 200,
    itemStyle: {
      color: "#AEA985",
    },
  },
  {
    value: 200,
    itemStyle: {
      color: "#69436D",
    },
  },
  {
    value: 200,
    itemStyle: {
      color: "#5360D9",
    },
  },
  {
    value: 200,
    itemStyle: {
      color: "#4E423F",
    },
  },
  {
    value: 200,
    itemStyle: {
      color: "#6F9FB5",
    },
  },
  {
    value: 200,
    itemStyle: {
      color: "#DF77E9",
    },
  },
];

// 时长柱状图数据
const gameTimeList = [
  {
    name: "红",
    type: "bar",
    stack: "Ad",
    color: "#EA3729",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [120],
  },
  {
    name: "绿",
    type: "bar",
    stack: "Ad",
    color: "#56B839",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [120],
  },
  {
    name: "蓝",
    type: "bar",
    stack: "Ad",
    color: "#1111F5",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [120],
  },
  {
    name: "皮卡丘",
    type: "bar",
    stack: "Ad",
    color: "#F9D857",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [120],
  },
  {
    name: "金",
    type: "bar",
    stack: "Ad",
    color: "#D2A741",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 120],
  },
  {
    name: "银",
    type: "bar",
    stack: "Ad",
    color: "#C0C0C0",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 120],
  },
  {
    name: "水晶版",
    type: "bar",
    stack: "Ad",
    color: "#78D6FB",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 120],
  },
  {
    name: "红宝石",
    type: "bar",
    stack: "Ad",
    color: "#AF241C",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 120],
  },
  {
    name: "蓝宝石",
    type: "bar",
    stack: "Ad",
    color: "#4261A9",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 120],
  },
  {
    name: "绿宝石",
    type: "bar",
    stack: "Ad",
    color: "#479E2C",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 120],
  },
  {
    name: "火红",
    type: "bar",
    stack: "Ad",
    color: "#EE7B3E",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 120],
  },
  {
    name: "叶绿",
    type: "bar",
    stack: "Ad",
    color: "#A4CD43",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 120],
  },
  {
    name: "钻石",
    type: "bar",
    stack: "Ad",
    color: "#87B0F3",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 120],
  },
  {
    name: "珍珠",
    type: "bar",
    stack: "Ad",
    color: "#D271A0",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 120],
  },
  {
    name: "白金",
    type: "bar",
    stack: "Ad",
    color: "#B29F33",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 120],
  },
  {
    name: "心金",
    type: "bar",
    stack: "Ad",
    color: "#F1CE63",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 120],
  },
  {
    name: "魂银",
    type: "bar",
    stack: "Ad",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    color: "#A6BFE4",
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 120],
  },
  {
    name: "黑",
    type: "bar",
    stack: "Ad",
    color: "#2D2D2D",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "白",
    type: "bar",
    stack: "Ad",
    color: "#CBCBCB",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "黑2",
    type: "bar",
    stack: "Ad",
    color: "#2D2D2D",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "白2",
    type: "bar",
    stack: "Ad",
    color: "#CBCBCB",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "X",
    type: "bar",
    stack: "Ad",
    color: "#295DA1",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "Y",
    type: "bar",
    stack: "Ad",
    color: "#D73644",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "红(VC)",
    type: "bar",
    stack: "Ad",
    color: "#EA3729",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "绿(VC)",
    type: "bar",
    stack: "Ad",
    color: "#56B839",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "蓝(VC)",
    type: "bar",
    stack: "Ad",
    color: "#1111F5",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "皮卡丘(VC)",
    type: "bar",
    stack: "Ad",
    color: "#F9D857",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "金(VC)",
    type: "bar",
    stack: "Ad",
    color: "#DBBA6B",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "银(VC)",
    type: "bar",
    stack: "Ad",
    color: "#C0C0C0",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "水晶版(VC)",
    type: "bar",
    stack: "Ad",
    color: "#78D6FB",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "欧米伽红宝石",
    type: "bar",
    stack: "Ad",
    color: "#9D3420",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "阿尔法蓝宝石",
    type: "bar",
    stack: "Ad",
    color: "#376398",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },

  {
    name: "太阳",
    type: "bar",
    stack: "Ad",
    color: "#E4A762",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "月亮",
    type: "bar",
    stack: "Ad",
    color: "#3D8AD3",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "究极之日",
    type: "bar",
    stack: "Ad",
    color: "#c48124",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "究极之月",
    type: "bar",
    stack: "Ad",
    color: "#105ca2",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "Let's go!皮卡丘",
    type: "bar",
    stack: "Ad",
    color: "#F3E050",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "Let's go!伊布",
    type: "bar",
    stack: "Ad",
    color: "#A18768",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "剑",
    type: "bar",
    stack: "Ad",
    color: "#479FE3",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "盾",
    type: "bar",
    stack: "Ad",
    color: "#AF2450",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "晶灿钻石",
    type: "bar",
    stack: "Ad",
    color: "#427792",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "明亮珍珠",
    type: "bar",
    stack: "Ad",
    color: "#865463",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "传说：阿尔宙斯",
    type: "bar",
    stack: "Ad",
    color: "#759F91",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "朱",
    type: "bar",
    stack: "Ad",
    color: "#E55548",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
  {
    name: "紫",
    type: "bar",
    stack: "Ad",
    color: "#9F619F",
    label: {
      show: true,
      formatter: (params) =>
        params.data && params.data !== 0 ? params.seriesName : "",
    },
    emphasis: {
      focus: "series",
    },
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  },
];
