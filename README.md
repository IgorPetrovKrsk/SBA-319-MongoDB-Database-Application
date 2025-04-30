# Very simple transport management system
REST API using MongoDB to store information about truck, orders and messages.

### API Reference
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
Trucks | | |
GET | / | Home Page w/ Directory |
GET | /trucks | All trucks |
GET | /trucks/allIdle | All Idle trucks |
GET | /trucks/allAvailable | All Available trucks |
POST | /trucks | Create new truck |
GET | /trucks/:licensePlate | Truck with selected license plate |
PUT | /trucks/:licensePlate | Update truck with selected license plate |
DELETE | /trucks/:licensePlate | Delete truck with selected license plate |
Messages | | |
GET | /messages | All messages | 
GET | /messages/:statusOrLicencePlate | Messages with selected status or truck lisence plate | 
POST | /messages | Create new message |
PUT | /messages/:id | Update message with selected id |
DELETE | /messages/:id | Delete message with selected id |
Orders | | |
GET | /orders | All orders | 
GET | /messages/:licensePlate | Orders assigned to truck with selected lisence plate | 
POST | /orders | Create new order |
DELETE | /orders/deleteDelivered | Delete all delivered orders |