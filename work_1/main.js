#! /usr/bin/env node
import nodeFetch from 'node-fetch';
import { readFile, writeFile } from './utiles/utiles.js';
import { Command } from 'commander';

const program = new Command();

program
  .command('weather')
  .option('--cityName <cityName>')
  .action(async (opts) => {
    console.log('this city is', opts.cityName);
    const res = await nodeFetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${opts.cityName}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
    );

    const data = await res.json();

    console.log(`temperature feels like: ${data.main.feels_like}C°`);

    await writeFile('weather.json', data, true);
  });

program.parse();
