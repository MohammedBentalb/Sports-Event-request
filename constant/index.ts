import {
  firstPlayer,
  firstTicket,
  fourthPlayer,
  secondPlayer,
  secondTicket,
  thirdPlayer,
  thirdTicket,
} from '@/public';
import { title } from 'process';

export const firstSection = [
  {
    id: '1',
    src: firstPlayer,
    team: 'Sacramento River Cats',
    events: '48',
    sport: 'Baseball',
  },
  {
    id: '2',
    src: secondPlayer,
    team: 'Las Vegas Aviators',
    events: '28',
    sport: 'Baseball',
  },
  {
    id: '3',
    src: thirdPlayer,
    team: 'new jersey devils',
    events: '15',
    sport: 'ice hockey',
  },
  {
    id: '4',
    src: fourthPlayer,
    team: 'Las Vegas Aviators',
    events: '28',
    sport: 'Baseball',
  },
];

export const secondSectionTickets = [
  {
    src: firstTicket,
    title: 'Las Vegas Aviators',
    date: 'Oct 15 | Sun | 4:30 PM',
    local: 'Las Vegas Ballpark, Las Vegas, Nevada',
    cta: 'Take Flight Collection',
  },
  {
    src: secondTicket,
    title: 'Sacramento River Cats',
    date: 'Oct 15 | Sun | 4:30 PM',
    local: 'Sutter Health Park, Sacramento, California',
    cta: 'Orange Collection',
  },
  {
    src: thirdTicket,
    title: 'Las Vegas Aviators',
    date: 'Oct 15 | Sun | 4:30 PM',
    local: 'Las Vegas Ballpark, Las Vegas, Nevada',
    cta: 'Take Flight Collection',
  },
  {
    src: secondTicket,
    title: 'Sacramento River Cats',
    date: 'Oct 15 | Sun | 4:30 PM',
    local: 'Sutter Health Park, Sacramento, California',
    cta: 'Orange Collection',
  },
];
