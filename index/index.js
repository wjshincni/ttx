// ============================================================
// 1. 项目数据（增加 mobile 字段）
// ============================================================
const projects = [
    { id: 'page0', title: '从头制作一个网页', price: '完工后报价', thumb: 'index/item0.png', tag: 'hot', mobile: false},
    { id: 'page1', title: '桌球游戏', price: '￥3.9', thumb: 'index/item1.png', tag: 'hot', mobile: true },
    { id: 'page2', title: '黑人抬棺', price: '￥3.9', thumb: 'index/item2.gif', tag: 'hot', mobile: false },
    { id: 'page3', title: '打地鼠', price: '￥2.9', thumb: 'index/item3.png', tag: 'hot', mobile: false },
    { id: 'page4', title: '人工智障', price: '￥3.9', thumb: 'index/item4.png', tag: '', mobile: false },
    { id: 'page5', title: '简易乒乓', price: '￥2.9', thumb: 'index/item5.png', tag: '', mobile: false },
    { id: 'page6', title: '贪吃虫', price: '￥1.9', thumb: 'index/item6.png', tag: '', mobile: false },
    { id: 'page7', title: '恐怖图片', price: '￥3.9', thumb: 'index/item7.png', tag: '', mobile: false },
    { id: 'page8', title: '刮刮乐', price: '￥1.9', thumb: 'index/item8.png', tag: 'new', mobile: false },
    { id: 'page9', title: '查分系统', price: '￥1.9', thumb: 'index/item9.png', tag: 'new', mobile: false },
    { id: 'page10', title: '三角洲行动随机配装', price: '￥0.9', thumb: 'index/item10.gif', tag: 'new', mobile: false },
    { id: 'page11', title: '太阳系模拟', price: '￥1.9', thumb: 'index/item11.gif', tag: 'new', mobile: false },
    { id: 'page12', title: '烟花', price: '￥2.9', thumb: 'index/item12.gif', tag: 'hot', mobile: false },
    { id: 'page13', title: '箭头塔防', price: '￥2.9', thumb: 'index/item13.png', tag: 'hot', mobile: false },
    { id: 'page14', title: '高考倒计时', price: '￥0.9', thumb: 'index/item14.gif', tag: '', mobile: false },
    { id: 'page15', title: '节日祝福', price: '￥1.9', thumb: 'index/item15.png', tag: 'hot', mobile: false },
    { id: 'page16', title: '科技节代做', price: '￥9.9', thumb: 'index/item16.png', tag: 'hot', mobile: true },
    { id: 'page17', title: '表白代做', price: '￥5.9', thumb: 'index/item17.png', tag: 'hot', mobile: false },
];

// ============================================================
// 昼夜主题逻辑（不变）
// ============================================================
const themeToggleBtn = document.getElementById('themeToggleBtn');
function isDayTime() {
    const hour = new Date().getHours();
    return hour >= 8 && hour < 18;
}
function setTheme(isDay) {
    const html = document.documentElement;
    html.classList.remove('theme-day', 'theme-night');
    if (isDay) {
        html.classList.add('theme-day');
        localStorage.setItem('siteTheme', 'day');
    } else {
        html.classList.add('theme-night');
        localStorage.setItem('siteTheme', 'night');
    }
}
function initTheme() {
    const saveTheme = localStorage.getItem('siteTheme');
    if (saveTheme) {
        setTheme(saveTheme === 'day');
    } else {
        setTheme(isDayTime());
    }
}
function toggleThemeMode() {
    if (themeToggleBtn.classList.contains('rotate')) return;
    themeToggleBtn.classList.add('rotate');
    setTimeout(() => themeToggleBtn.classList.remove('rotate'), 500);
    const nowIsDay = document.documentElement.classList.contains('theme-day');
    setTheme(!nowIsDay);
}
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleThemeMode);
}

