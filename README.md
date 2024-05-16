### Authentication

- `POST /auth/register`: Create user || Register.
  - Request Body: `{ "email": "<email>", "password": "<password>" }`

- `POST /auth/login`: Log in by email && pass.
  - Request Body: `{ "email": "<email>", "password": "<password>" }`

### Debts

- `POST /debts`: Create debt.
  - Authentication. `{ "email": "<email>", "password": "<password>" }`
  - Request Body: `{ "user_id": "<user-id>", "amount": "<amount>", "description": "<description>" }`

- `GET /debts`: Get all debts for a specific user.
  - Authentication. `{ "email": "<email>", "password": "<password>" }`
  - Request Body: `{ "user_id": "<user-id>"}`

- `PUT /debts/:id`: Update a debt.
  - Authentication. `{ "email": "<email>", "password": "<password>" }`
  - Request Body: `{ "amount": "<new-amount>", "description": "<new-description>" }`

- `DELETE /debts/:id`: Delete a debt.
  - Authentication. `{ "email": "<email>", "password": "<password>" }`
  - Params: id
