# RMS Textile Mills Website

Responsive, multi-page website for the RMS Textile Mills imported circular knitting division in Tiruppur. Built with Next.js, TypeScript and Tailwind CSS, and exported as a static site.

## Included pages

- Home with production profile, fabric overview, machine table and working process
- About with company approach and direct-management positioning
- Fabric capabilities with six documented knit structures
- Machines with the full diameter, feeder and quantity configuration
- Infrastructure with a customer-friendly production workflow
- Gallery with supplied company details and clearly labelled visual representations
- Contact with click-to-call, Google Maps and a functional WhatsApp enquiry builder

## Run locally

```bash
bun install
bun dev
```

## Validate and build

```bash
bun run lint
bun run build
```

The optimized static export is generated in `out/`.

## Launch configuration

Set the production URL before building so metadata, `robots.txt` and `sitemap.xml` use the correct domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com bun run build
```

On Windows PowerShell:

```powershell
$env:NEXT_PUBLIC_SITE_URL="https://your-domain.com"
bun run build
```

## Content notes

- Machine and company details are based on `public/company-details.jpg`.
- Generated mill and fabric imagery is labelled as visual representation where context requires it.
- The enquiry form does not store customer data; it creates a pre-filled WhatsApp message to the Managing Director’s listed number.
- Replace visual representations with verified facility and fabric photography when those assets are available.
