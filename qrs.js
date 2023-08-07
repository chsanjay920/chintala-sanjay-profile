var qr = document.getElementById("qr")
function qrimagechange(name)
{
    switch (name) {
        case "instagram":
            qr.src = "./qrimages/instagramqr.png"
            break;
        case "linkedin":
            qr.src = "./qrimages/linkedinqr.png"
            break;
        case "gmail":
            qr.src = "./qrimages/mailqr.png"
            break;
        case "whatsapp":
            qr.src = "./qrimages/whatsapp.png"
            break;
        default:
            break;
    }
}