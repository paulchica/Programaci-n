let cart = [];


// ELEMENTOS

const cartButton =
    document.getElementById("cartButton");

const cartPanel =
    document.getElementById("cartPanel");

const cartBackdrop =
    document.getElementById("cartBackdrop");

const closeCart =
    document.getElementById("closeCart");

const clearCart =
    document.getElementById("clearCart");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotalPanel");

const cartTotalPanel =
    document.getElementById("cartTotalPanel");

const toast =
    document.getElementById("toast");

const mainNav =
    document.getElementById("mainNav");

const menuToggle =
    document.getElementById("menuToggle");

const toTop =
    document.getElementById("toTop");


// ABRIR CARRITO

function openCart() {

    cartPanel.classList.add("open");

    cartBackdrop.classList.add("open");

}


// CERRAR CARRITO

function closeCartPanel() {

    cartPanel.classList.remove("open");

    cartBackdrop.classList.remove("open");

}


// MENSAJE

function showToast(text) {

    toast.textContent = text;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 1800);

}


// ACTUALIZAR CARRITO

function updateCart() {

    cartCount.textContent =
        cart.length;


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price,
            0
        );


    cartTotal.textContent =
        total.toFixed(2);


    cartTotalPanel.textContent =
        total.toFixed(2);


    if (!cart.length) {

        cartItems.innerHTML =
            '<p class="empty">Tu carrito está vacío.</p>';

        return;
    }


    cartItems.innerHTML =
        cart.map(
            (item, index) => `

            <div class="cart-item">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <small>
                        $${item.price.toFixed(2)}
                    </small>

                </div>

                <button
                    class="remove-item"
                    data-index="${index}">

                    Quitar

                </button>

            </div>

        `
        ).join("");


    document
        .querySelectorAll(".remove-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    cart.splice(
                        Number(
                            button.dataset.index
                        ),
                        1
                    );

                    updateCart();

                }
            );

        });

}


// BOTONES COMPRAR

document
    .querySelectorAll(".buy-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                cart.push({

                    name:
                        button.dataset.name,

                    price:
                        Number(
                            button.dataset.price
                        )

                });


                updateCart();


                showToast(
                    `${button.dataset.name} agregado 🔥`
                );

            }
        );

    });


// CARRITO

cartButton.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartPanel
);


cartBackdrop.addEventListener(
    "click",
    closeCartPanel
);


// VACIAR

clearCart.addEventListener(
    "click",
    () => {

        cart = [];

        updateCart();

        showToast(
            "Carrito vaciado"
        );

    }
);


// FINALIZAR PEDIDO

document
    .getElementById("checkout")
    .addEventListener(
        "click",
        () => {

            if (!cart.length) {

                showToast(
                    "Agrega un producto primero"
                );

                return;
            }


            showToast(
                "Pedido preparado 🔥"
            );

        }
    );


// MENÚ MÓVIL

menuToggle.addEventListener(
    "click",
    () => {

        mainNav.classList.toggle(
            "open"
        );

    }
);


document
    .querySelectorAll("#mainNav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "open"
                );

            }
        );

    });


// BOTÓN VOLVER ARRIBA

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 450) {

            toTop.classList.add(
                "show"
            );

        } else {

            toTop.classList.remove(
                "show"
            );

        }

    }
);


toTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// INICIAR

updateCart();