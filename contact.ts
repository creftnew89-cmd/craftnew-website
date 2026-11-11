/** Single source of truth for all contact channels. */
export const CONTACT = {
  name: "Suyash",
  studio: "Craftnew Studio",
  email: "craftnew89@gmail.com",
  phoneDisplay: "+91 95793 21353",
  whatsapp: {
    label: "Chat on WhatsApp",
    url: "https://wa.me/919579321353?text=Hello%20Suyash,%20I%20saw%20your%20work%20on%20Craftnew%20Studio%20and%20want%20to%20discuss%20a%20video%20editing%20project.",
  },
  gmail: {
    label: "Send an Email",
    url: "mailto:craftnew89@gmail.com?subject=Video%20Editing%20Project%20Inquiry%20-%20Craftnew%20Studio&body=Hi%20Suyash,%20I%20would%20like%20to%20discuss%20a%20video%20project.",
  },
} as const;
