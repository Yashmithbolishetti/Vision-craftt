/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const WHATSAPP_NUMBER_DISPLAY = "+91 8919105441";
export const WHATSAPP_NUMBER_RAW = "918919105441";
export const GENERAL_EMAIL = "visioncraft.telugu01@gmail.com";
export const GENERAL_WHATSAPP_MSG = "Hi, I need a website for my business. Can you provide more details?";

/**
 * Builds direct WhatsApp redirect link.
 * On mobile, uses api.whatsapp.com to open the app directly.
 * On desktop, uses web.whatsapp.com to launch WhatsApp Web directly.
 */
export function getWhatsAppUrl(message: string = GENERAL_WHATSAPP_MSG): string {
  const encodedText = encodeURIComponent(message);
  
  if (typeof window !== 'undefined' && window.navigator) {
    const ua = window.navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    if (isMobile) {
      return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER_RAW}&text=${encodedText}`;
    } else {
      return `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER_RAW}&text=${encodedText}`;
    }
  }
  return `https://wa.me/${WHATSAPP_NUMBER_RAW}?text=${encodedText}`;
}
