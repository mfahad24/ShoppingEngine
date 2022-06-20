# Shopping Engine

## Background 

Shopping Engine is a management software for in-store shoppers; we allow our client's VIP customers to place orders, match them with a shopper that suits their taste. 

Our system was intended for small shops which would handle requests in real time, matching a shopper at the given store with a buy and automatically dispatching the request. 

On of our clients _Artisan Groceries_, has recently expanded and is looking to start setting up shopping list for their shoppers at least a day in advance. The automated process we're currently using, is hot-spotting their staff too much, and they'd rather manually fine tune our choices. 

## Task

We need to add a feature to assign carts to shoppers in advance.

The server will handle the match making, and provide a list of _shoppers_ and _carts_ to the interface. We've provided data in a JSON format that mirrors the API in the **data** folder. Feel free to import the data directly, and skip over the networking logic. 

The interface should have two key elements, one for unassigned carts and another for matched shoppers. 

Carts contain two important values - _# of items_, the number of unique items in the shopping cart, and _miles from store_ how many miles from the store the person lives. 

Each shopper has two important values, _minutes per item_ which is the average number of minutes a shopper takes locating and selecting an item; and _minutes per mile_ which is the average number of minutes per mile they take per round trip.

When a shopper has carts assigned to them, the cart should appear within their 'card', and displate a time estimate. Additionally, the shopper should also display a total time assigned for all of their carts. Should the shopper's carts exceed 4 hours (240 Minutes), we want to use a warning color tone to indicate they're close to full; and that should shift to an error color tone to indace they're full at 5 hours (300 minutes). 

### Assigning Tasks 

Our team can't decide on how best to handle the assignment experiance - you are the tie breaker. 

**Drag and Drop** The team agrees this is likely the best user experiance, but also the most time consuming to build and test. Due to the complexity we recommend adding a library, but we need to support both tablets and laptops so touch events and click events must be accounted for. 

**Auto Select Button** This experiance focuses on clicking an 'assign' button on a cart, in the order of the cart's importance. All the button needs to do is assign the cart to the shopper with the lowest total time. If all the times are equal it will select the shopper who will complete the order the quickest. 

**Selection Screen** Offering a fullscrean view with all of the shoppers data points, as opposed to the limited 'card' view. 

### Design

A Quick Design Sketch was thrown together to provide a rought idea
