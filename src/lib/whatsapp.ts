import { businessWhatsApp, siteConfig } from "@/config/site";
import { Product } from "@/types/product";
import { CartLineItem } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";

export interface CheckoutDetails {
  customerName: string;
  phone: string;
  deliveryLocation: string;
  notes?: string;
}

/**
 * Creates a mobile and desktop friendly WhatsApp direct link with prefilled URL-encoded text.
 */
/** E.164 digits only — always the business line unless overridden in tests */
export function getBusinessWhatsAppE164(phone?: string): string {
  const raw = phone ?? siteConfig.whatsappNumber ?? businessWhatsApp.e164;
  return raw.replace(/[^0-9]/g, "") || businessWhatsApp.e164;
}

export function createWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = getBusinessWhatsAppE164(phone);
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates the official product order message for Vee's Luxe Foundry.
 */
export function generateProductOrderMessage(product: Product, siteUrl = siteConfig.url): string {
  const formattedPrice = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(product.price);

  const productUrl = `${siteUrl}/products/${product.slug}`;

  return `Hello Vee's Luxe Foundry!

I would like to order:

Product: ${product.name} (${product.size || "100ml EDP"})
Brand: ${product.brand}
Price: ${formattedPrice}

Product Link: ${productUrl}

Please confirm stock availability and delivery options to my location.

Thank you!`;
}

/**
 * Generates a WhatsApp URL directly for a product order.
 */
export function getProductWhatsAppUrl(product: Product, phone = siteConfig.whatsappNumber): string {
  const message = generateProductOrderMessage(product);
  return createWhatsAppUrl(phone, message);
}

/**
 * Generates a general WhatsApp concierge enquiry URL.
 */
export function getConciergeWhatsAppUrl(
  topic = "fragrance recommendation",
  phone = siteConfig.whatsappNumber
): string {
  const message = `Hello Vee's Luxe Foundry!

I am reaching out from your website regarding ${topic}. I'd love some assistance in selecting a fragrance.

Thank you!`;
  return createWhatsAppUrl(phone, message);
}

/**
 * Builds a multi-line order message for cart checkout via WhatsApp.
 */
export function generateCartCheckoutMessage(
  items: CartLineItem[],
  details: CheckoutDetails,
  siteUrl = siteConfig.url
): string {
  const lines = items.map((item, index) => {
    const lineTotal = formatPrice(item.price * item.quantity);
    const unit = formatPrice(item.price);
    return `${index + 1}. ${item.name} (${item.brand})
   Qty: ${item.quantity} × ${unit} = ${lineTotal}
   ${siteUrl}/products/${item.slug}`;
  });

  const subtotal = formatPrice(items.reduce((s, i) => s + i.price * i.quantity, 0));

  const notesBlock = details.notes?.trim()
    ? `\nNotes: ${details.notes.trim()}`
    : "";

  return `Hello Vee's Luxe Foundry!

I would like to place an order from your website:

${lines.join("\n\n")}

Subtotal: ${subtotal}

Name: ${details.customerName}
Phone: ${details.phone}
Delivery area: ${details.deliveryLocation}${notesBlock}

Please confirm availability, M-Pesa payment details, and delivery. Thank you!`;
}

export function getCartCheckoutWhatsAppUrl(
  items: CartLineItem[],
  details: CheckoutDetails,
  phone = siteConfig.whatsappNumber
): string {
  return createWhatsAppUrl(phone, generateCartCheckoutMessage(items, details));
}
