/* =====================================================
   ÉLYSÉE PARFUMS
   V3 ULTRA ANIMÉE
===================================================== */


/* =====================================================
   CONFIGURATION
===================================================== */

const WHATSAPP_NUMBER = "212600000000";


/* =====================================================
   PRODUCTS
===================================================== */

const products = [

    {
        id: 1,
        name: "Élysée N°01",
        category: "Femme",
        price: 249,
        notes: "Rose · Jasmin · Vanille",
        description:
            "Une fragrance florale élégante et lumineuse, pensée pour une femme qui aime laisser une impression délicate.",
        image:
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
        tag: "BEST-SELLER"
    },

    {
        id: 2,
        name: "Élysée N°07",
        category: "Homme",
        price: 279,
        notes: "Bergamote · Cèdre · Ambre",
        description:
            "Un parfum masculin moderne et sophistiqué mêlant fraîcheur et profondeur.",
        image:
            "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=900&q=85",
        tag: "NOUVEAU"
    },

    {
        id: 3,
        name: "Élysée Oud",
        category: "Unisexe",
        price: 329,
        notes: "Oud · Santal · Musc",
        description:
            "Une composition profonde et mystérieuse autour d'un oud chaleureux et raffiné.",
        image:
            "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
        tag: "SIGNATURE"
    },

    {
        id: 4,
        name: "Élysée Rose",
        category: "Femme",
        price: 229,
        notes: "Rose · Pivoine · Musc blanc",
        description:
            "Une fragrance romantique et aérienne où la rose rencontre un musc délicatement poudré.",
        image:
            "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 5,
        name: "Élysée Noir",
        category: "Homme",
        price: 299,
        notes: "Poivre · Cuir · Bois de Gaïac",
        description:
            "Une fragrance intense au caractère affirmé, conçue pour les personnalités qui aiment se démarquer.",
        image:
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85",
        tag: "INTENSE"
    },

    {
        id: 6,
        name: "Élysée Vanille",
        category: "Unisexe",
        price: 259,
        notes: "Vanille · Ambre · Tonka",
        description:
            "Une création chaleureuse et enveloppante autour d'une vanille douce et sophistiquée.",
        image:
            "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 7,
        name: "Élysée Bloom",
        category: "Femme",
        price: 239,
        notes: "Fleur d'oranger · Poire · Jasmin",
        description:
            "Une fragrance fraîche et lumineuse qui mêle fruits délicats et fleurs blanches.",
        image:
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 8,
        name: "Élysée Intense",
        category: "Homme",
        price: 289,
        notes: "Ambre · Tabac · Vanille",
        description:
            "Une fragrance chaude et puissante avec une présence longue durée.",
        image:
            "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=85",
        tag: "COUP DE CŒUR"
    }

];


/* =====================================================
   STATE
===================================================== */

let cart =
    JSON.parse(localStorage.getItem("elyseeCart")) || [];

let favorites =
    JSON.parse(localStorage.getItem("elyseeFavorites")) || [];

let currentFilter = "Tous";

let currentProduct = null;

let modalQuantity = 1;


/* =====================================================
   DOM
===================================================== */

const productsGrid =
    document.getElementById("productsGrid");

const emptyProducts =
    document.getElementById("emptyProducts");

const productSearch =
    document.getElementById("productSearch");

const bigSearch =
    document.getElementById("bigSearch");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const cartCount =
    document.querySelector(".cart-count");

const productModal =
    document.getElementById("productModal");

const toast =
    document.getElementById("toast");


/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .querySelector(".preloader")
            .classList.add("hide");

    }, 1800);

});


/* =====================================================
   HEADER SCROLL
===================================================== */

const header =
    document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =====================================================
   SCROLL PROGRESS
===================================================== */

const progress =
    document.querySelector(".scroll-progress span");

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        (scrollTop / height) * 100;

    progress.style.width =
        `${percentage}%`;

});


/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");

