// 属性柱状图数据
const typeList = [
  {
    value: 17,
    itemStyle: {
      color: "#9FA19F", // 一般
    },
  },
  {
    value: 14,
    itemStyle: {
      color: "#D33D35", // 火
    },
  },
  {
    value: 18,
    itemStyle: {
      color: "#437EE7", // 水
    },
  },
  {
    value: 8,
    itemStyle: {
      color: "#F1C242", // 电
    },
  },
  {
    value: 14,
    itemStyle: {
      color: "#5B9F3D", // 草
    },
  },
  {
    value: 8,
    itemStyle: {
      color: "#70D5FB", // 冰
    },
  },
  {
    value: 12,
    itemStyle: {
      color: "#EF8733", // 格斗
    },
  },
  {
    value: 11,
    itemStyle: {
      color: "#8746C4", // 毒
    },
  },
  {
    value: 10,
    itemStyle: {
      color: "#88542B", // 地面
    },
  },
  {
    value: 22,
    itemStyle: {
      color: "#8DB7EA", // 飞行
    },
  },
  {
    value: 7,
    itemStyle: {
      color: "#DC5079", // 超能力
    },
  },
  {
    value: 8,
    itemStyle: {
      color: "#94A138", // 虫
    },
  },
  {
    value: 8,
    itemStyle: {
      color: "#AEA985", // 岩石
    },
  },
  {
    value: 6,
    itemStyle: {
      color: "#69436D", // 幽灵
    },
  },
  {
    value: 6,
    itemStyle: {
      color: "#5360D9", // 龙
    },
  },
  {
    value: 10,
    itemStyle: {
      color: "#4E423F", // 恶
    },
  },
  {
    value: 15,
    itemStyle: {
      color: "#6F9FB5", // 钢
    },
  },
  {
    value: 4,
    itemStyle: {
      color: "#DF77E9", // 妖精
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
    data: [26.88],
  },
  // {
  //   name: "绿",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#56B839",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [120],
  // },
  // {
  //   name: "蓝",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#1111F5",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [120],
  // },
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
    data: [29.5],
  },
  // {
  //   name: "金",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#D2A741",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 120],
  // },
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
    data: [0, 43.8],
  },
  // {
  //   name: "水晶版",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#78D6FB",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 120],
  // },
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
    data: [0, 0, 26.5],
  },
  // {
  //   name: "蓝宝石",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#4261A9",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 120],
  // },
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
    data: [0, 0, 44.96],
  },
  // {
  //   name: "火红",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#EE7B3E",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 120],
  // },
  // {
  //   name: "叶绿",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#A4CD43",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 120],
  // },
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
    data: [0, 0, 0, 0, 74],
  },
  // {
  //   name: "珍珠",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#D271A0",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 0, 120],
  // },
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
    data: [0, 0, 0, 0, 47.28],
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
    data: [0, 0, 0, 0, 0, 77.5],
  },
  // {
  //   name: "魂银",
  //   type: "bar",
  //   stack: "Ad",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   color: "#A6BFE4",
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 0, 0, 120],
  // },
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
    data: [0, 0, 0, 0, 0, 0, 61],
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
    data: [0, 0, 0, 0, 0, 0, 95],
  },
  // {
  //   name: "黑2",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#2D2D2D",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 0, 0, 0, 0, 120],
  // },
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
    data: [0, 0, 0, 0, 0, 0, 0, 91.36],
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
    data: [0, 0, 0, 0, 0, 0, 0, 0, 42.5],
  },
  // {
  //   name: "Y",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#D73644",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 0, 0, 0, 0, 0, 120],
  // },
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
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 45.5],
  },
  // {
  //   name: "阿尔法蓝宝石",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#376398",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  // },
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
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251.25],
  },
  // {
  //   name: "月亮",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#3D8AD3",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  // },
  // {
  //   name: "究极之日",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#c48124",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  // },
  // {
  //   name: "究极之月",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#105ca2",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  // },
  // {
  //   name: "Let's go!皮卡丘",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#F3E050",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  // },
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
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30.5],
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
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 970],
  },
  // {
  //   name: "盾",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#AF2450",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  // },
  // {
  //   name: "晶灿钻石",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#427792",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120],
  // },
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
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56.78],
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
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133.38],
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
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 565],
  },
  // {
  //   name: "紫",
  //   type: "bar",
  //   stack: "Ad",
  //   color: "#9F619F",
  //   label: {
  //     show: true,
  //     formatter: (params) =>
  //       params.data && params.data !== 0 ? params.seriesName : "",
  //   },
  //   emphasis: {
  //     focus: "series",
  //   },
  //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 565],
  // },
];
