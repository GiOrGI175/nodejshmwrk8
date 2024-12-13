#! /usr/bin/env node

import { readFile, writeFile } from './utiles/utiles.js';

import { Command } from 'commander';

const program = new Command();

program
  .command('add')
  .option('--amount <amount>')
  .option('--category  <category >')
  .option('--description <description>')
  .action(async (opts) => {
    const expenseArr = await readFile('expenses.json', true);

    const expense = {
      data: new Date(),
      amount: Number(opts.amount),
      category: opts.category,
      description: opts.description,
    };
    expenseArr.push(expense);

    await writeFile('expenses.json', expenseArr, true);
  });

program.parse();
