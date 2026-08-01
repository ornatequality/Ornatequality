# Google Tag Manager Setup Guide

This guide explains how to configure GTM after adding your container ID to `.env.local`.

## 1. Create a GTM container

1. Go to [Google Tag Manager](https://tagmanager.google.com).
2. Create a new **Web** container for `ornatequality.com`.
3. Copy the container ID (format: `GTM-XXXXXXX`).
4. Add it to `.env.local`:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

5. Redeploy or restart the dev server.

## 2. Enable Consent Mode in GTM

The website loads GTM with **Consent Mode v2** defaults set to `denied`. Tags should respect consent:

1. In GTM, open **Admin → Container Settings**.
2. Enable **Consent Overview** if available.
3. For each tag below, set consent requirements:
   - **Analytics**: requires `analytics_storage`
   - **Google Ads**: requires `ad_storage`, `ad_user_data`, `ad_personalization`

When a visitor clicks **Accept All** on the cookie banner, consent is updated to `granted` and tags will fire.

## 3. Add GA4 Configuration tag

1. **Tags → New → Google Analytics: GA4 Configuration**
2. Enter your GA4 Measurement ID (e.g. `G-XXXXXXXXXX`)
3. Trigger: **All Pages**
4. Consent: require `analytics_storage`
5. Save and publish

## 4. Add Google Ads conversion tag (for `/ads` landing page)

The contact form pushes a `generate_lead` event to `dataLayer` on successful submit:

| Page | `page_type` value |
|------|-------------------|
| `/ads` | `ads_landing` |
| `/contact` (and others) | `contact` |

### Create trigger

1. **Triggers → New → Custom Event**
2. Event name: `generate_lead`
3. (Optional) Add condition: **Page URL** contains `/ads` — for ads-only conversions

### Create tag

1. **Tags → New → Google Ads Conversion Tracking**
2. Enter Conversion ID and Conversion Label from Google Ads
3. Trigger: the `generate_lead` trigger above
4. Consent: require `ad_storage`
5. Save and publish

## 5. Test with GTM Preview

1. In GTM, click **Preview** and enter your site URL.
2. Visit the homepage — cookie banner should appear.
3. Click **Accept All** — GA4 tag should fire.
4. Visit `/ads`, submit the consultation form — `generate_lead` event should appear in the dataLayer and trigger the Ads conversion tag.

## 6. Link conversion in Google Ads

1. In Google Ads → **Goals → Conversions**.
2. Create or import a conversion action.
3. Use the same Conversion ID and Label in your GTM tag.
4. Verify conversions appear within 24–48 hours of live traffic.

## Notes

- One cookie consent banner covers the entire site, including `/ads` — no separate setup needed.
- If `NEXT_PUBLIC_GTM_ID` is empty, GTM scripts are not loaded (safe for local dev).
- Privacy Policy: `/privacy-policy`
