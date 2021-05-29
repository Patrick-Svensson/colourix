import "./Button.css";

const Button = ({ style, text }) => {
    return (
        <>
            <button style={style} className="button">
                {text}
            </button>
        </>
    );
};

export default Button;
