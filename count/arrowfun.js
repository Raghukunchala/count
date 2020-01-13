var inputs= process.argv.slice(2);
var results=inputs.map(input=>input[0])
			.reduce((s,input)=>s+input)
console.log(`[${inputs}] becomes "${results}"`);
