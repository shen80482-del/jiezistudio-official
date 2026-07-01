# JZ Studio Development Workflow

## 1. 项目定位

本项目不是 AI 建站工具站，而是杰子建站工作室官网。

品牌才是卖点，AI 只是工具。

项目面向中国大陆创业者、小微企业和个人品牌，所有正式文案必须使用中文。

## 2. 设计原则

学习全球优秀网站的设计语言，但不能照搬英文文案和国外用户习惯。

网站要体现品牌、信任、专业、交付能力。

禁止明显 AI 味：过度规整、卡片堆叠、四宫格模板、假按钮、假 UI、过多渐变色块。

每个行业网站必须拥有独立品牌人格。

## 3. 开发流程

任何新增行业网站，必须按顺序执行：

Research → Design Language → Information Architecture → Brand System → Wireframe → Visual System → Development → Review → Verification → Deploy。

未经确认，不要直接进入开发。

## 4. 技术约束

使用 Next.js App Router。

部署方式为 Cloudflare Pages Static Export。

必须保持 `output: "export"`。

构建输出目录为 `out`。

禁止引入 SSR、API Routes、Server Actions、Middleware、OpenNext、next-on-pages、nodejs_compat。

## 5. Codex Skill 规则

复杂任务优先调用：

- using-superpowers
- verification-before-completion

涉及页面视觉检查时，尽量调用：

- control-in-app-browser

## 6. 验证要求

完成前必须运行：

```bash
npm run lint
npm run build
```

必须确认静态导出成功。

必须检查 PC 和移动端。

必须检查无横向溢出。

必须检查主要链接和 CTA。

提交前必须确认 `git status`。

## 7. Git 规则

每次完成任务后：

```bash
git add .
git commit -m "clear english commit message"
git push
```

除非任务明确说不要 push。

## 8. 内容规则

不得伪造客户案例。

不得使用侵权图片。

不得声称有实体门店。

不得把演示项目伪装成真实客户项目。

不得在价格理由中强调 AI。

## 9. 增量设计与内容补充

所有正式客户页面必须使用中文，符合中国用户阅读习惯。可以学习全球优秀网站的设计语言，但正式文案不要英语化，不照搬国外表达方式和用户习惯。

设计上鼓励 Editorial Layout、真实图片、清晰信息层级、品牌故事和高级排版。每个页面都应先建立品牌信任，再引导咨询转化。

继续禁止明显 AI 模板感，包括假按钮、假 UI、四宫格模板、大面积渐变、过度圆角、卡片堆叠和机械化等宽布局。AI 只能作为工作方式，品牌才是卖点。