// ============================================================
// 2. 聊天数据（不变）
// ============================================================
const chatMessages = [
    { type: 'user', text: 'DIY网页有什么用处吗？' },
    { type: 'service', text: '用处包括：一般商用(项目展示)、个人娱乐（整蛊同学、自建博客）' },
    { type: 'user', text: '那我要DIY一个网页' },
    { type: 'service', text: '请点击下面按钮，找到心仪的网页模板点击“购买”按钮，系统会给出帮工微信号并给出一个4位验证码，在加上帮工微信后发送四位验证码即可开始DIY' },
    { type: 'user', text: '都有什么需求可以满足呢？' },
    { type: 'service', text: '基础服务：更换模板内的字体、照片、视频、音频、玩法、网页内置功能。甚至从头开始零基础制作一个属于你的网页！<br>进阶服务：静态网页托管、远程控制安装、远程调试软件、我的世界/泰拉瑞亚小型多人服' }
];

// ============================================================
// 3. DOM 引用（不变）
// ============================================================
const startChatScroll = document.getElementById('startChatScroll');
const catalogGrid = document.getElementById('catalogGrid');
const modalOverlay = document.getElementById('purchaseModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalCancelBtn = document.getElementById('modalCancelBtn');
const modalConfirmBtn = document.getElementById('modalConfirmBtn');
const buyerNameInput = document.getElementById('buyerName');
const buyProductInput = document.getElementById('buyProduct');
const toastWrap = document.getElementById('toastWrap');
const serviceFloat = document.getElementById('serviceFloat');
const serviceTip = document.getElementById('serviceTip');
const tipClose = document.querySelector('.tip-close');
const successModal = document.getElementById('successModal');
const successCloseBtn = document.getElementById('successCloseBtn');
const successFinishBtn = document.getElementById('successFinishBtn');
const wxText = document.getElementById('wxText');
const codeText = document.getElementById('codeText');
const copyWxBtn = document.getElementById('copyWxBtn');
const copyCodeBtn = document.getElementById('copyCodeBtn');

// ===== 竖屏弹窗引用 =====
const portraitModal = document.getElementById('portraitModal');
const portraitCloseBtn = document.getElementById('portraitCloseBtn');
const portraitCancelBtn = document.getElementById('portraitCancelBtn');
const portraitConfirmBtn = document.getElementById('portraitConfirmBtn');
let pendingTargetNum = null; // 暂存跳转目标

// ============================================================
// 4. 状态（不变）
// ============================================================
let isTransitioning = false;
let currentPageId = 'startPage';
let buttonLock = false;
let currentVerifyCode = '';
let submitLock = false;
const tianApiKey = '868ffe977d3b445b541e7e28acb51e41';

// ============================================================
// 5. 工具函数（不变）
// ============================================================
function randomCode() {
    return String(Math.floor(Math.random() * 9000 + 1000));
}
function getNowTime() {
    const d = new Date();
    return d.toLocaleString('zh-CN', { hour12: false });
}
function showToast(text, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = text;
    toastWrap.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ============================================================
// 6. 启动页聊天（不变）
// ============================================================
let msgIndex = 0;
let msgElements = [];
let typingTimer = null;
function renderStartChat() {
    if (!startChatScroll) return;
    startChatScroll.innerHTML = '';
    msgElements = [];
    chatMessages.forEach(function (msg) {
        const item = document.createElement('div');
        item.className = 'chat-item ' + msg.type;
        const msgDiv = document.createElement('div');
        msgDiv.className = 'msg';
        msgDiv.textContent = '';
        item.appendChild(msgDiv);
        startChatScroll.appendChild(item);
        msgElements.push({
            element: item,
            msgDiv: msgDiv,
            text: msg.text
        });
    });
    msgIndex = 0;
    showNextMessage();
}
function showNextMessage() {
    if (msgIndex >= msgElements.length) {
        if (startChatScroll) startChatScroll.scrollTop = startChatScroll.scrollHeight;
        return;
    }
    const item = msgElements[msgIndex];
    const msgDiv = item.msgDiv;
    const text = item.text;
    item.element.classList.add('visible');
    let charIndex = 0;
    function typeChar() {
        if (charIndex < text.length) {
            if (text.substr(charIndex, 4) === '<br>') {
                msgDiv.innerHTML += '<br>';
                charIndex += 4;
            } else {
                msgDiv.innerHTML += text.charAt(charIndex);
                charIndex++;
            }
            typingTimer = setTimeout(typeChar, 30);
        } else {
            setTimeout(() => {
                msgIndex++;
                showNextMessage();
            }, 1000);
        }
    }
    typeChar();
}

// ============================================================
// 7. 渲染目录卡片（修改试用逻辑）
// ============================================================
function renderCatalog() {
    if (!catalogGrid) return;
    catalogGrid.innerHTML = '';
    // 排序：hot热销 > new新品 > 普通
    const sortedProjects = [...projects].sort(function(a, b) {
        const getLevel = (item) => {
            if (item.tag === 'hot') return 0;
            if (item.tag === 'new') return 1;
            return 2;
        }
        return getLevel(a) - getLevel(b);
    });

    sortedProjects.forEach(function (proj) {
        const card = document.createElement('div');
        card.className = 'project-card';
        if (proj.tag) {
            let tagText = '';
            let tagClass = '';
            if (proj.tag === 'new') { tagText = '新品'; tagClass = 'new'; }
            else if (proj.tag === 'hot') { tagText = '热销'; tagClass = 'hot'; }
            else if (proj.tag === 'wait') { tagText = '预告'; tagClass = 'wait'; }
            const tagDom = document.createElement('span');
            tagDom.className = `card-tag ${tagClass}`;
            tagDom.innerText = tagText;
            card.appendChild(tagDom);
        }

        const thumb = document.createElement('div');
        thumb.className = 'card-thumb';
        thumb.style.backgroundImage = `url(${proj.thumb}), linear-gradient(135deg, #6e8efb, #a777e3)`;
        thumb.style.backgroundSize = 'cover';
        thumb.style.backgroundPosition = 'center';

        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = proj.title;

        const price = document.createElement('div');
        price.className = 'card-price';
        price.textContent = proj.price;

        const actions = document.createElement('div');
        actions.className = 'card-actions';

        const tryBtn = document.createElement('button');
        tryBtn.className = 'nav-btn';
        if(proj.id === 'page0'){
            tryBtn.textContent = '详情';
        }else{
            tryBtn.textContent = '试用';
        }
        tryBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (buttonLock) return;
            buttonLock = true;
            const num = proj.id.replace('page', '');
            const isPortrait = window.innerHeight > window.innerWidth;
            // ★★★ 关键修改：只有竖屏 + mobile === true 时才弹窗 ★★★
            if (isPortrait && proj.mobile === true) {
                openPortraitModal(num);
                setTimeout(() => buttonLock = false, 400);
            } else {
                // 横屏 或 没有移动版，直接跳转桌面版
                window.location.href = `${num}/index.html`;
                setTimeout(() => buttonLock = false, 400);
            }
        });

        const buyBtn = document.createElement('button');
        buyBtn.className = 'nav-btn buy-btn';
        buyBtn.textContent = '购买';
        buyBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (buttonLock) return;
            buttonLock = true;
            openPurchaseModal(proj.title);
            setTimeout(() => buttonLock = false, 400);
        });

        actions.appendChild(tryBtn);
        actions.appendChild(buyBtn);
        card.appendChild(thumb);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(actions);
        catalogGrid.appendChild(card);
    });
}

