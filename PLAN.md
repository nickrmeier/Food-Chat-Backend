# Project 3 Proposal

## Description
A restaurant review app that shows the top 5 restaurants from 3 metro areas. Users can visit restaurant page and read other reviews of dishes from people. Users can also create, update, and delete any reviews they leave on a restaurant's dish.

## Wireframes
### Home
![App](/images/Home.png)

### Restaurants List
![App](/images/Restaurants.png)

### Restaurant Page

![App](/images/Restaurant.png)

#### Bonus(User Login)

![App](/images/Bonus.png)


### MVP User Stories

- As a user I want to be able to see a home page that shows three major cities

- As a user when I click on their button it should take me to a list of the top 5 restaurants in that city

- As a user when  I click on a restaurant it should show the comments left on that restaurant.

- As a user I want to see a form I can fill out to post my own comments.

#### Bonus

- As a user I want to be able to login and make comments through my account


### Backend Routes
- GET /restaurant (shows all restaurants)
	
- GET /:restaurantID (gets restaurant by id)


- GET /restaurant/city (get restaurant by which city they're in)

- POST /post (creates a new post)

- PUT /:postID (edit post by id)

- DELETE /:postID (delete by id)

#### Bonus Routes

- POST /user (creates new user)

- PUT /:userID (gets user by ID and allows for update)

- DELETE /:userID (deletes the user by id)


### Models 

```
Restaurant: {
	_id: id,
	name: String,
	city: String,
	img: String,
	postID: {
		ref: Post,
		type: mongo.Schema.Type.ObjectID
	}
}


Post: {
	_id: id,
	title: String,
	summary: String,
	revisit: Boolean,
	
}

```
### Response JSON

```
[
    {
        "_id": "1491820",
        "name": "Burger King",
        "city": "Los Angeles",
        "img": "url.com"
    }
    {
        "_id": "1492340",
        "title": "Whopper",
        "summary": "Whopper is a must have when you come here, definitely the best dish",
        "revisit": "true"
    }
]
```