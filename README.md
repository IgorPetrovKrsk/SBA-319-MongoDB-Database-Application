# Very simple transport management system
REST API using MongoDB to store information about truck, orders and messages.

### API Reference
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | / | Home Page w/ Directory |
||  Trucks| |
GET | /trucks | All trucks |
GET | /trucks/allIdle | All Idle trucks |
GET | /trucks/allAvailable | All Available trucks |
POST | /trucks | Create new truck |
GET | /trucks/:licensePlate | Truck with selected license plate |
PUT | /trucks/:licensePlate | Update truck with selected license plate |
DELETE | /trucks/:licensePlate | Delete truck with selected license plate |
||  Messages| |
GET | /messages | All messages | 
GET | /messages/:statusOrLicencePlate | Messages with selected status or truck lisence plate | 
GET | /messages/search/:text | Messages with selected text (text can be in any field) | 
POST | /messages | Create new message |
PUT | /messages/:id | Update message with selected id |
DELETE | /messages/:id | Delete message with selected id |
|| Orders | |
GET | /orders | All orders | 
GET | /messages/:licensePlate | Orders assigned to truck with selected lisence plate | 
POST | /orders | Create new order |
DELETE | /orders/deleteDelivered | Delete all delivered orders |


What could you have done differently during the planning stages of your project to make the execution easier?
Plan routes ahead, because 'trucks/allAvailable' and 'trucks//:licensePlate' can intersect

Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?
Text search was a little bit harder. 

What would you add to or change about your application if given more time?
I will add more routes, like PUT for orders. And add a lot more data and user actions (like delete) validation.
