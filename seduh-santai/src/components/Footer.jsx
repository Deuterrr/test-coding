import { Mail, Youtube, Instagram, ArrowDownRight } from "lucide-react";
import { useState } from "react";
import photoFooter from "../assets/cafe/cafe-outdoor.jpeg";

const Footer = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
        const res = await fetch("http://localhost:5000/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setStatus("Message sent successfully");
            setForm({ name: "", email: "", message: "" });
        } else {
            setStatus("Failed to send message");
        }
        } catch (err) {
        setStatus("Error: " + err.message);
        }
    };

    return (
        <footer className="bg-white mt-10 border-t border-gray-400">
            <div className="px-40 py-5 flex flex-row justify-between gap-8">
                {/* Info */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Seduh Santai</h2>

                    <div className="mt-6">
                        <h4 className="font-semibold mb-2">Follow Us</h4>
                        <div className="flex gap-3">
                        <a className="flex items-center gap-2 border px-3 py-2 rounded text-base hover:bg-gray-50">
                            <Youtube size={16} /> Youtube
                        </a>
                        <a className="flex items-center gap-2 border px-3 py-2 rounded text-base hover:bg-gray-50">
                            <Instagram size={16} /> Instagram
                        </a>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 w-full max-w-sm"
                    >
                        <h3 className="font-semibold mb-3">Contact Us</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 mb-2 border rounded text-base"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 mb-2 border rounded text-base"
                        />
                        <textarea
                            name="message"
                            placeholder="Pesan"
                            rows="3"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="w-full p-2 mb-2 border rounded text-base"
                        ></textarea>
                        <div className="border-1 p-1 rounded">
                            <button
                                type="submit"
                                className="w-full bg-orange-300 py-2 rounded hover:bg-orange-400 text-base"
                            >
                                Send
                            </button>
                        </div>
                        <p className="mt-2 text-xs text-gray-500">{status}</p>
                    </form>
                </div>


                {/* Decoration */}
                <div className="flex flex-row">
                    <img
                        src={photoFooter}
                        className="md:max-h-114 object-cover bg-amber-200 rounded-l"
                    />
                    <div className="flex w-full">
                        <div className="h-114 w-fit bg-orange-300 rounded-r">
                            <ArrowDownRight size={64} />
                            <ArrowDownRight size={64} />
                            <ArrowDownRight size={64} />
                            <ArrowDownRight size={64} />
                            <ArrowDownRight size={64} />
                            <ArrowDownRight size={64} />
                            <ArrowDownRight size={64} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center py-4 border-t text-base text-gray-400">
                © 2025 Seduh Santai. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;