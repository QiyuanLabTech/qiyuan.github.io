const newsData = {
    1: {
        title: "启元实验室突破性研发新型脑机接口技术",
        date: "2024-01-15",
        image: "https://ai-public.mastergo.com/ai/img_res/76e8d81f73f8c9058ba24dd326256861.jpg",
        content: `在突破性的研究中，启元实验室的科研团队成功开发出新一代脑机接口技术。这项创新技术在信号采集精确度和传输延迟方面都取得了显著突破，为未来脑机接口的广泛应用奠定了重要基础。
        研究团队负责人张教授表示，新技术采用了创新的神经信号处理算法，将信号采集精确度提高了 40%，同时将传输延迟降低到了前所未有的 10 毫秒以内。这一突破使得脑机接口在医疗康复、智能控制等领域的应用前景更加广阔。
        目前，该技术已经完成了初步的临床试验，在帮助运动障碍患者恢复日常活动能力方面取得了令人振奋的成果。实验室计划在未来半年内进行更大规模的临床验证，并积极推进技术的产业化进程。`
    },
    2: {
        title: "启元实验室参与国际脑科学研讨会",
        date: "2024-01-10",
        image: "https://ai-public.mastergo.com/ai/img_res/2b3a1d9c2a796eae79fb2260d8a16619.jpg",
        content: `启元实验室研究团队应邀参加了在瑞士苏黎世举办的第十二届国际脑科学研讨会，并就最新研究成果进行了主题演讲。
        在为期三天的会议中，我们的团队展示了在脑机接口技术领域的最新突破，引起了与会专家的广泛关注。多位国际知名学者对我们的研究给予了高度评价，并表达了开展合作研究的意向。
        此次参会不仅展示了启元实验室的研究实力，也为我们开启了更多国际合作的机会。我们已经与多个国际研究机构达成了初步合作意向，这将有助于加速我们的技术创新和成果转化。`
    },
    3: {
        title: "启元实验室获得重大科研项目资助",
        date: "2024-01-05",
        image: "https://ai-public.mastergo.com/ai/img_res/ffd7ac3c49d72e3bc0201b8ebdad2ace.jpg",
        content: `国家科技部正式批准启元实验室申报的"新一代智能神经网络芯片"重大科研项目，将提供为期五年的研发经费支持。
        该项目旨在开发新一代高性能、低功耗的神经网络专用芯片，这将为脑机接口技术的发展提供强大的硬件支持。项目总投资达到 5 亿元，这是启元实验室成立以来获得的最大规模科研资助。
        实验室主任李教授表示，项目的获批标志着国家对脑科学研究的高度重视，也是对启元实验室研究实力的充分认可。我们将组建专门的项目团队，确保研究工作顺利推进。`
    },
    4: {
        title: "启元实验室成功招募顶尖研究人才",
        date: "2023-12-28",
        image: "https://ai-public.mastergo.com/ai/img_res/59330479a1ad058a208f0c97c044ad22.jpg",
        content: `启元实验室近期成功引进多位海外知名高校的优秀研究人才，进一步增强了实验室的研发实力。
        新加入的研究人员包括来自麻省理工学院、斯坦福大学等顶尖院校的博士后研究员，他们在脑科学、人工智能等领域都有着深厚的研究背景和突出成果。
        人才引进工作负责人王博士表示，优秀人才的加入将为实验室注入新的活力，推动研究工作向更高水平发展。实验室还将继续加大人才引进力度，为科研人员提供更好的研究环境和发展平台。`
    },
    5: {
        title: "启元实验室参加2023科技创新展",
        date: "2023-12-20",
        image: "https://ai-public.mastergo.com/ai/img_res/060f5971f6b40d060665ffff0ed4ef1a.jpg",
        content: `在北京国际会议中心举办的2023科技创新成果展览会上，启元实验室展示了多项前沿技术成果，吸引了众多参观者的关注。
        本次展会上，我们重点展示了新一代脑机接口原型系统、智能神经网络芯片等创新成果。通过现场演示和互动体验，让参观者直观感受到了脑机接口技术的魅力。
        展会期间，多家企业表达了合作意向，这将有助于加快我们的技术成果转化步伐。同时，我们也收集到了很多有价值的市场反馈，这对未来的研发方向具有重要的参考意义。`
    },
    6: {
        title: "启元实验室与多家科技企业达成战略合作",
        date: "2023-12-15",
        image: "https://ai-public.mastergo.com/ai/img_res/f609a32ee78967b740942da9332de315.jpg",
        content: `启元实验室近日与多家领先科技企业签署战略合作协议，共同推进脑机接口技术的商业化应用。
        此次合作涉及医疗器械、智能硬件等多个领域的知名企业，双方将在技术开发、产品设计、市场推广等方面展开全方位合作。这标志着启元实验室的研究成果正在加速走向市场。
        实验室发言人表示，产学研结合是科技创新的重要途径，我们将与合作伙伴一起，努力将前沿科技转化为造福社会的实际产品。`
    }
};

function openModal(id) {
    const modal = document.getElementById('newsModal');
    const data = newsData[id];
    
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDate').textContent = data.date;
    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalContent').innerHTML = data.content.split('\n').map(p => `<p class="mb-4">${p.trim()}</p>`).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('newsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('newsModal');
    if (event.target == modal) {
        closeModal();
    }
}