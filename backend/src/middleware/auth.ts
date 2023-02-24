import { expressjwt, GetVerificationKey } from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';

import env from '@/utils/env';

export const verifyJwt = expressjwt({
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${env.auth0Domain}/.well-known/jwks.json`,
  }) as GetVerificationKey,
  audience: env.uniqueIdentifier,
  issuer: `https://${env.auth0Domain}/`,
  algorithms: ['RS256'],
}).unless({ path: [/\/user/i, '/listPosts'] });
