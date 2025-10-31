// script.js

var publicationsGroups = [
    {
        key: "primary",
        items: [
            {
                year: "2025",
                title: "Comparative genomic analysis reveals the adaptive traits of <i>Ralstonia</i> spp. in aquatic environments.",
                citation: "<i>Frontiers in Microbiology</i>, 2025-07. <a href=\"https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2025.1625651/full\">Link</a>"
            },
            {
                year: "2025",
                title: "Temporal Dynamics and Adaptive Mechanisms of Microbial Communities: Divergent Responses and Network Interactions.",
                citation: "<i>Microbial Ecology</i>, 2025-09. <a href=\"https://link.springer.com/article/10.1007/s00248-025-02596-z\">Link</a>"
            },
            {
                year: "2024",
                title: "Assembly Process and Co-occurrence Network of Microbial Community in Response to Free Ammonia Gradient Distribution.",
                citation: "<i>Microbiology Spectrum</i>, e01051-24. <a href=\"https://doi.org/10.1128/spectrum.01051-24\">Link</a>"
            },
            {
                year: "2021",
                title: "Cyanobacterial blooms in China: Diversity, distribution, and cyanotoxins.",
                citation: "<i>Harmful Algae</i>, 109, 102106. <strong>ESI Top 1% Highly Cited Paper</strong>. <a href=\"http://www.sciencedirect.com/science/article/pii/S1568988321001360\">Link</a>"
            },
            {
                year: "2021",
                title: "Genome evolution of filamentous cyanobacterium <i>Nostoc</i> species: From facultative symbiosis to free living.",
                citation: "<i>Microorganisms</i>, 9(10), 2015. <a href=\"https://www.mdpi.com/2076-2607/9/10/2015\">Link</a>"
            },
            {
                year: "2018",
                title: "Characterization of <i>Microcystis</i> genotypes based on the ITS region by next-generation sequencing.",
                citation: "<i>Frontiers in Microbiology</i>, 9, 971. <a href=\"https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2018.00971/full\">Link</a>"
            },
            {
                year: "2018",
                title: "Molecular detection of microbial communities associated with <i>Microcystis</i> vs <i>Synechococcus</i> dominated waters in Tianjin, China.",
                citation: "<i>Journal of Oceanology and Limnology</i>, 36(4), 1145-1156. <strong>Cover article</strong>. <a href=\"https://link.springer.com/article/10.1007/s00343-018-7182-x\">Link</a>"
            }
        ]
    },
    {
        key: "chinese",
        items: [
            {
                year: "2022",
                title: "青海湖主湖区与湖水淹没区的细菌群落结构差异分析.",
                citation: "<i>水生生物学报</i> (12), 1807-1815. <a href=\"http://ssswxb.ihb.ac.cn/cn/article/pdf/preview/10.7541/2023.2022.0235.pdf\">Link</a>"
            },
            {
                year: "2018",
                title: "海河天津段微囊藻及其毒素的空间分布及与水环境因子的关系.",
                citation: "<i>中国环境科学</i> (10), 3897-3903. <a href=\"http://www.zghjkx.com.cn/CN/article/downloadArticleFile.do?attachType=PDF&id=15951\">Link</a>"
            },
            {
                year: "2018",
                title: "独流减河口浮游生物群落结构与环境因子的相关性研究.",
                citation: "<i>海洋环境科学</i> (03), 396-402. <a href=\"http://hyhjkx.nmemc.org.cn/article/exportPdf?id=551\">Link</a>"
            }
        ]
    },
    {
        key: "collaborative",
        items: [
            {
                year: "2025",
                title: "Morphology and phylogeny of the centrohelid heliozoans Raphidocystidae and their ability to consume cyanobacteria.",
                citation: "<i>Plos One</i>, e0322585. <a href=\"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0322585\">Link</a>"
            },
            {
                year: "2023",
                title: "Combined methods elucidate the multi-organ toxicity of cylindrospermopsin on <i>Daphnia magna</i>.",
                citation: "<i>Environmental Pollution</i>, 324, 121250. <a href=\"https://www.sciencedirect.com/science/article/abs/pii/S026974912300252X\">Link</a>"
            },
            {
                year: "2023",
                title: "Aridity modulates biogeographic distribution and community assembly of cyanobacterial morphotypes in drylands.",
                citation: "<i>FEMS Microbiology Ecology</i>, 99(6), fiad053. <a href=\"https://academic.oup.com/femsec/article/99/6/fiad053/7172856\">Link</a>"
            },
            {
                year: "2021",
                title: "Using molecular detection for the diversity and occurrence of cyanobacteria and 2-methylisoborneol-producing cyanobacteria.",
                citation: "<i>Environmental Pollution</i>, 288, 117772. <a href=\"https://www.sciencedirect.com/science/article/abs/pii/S0269749121013543\">Link</a>"
            },
            {
                year: "2021",
                title: "Multiple diversity facets of crucial microbial groups in biological soil crusts promote soil multifunctionality.",
                citation: "<i>Global Ecology and Biogeography</i>, 30(6), 1204-1217. <a href=\"https://onlinelibrary.wiley.com/doi/abs/10.1111/geb.13295\">Link</a>"
            },
            {
                year: "2020",
                title: "Multifunctionality of biocrusts is positively predicted by network topologies consistent with interspecies facilitation.",
                citation: "<i>Molecular Ecology</i>, 29(8), 1560-1573. <a href=\"https://onlinelibrary.wiley.com/doi/full/10.1111/mec.15424\">Link</a>"
            },
            {
                year: "2019",
                title: "<i>Compactonostoc shennongjiaensis</i> gen. &amp; sp. nov. from a wet rocky wall in China.",
                citation: "<i>Phycologia</i>, 58(2), 200-210. <a href=\"https://www.tandfonline.com/doi/abs/10.1080/00318884.2018.1541270\">Link</a>"
            },
            {
                year: "2019",
                title: "Interaction between cyanophage MaMV-DC and eight <i>Microcystis</i> strains, revealed by genetic defense systems.",
                citation: "<i>Harmful Algae</i>, 85, 101699. <a href=\"https://www.sciencedirect.com/science/article/pii/S1568988319301726\">Link</a>"
            }
        ]
    }
];

