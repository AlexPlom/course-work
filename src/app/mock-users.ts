import { User } from './user';

export const USERS: User[] = [
  { name: 'Admin', email: "admin@admin", password: "admin", role: "admin", isBlocked: false },
  { name: 'User', email: "user@user", password: "123456", role: "user", isBlocked: false },
  { name: 'alexplom', email: "Bombasto", password: "123qwe", role: "admin", isBlocked: false },
  { name: 'Celeritas', email: "Celeritas", password: "123456", role: "user", isBlocked: false },
  { name: 'Magneta', email: "Magneta", password: "123456", role: "user", isBlocked: false },
  { name: 'RubberMan', email: "RubberMan", password: "123456", role: "some stuff", isBlocked: false },
  { name: 'Dynama', email: "Dynama", password: "123456", role: "user", isBlocked: false },
  { name: 'Dr IQ', email: "driq", password: "123456", role: "user", isBlocked: false },
  { name: 'Magma', email: "Magma", password: "123456", role: "user", isBlocked: false },
  { name: 'Tornado', email: "Tornado", password: "123456", role: "user", isBlocked: false }
];