// ============================================================
// 8. 站内页面切换（不变）
// ============================================================
function switchPage(targetId) {
    if (isTransitioning) return;
    if (targetId === currentPageId) return;
    const oldPage = document.getElementById(currentPageId);
    const newPage = document.getElementById(targetId);
    if (!oldPage || !newPage) {
        console.error('页面不存在:', currentPageId, targetId);
        return;
    }
    isTransitioning = true;
    oldPage.classList.remove('show');
    setTimeout(function () {
        newPage.classList.add('show');
        currentPageId = targetId;
        isTransitioning = false;
        if (targetId === 'page11') renderCatalog();
    }, 400);
}

// ============================================================
// 9. 弹窗控制（不变）
// ============================================================
function openPurchaseModal(productName) {
    buyProductInput.value = productName;
    buyerNameInput.value = '';
    modalOverlay.classList.add('active');
}
function closePurchaseModal() {
    modalOverlay.classList.remove('active');
}
function closeSuccessModal() {
    successModal.classList.remove('active');
}

// ===== 竖屏弹窗控制（不变） =====
function openPortraitModal(targetNum) {
    pendingTargetNum = targetNum;
    portraitModal.classList.add('active');
}
function closePortraitModal() {
    portraitModal.classList.remove('active');
    pendingTargetNum = null;
}

