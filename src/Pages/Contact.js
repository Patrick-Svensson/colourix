import Title from "../Components/Title"
import "./Contact.css"






const Contact = () => {
    return <div className="contact">

        <div className="wrapper">
            <div className="adress">
                <Title title="Contact" />
            </div>

            <div className="contact-form">
                <form action="" class="form">
                    <label for="">First Name</label>
                    <input type="text" />
                </form>

                <form action="" class="form">
                    <label for="">Last Name</label>
                    <input type="text" />
                </form>

                <form action="" class="form">
                    <label for="">Email </label>
                    <input type="text" />
                </form>

                <form action="" class="form">
                    <label for="">Masseg</label>
                    <input type="text" />
                </form>
            </div>
        </div>
    </div>;
};




export default Contact;




















