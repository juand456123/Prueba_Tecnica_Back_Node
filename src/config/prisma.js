import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({
 connectionString: "postgresql://postgres.tnpbzejbseevbaiiogut:BFoDnYCVAAywltGv@aws-1-us-east-2.pooler.supabase.com:6543/postgres?pgbouncer=true",
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

export default prisma;