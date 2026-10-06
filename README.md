# Eesha Global Services — website

A 16-page responsive website: Home, Course finder, Destinations, eight country guides
(UK, USA, Canada, Australia, Germany, Ireland, France, New Zealand), Services, About,
Branches, Contact (with the enquiry form) and a 404 page.

It is plain HTML, CSS and JavaScript. There is nothing to install on the server and
no database, so it runs on any Hostinger plan and on GitHub Pages.

---

## 1. See it on your computer (2 minutes)

1. Install **Node.js** (the LTS version) from https://nodejs.org
2. Unzip this folder, open a terminal inside it, and run:

   ```
   npm start
   ```

3. Open http://localhost:8080 in your browser.

No Node.js? You can also just double-click `index.html`. Everything works except the
404 page.

---

## 2. Put it on GitHub

1. Create a free account at https://github.com and click **New repository**.
   Name it `eesha-global-services`. Leave every checkbox empty. Click **Create repository**.
2. In a terminal inside this folder, run these lines one at a time
   (replace `YOUR-USERNAME` with your GitHub username):

   ```
   git init
   git add .
   git commit -m "New website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/eesha-global-services.git
   git push -u origin main
   ```

Git not installed? Get it from https://git-scm.com first.

---

## 3. Make it live on eeshaglobalservices.com

Pick **one** of the two options.

### Option A — you have a Hostinger hosting plan (recommended)

Your current site is already on the domain, so you most likely have this.

1. **Back up the old site first.** In hPanel open **File Manager**, select everything in
   `public_html`, and download it as a zip. The next steps replace those files.
2. Delete the old files from `public_html` so the folder is empty.
3. In hPanel go to **Websites → Dashboard** (next to your site) **→ Advanced → Git**.
4. Click **Continue with GitHub**, approve the Hostinger app, and choose the
   `eesha-global-services` repository.
5. Branch: `main`. Directory: leave as `public_html`. Click **Deploy**.
6. Open https://eeshaglobalservices.com. If you see the old site, press Ctrl+F5.
7. In hPanel go to **Security → SSL** and make sure SSL is active, so the site
   opens on `https://`.

From now on, every `git push` updates the live site.

**Without GitHub:** you can also skip step 2 above entirely. In File Manager, upload this
zip into `public_html`, extract it, and move the files out of the extracted folder so
that `index.html` sits directly inside `public_html`.

### Option B — you only have the domain at Hostinger (free hosting on GitHub Pages)

1. On GitHub open the repository → **Settings → Pages**.
   Source: **Deploy from a branch**. Branch: `main`, folder `/ (root)`. Save.
2. On the same page, under **Custom domain**, type `eeshaglobalservices.com` and save.
3. In Hostinger hPanel go to **Domains → eeshaglobalservices.com → DNS / Nameservers**.
   Remove the existing `A` records for `@`, then add:

   | Type  | Name | Value                    |
   |-------|------|--------------------------|
   | A     | @    | 185.199.108.153          |
   | A     | @    | 185.199.109.153          |
   | A     | @    | 185.199.110.153          |
   | A     | @    | 185.199.111.153          |
   | CNAME | www  | YOUR-USERNAME.github.io  |

4. Wait up to a few hours, then go back to **Settings → Pages** and tick **Enforce HTTPS**.

---

## 4. Receive enquiries by email (2 minutes)

Out of the box, the **Submit enquiry** form opens WhatsApp with the student's details,
addressed to the branch they chose. To get every enquiry in your email inbox instead:

1. Go to https://web3forms.com, type the email address that should receive enquiries,
   and click **Create Access Key**. The key arrives in that inbox.
2. Open `src/data.js` and paste the key between the quotes:

   ```
   enquiryAccessKey: 'paste-your-key-here',
   ```

3. Run `npm run build` and push.

The form then shows two buttons: **Submit enquiry** (email) and **Send on WhatsApp instead**.
The key is not a password, so it is safe to have in the code.

---

## 5. Changing content

Names, phone numbers, branches, countries, services and FAQs are in:

```
src/data.js
```

Universities and their courses (the course finder) are in:

```
src/universities.js
```

Edit it, then run:

```
npm run build
git add .
git commit -m "Update content"
git push
```

Do **not** edit the `.html` files in the main folder by hand. They are rebuilt from
`src/` every time and your changes would be lost.

| I want to…                         | Where                                              |
|------------------------------------|----------------------------------------------------|
| Change a phone number or job title | `src/data.js` → `people`                           |
| Add a branch                       | `src/data.js` → add to `people` and to `offices`   |
| Add a branch address / map link    | `src/data.js` → `offices` → `address`, `mapUrl`    |
| Add an email address               | `src/data.js` → `company.email`                    |
| Add Instagram / Facebook links     | `src/data.js` → `company.social`                   |
| Use your real logo                 | put it in `assets/img/`, set `company.logo`        |
| Add team photos                    | put them in `assets/img/team/`, set each `photo`   |
| Add or remove a country            | `src/data.js` → `destinations`                     |
| Add or remove a university         | `src/universities.js`                              |
| Add a course to a university       | `src/universities.js` → that university's `courses`|
| Email enquiries                    | `src/data.js` → `company.enquiryAccessKey`         |
| Change colours                     | top of `assets/css/style.css` (`:root`)            |
| Change page wording                | `src/pages.js`                                     |

---

## 6. Please check before going live

These were filled in with sensible defaults because the details were not available.

- **Job titles** — Kanakam Bhargav (Managing Director), Singamsetty Venkata Siva (Director)
  and Orugu Naga Venkata Sai (Chief Marketing Officer) are listed under the Darsi head office.
  Naveen has no title yet.
- **Vijayawada** is labelled "Branch". Change `kind` in `src/data.js` if it should say
  something else.
- **Office addresses, opening hours and email** are empty. They appear on the site
  automatically once you fill them in.
- **Countries and services** — eight countries and eight services are listed. Remove any you
  do not offer and add any that are missing.
- **Universities and courses** — the course finder lists 64 well-known universities with
  their main subjects, compiled from public information. Course names are simplified, and
  universities change courses every year. Before going live, trim the list to the
  universities you actually work with and add any that are missing. The finder page says
  clearly that it is a guide and not a list of partner universities.
- **WhatsApp** — every WhatsApp button and the enquiry form open a chat with the
  numbers you supplied. Confirm each number is on WhatsApp.
- **Logo** — the blue circle is a placeholder mark.

---

## What is in this folder

```
index.html, about.html, …   the finished pages (generated)
assets/css/style.css        all styling
assets/js/main.js           menu, call dialog, route planner, course finder, enquiry form
assets/fonts/               the two fonts, stored locally
assets/img/                 flags, favicon, share image
src/data.js                 people, branches, countries, services, FAQs — edit this
src/universities.js         universities and courses for the course finder — edit this
src/pages.js, layout.js     page templates
build.js                    turns src/ into the .html pages
serve.js                    local preview server
.htaccess                   Hostinger settings (404 page, caching)
```

## Credits

- Fonts: Bricolage Grotesque and Instrument Sans (SIL Open Font License)
- Icons: Lucide (ISC License)
- Flags: flag-icons (MIT License)
