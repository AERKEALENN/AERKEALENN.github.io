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
    name: 'QS三体运动模拟',
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
  },
  {
    id: 'qs-calculator',
    name: 'QS Calculator',
    desc: '深色玻璃拟态桌面计算器，支持键盘输入、计算历史和极光粒子背景。',
    tags: ['Tauri 2.0', 'React 19', 'TypeScript', 'VibeCoding'],
    features: [
      '深色玻璃拟态 UI，动态极光 Canvas 背景',
      '鼠标跟随高光反射效果',
      '横竖屏自适应布局',
      '计算历史记录（横屏模式）',
      '键盘快捷键支持',
      '自定义无边框标题栏（最小化/最大化/关闭）'
    ],
    tech: ['Tauri 2.0 + Rust 后端', 'React 19 + TypeScript', 'Vite 构建'],
    github: 'https://github.com/AERKEALENN/qs-calculator',
    gitee: 'https://gitee.com/AERKEALENN/qs-calculator',
    download: {
      gitee: 'AERKEALENN/qs-calculator',
      platforms: [
        { ext: 'deb', label: 'Linux (deb)' },
        { ext: 'rpm', label: 'Linux (rpm)' },
        { ext: 'exe', label: 'Windows (exe)' }
      ]
    }
  },
  {
    id: 'qs-aiAutomation',
    name: 'QSai 桌面自动化',
    desc: '基于视觉大模型的桌面自动化工具，自动截图、识别界面、模拟点击。',
    tags: ['Python', 'Vision LLM', 'VibeCoding'],
    features: [
      '全屏截图 + UI Automation 枚举可见控件',
      '叠加红色框 + 绿色编号（Set-of-Marks）',
      'AI 根据编号选择控件并决定动作（左键/右键/粘贴/滚动等）',
      '多步骤任务自动循环执行',
      '截图分析模式（--analyze）',
      '纯截图模式（--screenshot）'
    ],
    tech: ['Python', 'Vision LLM', 'UI Automation'],
    github: 'https://github.com/AERKEALENN/qs-aiAutomation',
    gitee: 'https://gitee.com/AERKEALENN/qs-aiAutomation',
    download: {
      gitee: 'AERKEALENN/qs-aiAutomation',
      platforms: [
        { ext: 'deb', label: 'Linux (deb)' },
        { ext: 'rpm', label: 'Linux (rpm)' },
        { ext: 'exe', label: 'Windows (exe)' }
      ]
    }
  }
];
