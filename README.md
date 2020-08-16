# Locali

*locali* is handy app to connect local businesses and residents, providing a safe and secure way for customers to check in, while also providing crucial data to businesses and the government. *locali* connects local business and residents, encouraging them to shop, explore and play... 'locali'! 

For residents, this is a handy guide to beat boredom, support local businesses, stay safe and connected within their community both during and after COVID. *locali* also empowers businesses by providing them with a platform to engage with their local community in a COVID-safe way.

We decided that isolation and lock down can feel pretty meaningless - so we wanted to add some gamification through an achievement system. Residents earn badges when they securely check in to destinations via *locali*.

[![Watch video](https://i.imgur.com/H9ap63C.jpg)](https://youtu.be/7COv9oN8kMI)

## Problems we identified
* Local businesses are suffering during COVID
* There's no incentive for people to use the COVID safe app
* Data in this area is being maintained separately by businesses. There is a fragmented approach and it puts additional stress on businesses, who are already having a hard time to stay afloat
* Residents are unsure about where and how their data is being stored
* Residents are feeling isolated and are staying indoors more which has an impact on mental and physical health

![locali mockup](https://i.imgur.com/FyqSbas.png)

## How locali solves these problems
* Providing a platform for local businesses to connect directly with customers and offer discounts
* Creating a gamification and reward system for customers, which incentivize check-ins
* Taking the burden of data collection off businesses
* Giving customers and residents confidence that their data is not being exposed to third parties, or other customers (i.e. paper lists with names and phone numbers on a café counter)
* Offering a fun experience during uncertain times and giving meaning to COVID life

![locali mockup](https://i.imgur.com/UBqtu4M.png)

## Features
* One-time sign up and verification - this ensures customer details are legitimate
* Search your suburb to find discounts at local businesses, nearby parks, public art pieces and historic landmarks
* Badge and achievement system - earn badges when checking in to certain businesses or landmarks
* Business dashboard - businesses can set their capacity limit based on restrictions, view average time spent in store per customer
* COVIDSafe knowledge hub with resources for businesses
* Improved tracking of potential COVID contacts
* No more paper lists or spreadsheets with personal data stored on them! 😍

![locali desktop mockup](https://i.imgur.com/sA9elGA.jpg)

## Tech used
HTML, SCSS, React, React Bootstrap, Lottie

## Additional features & stretch goals
Due to the nature of GovHack, there were many features we thought of and would love to implement, but did not have time for. These include:

* GPS functionality and map integration to allow users to spot *locali* businesses and landmarks in their area

* Extended dashboard functionality allowing businesses to offer discount codes when badges are unlocked

* Admin dashboard view to enable authorised government employees to view data per business or landmark, including check-in and capacity statistics

* Suburb reporting features to allow authorised government employees to generate reports to allow for easier identification of severely impacted businesses

* 'Staycation' or day planner for residents

## Team Members
👨‍💻 [Aaron Charlton](https://github.com/charltona) | Full Stack Developer

👨‍🎨 [Ivan von Christ](https://github.com/ivonchrist) | UX/UI & Video Designer

👩‍💻 [Genevieve Carter](https://github.com/genevieveloreal) | Front End Developer

## 👉 Get Started

Install dependencies

```
npm install
```

Update your `.env` file with values for each environment variable

```
API_KEY=AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas
etc ...
```

Install the Vercel CLI

```
npm install -g vercel
```

Link your codebase to a Vercel project

```
vercel
```

Run the development server

```
vercel dev
```

When the above command completes you'll be able to view your website at `http://localhost:3000`.

_Note: You can run just the front-end with `npm run start`, but `vercel dev` also handles running your API endpoints (located in the `/api` directory)._

## 🥞 Stack

This project uses the following libraries and services:

- Framework - [Create React App](https://create-react-app.dev) with React Router
- UI Kit - [Bootstrap](https://react-bootstrap.github.io)
- Authentication - [Firebase Auth](https://firebase.google.com/products/auth)
- Database - [Cloud Firestore](https://firebase.google.com/products/firestore)
- Payments - [Stripe](https://stripe.com)
- Newsletter - [Mailchimp](https://mailchimp.com)
- Contact Form - [Formspree](https://formspree.io)
- Analytics - [Google Analytics](https://googleanalytics.com)
- Hosting - [Vercel](https://vercel.com)

## 📚 Guide

  <details>
    <summary><b>Styles</b></summary>
    <p>
      You can edit Bootstrap SASS variables in the global stylesheet located at <code><a href="src/styles/global.scss">src/styles/global.scss</a></code>. Variables allow you to control global styles (like colors and fonts), as well as element specific styles (like button padding). Before overriding Bootstrap elements with custom style check the <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">Bootstrap docs</a> to see if you can do what need by tweaking a SASS variable.
    </p>
    <p>
      Custom styles are located in their related component's directory. For example, if any custom style is applied to the Navbar component you'll find it in <code>src/components/Navbar.scss</code>. We ensure custom styles are scoped to their component by prepending the classname with the component name (such as <code>.Navbar__brand</code>). This ensures styles never affect elements in other components. If styles need to be re-used in multiple components consider creating a new component that encapsulates that style and structure and using that component in multiple places.
    </p>
  </details>

  <details>
    <summary><b>Routing</b></summary>
    <p>
      This project uses <a target="_blank" href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a> and includes a convenient <code>useRouter</code> hook (located in <code><a href="src/util/router.js">src/util/router.js</a></code>) that wraps React Router and gives all the route methods and data you need.
    
    ```jsx
    import { Link, useRouter } from './../util/router.js';

    function MyComponent(){
      // Get the router object
      const router = useRouter();

      // Get value from query string (?postId=123) or route param (/:postId)
      console.log(router.query.postId);

      // Get current pathname
      console.log(router.pathname)

      // Navigate with the <Link> component or with router.push()
      return (
        <div>
          <Link to="/about">About</Link>
          <button onClick={(e) => router.push('/about')}>About</button>
        </div>
      );
    }
    ```
    </p>

  </details>

  <details>
<summary><b>Authentication</b></summary>
<p>
  This project uses <a href="https://firebase.google.com">Firebase Auth</a> and includes a convenient <code>useAuth</code> hook (located in <code><a href="src/util/auth.js">src/util/auth.js</a></code>) that wraps Firebase and gives you common authentication methods. Depending on your needs you may want to edit this file and expose more Firebase functionality.

```js
import { useAuth } from './../util/auth.js';

function MyComponent(){
  // Get the auth object in any component
  const auth = useAuth();

  // Depending on auth state show signin or signout button
  // auth.user will either be an object, null when loading, or false if signed out
  return (
    <div>
      {auth.user ? (
        <button onClick={(e) => auth.signout()}>Signout</button>
      ) : (
        <button onClick={(e) => auth.signin('hello@divjoy.com', 'yolo')}>Signin</button>
      )}
    </div>
  );
}
```

</p>
</details>
  
  <details>
<summary><b>Database</b></summary>

<p>
  This project uses <a href="https://firebase.google.com/products/firestore">Cloud Firestore</a> and includes some data fetching hooks to get you started (located in <code><a href="src/util/db.js">src/util/db.js</a></code>). You'll want to edit that file and add any additional query hooks you need for your project.

```js
import { useAuth } from './../util/auth.js';
import { useItemsByOwner } from './../util/db.js';
import ItemsList from './ItemsList.js';

function ItemsPage(){
  const auth = useAuth();

  // Fetch items by owner
  // It's okay if uid is undefined while auth is still loading
  // The hook will return a "loading" status until it has a uid
  const uid = auth.user ? auth.user.uid : undefined;
  const { data: items, status } = useItemsByOwner(uid);

  // Once we items data then render ItemsList component
  return (
    <div>
      {status === "loading" ? (
        <span>One moment please</span>
      ) : (
        <ItemsList data={items}>
      )}
    </div>
  );
}
```

</p>
</details>

  <details>
    <summary><b>Deployment</b></summary>
    <p>
    Install the Vercel CLI

```
npm install -g vercel
```

Add each variable from `.env` to your Vercel project with the following command. You'll be prompted to enter its value and then choose one or more environments (development, preview, or production).
<a target="_blank" href="https://vercel.com/docs/v2/build-step#environment-variables">Learn more here</a>.

```
vercel env add VARIABLE_NAME
```

Run this command to deploy a preview (for testing a live deployment)

```
vercel
```

Run this command to deploy to production

```
vercel --prod
```

See the <a target="_blank" href="https://vercel.com/docs/v2/platform/deployments">Vercel docs</a> for more details.
</p>

  </details>

  <details>
    <summary><b>Other</b></summary>
    <p>
      The <a href="https://create-react-app.dev">Create React App documention</a> covers many other topics.
      This project was initially created using <a href="https://divjoy.com?ref=readme_other">Divjoy</a>, a React codebase generator. Feel free to ask questions in the <a href="https://spectrum.chat/divjoy">Divjoy forum</a> and we'll do our best to help you out.
    </p>
  </details>
