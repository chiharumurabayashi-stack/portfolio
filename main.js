const projects = [
    {
        id: "atex-amazon",
        title: "インテリアメーカー Amazon LP制作",
        category: "EC Design / AI Direction",
        type: "Client Work (受託業務)",
        date: "2026.02",
        description: "撮影画像とAI生成を組み合わせた革新的なハイブリッドワークフローによるLP制作。コストを抑えつつ、情緒的で高品質なビジュアル表現を実現しました。",
        image: "img/atex_01.jpeg",
        tags: ["受託業務", "AI/Hybrid", "EC", "Amazon"],
        gallery: [
            "img/atex_02.jpeg",
            "img/atex_14.jpeg",
            "img/atex_19.jpeg"
        ]
    },
    {
        id: "sanyu-furniture",
        title: "家具メーカー ドレッサープロモーション",
        category: "EC Design / AI Hybrid",
        type: "Client Work (受託業務)",
        date: "2026.01",
        description: "家具メーカー様の新作ドレッサー制作。AIによる構成案の自動化とハイブリッド撮影を導入した最新ワークフロー。メーカー直販のこだわりを、スピード感を持って高品質なビジュアルへと昇華させました。",
        image: "img/sanyu_01.jpg",
        tags: ["受託業務", "AI/Hybrid", "Furniture", "Visual Strategy"],
        gallery: [
            "img/sanyu_02.jpg",
            "img/sanyu_03.jpg",
            "img/sanyu_04.jpg",
            "img/sanyu_05.jpg",
            "img/sanyu_06.jpg",
            "img/sanyu_07.jpg",
            "img/sanyu_11.jpg",
            "img/sanyu_14.jpg"
        ]
    },
    {
        id: "agent-trading-desk",
        title: "家具商社 学習デスク",
        category: "EC Design / AI Hybrid",
        type: "Client Work (受託業務)",
        date: "2026.01",
        description: "ライフスタイル撮影のディレクションとAI構成を組み合わせたハイブリッド案件。クライアントの要望を迅速に形にし、ターゲットの購買意欲を高めるデザイン構成を最短期間で実現しました。",
        image: "img/agent_3302.jpg",
        tags: ["受託業務", "AI/Hybrid", "Furniture", "Direction"],
        gallery: [
            "img/agent_3313.jpg",
            "img/agent_3314.jpg",
            "img/agent_3304.jpg",
            "img/agent_3305.jpg",
            "img/agent_3306.jpg",
            "img/agent_3307.jpg"
        ]
    },
    {
        id: "yuasa-tvstand",
        title: "ユアサプライムス TVスタンド",
        category: "EC Design / Technical Docs",
        type: "Client Work (受託業務)",
        date: "2025.08",
        description: "楽天向けLP制作に加え、組み立て説明書および取扱説明書の作成を一貫して担当。受託案件において、販促とアフターケアの両面からユーザー体験を設計。精密な図解とテクニカルライティングによる品質向上を実現しました。",
        image: "img/yuasa_13.jpg",
        tags: ["受託業務", "Rakuten", "Instruction Manual", "Technical Illustration"],
        gallery: [
            "img/yuasa_14.jpg",
            "img/yuasa_15.jpg",
            "img/yuasa_16.jpg",
            "img/yuasa_30.jpg",
            "img/yuasa_31.jpg",
            "img/yuasa_32.jpg",
            "img/yuasa_01.jpg",
            "img/yuasa_02.jpg",
            "img/yuasa_03.jpg",
            "img/yuasa_04.jpg",
            "img/yuasa_05.jpg",
            "img/yuasa_06.jpg",
            "img/yuasa_07.jpg",
            "img/yuasa_08.jpg",
            "img/yuasa_09.jpg",
            "img/yuasa_10.jpg",
            "img/yuasa_11.jpg",
            "img/yuasa_12.jpg"
        ]
    },
    {
        id: "matsuda-kagu",
        title: "松田家具 コーポレートサイト",
        category: "Web Design / Direction",
        type: "Client Work (受託業務)",
        date: "2025.08",
        description: "老舗家具メーカーのブランディング刷新を受託業務として担当。信頼感とモダンな意匠性を両立させたデザイン設計。歴史あるブランドのデジタルトラックスフォーメーションを支援しました。",
        image: "img/matsuda_01.png",
        tags: ["受託業務", "UI/UX", "Corporate", "Figma"],
        gallery: [
            "img/matsuda_02.png",
            "img/matsuda_03.png"
        ]
    },
    {
        id: "nanri-works",
        title: "ナンリワークス 商品プロモーション",
        category: "EC Design / Art Direction",
        type: "Client Work (受託業務)",
        date: "2025.05",
        description: "人気ECショップ「ナンリワークス」様の商品プロモーション。ホテルスタイルベッドの魅力を引き出す撮影ディレクションと商品ページ構成を担当。洗練されたスタイリングと機能的な訴求を両立させたクリエイティブを展開しました。",
        image: "img/nanri_01.jpg",
        tags: ["受託業務", "Furniture", "Direction", "EC"],
        gallery: [
            "img/nanri_02.jpg",
            "img/nanri_03.jpg",
            "img/nanri_04.jpg",
            "img/nanri_05.jpg",
            "img/nanri_06.jpg",
            "img/nanri_07.jpg",
            "img/nanri_08.jpg",
            "img/nanri_09.jpg",
            "img/nanri_10.jpg"
        ]
    },
    {
        id: "yukari-amazon",
        title: "ゆかり Amazon強化プロジェクト",
        category: "EC Strategy / Design",
        type: "In-house (自社EC)",
        date: "2023.11",
        description: "自社EC事業におけるAmazonマーケットプレイス売上最大化を目的とした、商品ページ・バナーの戦略的刷新。各商品の特性に合わせた訴求力のあるクリエイティブを多数制作しました。",
        image: "img/yukari_01.jpg",
        tags: ["自社EC", "EC", "Amazon", "Strategy"],
        gallery: [
            "img/yukari_03.jpg",
            "img/yukari_05.jpg",
            "img/yukari_07.jpg",
            "img/yukari_09.jpg",
            "img/yukari_11.jpg",
            "img/yukari_12.jpg",
            "img/yukari_13.jpg"
        ]
    },
    {
        id: "heyadeco",
        title: "ヘヤデコ LP制作",
        category: "Landing Page",
        type: "Client Work (受託業務)",
        date: "2023.05",
        description: "ニチレイマグネット様のインテリア商材の魅力を引き出す、ストーリー性のある縦長LPの構成およびデザインを受託案件として担当。",
        image: "img/heyadeco_01.jpg",
        tags: ["受託業務", "LP", "Sales Copy", "Visual Design"]
    },
    {
        id: "cardboard-tatami",
        title: "小上がり段ボール プロモーション",
        category: "EC Strategy / Creative Direction",
        type: "In-house (自社EC)",
        date: "2023.02",
        description: "段ボール製の畳小上がりのEC販売プロモーション。「この商品をECでどう売るか」という戦略フェーズから参画し、魅力を伝えるための構成案策定、撮影ディレクション、コピーライティングからプロモーション動画制作まで、トータルでクリエイティブを主導しました。",
        image: "img/cardboard_185.jpg",
        tags: ["自社EC", "Strategy", "Direction", "Video Production"],
        gallery: [
            "img/cardboard_186.jpg",
            "img/cardboard_187.jpg",
            "img/cardboard_188.jpg",
            "img/cardboard_189.jpg",
            "img/cardboard_190.jpg",
            "img/cardboard_191.jpg",
            "img/cardboard_192.jpg"
        ]
    },
    {
        id: "mitsuba-creative",
        title: "前職 クリエイティブ実績",
        category: "Creative Direction / Design",
        type: "Career Roots (前職実績)",
        date: "2018-2019",
        description: "幼児教育・児童福祉分野におけるトータルデザイン。15秒CMの絵コンテから、20ページに及ぶ私立受験模試の作成、30ページの会報誌制作まで。数百種類のアセットをEvernoteでシステム管理し、配置作業を5分から数十秒へと短縮する劇的な効率化を実現しました。",
        image: "img/mitsuba_02.jpg",
        tags: ["Career Roots", "Illustration", "Workflow Optimization", "After Effects"],
        gallery: [
            "img/mitsuba_07.jpg",
            "img/mitsuba_11.jpg",
            "img/mitsuba_01.jpg",
            "img/mitsuba_21.jpg"
        ]
    },
    {
        id: "early-portraits",
        title: "似顔絵・キャラクター制作アーカイブ",
        category: "Illustration / Character Design",
        type: "Career Roots (初期実績)",
        date: "2012-2015",
        description: "「月刊アスキー PCExplorer」にて動画特集記事の連載を担当し、読者投票1位を獲得。商業イラストレーターとしてカンプ・コンテ制作から、商工会議所会員60名の似顔絵作成まで。対象の本質を捉え、魅力的に表現するスキルの原点です。",
        image: "img/portrait_01.jpg",
        tags: ["Career Roots", "Illustration", "Character Design", "Clip Studio"],
        gallery: [
            "img/portrait_02.jpg",
            "img/portrait_03.jpg",
            "img/portrait_04.jpg",
            "img/portrait_05.jpg",
            "img/portrait_06.jpg"
        ]
    },
    {
        id: "early-graphics",
        title: "公共イベント・地域PR グラフィックデザイン",
        category: "Graphic Design / Art Direction",
        type: "Career Roots (初期実績)",
        date: "2011-2016",
        description: "キャリア初期における公共イベントや地域PR関連のポスター、ビジュアル制作実績。情報を整理し、ターゲットに正しく届けるためのデザインの基礎を築いたアーカイブです。",
        image: "img/early_03.jpg",
        tags: ["Career Roots", "Archive", "Graphic Design"],
        gallery: [
            "img/early_01.jpg",
            "img/early_02.jpg",
            "img/early_04.jpg",
            "img/early_05.jpg"
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    // Modal elements
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="close-modal">&times;</div>
        <div class="modal-content">
            <div id="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = () => modal.classList.remove('active');
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    const openProject = (project) => {
        const body = document.getElementById('modal-body');
        const galleryHtml = project.gallery ?
            project.gallery.map(img => `<img src="${encodeURI(img)}" class="modal-image gallery-item" loading="lazy">`).join('') : '';

        body.innerHTML = `
            <div class="modal-header">
                <div class="project-category">${project.category}</div>
                <h2 class="modal-title">${project.title}</h2>
            </div>
            <div class="modal-type-tag">${project.type}</div>
            <div class="modal-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="modal-description">
                ${project.description}
            </div>
            <div class="modal-main-image">
                <img src="${encodeURI(project.image)}" alt="${project.title}" class="modal-image">
            </div>
            <div class="modal-gallery">
                ${galleryHtml}
            </div>
            <div style="margin-top: 4rem; text-align: center; opacity: 0.3; font-size: 0.8rem;">
                Date: ${project.date}
            </div>
        `;
        modal.classList.add('active');
        modal.scrollTop = 0;
    };

    // Render projects
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card reveal';
        card.style.animationDelay = `${index * 0.1}s`;

        const imagePath = encodeURI(project.image);

        card.innerHTML = `
            <img src="${imagePath}" alt="${project.title}" class="project-image" onerror="this.onerror=null; this.src='https://via.placeholder.com/800x500/1a1a1a/ffffff?text=Image+Not+Found'">
            <div class="project-info">
                <div class="project-category">${project.category}</div>
                <h3 class="project-title">${project.title}</h3>
                <div class="project-type">${project.type}</div>
            </div>
        `;

        card.addEventListener('click', () => openProject(project));
        grid.appendChild(card);
    });

    // Reveal observation
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Hero Parallax
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelectorAll('.hero h1, .hero p');

    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const moveX = (clientX - centerX) / 50;
            const moveY = (clientY - centerY) / 50;

            heroContent.forEach(el => {
                el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    }
});
