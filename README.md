# Alto CMS challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This challenge consist in the creation of a micro CMS system for a personal
blog.

![localhost_3000_](https://user-images.githubusercontent.com/14167280/224724687-1aeeeed0-2d8c-4386-afa0-cd63335282fa.png)

## Available Features

* The user is able to navigate to the different pages using the top menu.
* Is possible to find blog posts using the search bar a the top right.
* The search bar auto-completes while the user is typing.
* The user is able to click one of the results on the search bar.
* The user is also able to click the "Search" button to see the results page.
* When reading one of the blog posts, the user is able to click "Edit" to change
  the content of the post.

## Considerations

* The information of the posts is loaded from
  [dummyjson.com](https://dummyjson.com/posts)
* The data is stored in memory using React Context.
* The user is able to edit the information but after reloading the page these
  changes will be lost since a new request to dummyjson will be made.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
