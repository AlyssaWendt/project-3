
<h1 align="center">Quick Tarot</h1>


<h3 align="center">Languages and Tools:</h3>
<table align="center" width="320px">
    <tbody>
    <tr valign="top">
            <td width="80px" align="center">
            <span><strong>JavaScript</strong></span><br>
            <img height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
            </td>
            <td width="80px" align="center">
            <span><strong>CSS</strong></span><br>
            <img height="32px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg">
            </td>
            <td width="80px" align="center">
            <span><strong>React</strong></span><br>
            <img height="32px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">
            </td>
            <td width="80px" align="center">
            <span><strong>git</strong></span><br>
            <img height="32px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg">
            </td>
            <td width="80px" align="center">
            <span><strong>GitHub</strong></span><br>
            <img height="32px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg">
            <td width="80px" align="center">
            <span><strong>Bootstrap</strong></span><br>
            <img height="32px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg">
            </td>
        </tr>
    </tbody>
</table>

Deployed Website : https://quicktarot.herokuapp.com/tarot

## Project Description

My app is called Quick Tarot.  It's a tarot app for people just getting started or need a quick reference for basic tarot card meaning.  Users can see a list of all of the Tarot  with a description of the card and the upright/reversed meaning. 

## Wireframes

### Home
![Home Page](https://i.imgur.com/LjUNgOG.png)

### Tarot List
![Tarot List](https://i.imgur.com/FpId4Rk.png)

### Tarot Page
![Tarot Page](https://i.imgur.com/MEIFgvS.png)

### Learn More
![Learn More](https://i.imgur.com/utYjlRo.png)

## MVP User Stories

### MVP User Stories


- As a user, I want to see a listing of all of the Tarot cards in a standard deck.
![List](https://i.imgur.com/493NSHV.png)

- As a user, I would like to click on the Full Meaning button underneath to view a description of the card, the upright meaining and the reversed meaning.
![Point](https://i.imgur.com/ATfIpO7.png)
![Show](https://i.imgur.com/Xq1Kwcp.png)

- As a user, I would like a editional page that gives some general informaiotn on how to start reading tarot and a basic 3 card spread. 

![Learning](https://i.imgur.com/OGiRDLN.png)

## Component Hierarchy

Provide a link to a diagram of showing the React component hierarchy of your app.
![Component Hierarchy](https://i.imgur.com/3WaRTTS.png)

## API

https://rapidapi.com/ther3born0/api/tarot-api


### Strength

- I personally had indepth knowlegde of the subject matter, and because of this, I found it easier to orgainze and know what feature to add to the website.

- Initial planning of the website made the building the project for the most part very seemless.

### Weakness
- The biggest weakness for myself going into this project would be CCS. I took alot research to get the styling for this project just right.

### Biggest Challenge 
- Time constraints and a short deadline really pushed me to work efficently.

- The API that was used didn't have working images so I had to make my own data that could be used with the API. This was very time consuming and tedious.

### Key learnings/takeaways
- I learned alot about the relationship between data sets and how manipulate them using react.


### Improvements

- I would like to add a virtual 3 card reading feature.

- Adding a search form.

- Continuing to add more styling 


### Code 

```
{tarot.map((card, id) => {
  const image = Images[card.name]?.image|| "https://picsum.photos/300/300"
     const cards = {
         name: card.name,
        img: image
     }
```