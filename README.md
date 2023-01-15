# Syndicat
project Sandycat with technology :

## Tech Stack

**Client:** React, bootstrap

**Server:** Node, Express

**database:** Mongodb


## API Reference

### Autentication

| Method | Api     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/auth/login` | **Login**|
| `POST` | `/api/auth/register` | **Register**|

### Appartement

| Method | Api     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/appartement/addapartement` | **addapartement**|
| `POST` | `/api/appartement/getoneapartement/:id` | **getoneapartement**|
| `POST` | `/api/appartement/updateapartement/:id` | **updateapartement**|
| `POST` | `/api/appartement/deleteapartement/:id` | **deleteapartement**|

### Client

| Method | Api     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/client/addclient` | **addclient**|
| `POST` | `/api/client/getoneclient/:id` | **getoneclient**|
| `POST` | `/api/client/updateclient/:id` | **updateclient**|
| `POST` | `/api/client/deleteclient/:id` | **deleteclient**|

### Pyament

| Method | Api     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/paiement/addpaiement` | **addpaiement**|
| `POST` | `/api/paiement/getonepaiement/:id` | **getonepaiement**|
| `POST` | `/api/paiement/updatepaiement/:id` | **updatepaiement**|
| `POST` | `/api/paiement/deletepaiement/:id` | **deletepaiement**|