if (window.matchMedia("(pointer:fine)").matches) {

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    document.addEventListener("mousemove", e => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left =
            `${mouseX}px`;

        cursorDot.style.top =
            `${mouseY}px`;

    });

    function animateCursor() {

        ringX +=
            (mouseX - ringX) * .15;

        ringY +=
            (mouseY - ringY) * .15;

        cursorRing.style.left =
            `${ringX}px`;

        cursorRing.style.top =
            `${ringY}px`;

        requestAnimationFrame(
            animateCursor
        );

    }

    animateCursor();


    document
        .querySelectorAll("a,button,.product-card,.category-card,input")
        .forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => document.body.classList.add("cursor-hover")
            );

            element.addEventListener(
                "mouseleave",
                () => document.body.classList.remove("cursor-hover")
            );

        });

}


/* =====================================================
   MOUSE LIGHT
===================================================== */

const mouseLight =
    document.querySelector(".mouse-light");

if (window.matchMedia("(pointer:fine)").matches) {

    document.addEventListener("mousemove", e => {

        mouseLight.animate(
            {
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            },
            {
                duration: 900,
                fill: "forwards"
            }
        );

    });

}


/* =====================================================
   HERO PARALLAX
===================================================== */

const heroBottle =
    document.getElementById("heroBottle");

if (heroBottle &&
    window.matchMedia("(pointer:fine)").matches) {

    document
        .querySelector(".hero")
        .addEventListener("mousemove", e => {

            const rect =
                e.currentTarget.getBoundingClientRect();

            const x =
                (e.clientX - rect.left) /
                rect.width - .5;

            const y =
                (e.clientY - rect.top) /
                rect.height - .5;

            heroBottle.style.transform =
                `
                translateY(${y * -20}px)
                rotateY(${x * 12}deg)
                rotateX(${y * -8}deg)
                `;

        });

    document
        .querySelector(".hero")
        .addEventListener("mouseleave", () => {

            heroBottle.style.transform = "";

        });

}


/* =====================================================
   MAGNETIC BUTTONS
===================================================== */

if (window.matchMedia("(pointer:fine)").matches) {

    document
        .querySelectorAll(".magnetic")
        .forEach(button => {

            button.addEventListener(
                "mousemove",
                e => {

                    const rect =
                        button.getBoundingClientRect();

                    const x =
                        e.clientX -
                        rect.left -
                        rect.width / 2;

                    const y =
                        e.clientY -
                        rect.top -
                        rect.height / 2;

                    button.style.transform =
                        `translate(${x * .15}px,${y * .15}px)`;

                }
            );

            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform = "";

                }
            );

        });

}


/* =====================================================
   TILT CARDS
===================================================== */

if (window.matchMedia("(pointer:fine)").matches) {

    document
        .querySelectorAll(".tilt-card")
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                e => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        e.clientX - rect.left;

                    const y =
                        e.clientY - rect.top;

                    const rotateY =
                        ((x / rect.width) - .5) * 8;

                    const rotateX =
                        ((y / rect.height) - .5) * -8;

                    card.style.transform =
                        `
                        perspective(1000px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-5px)
                        `;

                }
            );

            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform = "";

                }
            );

        });

}


/* =====================================================
   COUNTERS
===================================================== */

const counters =
    document.querySelectorAll("[data-count]");

function animateCounter(element) {

    const target =
        parseFloat(element.dataset.count);

    const duration =
        1600;

    const start =
        performance.now();

    function update(time) {

        const progress =
            Math.min(
                (time - start) / duration,
                1
            );

        const eased =
            1 - Math.pow(1 - progress, 4);

        const value =
            target * eased;

        if (target === 4.9) {

            element.textContent =
                value.toFixed(1);

        } else if (target >= 1000) {

            element.textContent =
                Math.floor(value).toLocaleString("fr-FR") + "+";

        } else {

            element.textContent =
                Math.floor(value) + "+";

        }

        if (progress < 1) {

            requestAnimationFrame(update);

        }

    }

    requestAnimationFrame(update);

}

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    counterObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .7
        }
    );

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =====================================================
   REVEAL ON SCROLL
===================================================== */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );

document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(element);

    });


/* =====================================================
   PRODUCTS
===================================================== */

