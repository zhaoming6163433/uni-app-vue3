export default ((r) => {
	console.log(r)
  const cache = {}
	for (const key in r) {
	    const apis = r[key]
	    Object.keys(apis).forEach((name) => {
	      if (cache[name]) {
	        throw new Error(`Api '${name}' conflict in '${key}'!`)
	      }
	      cache[name] = apis[name]
	    })
	}
  return cache
})(import.meta.globEager("./*.ts"))
