# What Capsule Should I Buy?

Ever thought about investing in NC capsules but weren’t sure which ones were actually worth it?  
This project tries to answer that by combining data from multiple sources and presenting it in a clean, sortable UI.

---

## 📦 What It Does

The frontend displays detailed data about currently available NC capsules in the Neopets Mall, including:

- 🎁 Items inside each capsule (via Jellyneo)
- 💰 Estimated value (via itemDB)
- 👗 Popularity and trading status (via Dress to Impress)

---

## 🔌 Data Source Overview

> ⚠️ The backend service that gathers and processes this data is **private** for now. It scrapes and aggregates data from the following public-facing sources:

- **Selenium + Neopets NC Mall**: To fetch available capsules and buyables
- **Jellyneo**: To get item contents of each capsule
- **Dress To Impress (DTI)**: To check seeking/offering activity
- **itemDB**: To fetch item images and “Owls value”

---

## 🧠 Why I Made This

I started this project as a way to learn **React** through something fun, and to give a useful tool back to the Neopets community.  
This frontend is written in **TypeScript** using **React 18**, and uses [Material React Table](https://www.material-react-table.com/) for clean sorting and layout.

---

## 🚧 Work in Progress

- 🔁 **Data is outdated**: The backend script stopped running, so updates are paused.
- 🔗 **DTI integration (planned)**: A future feature to link your DTI account and mark items in your wishlist.
- 🧹 Minor UI cleanup and polish still pending.

---

## 🛠 Tech Stack

- React 18 + TypeScript
- Material React Table
- CSS Modules
- LocalStorage (for simple persistence)

---
## 🖥️ Running the App Locally

```bash
git clone https://github.com/anothershm/neopets-wcsib-public.git
cd neopets-wcsib-public/app
npm install
npm start```

Then open your browser at http://localhost:3000.
