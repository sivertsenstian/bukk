import { UserId, GameId, User, Game } from './models';
import { first, includes } from 'lodash';

///// DATA ////
const users: User[] = [
  {
    id: 1,
    email: 'botto0@fc2.com',
    lichessAccount: 'mramsbottom0@issuu.com',
    rating: 83
  },
  {
    id: 2,
    email: 'cslocomb1@wikispaces.com',
    lichessAccount: 'cwelch1@bandcamp.com',
    rating: 87
  },
  {
    id: 3,
    email: 'nguys2@clickbank.net',
    lichessAccount: 'kpitherick2@whitehouse.gov',
    rating: 95
  },
  {
    id: 4,
    email: 'pcowx3@exblog.jp',
    lichessAccount: 'dhaggie3@prnewswire.com',
    rating: 14
  },
  {
    id: 5,
    email: 'aeckery4@cnet.com',
    lichessAccount: 'rhulse4@biblegateway.com',
    rating: 48
  },
  {
    id: 6,
    email: 'onunnerley5@va.gov',
    lichessAccount: 'cbyres5@odnoklassniki.ru',
    rating: 15
  },
  {
    id: 7,
    email: 'noswick6@is.gd',
    lichessAccount: 'jreely6@hubpages.com',
    rating: 79
  },
  {
    id: 8,
    email: 'tlownes7@delicious.com',
    lichessAccount: 'csynder7@utexas.edu',
    rating: 65
  },
  {
    id: 9,
    email: 'comohun8@lycos.com',
    lichessAccount: 'sdolman8@bloomberg.com',
    rating: 34
  },
  {
    id: 10,
    email: 'cmcguckin9@bizjournals.com',
    lichessAccount: 'auppett9@hud.gov',
    rating: 10
  }
];

const games: Game[] = [
  {
    id: 1,
    date: new Date(),
    white: 5,
    black: 9,
    result: 2,
    online: false,
    type: 2
  },
  {
    id: 2,
    date: new Date(),
    white: 5,
    black: 4,
    result: 2,
    online: false,
    type: 2
  },
  {
    id: 3,
    date: new Date(),
    white: 7,
    black: 7,
    result: 1,
    online: true,
    type: 1
  },
  {
    id: 4,
    date: new Date(),
    white: 5,
    black: 9,
    result: 0,
    online: true,
    type: 0
  },
  {
    id: 5,
    date: new Date(),
    white: 10,
    black: 9,
    result: 2,
    online: true,
    type: 0
  },
  {
    id: 6,
    date: new Date(),
    white: 8,
    black: 6,
    result: 0,
    online: false,
    type: 1
  },
  {
    id: 7,
    white: 3,
    date: new Date(),
    black: 6,
    result: 0,
    online: false,
    type: 3
  },
  {
    id: 8,
    white: 2,
    date: new Date(),
    black: 8,
    result: 1,
    online: false,
    type: 2
  },
  {
    id: 9,
    date: new Date(),
    white: 5,
    black: 1,
    result: 0,
    online: false,
    type: 3
  },
  {
    id: 10,
    date: new Date(),
    white: 4,
    black: 1,
    result: 0,
    online: true,
    type: 1
  },
  {
    id: 11,
    date: new Date(),
    white: 3,
    black: 10,
    result: 1,
    online: true,
    type: 3
  },
  {
    id: 12,
    date: new Date(),
    white: 3,
    black: 6,
    result: 2,
    online: false,
    type: 0
  },
  {
    id: 13,
    date: new Date(),
    white: 2,
    black: 2,
    result: 2,
    online: false,
    type: 3
  },
  {
    id: 14,
    date: new Date(),
    white: 4,
    black: 10,
    result: 0,
    online: false,
    type: 1
  },
  {
    id: 15,
    date: new Date(),
    white: 3,
    black: 7,
    result: 1,
    online: true,
    type: 3
  },
  {
    id: 16,
    date: new Date(),
    white: 2,
    black: 9,
    result: 1,
    online: false,
    type: 2
  },
  {
    id: 17,
    date: new Date(),
    white: 8,
    black: 8,
    result: 2,
    online: true,
    type: 1
  },
  {
    id: 18,
    date: new Date(),
    white: 3,
    black: 4,
    result: 2,
    online: false,
    type: 0
  },
  {
    id: 19,
    date: new Date(),
    white: 7,
    black: 1,
    result: 1,
    online: false,
    type: 1
  },
  {
    id: 20,
    date: new Date(),
    white: 2,
    black: 3,
    result: 2,
    online: true,
    type: 0
  }
];

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/// SERVER CALLS..
export const GetUser = async (id: UserId) => {
  await delay(Math.random() * 2000);
  return Promise.resolve(first(users));
};
export const GetUsers = async () => {
  await delay(Math.random() * 2000);
  return Promise.resolve(users);
};
export const GetUserGames = async (id: UserId) => {
  await delay(Math.random() * 5000);
  return Promise.resolve(games.filter(g => includes([g.white, g.black], id)));
};

export const GetGame = (id: GameId) => Promise.resolve(first(games));
export const GetGames = () => Promise.resolve(games);
