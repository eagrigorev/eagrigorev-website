/* Namespaces */
import fs from 'fs';

/* Utils */
import { URL } from '@/const/url';

export const categoriesList: string[] = fs.readdirSync(URL.POSTS);
