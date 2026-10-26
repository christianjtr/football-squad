import { readFileSync } from 'node:fs';

const EXPECTED_TOTALS = {
  players: 32,
  goals: 44,
  assists: 82,
  appearances: 625,
};

const players = JSON.parse(
  readFileSync(new URL('../src/data/players.json', import.meta.url), 'utf8'),
);
const positions = JSON.parse(
  readFileSync(new URL('../src/data/positions.json', import.meta.url), 'utf8'),
);

const errors = [];

if (!Array.isArray(players)) {
  errors.push('players.json must be an array');
}

if (!Array.isArray(positions)) {
  errors.push('positions.json must be an array');
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

const positionNames = positions.map((entry) => entry?.position);
const positionSet = new Set(positionNames);
const ids = new Set();
const numbers = new Set();

if (positionNames.length === 0) {
  errors.push('positions.json must contain at least one position');
}

for (const [index, position] of positionNames.entries()) {
  if (typeof position !== 'string' || position.trim() === '') {
    errors.push(`positions[${index}].position must be a non-empty string`);
  }
}

if (positionSet.size !== positionNames.length) {
  errors.push('positions.json contains duplicate positions');
}

for (const [index, player] of players.entries()) {
  const label = `players[${index}]`;

  if (typeof player !== 'object' || player === null || Array.isArray(player)) {
    errors.push(`${label} must be an object`);
    continue;
  }

  if (typeof player.id !== 'string' || player.id.trim() === '') {
    errors.push(`${label}.id must be a non-empty string`);
  } else if (ids.has(player.id)) {
    errors.push(`${label}.id "${player.id}" is duplicated`);
  } else {
    ids.add(player.id);
  }

  if (typeof player.fullName !== 'string' || player.fullName.trim() === '') {
    errors.push(`${label}.fullName must be a non-empty string`);
  }

  if (typeof player.country !== 'string' || player.country.trim() === '') {
    errors.push(`${label}.country must be a non-empty string`);
  }

  if (!positionSet.has(player.position)) {
    errors.push(`${label}.position "${player.position}" is not in positions.json`);
  }

  if (!Number.isInteger(player.number) || player.number < 1 || player.number > 99) {
    errors.push(`${label}.number must be an integer from 1 to 99`);
  } else if (numbers.has(player.number)) {
    errors.push(`${label}.number ${player.number} is duplicated`);
  } else {
    numbers.add(player.number);
  }

  for (const stat of ['goals', 'assists', 'appearances']) {
    if (!Number.isInteger(player[stat]) || player[stat] < 0) {
      errors.push(`${label}.${stat} must be a non-negative integer`);
    }
  }
}

if (errors.length === 0) {
  const totals = players.reduce(
    (acc, player) => ({
      players: acc.players + 1,
      goals: acc.goals + player.goals,
      assists: acc.assists + player.assists,
      appearances: acc.appearances + player.appearances,
    }),
    { players: 0, goals: 0, assists: 0, appearances: 0 },
  );

  for (const [key, expected] of Object.entries(EXPECTED_TOTALS)) {
    if (totals[key] !== expected) {
      errors.push(`total ${key} is ${totals[key]}, expected ${expected}`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(
  `Data OK: ${players.length} players, ${positions.length} positions, ` +
    `${EXPECTED_TOTALS.goals} goals, ${EXPECTED_TOTALS.assists} assists, ` +
    `${EXPECTED_TOTALS.appearances} appearances.`,
);