function renderProducts() {

    const search =
        productSearch.value
            .toLowerCase()
            .trim();

    const filtered =
        products.filter(product => {

            const categoryMatch =
                currentFilter === "Tous" ||
                product.category === currentFilter;

            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(search) ||

                product.category
                    .toLowerCase()
                    .includes(search) ||

                product.notes
                    .toLowerCase()
                    .includes(search);

            return categoryMatch &&
                   searchMatch;

        });


    productsGrid.innerHTML = "";


    if (!filtered.length) {

        emptyProducts.style.display =
            "block";

        return;

    }

    emptyProducts.style.display =
        "none";


    filtered.forEach((product, index) => {

        const isFavorite =
            favorites.includes(product.id);

        const card =
            document.createElement("article");

        card.className =
            "product-card";

        card.style.animationDelay =
            `${index * .07}s`;

        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <div class="product-shine"></div>

                ${
                    product.tag
                    ?
                    `<span class="product-tag">
                        ${product.tag}
                    </span>`
                    :
                    ""
                }

                <button
                    class="product-favorite ${isFavorite ? "active" : ""}"
                    data-favorite="${product.id}"
                >
                    <i class="${
                        isFavorite
                        ? "fa-solid"
                        : "fa-regular"
                    } fa-heart"></i>
                </button>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.notes}
                </p>


                <div class="product-bottom">

                    <strong class="product-price">
                        ${product.price} DH
                    </strong>

                    <button
                        class="product-add"
                        data-add="${product.id}"
                    >
                        <i class="fa-solid fa-plus"></i>
                    </button>

                </div>

            </div>

        `;

        productsGrid.appendChild(card);

    });


    bindProductEvents();

}


/* =====================================================
   PRODUCT EVENTS
===================================================== */

function bindProductEvents() {

    document
        .querySelectorAll("[data-add]")
        .forEach(button => {

            button.addEventListener(
                "click",
                e => {

                    e.stopPropagation();

                    const id =
                        Number(button.dataset.add);

                    addToCart(id);

                }
            );

        });


    document
        .querySelectorAll("[data-favorite]")
        .forEach(button => {

            button.addEventListener(
                "click",
                e => {

                    e.stopPropagation();

                    const id =
                        Number(button.dataset.favorite);

                    toggleFavorite(id);

                }
            );

        });


    document
        .querySelectorAll(".product-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                e => {

                    if (
                        e.target.closest(
                            "button"
                        )
                    ) return;

                    const addButton =
                        card.querySelector(
                            "[data-add]"
                        );

                    openProductModal(
                        Number(
                            addButton.dataset.add
                        )
                    );

                }
            );

        });

}


/* =====================================================
   FILTERS
===================================================== */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                currentFilter =
                    button.dataset.filter;

                renderProducts();

            }
        );

    });


/* =====================================================
   SEARCH
===================================================== */

productSearch.addEventListener(
    "input",
    renderProducts
);


const searchOverlay =
    document.getElementById("searchOverlay");

document
    .getElementById("openSearch")
    .addEventListener(
        "click",
        () => {

            searchOverlay.classList.add(
                "active"
            );

            document.body.classList.add(
                "no-scroll"
            );

            setTimeout(() => {

                bigSearch.focus();

            }, 500);

        }
    );


document
    .getElementById("closeSearch")
    .addEventListener(
        "click",
        closeSearch
    );


function closeSearch() {

    searchOverlay.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


bigSearch.addEventListener(
    "input",
    () => {

        productSearch.value =
            bigSearch.value;

        currentFilter =
            "Tous";

        document
            .querySelectorAll(".filter")
            .forEach(btn =>
                btn.classList.remove("active")
            );

        document
            .querySelector('.filter[data-filter="Tous"]')
            .classList.add("active");

        renderProducts();

    }
);


/* =====================================================
   FAVORITES
===================================================== */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favorite => favorite !== id
            );

        showToast(
            "Favori supprimé",
            "Le parfum a été retiré."
        );

    } else {

        favorites.push(id);

        showToast(
            "Ajouté aux favoris",
            "Votre parfum est enregistré."
        );

    }

    localStorage.setItem(
        "elyseeFavorites",
        JSON.stringify(favorites)
    );

    renderProducts();

}


/* =====================================================
   CART
===================================================== */

function addToCart(id, quantity = 1) {

    const product =
        products.find(
            product => product.id === id
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({
            ...product,
            quantity
        });

    }


    saveCart();

    renderCart();

    showToast(
        "Produit ajouté",
        `${product.name} a été ajouté au panier.`
    );

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();

    renderCart();

}


function changeQuantity(id, amount) {

    const item =
        cart.find(
            item => item.id === id
        );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart();

    renderCart();

}


function saveCart() {

    localStorage.setItem(
        "elyseeCart",
        JSON.stringify(cart)
    );

}


/* =====================================================
   RENDER CART
===================================================== */

function renderCart() {

    cartCount.textContent =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-bag-shopping"></i>

                <h3>
                    Votre panier est vide
                </h3>

                <p>
                    Ajoutez quelques parfums pour
                    commencer votre commande.
                </p>

                <button id="discoverProducts">
                    Découvrir les produits
                </button>

            </div>

        `;

        document
            .getElementById("discoverProducts")
            .addEventListener(
                "click",
                () => {

                    closeCart();

                    document
                        .getElementById("boutique")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );

    } else {

        cartItems.innerHTML = "";

        cart.forEach(item => {

            const element =
                document.createElement("div");

            element.className =
                "cart-item";

            element.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        ${item.category}
                    </p>

                    <div class="cart-quantity">

                        <button
                            data-minus="${item.id}"
                        >
                            −
                        </button>

                        <strong>
                            ${item.quantity}
                        </strong>

                        <button
                            data-plus="${item.id}"
                        >
                            +
                        </button>

                    </div>

                    <div class="cart-item-price">
                        ${item.price * item.quantity} DH
                    </div>

                </div>

                <button
                    class="cart-item-remove"
                    data-remove="${item.id}"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>

            `;

            cartItems.appendChild(element);

        });


        document
            .querySelectorAll("[data-minus]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        changeQuantity(
                            Number(button.dataset.minus),
                            -1
                        );

                    }
                );

            });


        document
            .querySelectorAll("[data-plus]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        changeQuantity(
                            Number(button.dataset.plus),
                            1
                        );

                    }
                );

            });


        document
            .querySelectorAll("[data-remove]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        removeFromCart(
                            Number(button.dataset.remove)
                        );

                    }
                );

            });

    }


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );

    cartTotal.textContent =
        `${total} DH`;

}


/* =====================================================
   CART OPEN / CLOSE
===================================================== */

document
    .getElementById("openCart")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


cartOverlay.addEventListener(
    "click",
    closeCart
);


function openCart() {

    cartDrawer.classList.add(
        "active"
    );

    cartOverlay.classList.add(
        "active"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeCart() {

    cartDrawer.classList.remove(
        "active"
    );

    cartOverlay.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


/* =====================================================
   PRODUCT MODAL
===================================================== */

function openProductModal(id) {

    const product =
        products.find(
            product => product.id === id
        );

    if (!product) return;

    currentProduct =
        product;

    modalQuantity = 1;

    document
        .getElementById("modalImage")
        .src =
        product.image;

    document
        .getElementById("modalImage")
        .alt =
        product.name;

    document
        .getElementById("modalCategory")
        .textContent =
        product.category;

    document
        .getElementById("modalName")
        .textContent =
        product.name;

    document
        .getElementById("modalPrice")
        .textContent =
        `${product.price} DH`;

    document
        .getElementById("modalDescription")
        .textContent =
        product.description;

    document
        .getElementById("modalNotes")
        .textContent =
        product.notes;

    document
        .getElementById("modalQuantity")
        .textContent =
        modalQuantity;

    productModal.classList.add(
        "active"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeProductModal() {

    productModal.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeProductModal
    );


productModal.addEventListener(
    "click",
    e => {

        if (
            e.target === productModal
        ) {

            closeProductModal();

        }

    }
);


/* =====================================================
   MODAL QUANTITY
===================================================== */

document
    .getElementById("modalMinus")
    .addEventListener(
        "click",
        () => {

            if (modalQuantity > 1) {

                modalQuantity--;

            }

            document
                .getElementById("modalQuantity")
                .textContent =
                modalQuantity;

        }
    );


document
    .getElementById("modalPlus")
    .addEventListener(
        "click",
        () => {

            modalQuantity++;

            document
                .getElementById("modalQuantity")
                .textContent =
                modalQuantity;

        }
    );


document
    .getElementById("modalAdd")
    .addEventListener(
        "click",
        () => {

            if (!currentProduct) return;

            addToCart(
                currentProduct.id,
                modalQuantity
            );

            closeProductModal();

            openCart();

        }
    );


/* =====================================================
   WHATSAPP
===================================================== */

function buildWhatsappMessage() {

    if (!cart.length) {

        return "Bonjour, je souhaite découvrir vos parfums.";

    }


    let message =
        "Bonjour Élysée Parfums 👋\n\n";

    message +=
        "Je souhaite commander :\n\n";


    cart.forEach(item => {

        message +=
            `• ${item.name} x${item.quantity} — ${item.price * item.quantity} DH\n`;

    });


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    message +=
        `\nTotal : ${total} DH\n\n`;

    message +=
        "Merci de me confirmer la disponibilité et les modalités de livraison.";

    return message;

}


document
    .getElementById("whatsappOrder")
    .addEventListener(
        "click",
        () => {

            if (!cart.length) {

                showToast(
                    "Panier vide",
                    "Ajoutez d'abord un parfum."
                );

                return;

            }

            const message =
                buildWhatsappMessage();

            const url =
                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

            window.open(
                url,
                "_blank"
            );

        }
    );


document
    .getElementById("contactWhatsapp")
    .addEventListener(
        "click",
        e => {

            e.preventDefault();

            const url =
                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Bonjour Élysée Parfums 👋 J'aimerais avoir plus d'informations sur vos parfums."
                )}`;

            window.open(
                url,
                "_blank"
            );

        }
    );


/* =====================================================
   TOAST
===================================================== */

let toastTimer;

function showToast(title, text) {

    toast.innerHTML = `

        <div class="toast-icon">

            <i class="fa-solid fa-check"></i>

        </div>

        <div>

            <strong>
                ${title}
            </strong>

            <span>
                ${text}
            </span>

        </div>

    `;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        toastTimer
    );

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =====================================================
   TESTIMONIAL SLIDER
===================================================== */

const testimonialTrack =
    document.getElementById(
        "testimonialTrack"
    );

const testimonialDots =
    document.querySelectorAll(
        ".testimonial-dot"
    );

let testimonialIndex = 0;


function showTestimonial(index) {

    testimonialIndex =
        index;

    testimonialTrack.style.transform =
        `translateX(-${index * 100}%)`;

    testimonialDots.forEach(
        (dot, i) => {

            dot.classList.toggle(
                "active",
                i === index
            );

        }
    );

}


testimonialDots.forEach(
    (dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                showTestimonial(index);

            }
        );

    }
);


