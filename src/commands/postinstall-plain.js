/**
 * Barebone version for old terminals that don't support emoji
 * and packages that still need to support old versions of Node
 */

import { getCollective } from '../lib/utils';

const collective = getCollective();

console.log("");
console.log("     *** Thank you for using " + collective.slug + "! ***");
console.log("");
console.log("Please consider donating to our open collective");
console.log("     to help us maintain this package.");
console.log("");
console.log("  " + collective.url + "/donate");
console.log("");
console.log("                    ***");
console.log("");
process.exit(0);