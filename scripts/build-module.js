const esbuild = require( 'esbuild' );
const name    = 'react-splide';


async function buildScript( format = 'esm', ext = 'js' ) {
  return esbuild.build( {
    entryPoints: [ `./src/js/index.ts` ],
    bundle     : true,
    outfile    : `./dist/js/${ name }.${ ext }`,
    format,
    external   : [ 'react', 'react-dom' ],
    target     : [ 'es2019' ]
  } );
}

async function buildModule() {
  return Promise.all( [
    buildScript( 'esm', 'esm.js' ),
    buildScript( 'esm', 'esm.mjs' ),
    buildScript( 'cjs', 'cjs.js' ),
  ] );
}

buildModule().catch( console.error );
exports.buildScript = buildScript;
exports.buildModule = buildModule;
