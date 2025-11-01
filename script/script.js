// script.js

var publicationsGroups = [
    {
        key: "primary",
        items: [
            {
                year: "2025",
                title: "Temporal Dynamics and Adaptive Mechanisms of Microbial Communities: Divergent Responses and Network Interactions.",
                citation: "<i>Microbial Ecology</i>, 2025-09. <a href=\"https://link.springer.com/article/10.1007/s00248-025-02596-z\">Link</a>"
            },
            {
                year: "2025",
                title: "Comparative genomic analysis reveals the adaptive traits of <i>Ralstonia</i> spp. in aquatic environments.",
                citation: "<i>Frontiers in Microbiology</i>, 2025-07. <a href=\"https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2025.1625651/full\">Link</a>"
            },
            
            {
                year: "2024",
                title: "Assembly Process and Co-occurrence Network of Microbial Community in Response to Free Ammonia Gradient Distribution.",
                citation: "<i>Microbiology Spectrum</i>, e01051-24. <a href=\"https://doi.org/10.1128/spectrum.01051-24\">Link</a>"
            },
            {
                year: "2024",
                title: "Spectral characteristics of dissolved organic matter in Plateau Lakes: Identifying eutrophication indicators in Southwest China.",
                citation: "<i>Ecological Informatics</i>, 82, 102703. <a href=\"https://www.sciencedirect.com/science/article/pii/S1574954124002450\">Link</a>"
            },
            {
                year: "2024",
                title: "Optical characteristics of dissolved organic matter in relation to phytoplankton in Lake Erhai, China.",
                citation: "<i>Process Safety and Environmental Protection</i>, 186, 166-175. <a href=\"https://www.sciencedirect.com/science/article/pii/S0957582024002322\">Link</a>"
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
        meta: "China Postdoctoral Science Foundation · PI · 2021-2023 · 80,000 CNY"
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

var studentsData = [
    {
        name: "Shengjie Sun",
        photo: "students/shengjie-sun.jpg",
        focus: "Freshwater microbial ecology · Ammonia gradient assembly · Co-occurrence networks",
        summary: "M.Sc. candidate examining how cyanobacterial communities respond to eutrophication and hydrological stressors.",
        currentRole: "Master's Student, College of Fisheries, Tianjin Agricultural University (2021-2024)",
        page: "students/shengjie-sun.html"
    },
    {
        name: "Yuying Guan",
        photo: "students/yuying-guan.jpg",
        focus: "Lake restoration ecology · Riparian hydrology · DOM optical analytics",
        summary: "Ph.D. candidate developing hydrological strategies for Chaohu riparian resilience and dissolved organic matter diagnostics in plateau lakes.",
        currentRole: "Ph.D. Candidate, Nanjing Institute of Geography and Limnology, CAS (2022-present)",
        page: "students/yuying-guan.html"
    },
    {
        name: "Qi Cao",
        photo: "students/Qi-Cao.jpg",
        focus: "Aquatic remote sensing · Cyanobacterial toxins · Molecular diagnostics",
        summary: "M.Sc. graduate specializing in hyperspectral monitoring and molecular assays for harmful algal blooms in northern China.",
        currentRole: "Recent Graduate, Tianjin Agricultural University (M.Sc. Aquaculture, 2019-2022)",
        page: "students/qi-cao.html"
    },
    {
        name: "Tao Zheng",
        photo: "students/Tao-Zheng.jpg",
        focus: "Plankton ecology · Molecular taxonomy · Water-quality diagnostics",
        summary: "M.Sc. aquaculture graduate with extensive field sampling experience and expertise in cyanobacterial genetic diversity and phytoplankton monitoring.",
        currentRole: "Recent Graduate, Tianjin Agricultural University (M.Sc. Aquaculture, 2017-2020)",
        page: "students/tao-zheng.html"
    }
];

var academicIdentityData = [
    "Review Editor &amp; Guest Associate Editor · <i>Frontiers in Microbiology</i>",
    "Guest Associate Editor · <i>Microorganisms</i>",
    "Reviewer · <i>ISME Communications</i>",
    "Reviewer · <i>Global Change Biology</i>",
    "Reviewer · <i>FEMS Microbiology Ecology</i>",
    "Reviewer · <i>ACS ES&amp;T Water</i>",
    "Reviewer · <i>Archives of Microbiology</i>",
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

var postsManifestCache = null;

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

function renderStudents() {
    var grid = document.getElementById("students-grid");
    if (!grid) {
        return;
    }

    grid.innerHTML = "";
    studentsData.forEach(function(student) {
        var card = document.createElement("article");
        card.className = "student-card";
        card.innerHTML = "<img src=\"" + student.photo + "\" alt=\"" + student.name + "\">" +
            "<h3>" + student.name + "</h3>" +
            "<p class=\"student-summary\">" + student.summary + "</p>" +
            "<p class=\"student-role\"><strong>" + student.currentRole + "</strong></p>" +
            "<p class=\"student-focus\">" + student.focus + "</p>" +
            "<a href=\"" + student.page + "\">View profile</a>";
        grid.appendChild(card);
    });
}

function fetchPostsManifest() {
    if (postsManifestCache) {
        return Promise.resolve(postsManifestCache.slice());
    }

    return fetch("Blogs/posts.json")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Failed to load posts manifest.");
            }
            return response.json();
        })
        .then(function(posts) {
            if (!Array.isArray(posts)) {
                throw new Error("Invalid posts manifest format.");
            }
            postsManifestCache = posts.map(normalizePostEntry);
            return postsManifestCache.slice();
        });
}

function normalizePostEntry(post) {
    var normalized = Object.assign({}, post);
    normalized.file = normalized.file || "";
    normalized.slug = normalized.slug || deriveSlugFromFile(normalized.file);

    if (!normalized.slug) {
        throw new Error("Each blog post must define a slug or a valid file name.");
    }

    return normalized;
}

function deriveSlugFromFile(filePath) {
    if (!filePath) {
        return "";
    }

    var parts = filePath.split("/");
    var fileName = parts[parts.length - 1] || "";
    var slug = fileName.replace(/\.(md|markdown)$/i, "");
    return slug;
}

function renderBlogList() {
    var container = document.getElementById("blog-list");
    if (!container) {
        return;
    }

    fetchPostsManifest()
        .then(function(posts) {
            if (!posts.length) {
                container.innerHTML = "<p>No blog posts available yet. Please check back soon.</p>";
                return;
            }

            posts.sort(function(a, b) {
                if (a.date && b.date) {
                    return new Date(b.date) - new Date(a.date);
                }
                if (a.date) {
                    return -1;
                }
                if (b.date) {
                    return 1;
                }
                return 0;
            });

            container.innerHTML = "";
            posts.forEach(function(post) {
                var article = document.createElement("article");

                var heading = document.createElement("h2");
                var link = document.createElement("a");
                link.href = "blog-post.html?post=" + encodeURIComponent(post.slug);
                link.textContent = post.title || post.slug;
                heading.appendChild(link);
                article.appendChild(heading);

                if (post.date) {
                    var dateText = formatDate(post.date);
                    if (dateText) {
                        var dateElement = document.createElement("p");
                        dateElement.className = "blog-date";
                        dateElement.textContent = dateText;
                        article.appendChild(dateElement);
                    }
                }

                if (post.summary) {
                    var summary = document.createElement("p");
                    summary.className = "blog-summary";
                    summary.textContent = post.summary;
                    article.appendChild(summary);
                }

                var readMore = document.createElement("p");
                var readMoreLink = document.createElement("a");
                readMoreLink.href = link.href;
                readMoreLink.textContent = "Read more →";
                readMore.appendChild(readMoreLink);
                article.appendChild(readMore);

                container.appendChild(article);
            });
        })
        .catch(function(error) {
            container.innerHTML = "<p class=\"blog-error\">Unable to load blog posts. " + error.message + "</p>";
        });
}

function renderBlogPostDetail() {
    var article = document.getElementById("blog-article");
    if (!article) {
        return;
    }

    var titleElement = document.getElementById("blog-title");
    var dateElement = document.getElementById("blog-date");
    var summaryElement = document.getElementById("blog-summary");
    var contentElement = document.getElementById("blog-content");
    var errorElement = document.getElementById("blog-error");

    function showError(message) {
        if (titleElement) {
            titleElement.textContent = "Blog post unavailable";
        }
        if (dateElement) {
            dateElement.style.display = "none";
        }
        if (summaryElement) {
            summaryElement.style.display = "none";
        }
        if (contentElement) {
            contentElement.innerHTML = "";
        }
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = "block";
        }
    }

    var params = new URLSearchParams(window.location.search);
    var slug = params.get("post");

    if (!slug) {
        showError("Blog post not specified.");
        return;
    }

    fetchPostsManifest()
        .then(function(posts) {
            var post = posts.find(function(item) {
                return item.slug === slug;
            }) || posts.find(function(item) {
                return item.slug && item.slug.toLowerCase() === slug.toLowerCase();
            });

            if (!post) {
                throw new Error("Blog post not found.");
            }

            var displayTitle = post.title || "";
            if (titleElement) {
                titleElement.textContent = displayTitle || "Untitled Post";
            }

            if (dateElement) {
                var formatted = post.date ? formatDate(post.date) : "";
                dateElement.textContent = formatted;
                dateElement.style.display = formatted ? "block" : "none";
            }

            if (summaryElement) {
                if (post.summary) {
                    summaryElement.textContent = post.summary;
                    summaryElement.style.display = "block";
                } else {
                    summaryElement.textContent = "";
                    summaryElement.style.display = "none";
                }
            }

            if (displayTitle) {
                document.title = displayTitle + " · Blog - Da Huo";
            }

            return loadMarkdownContent(post.file)
                .then(function(markdown) {
                    if (!displayTitle) {
                        var derivedTitle = extractFirstHeading(markdown);
                        if (derivedTitle && titleElement) {
                            titleElement.textContent = derivedTitle;
                            document.title = derivedTitle + " · Blog - Da Huo";
                            displayTitle = derivedTitle;
                        } else if (titleElement) {
                            titleElement.textContent = post.slug;
                        }
                    }

                    if (typeof marked === "undefined") {
                        throw new Error("Markdown renderer not available.");
                    }

                    if (contentElement) {
                        contentElement.innerHTML = marked.parse(markdown);

                        if (displayTitle) {
                            var firstHeading = contentElement.querySelector("h1");
                            if (firstHeading && firstHeading.textContent.trim() === displayTitle.trim()) {
                                firstHeading.remove();
                            }
                        }
                    }
                });
        })
        .catch(function(error) {
            showError(error.message);
        });
}

function loadMarkdownContent(filePath) {
    if (!filePath) {
        return Promise.reject(new Error("Markdown file path not defined."));
    }

    return fetch(encodeURI(filePath))
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Unable to fetch markdown content.");
            }
            return response.text();
        });
}

function extractFirstHeading(markdown) {
    var match = markdown.match(/^#\s+(.+)$/m);
    return match ? match[1].trim() : null;
}

function formatDate(dateString) {
    var parsed = new Date(dateString);
    if (!isNaN(parsed.getTime())) {
        return parsed.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    }
    return dateString || "";
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
    renderStudents();
    renderBlogList();
    renderBlogPostDetail();
});