var projectsData = [
    {
        title: "Cold Adaptation Strategies",
        description: "A multi-level response strategy for the adaptation of <i>Raphidiopsis raciborskii</i> to low temperature environments.",
        meta: "China Postdoctoral Science Foundation · PI · 2021–2023 · 80,000 CNY"
    },
    {
        title: "Microbial Carbon &amp; Nitrogen Cycling",
        description: "Mechanisms and ecological effects of microbial-driven carbon and nitrogen cycling in lakes.",
        meta: "NSFC · Key Member · 900,000 CNY"
    },
    {
        title: "Water Quality Regulators",
        description: "Algicidal efficiency of water quality regulators and ecological risk assessment.",
        meta: "Corporate Commission · PI · 900,000 CNY"
    },
    {
        title: "Protist Feeding Strategies",
        description: "Diversity and feeding strategies of algal-feeding protists for bloom control.",
        meta: "NSFC International Cooperation · Major Contributor · 1,500,000 CNY"
    },
    {
        title: "Cyanobacterial Bloom Hazards",
        description: "Multi-dimensional monitoring and emergency removal technologies for cyanobacterial bloom hazards in water sources.",
        meta: "State Key R&amp;D Programme · Key Member · 3,200,000 CNY"
    }
];

var academicIdentityData = [
    "Review Editor &amp; Guest Associate Editor · <i>Frontiers in Microbiology</i>",
    "Guest Associate Editor · <i>Microorganisms</i>",
    "Reviewer · <i>Global Change Biology</i>",
    "Reviewer · <i>FEMS Microbiology Ecology</i>",
    "Reviewer · <i>Aquatic Ecology</i>",
    "Reviewer · <i>Harmful Algae</i>",
    "Reviewer · <i>Ecological Informatics</i>",
    "Member · International Society for Microbial Ecology (ISME)",
    "Member · Society for Molecular Biology and Evolution (SMBE)",
    "Member · The American Society for Microbiology (ASM)"
];

var conferencesData = [
    {
        year: "2024",
        role: "Invited Speaker",
        description: "The 9th Asian Pacific Phycological Forum (APPF2024), Hokkaido, Japan."
    },
    {
        year: "2014",
        role: "Speaker (Sub-venue)",
        description: "The 7th Asian Pacific Phycological Forum (APPF2014), Wuhan, China."
    }
];

function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector(".menu-icon");

    if (!menu) {
        return;
    }

    var isOpen = menu.classList.toggle("show");

    if (menuIcon) {
        menuIcon.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
}

function renderPublications() {
    var lists = document.querySelectorAll("[data-list]");
    lists.forEach(function(list) {
        var key = list.getAttribute("data-list");
        var group = publicationsGroups.find(function(item) {
            return item.key === key;
        });

        if (!group) {
            return;
        }

        list.innerHTML = "";
        group.items.forEach(function(pub) {
            var article = document.createElement("article");
            article.className = "pub-card";
            article.innerHTML = "<span class=\"pub-year\">" + pub.year + "</span>" +
                "<h4>" + pub.title + "</h4>" +
                "<p>" + pub.citation + "</p>";
            list.appendChild(article);
        });
    });
}

function renderProjects() {
    var container = document.getElementById("projects-list");
    if (!container) {
        return;
    }

    container.innerHTML = "";
    projectsData.forEach(function(project) {
        var article = document.createElement("article");
        article.className = "info-card";
        article.innerHTML = "<h3>" + project.title + "</h3>" +
            "<p>" + project.description + "<br><span class=\"meta\">" + project.meta + "</span></p>";
        container.appendChild(article);
    });
}

function renderAcademicIdentity() {
    var list = document.getElementById("academic-identity-list");
    if (!list) {
        return;
    }

    list.innerHTML = "";
    academicIdentityData.forEach(function(item) {
        var listItem = document.createElement("li");
        listItem.innerHTML = item;
        list.appendChild(listItem);
    });
}

function renderConferences() {
    var list = document.getElementById("conference-list");
    if (!list) {
        return;
    }

    list.innerHTML = "";
    conferencesData.forEach(function(conference) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "<span class=\"timeline-year\">" + conference.year + "</span>" +
            "<div><strong>" + conference.role + "</strong><br>" + conference.description + "</div>";
        list.appendChild(listItem);
    });
}

// 关闭菜单当点击菜单项时并渲染数据
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".menu a").forEach(function(item) {
        item.addEventListener("click", function() {
            var menu = document.getElementById("menu");
            var menuIcon = document.querySelector(".menu-icon");

            if (menu) {
                menu.classList.remove("show");
            }
            if (menuIcon) {
                menuIcon.setAttribute("aria-expanded", "false");
            }
        });
    });

    document.addEventListener("click", function(event) {
        var menu = document.getElementById("menu");
        var menuIcon = document.querySelector(".menu-icon");
        if (!menu || !menuIcon) {
            return;
        }

        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("show");
            menuIcon.setAttribute("aria-expanded", "false");
        }
    });

    renderPublications();
    renderProjects();
    renderAcademicIdentity();
    renderConferences();
});
