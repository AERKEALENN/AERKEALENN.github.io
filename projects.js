const PROJECTS = [
  {
    id: 'qs-timer',
    name: 'QS魔方计时',
    desc: '多人魔方计时器，支持键盘/点击记录成绩、自动排名、金银铜高亮及时间差显示。',
    tags: ['Tauri 2.0', 'React 19', 'TypeScript', 'VibeCoding'],
    features: [
      '极光粒子动态背景',
      '自定义无边框标题栏（拖拽/最小化/最大化/关闭）',
      '键盘任意键记录选手成绩',
      '点击圆环区域也可触发',
      '成绩榜自动排名，金银铜高亮',
      '时间差（gap）显示'
    ],
    tech: ['Tauri 2.0 + Rust 后端', 'React 19 + TypeScript', 'Vite 构建'],
    github: 'https://github.com/AERKEALENN/qs-timer',
    gitee: 'https://gitee.com/AERKEALENN/qs-timer',
    download: {
      gitee: 'AERKEALENN/qs-timer',
      platforms: [
        { ext: 'deb', label: 'Linux (deb)' },
        { ext: 'rpm', label: 'Linux (rpm)' },
        { ext: 'exe', label: 'Windows (exe)' }
      ]
    }
  },
  {
    id: 'qs-theebody',
    name: '三体运动模拟',
    desc: '三体运动数值模拟与3D可视化，支持多种初始化模式和碰撞检测。',
    tags: ['Tauri 2.0', 'React 19', 'Three.js', 'VibeCoding'],
    features: [
      '默认 / 随机 / 自定义三种初始化模式',
      'Verlet + RK4 双积分器，重力软化处理',
      '碰撞检测（低速反弹 / 高速合并）',
      '逃逸阻尼稳定机制',
      '玻璃拟态 UI，动态 Canvas 背景',
      '实时 HUD（时间、FPS、天体信息）',
      '轨迹尾巴渲染（预分配缓冲区优化）'
    ],
    tech: ['Tauri 2.0 + Rust 后端', 'React 19 + TypeScript', 'Three.js 3D 渲染', 'Vite 6 构建'],
    github: 'https://github.com/AERKEALENN/qs-theebody',
    gitee: 'https://gitee.com/AERKEALENN/qs-theebody',
    download: {
      gitee: 'AERKEALENN/qs-theebody',
      platforms: [
        { ext: 'deb', label: 'Linux (deb)' },
        { ext: 'rpm', label: 'Linux (rpm)' },
        { ext: 'exe', label: 'Windows (exe)' }
      ]
    }
  }
];
