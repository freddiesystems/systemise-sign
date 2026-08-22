import { env } from '../utils/env';

export const SYSTEMISE_ENCRYPTION_KEY = env('NEXT_PRIVATE_ENCRYPTION_KEY');

export const SYSTEMISE_ENCRYPTION_SECONDARY_KEY = env('NEXT_PRIVATE_ENCRYPTION_SECONDARY_KEY');

// if (typeof window === 'undefined') {
//   if (!SYSTEMISE_ENCRYPTION_KEY || !SYSTEMISE_ENCRYPTION_SECONDARY_KEY) {
//     throw new Error('Missing SYSTEMISE_ENCRYPTION_KEY or SYSTEMISE_ENCRYPTION_SECONDARY_KEY keys');
//   }

//   if (SYSTEMISE_ENCRYPTION_KEY === SYSTEMISE_ENCRYPTION_SECONDARY_KEY) {
//     throw new Error(
//       'SYSTEMISE_ENCRYPTION_KEY and SYSTEMISE_ENCRYPTION_SECONDARY_KEY cannot be equal',
//     );
//   }
// }

// if (SYSTEMISE_ENCRYPTION_KEY === 'CAFEBABE') {
//   console.warn('*********************************************************************');
//   console.warn('*');
//   console.warn('*');
//   console.warn('Please change the encryption key from the default value of "CAFEBABE"');
//   console.warn('*');
//   console.warn('*');
//   console.warn('*********************************************************************');
// }
