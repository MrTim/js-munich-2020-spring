# Classwork 10 Advanced Section -- Render store from API responce

Hello! Today lets practice interfacing with remote APIs via JavaScript then render our store with
that info. I've created a backend that you can send your store information and it provides endpoint
to access that information.

## Tools

I recommend https://insomnia.rest/ for sending the api your store JSON. Its super nice interface and
json linting built in. Though you are free to send the POST request however you wish.

## Code

- you can use either async await patter or promise chains. It only has to work in the absolutely newest brewers so don't worry about transpieling.

## Spec

1. Start by sending a post request to `student-store.travisshears.xyz/store` with the information of your store in the following structure:

    ```json
    {
        "title": "My Snowboard Store",
        "description": "We sell the best boards",
        "products": [
            {
                "title": "Burton X",
                "price": 1400,
                "stock": 33,
                "sku": "001",
                "extra_data": {
                    "weight": 10,
                    "height": "199cm",
                    "riders": [
                        123,
                        123,
                        666
                    ]
                }
            }
        ]
    }
    ```
    - This need not be from JavaScript. You can do it via a tool
    - Your JSON just follow this structure exactly
    - the only option key is product.extra_data all the rest are required

1. after sending the post request the api will give you back a token save this

1. now in the browser via your js make a GET request to `student-store.travisshears.xyz/store/<your-token-here>`

1. You should now have the data needed to render your store
