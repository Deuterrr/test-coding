import express from "express";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Rate limiter -> only 5 requests per 15 minutes per IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { error: "Terlalu banyak request, coba lagi nanti." },
});
app.use("/send", limiter);

// Nodemailer config (use Gmail)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ilh.agas4111@gmail.com",
        pass: "cfkb dhio sdqc hnti",
    },
});

app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await transporter.sendMail({
        from: `"Contact Form" <${email}>`,
        to: "ilh.agas4111@gmail.com",
        subject: `Pesan Baru dari ${name}`,
        text: message,
        html: `<p><b>Nama:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Pesan:</b> ${message}</p>`,
        });

        res.json({ success: true, message: "Pesan terkirim ✅" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Gagal mengirim ❌" });
    }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));