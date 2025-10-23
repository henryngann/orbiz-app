# Henry Ngan

- Timebox: Referring to the Job Description, the length of the exercise should take roughly ~ 1 hour.
- Deployment - [Vercel](https://orbiz-app-henryngan.vercel.app/) -

- See Future Considerations for closing thoughts on polish and future improvements.

## Goal

Build a Casino Lobby page that lists games using React, TypeScript and MUI.

## Requirements

The page should

- [x] Fetch game data from a provided JSON file (you can simulate an API fetch)
- [x] Display games as cards showing their title, image, and category
- [x] Include a search bar to filter by name or category
- [x] Handle loading and error states
- [x] Use Material UI (or another component library) components and theming

Technical

- [x] Use React + TypeScript
- [x] preferably Use Material UI for layout and components
- [x] Organize components cleanly
- [x] Include basic responsive design
- [x] Handle mock API calls (you can use fetch('/games.json') or import JSON directly)
- [x] Keep styles consistent and readable

Functional

- [x] Display all games in a responsive grid
- [x] Implement a search/filter input that filters games by title or category
- [x] Handle error cases gracefully (e.g. failed fetch)
- [x] Bonus (optional): Show a loading indicator for 1–2 seconds before displaying data
      (simulate network delay)
- [x] Bonus (optional): Add a “Favorite” toggle that updates the UI locally

Submission must have:

- [x] Source code (React + TypeScript)
- [x] Instructions to run locally (npm install && npm start)
- [x] A short README.md explaining your approach, any challenges, and optional features

## Installation

1. Clone the repo
   `git clone https://github.com/henryngann/orbiz-app.git`
2. Install NPM packages
   `npm install`
3. Run the development server
   `npm run dev`
4. `Open http://localhost:3000 with your browser.`

5. Profit!!!

## Project Structure

- components/ - contains all shared UI
- hooks/ - reusable logic
- providers/ - top-level context (ThemeProvider)
- types/ - all shared models/interfaces/types etc
- mocks/ - anything mock-related
- style/ - anything style-related

## Approach

Alright! Initially, my top priorities were to review and understand the functional and technical requirements deeply. I started with jotting down the optional points as a low priority task and decided that if I had any extra time after my time box, that I would aim for those extra points. Once I had a deep understanding of the assignment, I began by organizing everything into a clean folder structure. My strategy was to focus on functionality first and the presentation layer afterwards. This meant setting up the fake mockData call + focusing on filter/search before doing anything crazy for style. For my components, I began w/ a mobile-first design and branched off from there. MUI's Grid + Flexbox made responsive design accomplishable here. I also strongly kept in mind to keep complexity to a minimum while also considering scale + maintainability.

The Breakdown

Components/

- SlotSection for the main layout - Contains the search that filters game by titles and category. (filtered for provider as well.)

- GamesGrid/GamesCard for displaying all the games in a responsive grid. Uses Grid, Container and Stack Components for basic responsive design. Also handles error cases gracefully. On a failed fetch, users are prompted to retry with an alert. On an empty search, users are prompted to redo the query. For cases with network delay, a MUI skeleton is shown in place before things are loaded in.

- CategoryBar for the implementation of toggling favourites. Works hand in hand with CategoryItem to display the MUI paper items. (Was able to knock down this bonus point. Simple onclick toggle)

- Image Carousel for funsies. (This wasn't required but the design of the website felt empty. I just ripped some images off of bet105.ag and slapped them at the top.) Fun fact! It is general common practice to have promotions at the top! It is the highest attention zone for users and can get better click-through + conversion by adding it in that particular spot.

- GameCardSkeleton - Uses MUI's skeleton component to show a lightweight place holder. Very apparent with the simulated network delay. Just refresh to check it out!

Hooks/

- useMockGames - to simulate the API call with realistic delays. Added Math.random here to juggle 1-2 seconds.
- useMediaQueries - I wanted a hook to handle mobile breakpoints cleanly. This helped me dynamically adjust for mobile slides in the image carousel.
- useDebounce - A very very simple debounce hook that takes a generic and runs a setTimeOut before cleaning itself up. Used so that the search input could feel more seamless.

Types/

- games.ts - defines the Game model.

Styling/ + Providers/

- theme.ts - Went for a dark mode casino aesthetic. Visited Stake.com, pointsbet, powerpacks and CSGOEmpire for design inspiration.
- font.ts - Used Roboto Condensed to make it look more "casino-ey"

- ThemeProvider - Wraps our app w/ our MUI theme.

## Future Considerations

- useMockGames - useEffect for data fetching is actually outdated but is used here due to time constraints. In the future, we should switch to SWR for better caching and revalidation.

- Images - Due to time constraints, converting these images to a better format was not feasible. Using these PNG's could potentially affect performance negatively and in the future, we should look to use other superior formats like AVIF, WEBP, etc.

- CategoryBar - I would have loved to add more categories here but due to time constraints, kept it to the relevant ones only.

- ImageCarousel - Building a carousel from scratch costs more time. Again, due to time constraints, using react-slick to accomplish this was a safe decision for filling up the empty page. In the future, using pure CSS scroll-snap + MUI can be better for performance, minimal fuss, a11y, etc.

- GamesGrid - When searching for a game with the input, results appear and dissapear instantly. This can feel "flickery" for some users so in the future, I'd add small, subtle animations to fade in new and fade out removed ones. Pairing this with a debounce works wonderfully.

## Final Thoughts

And thats a wrap folks! My goal was to ship a clear, responsive lobby that can be easily maintained/scaled up in the future. All functional and technical requirements are satisfied. Most of my time went into making the code blocks very readable keeping complexity to a minimum. In the future, I would love to have more time to polish the components and make the website feel more complete. If I had an extra hour, I would consider doing an accessibilty pass to knock down WCAG points or adding visual regressions in Chromatic. We could also use tools like WAVE and Lighthouse to hone in on more other optimizations like SEO, Performance, Best Practices , etc.

Thank you for considering my work!! I appreciate the time spent, and I'm happy to elaborate on any of the decisions that I made. I also welcome any feedback and critique!

Lets talk soon!
Henry.

## Contact

Henry Ngan - henrynganwork@gmail.com