setInterval(
    () => {

        testimonialIndex =
            (testimonialIndex + 1) % 3;

        showTestimonial(
            testimonialIndex
        );

    },
    5500
);


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


menuButton.addEventListener(
    "click",
    () => {

        menuButton.classList.toggle(
            "active"
        );

        mobileMenu.classList.toggle(
            "active"
        );

        document.body.classList.toggle(
            "no-scroll"
        );

    }
);


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                menuButton.classList.remove(
                    "active"
                );

                mobileMenu.classList.remove(
                    "active"
                );

                document.body.classList.remove(
                    "no-scroll"
                );

            }
        );

    });


/* =====================================================
   SCROLL TOP
===================================================== */

const scrollTop =
    document.getElementById(
        "scrollTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 700) {

            scrollTop.classList.add(
                "show"
            );

        } else {

            scrollTop.classList.remove(
                "show"
            );

        }

    }
);


scrollTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =====================================================
   CATEGORY QUICK FILTER
===================================================== */

document
    .querySelectorAll("[data-category]")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.category;

                currentFilter =
                    category;

                document
                    .querySelectorAll(".filter")
                    .forEach(btn => {

                        btn.classList.toggle(
                            "active",
                            btn.dataset.filter === category
                        );

                    });

                renderProducts();

            }
        );

    });


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    e => {

        if (e.key === "Escape") {

            closeCart();

            closeProductModal();

            closeSearch();

            mobileMenu.classList.remove(
                "active"
            );

            menuButton.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "no-scroll"
            );

        }

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

renderProducts();

renderCart();
