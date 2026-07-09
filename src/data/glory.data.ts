/**
 * 荣誉与奖项数据
 */
interface GloryRecord {
  year: string;
  competition: string;
  award: string;
}

const gloryData: GloryRecord[] = [
  {
    year: '2025年',
    competition: '2025年广西网络与信息安全职业技能竞赛',
    award: '一等奖',
  },
  {
    year: '2025年',
    competition: '第22届全国大学生信息安全与对抗技术竞赛——博弈对抗赛',
    award: '一等奖',
  },
  {
    year: '2025年',
    competition: '第22届全国大学生信息安全与对抗技术竞赛',
    award: '一等奖',
  },
  {
    year: '2025年',
    competition: 'UCSCCTF 2025高校网络安全联合选拔赛-团队赛',
    award: '二等奖',
  },
  {
    year: '2025年',
    competition: '第四届SQCTF',
    award: '一等奖',
  },
  {
    year: '2025年',
    competition: '2025年米好信安CTF线上挑战赛夏季赛',
    award: '二等奖',
  },
  {
    year: '2025年',
    competition: '2025年计算机与信息安全学院工控安全技能竞赛',
    award: '一等奖、三等奖',
  },
  {
    year: '2024年',
    competition: '第21届全国大学生信息安全与对抗技术竞赛',
    award: '一等奖',
  },
  {
    year: '2024年',
    competition: '第七期《方班演武堂》课程活动漏洞成果排行',
    award: '第三名',
  },
  {
    year: '2024年',
    competition: '第四届信息安全铁人三项"长城杯"决赛',
    award: '三等奖',
  },
  {
    year: '2024年',
    competition: '136届广交会安全众测成果排行',
    award: '第七名',
  },
  {
    year: '2024年',
    competition: '第九届腾讯游戏安全技术竞赛',
    award: '优秀奖',
  },
  {
    year: '2024年',
    competition: '广西网络与信息安全职业技能竞赛',
    award: '二等奖',
  },
  {
    year: '2024年',
    competition: '桂林电子科技大学首届研究生网络安全创新大赛',
    award: '一等奖、二等奖',
  },
  {
    year: '2024年',
    competition: '桂林电子科技大学超频链接杯',
    award: '二等奖',
  },
  {
    year: '2024年',
    competition: '第三届工控安全技能挑战赛',
    award: '一等奖、二等奖、优秀奖',
  },
  {
    year: '2023年',
    competition: '第十六届全国大学生信息安全竞赛-创新实践能力赛-全国总决赛',
    award: '三等奖',
  },
  {
    year: '2023年',
    competition: '第十六届全国大学生信息安全竞赛-创新实践能力赛-华南赛区',
    award: '一等奖',
  },
  {
    year: '2023年',
    competition: '第四届信息安全铁人三项"长城杯"决赛',
    award: '三等奖',
  },
  {
    year: '2023年',
    competition: '2023年信息安全与对抗技术竞赛-个人挑战赛',
    award: '一等奖、二等奖、三等奖',
  },
  {
    year: '2023年',
competition: `2023年桂林电子科技大学"追'烽'逐影 登'烽'造极"——工控夺旗挑战赛`,
    award: '一等奖、二等奖、三等奖、优秀奖',
  },
  {
    year: '2022年',
    competition: '2022年首届广西大学生"英招杯"网络安全技能大赛',
    award: '冠军、一等奖、二等奖',
  },
  {
    year: '2022年',
    competition: '2022年广西教育系统网络安全攻防实战演练（高校组）',
    award: '优秀奖',
  },
  {
    year: '2022年',
    competition: '2022第十五届全国大学生信息安全竞赛（实践赛）',
    award: '赛区三等奖',
  },
  {
    year: '2022年',
    competition: '2022第二届"网刃杯"网络安全技术大赛',
    award: '三等奖（4th）',
  },
  {
    year: '2022年',
    competition: '2022年第19届全国大学生信息安全与技术对抗技术竞赛（广西赛区）',
    award: '一等奖、二等奖',
  },
  {
    year: '2021年',
    competition: '2021第十四届全国大学生信息安全竞赛（实践赛）',
    award: '赛区二等奖',
  },
  {
    year: '2021年',
    competition: '2021第十二届中国大学生服务外包创新创业大赛中部区域赛',
    award: 'A类二等奖',
  },
  {
    year: '2021年',
    competition: '2021第一届"网刃杯"网络安全技术大赛',
    award: '三等奖（5th）',
  },
  {
    year: '2021年',
    competition: '2021春秋杯网络安全联赛秋季赛',
    award: '9th',
  },
  {
    year: '2021年',
    competition: '2021字节跳动ByteCTF',
    award: 'Top50',
  },
  {
    year: '2021年',
    competition: '2021第六届全国网络安全空间安全技术大赛',
    award: '三等奖',
  },
  {
    year: '2021年',
    competition: '2021中国高校计算机网络技术挑战赛（华南赛区）',
    award: '一等奖',
  },
  {
    year: '2021年',
    competition: '2021年第18届全国大学生信息安全与技术对抗技术竞赛（广西赛区）',
    award: '一等奖',
  },
  {
    year: '2021年',
    competition: '2021广西教育攻防演练',
    award: '三等奖（5th）',
  },
  {
    year: '2021年',
    competition: '首届《方班演武堂》课程活动积分排行榜（个人榜）',
    award: '3rd',
  },
  {
    year: '2021年',
    competition: '首届《方班演武堂》课程活动积分排行榜（高校榜）',
    award: '6th',
  },
  {
    year: '2020年',
    competition: '2020第十三届全国大学生信息安全竞赛（实践赛）',
    award: '赛区三等奖',
  },
  {
    year: '2020年',
    competition: '2020第十三届全国大学生信息安全竞赛（作品赛）',
    award: '三等奖',
  },
  {
    year: '2020年',
    competition: '2020第四届强网杯线上赛',
    award: '强网先锋',
  },
  {
    year: '2020年',
    competition: '2020年广西大学生信息安全技术创新实践能力大赛',
    award: '二等奖',
  },
  {
    year: '2020年',
    competition: '2020中国高校计算机网络技术挑战赛（华南赛区）',
    award: '三等奖',
  },
  {
    year: '2019年',
    competition: '2019第十二届全国大学生信息安全竞赛（实践赛）',
    award: '赛区二等奖',
  },
  {
    year: '2019年',
    competition: '2019"第五空间"网络空间安全创新能力大赛（网络安全创新实践大赛）',
    award: '二等奖',
  },
  {
    year: '2019年',
    competition: '第三届红帽杯网络安全攻防大赛',
    award: '优胜奖',
  },
  {
    year: '2019年',
    competition: '2019工业信息安全技能大赛线下巡回赛',
    award: '优秀奖',
  },
  {
    year: '2019年',
    competition: '第三届强网杯全国网络安全挑战赛线上赛',
    award: '优胜奖',
  },
  {
    year: '2019年',
    competition: '第五届广西网络安全技术大赛',
    award: '三等奖、优秀奖',
  },
  {
    year: '2017年',
    competition: '天枢中西部高校网络安全邀请赛',
    award: '优胜奖',
  },
  {
    year: '2017年',
    competition: '第一届"百度杯"信息安全攻防总决赛',
    award: '优秀竞技选手',
  },
  {
    year: '2017年',
    competition: '"平衡信息杯"第二届南宁市网络安全攻防技术大赛决赛',
    award: '二等奖',
  },
  {
    year: '2016年',
    competition: '"安恒杯"首届南宁市网络安全攻防技术大赛决赛',
    award: '一等奖',
  },
  {
    year: '2016年',
    competition: '第13届（2016）信息安全与对抗技术竞赛分组对抗赛',
    award: '一等奖',
  },
  {
    year: '2016年',
    competition: '"天融信杯"第二届广西网络安全技术大赛决赛',
    award: '二等奖',
  },
];

export type { GloryRecord };
export default gloryData;
