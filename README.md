# Netflix GPT

- Getting started with create-react-app.
- Configure tailwind css in our app.

# Features.

- Login/sign up page
  - Sign In/ Sign up form
  - Redirect to Browse page
- Browse (after authentication)
- Header
- Main movie

  - Tailer in background
  - Short description on the tailer

- Movie suggestion... - Movie Categories - Each Category has N movies and horizontal slidable.
- Footer.

# Additional Features

- Netflix GPT
- Search BAR
- Movie Suggestions

# Episode_01 NetflixGPT The Beginning...

- Starts with the login page creation.
- covert the login page into sign Up page using state variables;
- React library "@Formic" to make you life easy to create and work with form in react and for validation check.
- Now write form validation code in your login page.

# Part_03 of NetflixGPT

- form validation
- find the regix of Email and Password
- Understand about useRef hook...

# Part_04 of NetflixGPT

- Google fire base set up for authentication
- Deploy your project on production using firebase.
- create sign up user account

# Part 05 of NetflixGPT

- impliment sign in and sign Up logic...
- Learn the basics about fireBase
- sign Up Logic
  - createUserWithEmailAndPassword() method
- sign in logic
  - signInWithEmailAndPassword() method

# part 06 of NetflixGPT

- install react-redux and @reduxjs/toolkit
- set up your redux store.
- Create a userSlice and configure you store and provide the store to the react app
- Set an authentication state observer and get user data using onAuthStateChanged() method.
- Dispatch an action when onAuthstateChanged().
- understand about useNavigate() hook from react-router-dom.
- Navigate to browse page after sign in.
- Naviagate to the browse page if new user is signed up.
- Impliment sign out
- Navigate to login page after sign out.
- update the user profile using Fire base.
- Display the users Photo.
- Display the users Name.
- fixing the bug in auto update user data ...

# firebase Summery.

- Install and config with firebase.
- Authentication using fireBase.
- CreateUserWithemailPassword() to impliment sign Up .
- SignInWithEmailPassword() to impliment sign In.
- OnAuthStateChange() to observe the object (that is sign in or sign out) and get user details.
- UpdateProfile() to update the user details into the redux store and showcase the name and user photo .
- SignOut() to impliment sign out.

# Episode_02 NetflixGTP BUilding The Core...

1.  Fix the bug regarding onAuthStateChange()/ protect the browse route.
2.  unsubscribed to the onAuthStateChange() callback;

# Episode_02 NetflixGPT part_12

- Building our browse page
- Create account on TMDB
- Generate the API key get access token and fetch the movie list(now playing) data from the
  TMDB

# Part_13.

- Put the movies data in out redux store.
- create the moviesSlice and connect to the app store and add all the json movies data into the slice.

# part_14

- Creating your own custom Hook

# part_15

- Planning for the browse page.

# part_16

- building the video and title components
- build custom hook for the videbackground component to fetch the video data and upload into the redux store.

# part_17

- building the videobackground component

# part_18

- Start building the secondry component {movie suggestion page}
- secondry page
  - MovieList
    - Movie Card
- make the beautiful UI for movies and play with scrollbars and tailwind .

# part_19

- Make the Movie List dynamic and add more new movies data.
- Create curtom hooks for fetching the data for movie list from TMDB.
- Work on the scroll bar and made browse page amazing with tailwind Css

# Episode_03 NetflixGPT wrapping up...

# part_20 and # part_21

- Building the GPT button
- Build GPT page
  - Build GPT search Bar
  - Build GPT Movie suggestion page.

# part_22 Building multi Language Pages

- Every text should come from the constant file so that we can change it.
- Build you GPT search page and add multi-language feature .
- Learn the power of constant file .
- every hand-coded text should come from constant file that is a healthy practice.

# Part_23 Intergrate GPT APIs (get open AI key)

- Create account on the Open Al plateform
- create a secret api key
- Install open AI using NPM
- Call the Open ai using a good prompt. model (3.5-tubro).
- set your billing cycle
- After getting the movies result store it into an array
- Now search for the movies in TMDB Api and show it on our GPT movie suggestion page.

# part_24 Building GPT Movie Suggestions UI
- Build you GPT Movie Suggestion page by using movie card component

# Part_25 Securing our API keys.