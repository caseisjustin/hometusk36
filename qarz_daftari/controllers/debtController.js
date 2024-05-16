import * as Debt from "../models/debt.js"

export async function createDebt(req, res) {
  const { user_id, amount, description } = req.body;
  try {
    const newDebt = await Debt.createDebt(user_id, amount, description);
    res.status(201).send(newDebt);
  } catch (err) {
    res.status(500).send('An error occured');
  }
}

export async function getDebts(req, res) {
  const { user_id } = req.body;
  try {
    const debts = await Debt.getDebtsByUserId(user_id);
    res.status(200).send(debts);  
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occured');
  }
}

export async function updateDebt(req, res) {
  const { id } = req.params;
  const { amount, description } = req.body;
  try {
    const updatedDebt = await Debt.updateDebt(id, amount, description);
    res.status(200).send(`UPDATED SUCCESSFULLY\n ${JSON.stringify(updatedDebt)}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occured');
  }
}

export async function deleteDebt(req, res) {
  const { id } = req.params;
  try {
    await Debt.deleteDebt(id);
    res.status(200).send('Debt deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occured');
  }
}