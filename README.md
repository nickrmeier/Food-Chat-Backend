## Food Chat Backend

[Click here to get the restaurants API](https://afternoon-woodland-50465.herokuapp.com/api/restaurants)

[Click here to get the posts API](https://afternoon-woodland-50465.herokuapp.com/api/post)

### Description:
FoodChat is an application that allows users to create posts on the best or worst dish at the top 10 restaurants in Los Angeles, New York, and Austin. Users are able to post a dish, their  description of that dish, and whether or not they would revisit the restaurant. FoodChat also allows users to delete and edit posts.

### Main Routes for restaurants

- /api/restaurants

#### End-point for restaurants route

- GET /:city (shows all restaurants in a specific city)
- GET /:city/:id (gets restaurant by restaurant id)

### Main Routes for posts

- /api/post

#### End-point for posts route

- GET / (gets all posts)
- GET /:restaurantId (gets post by restaurant's id that was referred to)
- POST /:restaurantId (creates a new post and add to referred restaurant)

- PUT /:id (update post by it's id)

- DELETE /:id (delete post by it's id)

### Model for Restaurant

```
Restaurant: {
 name: String,
        city: String,
        image: String,
        address: String,
	}
```

### Model for Post

```
 {
        title: String,
        summary: String,
        revisit: String,
        restID: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant'
        }]
    }
```

### Sample data response for Post

```
{
restID: [
"5ec2d1d2f9f2e844c801553a"
],
_id: "5ec2d1d2f9f2e844c8015558",
title: "ok food",
summary: "the food was ok",
revisit: "false",
__v: 0
}
```
### Sample data response for Restaurant
```
{
_id: "5ec563bebc50dcba64158c75",
name: "Pasta Sisters",
city: "Los Angeles",
image: "https://i.imgur.com/voDaiWh.jpg",
address: "3343 W Pico Blvd, Los Angeles, CA 90019",
__v: 0
},
{
_id: "5ec563bebc50dcba64158c76",
name: "Wurstkuche",
city: "Los Angeles",
image: "https://i.imgur.com/vhi0nwl.jpg",
address: "625 Lincoln Blvd, Los Angeles, CA 90291",
__v: 0
}
```
