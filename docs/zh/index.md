---
pageType: home
linkFeed: blog-zh

hero:
  autoplayMs: 5000
  slides:
    - name: '专注于AI硬件的基准测试'
      text: '10+评测芯片'
      chips: ['华为A2、A3', '寒武纪芯片', '天数芯片']
      actions:
        - text: '快速入门'
          link: '/zh/guide/introduction'
          theme: 'alt'
      background: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2000&auto=format&fit=crop'
      num: 9
      alt: 'Slide 1'
      tabLabel: '评测芯片'
    - name: '芯片评测体系'
      text: '多维度性能画像'
      chips: ['推理性能', '训练吞吐', '能效比']
      actions:
        - text: '查看评测'
          link: '/zh/guide/inference_general_overview'
          theme: 'brand'
      background: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop'
      alt: 'Slide 2'
      num: 11
      tabLabel: '开源评测方法论'
    - name: '标准模型评测'
      text: '覆盖主流模型'
      chips: ['BERT', 'ResNet', 'Whisper']
      actions:
        - text: '模型列表'
          link: '/zh/guide/inference_llm_overview'
          theme: 'alt'
      background: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?q=80&w=2000&auto=format&fit=crop'
      alt: 'Slide 3'
      num: 2
      tabLabel: '任务类型'
    - name: '开源测试框架'
      text: '与生态深度协同'
      chips: ['PyTorch', 'TensorFlow', 'ONNX Runtime']
      actions:
        - text: '开始集成'
          link: '/zh/guide/quick-start'
          theme: 'brand'
      background: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop'
      alt: 'Slide 4'
      num: 11
      tabLabel: '先进模型测评'
    - name: '业务场景评测'
      text: '端到端真实场景'
      chips: ['搜索', '推荐', '语音助手']
      actions:
        - text: '查看案例'
          link: '/zh/blog/kubecon'
          theme: 'alt'
      background: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop'
      alt: 'Slide 5'
      num: 11
      tabLabel: '业务数据模拟'

articles:
  - title: '研究成果'
    desc: '描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字'
    items:
      - title: 'XPU-micro benchmark'
        desc: '以Roofline 模型为核心，通过可视化算力上限与内存带宽上限的双重约束，清晰界定芯片的性能边界。探索芯片的理论上限，性能边界，为后续的算子优化空间做探索。'
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop'
        link: '/guide/micro_overview'
      - title: 'XPU-inference benchmark'
        desc: '以算子，模型为颗粒度，探索模型端到端的性能表现，覆盖典型场景，典型输入，和典型延迟要求。以实际业务为导向，探索模型最终的上线的性能结果。'
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop'
        link: '/guide/inference_general_overview'
      - title: 'XPU-training benchmark'
        desc: '以确定性，准确性，容错性为核心，探索模型在训练过程中的性能表现。探索模型在训练过程中的收敛性，和训练速度。'
        image: 'https://images.unsplash.com/photo-1550041473-d296a1a8ec52?q=80&w=1000&auto=format&fit=crop'
        link: '/guide/training_overview'
      - title: 'AI Hardware Evaluation'
        desc: '针对不同 AI 硬件架构的深度评测，分析其在不同工作负载下的表现，提供选型建议和优化方向。'
        image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1000&auto=format&fit=crop'
        link: '#'
      - title: 'System Optimization'
        desc: '全栈系统优化方案，从驱动层到框架层，最大化释放硬件潜力，提升整体计算效率。'
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop'
        link: '#'
  - title: '研究亮点'
    desc: '展示ByteMLPerf在AI硬件基准测试领域的最新突破和关键特性。'
    items:
      - title: 'XPU-micro benchmark'
        desc: '以Roofline 模型为核心，通过可视化算力上限与内存带宽上限的双重约束，清晰界定芯片的性能边界。探索芯片的理论上限，性能边界，为后续的算子优化空间做探索。'
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop'
        link: '/guide/micro_overview'
      - title: 'XPU-inference benchmark'
        desc: '以算子，模型为颗粒度，探索模型端到端的性能表现，覆盖典型场景，典型输入，和典型延迟要求。以实际业务为导向，探索模型最终的上线的性能结果。'
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop'
        link: '/guide/inference_general_overview'
      - title: 'XPU-training benchmark'
        desc: '以确定性，准确性，容错性为核心，探索模型在训练过程中的性能表现。探索模型在训练过程中的收敛性，和训练速度。'
        image: 'https://images.unsplash.com/photo-1550041473-d296a1a8ec52?q=80&w=1000&auto=format&fit=crop'
        link: '/guide/training_overview'
      - title: 'AI Hardware Evaluation'
        desc: '针对不同 AI 硬件架构的深度评测，分析其在不同工作负载下的表现，提供选型建议和优化方向。'
        image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1000&auto=format&fit=crop'
        link: '#'
      - title: 'System Optimization'
        desc: '全栈系统优化方案，从驱动层到框架层，最大化释放硬件潜力，提升整体计算效率。'
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop'
        link: '#'
---
