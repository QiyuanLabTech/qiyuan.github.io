<hr>
<p>title: VToT：通过LLMs使用思维树提示自动生成Verilog<br>
author: 周英杰...<br>
date: 2024-09-23<br>
conference: 本文被CCFB类会议，2025'DATE（Design, Automation and Test in Europe Conference）<br>
cover: images/perderT.jpg<br>
images:</p>
<ul>
<li>images/perder0.png</li>
<li>images/methodology.png</li>
<li>images/results.png</li>
</ul>
<hr>
<h1>VToT：通过LLMs使用思维树提示自动生成Verilog</h1>
<p><strong>作者</strong>: 周英杰、陈任之、李鑫宇、王静凯、方志刚、王博伟、白文强、曹其林、王蕾<br>
<strong>日期</strong>: 2024-09-23</p>
<h2>摘要</h2>
<p>本文提出了一种结构化的提示方法，显著提高LLM自动生成Verilog代码的正确性。<br>
本文生成分析并指出常规思维链(CoT)提示方法在Verilog生成任务中的不一致性；提出了VToT方法，将思维树(ToT, Tree of Thought)与Verilog生成任务相结合；通过在提示中嵌入分层约束、为LLM提供思考路径，生成更符合用户需求的Verilog代码，提高了代码生成任务的正确率。</p>
<h2>研究背景</h2>
<p>随着大型语言模型（LLM）的能力不断增强，业界越发关注如何利用LLM辅助硬件设计。虽然LLM在生成程序设计语言时例如Python时表现出较高的正确性，但生成的Verilog却存在功能正确性与语法正确性不足的问题。尽管前序研究尝试将CoT等提示方法用于Verilog生成任务，但CoT的顺序化思维与Verilog硬件描述语言的并行性具有较大的不一致性。</p>
<h2>研究方法</h2>
<p>基于链式思维与硬件描述语言的不一致性，本文提出VToT方法：</p>
<ul>
<li>VToT方法通过推理、生成两个阶段，首先明确设计约束的具体内容；之后再生成符合约束的代码。</li>
<li>VToT是一种结构化的提示方法，将复杂大规模设计拆分为多个模块，精细化LLM的思考粒度。</li>
<li>在VerilogEval和RTLLM基准测试上的实验结果表明，VToT提示增强了生成代码的语法和功能正确性。</li>
</ul>
<h2>实验结果</h2>
<p>在VerilogEval和RTLLM基准测试上的实验结果表明，VToT提示增强了生成代码的语法和功能正确性：</p>
<ul>
<li>在RTLLM 测试基准上，VToT在pass@5达到了75.9%的正确率，比基座模型提高了10.4%。</li>
<li>在VerilogEval 测试基准上，VToT发表时达到了当时最先进的性能，在pass@1的正确率为52.4%（提高了8.9%。</li>
</ul>
<h2>结论与展望</h2>
<p>随着LLM的发展，模型的推理能力越来越受到关注；VToT是LLM推理强化进程中，利用领域知识强化Verilog生成推理能力的探索性工作。<br>
未来在数据增强下，不断提高模型能力，有助于LLM越来越擅长像专业硬件工程师一样思考，进而促进LLM辅助硬件设计的能力不断进步。</p>