// ============================================================
// 10. 下单提交（不变）
// ============================================================
function submitBuyOrder() {
    if (submitLock) return;
    const name = buyerNameInput.value.trim();
    const product = buyProductInput.value.trim();
    if (!name) {
        showToast('请填写您的称呼', 'error');
        return;
    }
    if (!product) {
        showToast('商品信息异常！', 'error');
        return;
    }
    const chineseEnglishRegex = /^[\u4e00-\u9fa5a-zA-Z ]+$/;
    if (!chineseEnglishRegex.test(name)) {
        showToast('称呼只能包含中文或英文字符', 'error');
        return;
    }
    if (!chineseEnglishRegex.test(product)) {
        showToast('项目只能包含中文或英文字符', 'error');
        return;
    }
    submitLock = true;
    currentVerifyCode = randomCode();
    const code = currentVerifyCode;
    const time = getNowTime();
    const msgContent = '称呼' + name + ', 项目' + product + ', 验证码' + code + ', 下单时间' + time;
    console.log('📤 发送内容：', msgContent);
    $.post('https://apis.tianapi.com/robot/index', {
        key: tianApiKey,
        question: msgContent
    })
    .done(function (res) {
        console.log('推送成功', res);
    })
    .fail(function (err) {
        console.error('推送失败', err);
    })
    .always(function () {
        setTimeout(function () {
            submitLock = false;
        }, 1200);
    });
    codeText.value = code;
    closePurchaseModal();
    successModal.classList.add('active');
}

// ============================================================
// 11. 复制文本（不变）
// ============================================================
function copyText(inputDom) {
    inputDom.select();
    document.execCommand('copy');
    showToast('复制成功');
}

// ============================================================
// 12. 事件绑定（不变）
// ============================================================
const startBtn = document.getElementById('startBtn');
if (startBtn) {
    startBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (buttonLock) return;
        buttonLock = true;
        switchPage('page11');
        setTimeout(() => buttonLock = false, 400);
    });
}
document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-target]');
    if (!btn) return;
    if (btn.id === 'startBtn') return;
    const target = btn.dataset.target;
    if (target) {
        e.preventDefault();
        if (buttonLock) return;
        buttonLock = true;
        switchPage(target);
        setTimeout(() => buttonLock = false, 400);
    }
});
modalCloseBtn.addEventListener('click', closePurchaseModal);
modalCancelBtn.addEventListener('click', closePurchaseModal);
modalConfirmBtn.addEventListener('click', submitBuyOrder);
successCloseBtn.addEventListener('click', closeSuccessModal);
successFinishBtn.addEventListener('click', closeSuccessModal);
copyWxBtn.addEventListener('click', function () { copyText(wxText); });
copyCodeBtn.addEventListener('click', function () { copyText(codeText); });
modalOverlay.addEventListener('click', function (e) { if (e.target === modalOverlay) closePurchaseModal(); });
successModal.addEventListener('click', function (e) { if (e.target === successModal) closeSuccessModal(); });
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (modalOverlay.classList.contains('active')) closePurchaseModal();
        if (successModal.classList.contains('active')) closeSuccessModal();
        if (portraitModal.classList.contains('active')) closePortraitModal();
    }
});
serviceFloat.addEventListener('click', function () { serviceTip.classList.toggle('show'); });
tipClose.addEventListener('click', function () { serviceTip.classList.remove('show'); });
document.addEventListener('click', function (e) {
    if (!serviceFloat.contains(e.target) && !serviceTip.contains(e.target)) {
        serviceTip.classList.remove('show');
    }
});

// ===== 竖屏弹窗事件绑定（不变） =====
portraitCloseBtn.addEventListener('click', closePortraitModal);
portraitCancelBtn.addEventListener('click', closePortraitModal);
portraitConfirmBtn.addEventListener('click', function() {
    if (pendingTargetNum) {
        window.location.href = `${pendingTargetNum}/index_m.html`;
    }
    closePortraitModal();
});
portraitModal.addEventListener('click', function(e) {
    if (e.target === portraitModal) closePortraitModal();
});

// ============================================================
// 13. 初始化入口（不变）
// ============================================================
function init() {
    initTheme();
    renderStartChat();
    renderCatalog();
    console.log('✅ 网页程序已启动');
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}