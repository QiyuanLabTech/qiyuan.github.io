
// 点击框架示意图
function openImageModal(imageSrc) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modalImage.classList.remove('scale-100'); // 确保初始状态为正常大小
    modalImage.classList.add('scale-100'); // 添加缩放类
    document.getElementById('imageModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    document.getElementById('imageModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    const modalImage = document.getElementById('modalImage');
    modalImage.classList.remove('scale-100'); // 关闭时移除缩放类
}
const papers = {
    paper1: {
       title: "ASNPC：面向SNN和类脑处理器协同设计的自动化生成框架",
       releaseTime: '2025-03-19', 
       content: `
               <div class="prose max-w-none">
                   <div class="mb-12" id="conference-intro">
                       <p class="small-text text-gray-800 leading-relaxed mb-6">
                           2025年4月，我应邀前往法国里昂，参加 DATE 会议，同时作了题为"ASNPC: An Automated Generation Framework for SNN and Neuromorphic Processor Co-design"的学术汇报。
                       </p>
                       <p class="text-gray-600 leading-relaxed">
                           我于3月30日上午从上海出发，经12小时的飞机，于当地时间 3月30日晚上抵达法国里昂。我的文章题目为"ASNPC: An Automated Generation Framework for SNN and Neuromorphic Processor Co-design"。该研究为液态状态机（Liquid State Machine，LSM）设计了软硬件协同设计框架，来获取硬件开销与精度的权衡。
                       </p>
                   </div>
                   <div class="rounded-xl overflow-hidden mb-12" id="conference-section">
                       <img src="images/date.jpg"
                           alt="DATE会议现场"
                           class="w-1/2 h-[500px] object-contain object-top mx-auto">
                       <p class="text-sm text-gray-500 mt-3 text-center">DATE 2025 会议现场</p>
                   </div>
                   <div class="mb-12">
                       <h3 class="text-xl font-bold text-primary mb-4">研究背景与创新</h3>
                       <p class="text-gray-700 leading-relaxed">
                           物联网技术的普及彻底改变了实时数据采集和自主系统管理模式，然而在实际部署中暴露出一个核心挑战：多样化应用场景对高效能边缘计算日益增长的需求。尽管传统深度神经网络（DNN）具备合格的计算性能，但其高昂的计算复杂度与边缘设备严格的功耗限制存在根本性冲突。为了应对IOT技术复杂的应用场景，传统方法通常是在通用硬件上运行现有的算法。然而，由于硬件开发往往落后于算法的进步，这种方法常常因为缺乏足够的优化而遇到性能瓶颈。一种可行的解决方案是为新算法设计专用的硬件架构，但设计和验证这种专用硬件的过程既耗时又昂贵。算法定义硬件（Algorithm-Defined Hardware）是一种新的设计范式，旨在将算法需求直接转化为硬件架构，从而针对特定应用优化性能。其核心设计理念是根据算法的特性和需求创建定制化的硬件，将硬件转变为一个支持动态算法部署的灵活平台，满足复杂场景中对低功耗和高效率的迫切需求。
                       </p>
                   </div>
                   <div class="mb-12" id="research-section">
                       <h3 class="text-xl font-bold text-primary mb-4">研究框架示意图</h3>
                       <img src="images/Framework.png" alt="ASNPC框架示意图" class="w-1/2 rounded-lg shadow-sm cursor-pointer mx-auto" onclick="openImageModal('images/Framework.png')">
                   </div>
                   <div class="bg-gray-50 p-8 rounded-xl mb-12">
                       <h3 class="text-xl font-bold text-primary mb-4">主要研究成果</h3>
                       <p class="text-gray-700 mb-6">
                           为了解决以上问题，我们提出了一种名 ASNPC 的软硬件协同设计框架，核心创新包括：
                       </p>
                       <div class="grid grid-cols-3 gap-6">
                           <div class="bg-white p-6 rounded-lg shadow-sm">
                               <div class="text-primary mb-4"><i class="fas fa-microchip text-2xl"></i></div>
                               <p class="text-gray-700">采用算法定义硬件的设计理念，构建协同设计框架，为一系列应用场景生成优化的 LSM 架构，使用针对算法需求定制的专用神经形态处理器。</p>
                           </div>
                           <div class="bg-white p-6 rounded-lg shadow-sm">
                               <div class="text-primary mb-4"><i class="fas fa-code text-2xl"></i></div>
                               <p class="text-gray-700">开发一种基于可配置 RTL 代码模块的端到端设计方法，能够自动生成适用于各种场景的 LSM 硬件实现，具有硬件开销方面的优势。</p>
                           </div>
                           <div class="bg-white p-6 rounded-lg shadow-sm">
                               <div class="text-primary mb-4"><i class="fas fa-chart-line text-2xl"></i></div>
                               <p class="text-gray-700">使用 MOTPE 算法搜索 LSM 的协同设计参数，并在三个数据集上展示了协同设计的效率。</p>
                           </div>
                       </div>
                           <p class="text-gray-700 mt-6">
                              实验结果表明，和其他基于硬件的端到端生成方法相比，我们的方案在资源占用、延迟和吞吐量上表现更优。在算法方面，所使用的MOTPE算法能更迅速地找到更优的帕累托前沿。总体而言，MOTPE算法在不同应用场景下均能实现高精度结果。通过选择合适的参数，它在精度和硬件成本之间达成有效平衡，大幅削减了硬件资源占用，同时精度仅适度下降。这表明，尽管精度略有牺牲，但这种硬件优化在资源受限的环境中显著提升了系统效率。
                           </p>
                   </div>
                   <div class="bg-gradient-to-r from-primary/5 to-gray-50 p-8 rounded-xl">
                       <h3 class="text-xl font-bold text-primary mb-4">访问感悟</h3>
                       <p class="text-gray-700 leading-relaxed">
                           通过这次 DATE 2025 之行，我在学术上有所收获，结识了许多相同研究方向的同学，和他们的交流让我获益良多，也让我体验了不同的文化与生活方式。希望未来有更多这样的机会，让我能够不断前行。
                       </p>
                   </div>
               </div>
           </div>
              `
          },
    paper2: {
          title: "2025 年度技术总结会",
          releaseTime: '2025-01-09',
          content: `
                       <div class="p-8">
                       <!-- Team Photo -->
                       <div class="mb-12">
                       <div class="flex mb-12">
                       <div class="w-1/3 pr-8">
                       <div class="h-64 bg-[url('images/yingjieZhou.jpg')] bg-cover bg-center rounded-lg"></div>
                       </div>
                       <div class="w-2/3">
                       <h4 class="text-xl font-semibold mb-2">周英杰 - 基于架构规划的硬件设计自动化</h4>
                       <ul class="text-gray-600">
                         <li>周英杰博士做了“基于架构规划的硬件设计自动化”的汇报，总结了推理大模型应用于硬件设计架构图的前沿研究，并提出基于架构推理的大规模代码生成的探索研究。</li>
                         <li>李姗姗专家针对代码生成环节，给予了指导性意见，建议将层次化思想运用在规划方法中，以应对项目集成时的错误积累问题。</li>
                       </ul>
                       </div>
                       </div>
                       
                       <div class="flex mb-12">
                       <div class="w-1/3 pr-8">
                       <div class="h-64 bg-[url('images/jingkaiWang.jpg')] bg-cover bg-center rounded-lg"></div>
                       </div>
                       <div class="w-2/3">
                       <h4 class="text-xl font-semibold mb-2">王静凯 - 面向芯片前端设计的语料增强技术研究</h4>
                       <ul class="text-gray-600">
                         <li>王静凯博士做了“面向芯片前端设计的语料增强技术研究”的汇报，阐述了硬件语料的现状与现有研究，并提出基于演化算法和大语言模型的激励生成的探索研究。</li>
                         <li>李珊珊专家针对算子设计环节，提出将硬件特征和大语言模型有机结合的提议，以应对适配程度不高导致的效率低下问题。</li>
                       </ul>
                       </div>
                       </div>
                       
                       <div class="flex mb-12">
                       <div class="w-1/3 pr-8">
                       <div class="h-64 bg-[url('images/zhigangFang.jpg')] bg-cover bg-center rounded-lg"></div>
                       </div>
                       <div class="w-2/3">
                       <h4 class="text-xl font-semibold mb-2">方志刚 - 基于大语言模型的开源 Verilog Linting 框架</h4>
                      <ul class="text-gray-600">
                         <li>方志刚博士做了“基于大语言模型的开源Verilog Linting框架”的汇报，首次将大模型技术应用于Verilog代码缺陷检查环节，通过评测Llama-3.1和DeepSeek V2.5等5个大模型对Verilog代码的缺陷检测能力，在降低检测成本的同时提高了检测率，这项工作证明了大模型在代码缺陷检查中的潜力。</li>
                         <li>与会专家表示，Verilog代码的语法复杂、风格多样，传统规则引擎难以覆盖全部场景，而大语言模型在处理自然语言与复杂代码模式识别方面具备天然优势，具有广阔的应用前景。</li>
                       </ul>
                       </div>
                       </div>
                       
                       <div class="flex mb-12">
                       <div class="w-1/3 pr-8">
                       <div class="h-64 bg-[url('images/xiangyuWang.jpg')] bg-cover bg-center rounded-lg"></div>
                       </div>
                       <div class="w-2/3">
                       <h4 class="text-xl font-semibold mb-2">王向宇 - 面向 SNN 和类脑处理器协同设计的自动生成框架</h4>
                       <ul class="text-gray-600">
                         <li>王向宇硕士做了“面向 SNN 和类脑处理器协同设计的自动生成框架”的汇报，报告了当前软硬件协同设计中的困难，基于算法定义硬件的概念，提出基于MOTPE算法与硬件代码自动生成的软硬件协同设计框架。相关专家针对算法的部署与应用，给予了指导性意见，建议将该方法应用在更大的算法上，以扩展其应用场景增加普适性。</li>
                       </ul>
                       </div>
                       </div>
                       </div>

                       <div class="flex mb-12">
                       <div class="w-1/3 pr-8">
                       <div class="h-64 bg-[url('images/yuanLi.jpg')] bg-cover bg-center rounded-lg"></div>
                       </div>
                       <div class="w-2/3">
                       <h4 class="text-xl font-semibold mb-2">李媛 - 脉冲神经网络的结构搜索与优化技术研究</h4>
                       <ul class="text-gray-600">
                         <li>李媛硕士做了“脉冲神经网络的结构搜索与优化技术研究”的汇报，总结了类脑处理器与脉冲神经网络算法的软硬件协同设计研究现状，并提出基于多保真评估的脉冲神经网络架构搜索相关研究。袁学锋专家针对NAS算法的设计，提出在搜索过程中，需要结合分析不同模块的有效性，重点关注那些对模型精度提升贡献较大的模块，从而提高搜索效率并优化最终结果。</li>
                       </ul>
                       </div>
                       </div>
                       </div>
                       `
                                   },
    paper3: {
        title: "基于图神经网络的社交网络分析方法",
        content: `
            <div class="space-y-6">
            <div class="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <div><i class="fas fa-user-circle mr-2"></i>*** 研究员</div>
            <div><i class="fas fa-calendar-alt mr-2"></i>2024-01-05</div>
            <div><i class="fas fa-tag mr-2"></i>图神经网络, 社交网络分析</div>
            </div>
            <div class="prose max-w-none">
            <h3 class="text-lg font-semibold mb-4">摘要</h3>
            <p class="mb-6">本文提出了一种新型图神经网络架构，专门用于大规模社交网络中的用户行为分析和预测。该方法在保持高效率的同时，显著提升了分析精度。</p>
            <h3 class="text-lg font-semibold mb-4">研究动机</h3>
            <p class="mb-6">传统的社交网络分析方法在处理大规模数据时往往面临效率和精度的权衡问题。本研究旨在通过创新的图神经网络设计解决这一难题。</p>
            <h3 class="text-lg font-semibold mb-4">方法创新</h3>
            <p class="mb-6">本研究的主要创新点包括：</p>
            <ul class="list-disc pl-6 mb-6">
            <li>层次化图注意力机制</li>
            <li>动态邻居采样策略</li>
            <li>多任务学习框架</li>
            </ul>
            <h3 class="text-lg font-semibold mb-4">实验评估</h3>
            <p class="mb-6">在真实社交网络数据集上的实验表明：</p>
            <ul class="list-disc pl-6 mb-6">
            <li>用户行为预测准确率提升 8.5%</li>
            <li>计算效率提升 60%</li>
            <li>模型可扩展性显著增强</li>
            </ul>
            <h3 class="text-lg font-semibold mb-4">未来展望</h3>
            <p>本研究为社交网络分析领域提供了新的研究思路，后续将进一步探索在更复杂场景中的应用。</p>
            </div>
            </div>
            `
                        },
};
function openModal(paperId) {
    const paper = papers[paperId];
    document.getElementById('modalTitle').textContent = paper.title;
    document.getElementById('modalContent').innerHTML = paper.content;
    document.getElementById('modal').classList.remove('hidden');
    const releaseTimeSpan = document.getElementById('releaseTime');
    // 填充模态框中的时间
    releaseTimeSpan.textContent = `Release Time: ${paper.releaseTime}`;
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    document.getElementById('modalContent').scrollTop = 0;
}
document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});