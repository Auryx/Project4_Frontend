# Project 4
By: Paul Bunda
## Pretty Dice
Ever found a pretty set of dice that you just couldn't afford at the time, and just forgot about them later? Here's the app for you! Pretty Dice allows you to store the dice you want in a concise format with links, images, and the name of the dice that you just can't go without!

### Links
[**Deployment**](https://pretty-dice.vercel.app/)
[**Backend**](https://project4-backend-km9j.onrender.com/)
[**Backend Github**](https://github.com/Auryx/Project4_Backend)

### Technologies Used 
- Javascript
- React Framework
- Python
- Django
- HTML
- CSS
- Hosted on Vercel

## Backend Endpoints
| ENDPOINT | METHOD | PURPOSE |
|----------|--------|---------|
| /dice | GET | To display all dice in the user's index |
| /dice/create | GET | Display a form to add a new card |
| /dice | POST | Add the dice set to the database from the form, and redirect to /dice |
| /dice/:id | GET | Display the info about a specific dice set |
| /dice/:id | GET | Display a form to edit a designated existing dice set |
| /dice/update/:id | PUT | Update a designated dice set's information then redirect to /dice |
| /dice/delete/:id | DELETE | Delete a designated dice set then redirect to /dice  |

## ERD
``` mermaid
erDiagram
    DiceSet {
        id string 
        name string
        cost float
        link string
        description string
    }

```

## Future Improvements
- Auth for unique users
- More Styling, needs it
