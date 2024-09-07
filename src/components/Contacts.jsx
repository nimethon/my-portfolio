import { CONTACT } from "../constants";

const Contacts = () => {
    return (
        <div className="border-b border-neutral-500 pb-4">
            <h1 className="my-20 text-center text-4xl"><span className="border-b border-purple-600">Get In Touch</span></h1>
            <div className="text-center tracking-tighter">
                <p className="my-6">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <a href="#" className="my-4 border-b">{CONTACT.email}</a>
            </div>
        </div>
    );
};

export default Contacts;