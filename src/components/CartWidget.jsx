import cart from "../assets/carrito.png"

const Styles = {
    img: {
        height: "2rem",
        width: "auto",
    },
    span: {
        color: "white",
        paddingLeft: 15,
    },
}

export const CartWidget = () => {
    return (
    <>
        <img style={Styles.img} src={cart} alt="changuito"/> <span style={Styles.span}>0</span>
    </>
    )
};