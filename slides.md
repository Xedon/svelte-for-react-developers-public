---
marp: true
---

# Svelte for React developers

<!--
Start dev mode
Open:
http://localhost:5173/
http://localhost:5174/
https://react.dev/learn
https://learn.svelte.dev/tutorial/welcome-to-svelte
IDE ZOOM +1
Browser ZOOM +1

Ich entwickle schon mittlerweile seit 4 Jahren React.
Ich liebe React aber manchmal denke ich mir "muss das so kompliziert sein?" oder "brauch ich da jetzt wirklich eine extra lib für?",
weswegen ich mich umgeschaut habe und bei Svelte gelandet bin was mich in überzeugt hat weil es viele einfacher macht.
-->

---

<!-- images sind mit Absicht nicht enhalten -->

![bg fit](slideAssets/intro.png)

<!--
Vorstellungsrunde

Stelle dich vor ..

Bei weniger als 10 ->
Wer heist du?
Was machst du?

Bei mehr als 10 nur ->
Frage in die runden:

Wer ist Software Entwickler?
Wer arbeitet mit React?
Wer arbeitet mit Svelte?
-->

---

<!--
Fragen könnt ihr jeder zeit stellen, unterbrecht mich einfach.
Wenn ihr mit nicht ganz folgen könnt frag nach ob ich es noch etwas detailierter erklären kann.
Keine frage ist eine dumme frage!
-->

## Ask questions when ever you want

## Ask questions if you can not follow me

## There are no stupid questions

---

## Sponsored by Mayflower GmbH

<!-- Wir bei Mayflower stellen euch Agile Teams/Coaches, Consultants und IT Architekten zur Seite um euch in den Themen Produkt Entwicklung software Modernisierung Cloud und AI voran zu bringen-->

**We bring you forward with:**

- Agile Teams
- Agile Coaches
- Consultants
- IT Architects

**In:**

- Product development
- Software modernization
- Cloud
- AI

---

<!-- Hier ein paar eckdaten für einen schnellen vergleich, react ist älter und weiter verbreitet alls svelte -->

## React

Initial Release: May 29, 2013 (~ 10 Years)
By: Facebook
Current version: 18.2
Contributors: 1635
Used by 17,9M GH Repositories

## Svelte

Initial Release: November 26, 2016 (~ 7 Years)
By: Rich Harris
Current version: 4.2.2
Contributors: 646
Used by 227k GH Repositories

---

<style scoped>
table {
  font-size: 0.9rem;
}
</style>

## React compared to Svelte

| Statement                         | React         | Svelte                   |
| --------------------------------- | ------------- | ------------------------ |
| Component-Based Development       | ✓             | ✓                        |
| Unidirectional Data Flow          | ✓             | ✓                        |
| Reactive                          | ✓             | ✓                        |
| Virtual DOM                       | ✓             | ✗                        |
| JSX                               | ✓             | ✗                        |
| SSR/SG/SRG Included               | ✗ (Supported) | ✓                        |
| Extensive Community and Ecosystem | ✓             | ✗➔✓ Growing              |
| Easy to adopt                     | ✓             | ✓ (Better in my opinion) |

<!-- Öffne zum zeigen https://react.dev/learn und https://learn.svelte.dev/tutorial/welcome-to-svelte -->

---

<!--
Ich benutze wenn es sich vermeiden lest react libs um Komplexität sichtbar zu machen die React hat

In beiden fällen verwende ich Vite das tooling
-->

## Comparison Disclaimer

My react examples don't use external libraries to show complexity compared to Svelte.

I use Svelte kit because it is the recommended way.

Both examples use Vite as development tooling.

---

## What are the most interesting things to know?

### If you learn a new Frontend framework

<!-- Publikum fragen -->

---

## Basics

- Development Tools (IDE Plugins, eslint, prettier ....)

- Structure

- Routing

- Templating

- Debugging

- CSS

<!-- In react würdest du zu  CSSinJS oder tailwind greifen und es modular zu bekommen -->

---

## Parameter

How to pass input data for Components around?

---

## Childs

How to nest Components?

---

## Reactivity

<!-- Ist genau das gegenteil wie es in React funktioniert, code der nicht explizit deffiniert das er Seiteneffecte hat hat es auch nicht-->

How did the Framework handle changing component state?

---

## Global State

How can i share state with sibling or parent components?

---

## Data Fetching

How does the framework handle Data fetching?

---

## Dom Head/Window/Document

How can i listen to general Browser events?
How can i manipulate/change head tag elements?

---

## SSR (Server Side Rendering) SG (Static Generation)

### React

- Build in
- Need Runtime support (Next.js or Remix or DIY)

### Svelte

- Build in
- Svelte.Kit provide targets for multiple runtimes (Node.js, Vercel, Cloudflare, Netlify)

---

<!-- images sind mit Absicht nicht enhalten -->

![bg fit](slideAssets/anyquestions.png)

---

## What is your impression of Svelte?

<!-- images sind mit Absicht nicht enhalten -->

![Alt text](slideAssets/impression.png)

---

## Than you!

## Slides example in github -> xedon -> svelte-for-react-developers

## Let's have interesting conversations and enjoy pizza together
