import "./Button.css";

const Button = ({ text, style }) => {
    return (
        <>
            <button style={style} className="button">
                {text}
            </button>
        </>
    );
};

export default Button;
